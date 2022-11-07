import axios, {AxiosInstance, AxiosResponse} from "axios";
import {ApiIllustManga} from "./ApiIllustManga";
import {ApiBookmark} from "./ApiBookmark";
import {ApiNovel} from "./ApiNovel";
import {PixivException} from "../types/PixivException";
import {ApiFollow} from "./ApiFollow";
import {ApiUser} from "./ApiUser";
import {ApiRanking} from "./ApiRanking";
import {ApiComment} from "./ApiComment";
import {ApiTag} from "./ApiTag";
import {CancelerCache} from "../cache/CancelerCache";

export class Api {
    instance: AxiosInstance
    token: string | undefined;

    illustManga: ApiIllustManga
    novel: ApiNovel;
    user: ApiUser;
    ranking: ApiRanking;

    bookmark: ApiBookmark | undefined
    follow: ApiFollow | undefined;
    comments: ApiComment | undefined;
    tag: ApiTag | undefined;

    constructor(instance: AxiosInstance, token?: string) {
        this.instance = instance;


        //请求拦截器
        instance.interceptors.request.use(config => {
            const headers = config.headers;
            if ('post' === config.method) {
                //post请求统一添加token
                headers && (headers['x-csrf-token'] = this.token)
            }
            const url = config.url;

            //搜索请求
            if (url && url.startsWith("/ajax/search/artworks/")) {
                const key = "search";
                CancelerCache.cancel(key)
                config.cancelToken = new axios.CancelToken(function executor(c) {
                    CancelerCache.saveCanceler(key, c);
                });
                // @ts-ignore
                config.cancelKey = key
            }
            //详情请求
            if (url && /^\/ajax\/illust\/\d+$/.exec(url)) {
                const key = "detail"
                CancelerCache.cancel(key)
                config.cancelToken = new axios.CancelToken(function executor(c) {
                    CancelerCache.saveCanceler(key, c);
                });
                // @ts-ignore
                config.cancelKey = key
            }


            return config;
        }, error => Promise.reject(error));

        //响应拦截器
        instance.interceptors.response.use(res => {
            const config = res.config;
            // @ts-ignore
            CancelerCache.delete(config.cancelKey)

            console.debug(`${new Date().toLocaleString()} Request Success: `, res)
            return res;
        }, error => {
            let response = <AxiosResponse>error.response;
            if (response) {
                const {data, status, config} = response
                const {url} = config
                // @ts-ignore
                CancelerCache.delete(config.cancelKey)
                if (status >= 500) {
                    throw new PixivException(status, url, "Net Error", config.data)
                }
                if (status >= 400) {
                    throw new PixivException(status, url, data.message, config.data)
                }
            }
            throw error;
        });

        this.illustManga = new ApiIllustManga(instance);
        this.novel = new ApiNovel(instance);
        this.user = new ApiUser(instance);
        this.ranking = new ApiRanking(instance);
        this.bookmark = new ApiBookmark(instance);
        this.follow = new ApiFollow(instance)
        this.comments = new ApiComment(instance)
        this.tag = new ApiTag(instance)
    }

    static setCookie(phpSessionId: string, path: string) {
        let day = 24 * 60 * 60 * 1000;
        let date = new Date();
        date.setTime(date.getTime() + 365 * day);
        document.cookie = `PHPSESSID=${phpSessionId};path=${path};expires=${date.toUTCString()}`
    }

    static clearCookie(path: string) {
        let day = 24 * 60 * 60 * 1000;
        let date = new Date();
        date.setTime(date.getTime() + -1 * day);
        document.cookie = `PHPSESSID=;path=${path};expires=${date.toUTCString()}`
    }

    isTokenReady(): boolean {
        return this.token !== undefined;
    }

    fetchToken(): Promise<string | undefined> {
        let pattern = /id="meta-global-data" content='(.+?)'>/
        return this.instance.get("/setting_user.php").then(res => {
            let matcher = pattern.exec(res.data);
            if (matcher) {
                let data = JSON.parse(matcher[1])
                this.token = data.token
                console.debug("获取到token:" + this.token)
                return data
            }
            return undefined
        })
    }

}
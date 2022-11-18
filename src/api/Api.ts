import {AxiosInstance, AxiosResponse} from "axios";
import {IllustApi} from "./IllustApi";
import {ApiBookmark} from "./ApiBookmark";
import {NovelApi} from "./NovelApi";
import {PixivException} from "../types/PixivException";
import {ApiFollow} from "./ApiFollow";
import {UserApi} from "./UserApi";
import {RankingApi} from "./RankingApi";
import {ApiComment} from "./ApiComment";
import {ApiTag} from "./ApiTag";
import {CancelerCache} from "../cache/CancelerCache";
import {NovelSeriesApi} from "./NovelSeriesApi";
import {UserWorksApi} from "./UserWorksApi";
import {UserBookmarkApi} from "./UserBookmarkApi";

export class Api {
    instance: AxiosInstance
    token: string | undefined;
    lang: string | undefined;

    illustApi: IllustApi
    novelApi: NovelApi;
    novelSeriesApi: NovelSeriesApi;
    userApi: UserApi;
    rankingApi: RankingApi;
    bookmark: ApiBookmark
    follow: ApiFollow
    comments: ApiComment
    tag: ApiTag
    userWorksApi: UserWorksApi;
    userBookmarkApi: UserBookmarkApi;

    constructor(instance: AxiosInstance, token?: string, lang?: string) {
        this.instance = instance;
        this.token = token;
        this.lang = lang || 'zh';

        //请求拦截器
        instance.interceptors.request.use(config => {
            const headers = config.headers;
            if ('post' === config.method) {
                //post请求统一添加token
                headers && (headers['x-csrf-token'] = this.token)
            }
            //统一添加 lang 参数
            config.params = Object.assign({}, config.params, {lang: this.lang})
            //检查是否需要保存token
            CancelerCache.check(config)


            return config;
        }, error => Promise.reject(error));

        //响应拦截器
        instance.interceptors.response.use(res => {
            const config = res.config;
            //请求成功，移除canceler
            // @ts-ignore
            CancelerCache.delete(config.cancelKey)
            console.debug(`${new Date().toLocaleString()} Request Success: `, res)
            return res;
        }, error => {
            let response = <AxiosResponse>error.response;
            if (response) {
                const {data, status, config} = response
                const {url} = config
                //请求失败，移除canceler
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

        this.illustApi = new IllustApi(instance);
        this.novelApi = new NovelApi(instance);
        this.novelSeriesApi = new NovelSeriesApi(instance);
        this.userApi = new UserApi(instance);
        this.rankingApi = new RankingApi(instance);
        this.bookmark = new ApiBookmark(instance);
        this.follow = new ApiFollow(instance)
        this.comments = new ApiComment(instance)
        this.tag = new ApiTag(instance)
        this.userWorksApi = new UserWorksApi(instance);
        this.userBookmarkApi = new UserBookmarkApi(instance);
    }

    static setCookie(phpSessionId: string, path: string) {
        let day = 24 * 60 * 60 * 1000;
        let date = new Date();
        date.setTime(date.getTime() + -1 * day);
        document.cookie = `PHPSESSID=;path=${path};expires=${date.toUTCString()}`
        date.setTime(date.getTime() + 365 * day);
        document.cookie = `PHPSESSID=${phpSessionId};path=${path};expires=${date.toUTCString()}`
    }

    static clearCookie(path: string) {
        let day = 24 * 60 * 60 * 1000;
        let date = new Date();
        date.setTime(date.getTime() + -1 * day);
        document.cookie = `PHPSESSID=;path=${path};expires=${date.toUTCString()}`
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

    isTokenReady(): boolean {
        return this.token !== undefined;
    }

}
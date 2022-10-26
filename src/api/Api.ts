import {AxiosInstance, AxiosResponse} from "axios";
import {ApiIllustManga} from "./ApiIllustManga";
import {ApiBookmark} from "./ApiBookmark";
import {ApiNovel} from "./ApiNovel";
import {PixivException} from "../types/PixivException";
import {ApiFollow} from "./ApiFollow";
import {ApiUser} from "./ApiUser";
import {ApiRanking} from "./ApiRanking";
import {ApiComment} from "./ApiComment";

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

    constructor(instance: AxiosInstance, token?: string) {
        this.instance = instance;

        instance.interceptors.response.use(res => {
            console.log(`${new Date().toLocaleString()} Request Success: `, res)
            return res;
        }, error => {
            let response = <AxiosResponse>error.response;
            if (response) {
                const {data, status, config} = response
                const {url} = config
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

        if (token) {
            this.token = token
            this.initWithToken(token)
        }
    }

    static setCookie(phpSessionId: string, path: string) {
        let day = 24 * 60 * 60 * 1000;
        let date = new Date();
        date.setTime(date.getTime() + 365 * day);
        document.cookie = `PHPSESSID=${phpSessionId};path=${path};expires=${date.toUTCString()}`
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
                console.log("获取到token:" + this.token)
                this.initWithToken(<string>this.token)
                return data
            }
            return undefined
        })
    }

    initWithToken(token: string) {
        this.bookmark = new ApiBookmark(this.instance, token);
        this.follow = new ApiFollow(this.instance, token)
        this.comments = new ApiComment(this.instance, token)
    }
}
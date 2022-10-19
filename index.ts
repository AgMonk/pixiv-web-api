import {ApiIllustManga} from "./src/api/ApiIllustManga";
import {AxiosInstance, AxiosResponse} from "axios";
import {PixivException} from "./src/types/PixivException";
import {ApiBookmark} from "./src/api/ApiBookmark";

export class Api {
    instance: AxiosInstance
    token:string


    illustManga: ApiIllustManga
    bookmark: ApiBookmark


    constructor(instance: AxiosInstance,token:string) {
        this.instance = instance;
        this.token = token;

        instance.interceptors.response.use(res => {
            console.log(`${new Date().toLocaleString()} Request Success: `,res)
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

        //todo 如果token为空 则自动请求token


        this.illustManga = new ApiIllustManga(instance);
        this.bookmark = new ApiBookmark(instance,token);
    }
}



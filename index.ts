import {ApiIllustManga} from "./api/illustManga";
import {AxiosInstance, AxiosResponse} from "axios";
import {PixivException} from "./types/PixivException";

export class Api {
    instance: AxiosInstance
    illustManga: ApiIllustManga


    constructor(instance: AxiosInstance) {
        this.instance = instance;

        instance.interceptors.response.use(res => {
            console.log(res)
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
    }
}



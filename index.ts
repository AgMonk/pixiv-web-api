import {ApiIllustManga} from "./src/api/ApiIllustManga";
import {AxiosInstance, AxiosResponse} from "axios";
import {PixivException} from "./src/types/PixivException";
import {ApiBookmark} from "./src/api/ApiBookmark";

export class Api {
    instance: AxiosInstance
    token: string | undefined;

    illustManga: ApiIllustManga
    bookmark: ApiBookmark | undefined

    constructor(instance: AxiosInstance, token: string) {
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

        //如果token为空 则自动请求token
        if (token === '' || token === undefined) {
           this.fetchToken()
        } else {
            this.token = token
            this.initWithToken(token)
        }
    }

    fetchToken() {
        let pattern = /pixiv.context.token = "(.+?)";/
        this.instance.get("/setting_user.php").then(res => {
            let matcher = pattern.exec(res.data);
            if (matcher) {
                this.token = matcher[1]
                console.log("获取到token:" + this.token)
                this.initWithToken(this.token)
            }
        })
    }

    initWithToken(token: string){
        this.bookmark = new ApiBookmark(this.instance, token);
    }
}



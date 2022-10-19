import {AxiosInstance} from "axios";
import {IllustMangaInfo} from "../types/response/IllustMangaInfo";
import {SearchResult} from "../types/response/SearchResult";
import {SearchParam} from "../types/params/illustmanga/SearchParam";


export class ApiIllustManga {
    instance: AxiosInstance

    constructor(instance: AxiosInstance) {
        this.instance = instance;
    }

    detail(pid: number): Promise<IllustMangaInfo> {
        return this.instance.get("/ajax/illust/" + pid).then(res => {
            return new IllustMangaInfo(res.data.body)
        })
    }

    search(keywords: string, params: SearchParam): Promise<SearchResult> {
        return this.instance.get("/ajax/search/artworks/" + keywords, {params}).then(res => {
            return new SearchResult(res.data.body)
        })
    }
}


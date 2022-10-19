import {AxiosInstance} from "axios";
import {IllustMangaInfo, IllustMangaSearchResult} from "../types/illustManga";
import {SearchParam} from "../params/illustmanga/SearchParam";


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

    search(keywords: string, params: SearchParam): Promise<IllustMangaSearchResult> {
        return this.instance.get("/ajax/search/artworks/" + keywords,{params}).then(res => {
            return new IllustMangaSearchResult(res.data.body)
        })
    }
}


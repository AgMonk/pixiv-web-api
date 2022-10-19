import {AxiosInstance} from "axios";
import {ResIllustMangaInfo} from "../types/response/ResIllustMangaInfo";
import {ResSearchResult} from "../types/response/ResSearchResult";
import {SearchParam} from "../types/params/illustmanga/SearchParam";
import {ResBookmarkData} from "../types/response/ResBookmarkData";
import {ResUgoiraMeta} from "../types/response/ResUgoiraMeta";


export class ApiIllustManga {
    instance: AxiosInstance

    constructor(instance: AxiosInstance) {
        this.instance = instance;
    }

    detail(pid: number): Promise<ResIllustMangaInfo> {
        return this.instance.get("/ajax/illust/" + pid).then(res => {
            return new ResIllustMangaInfo(res.data.body)
        })
    }

    search(keywords: string, params: SearchParam): Promise<ResSearchResult> {
        return this.instance.get("/ajax/search/artworks/" + keywords, {params}).then(res => {
            return new ResSearchResult(res.data.body)
        })
    }

    bookmarkData(pid: number): Promise<ResBookmarkData> {
        return this.instance.get(`/ajax/illust/${pid}/bookmarkData`).then(res => {
            return new ResBookmarkData(res.data.body)
        })
    }

    ugoiraMeta(pid: number): Promise<ResUgoiraMeta> {
        return this.instance.get(`/ajax/illust/${pid}/ugoira_meta`).then(res => {
            return new ResUgoiraMeta(res.data.body)
        })
    }

}


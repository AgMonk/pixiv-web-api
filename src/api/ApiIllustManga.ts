import {AxiosInstance} from "axios";
import {ResIllustMangaInfo} from "../types/response/ResIllustMangaInfo";
import {ResSearchResult} from "../types/response/ResSearchResult";
import {ResBookmarkData} from "../types/response/ResBookmarkData";
import {ResUgoiraMeta} from "../types/response/ResUgoiraMeta";
import {ResFollowLatestIllust} from "../types/response/ResFollowLatestIllust";


export class ApiIllustManga {
    private instance: AxiosInstance


    constructor(instance: AxiosInstance) {
        this.instance = instance;
    }

    detail(pid: number): Promise<ResIllustMangaInfo> {
        return this.instance.get("/ajax/illust/" + pid).then(res => {
            return new ResIllustMangaInfo(res.data.body)
        })
    }

    search(keywords: string, params: {
        p: number;
        mode: "all" | "safe" | "r18";
        order: "date_d" | "date";
        lang: string | undefined;
        scd: string | undefined;
        ecd: string | undefined;
    }): Promise<ResSearchResult> {
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

    followLatest(params: {
        p: number;
        mod: "all" | "r18";
        lang: string | undefined;
    }) {
        return this.instance.get(`/ajax/follow_latest/illust`, {params}).then(res => {
            return new ResFollowLatestIllust(res.data.body)
        })
    }

}


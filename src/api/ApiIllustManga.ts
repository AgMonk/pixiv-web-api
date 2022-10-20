import {AxiosInstance} from "axios";
import {IllustDetail, IllustSearchResult, ResBookmarkData, UgoiraMeta} from "../interface/illust";
import {FollowLatest} from "../interface/comment";


export class ApiIllustManga {
    private instance: AxiosInstance


    constructor(instance: AxiosInstance) {
        this.instance = instance;
    }

    detail(pid: number): Promise<IllustDetail> {
        return this.instance.get("/ajax/illust/" + pid).then(res => {
            return res.data.body
        })
    }

    search(keywords: string, params: {
        p: number;
        mode: "all" | "safe" | "r18";
        order: "date_d" | "date";
        lang?: string;
        scd?: string;
        ecd?: string;
    }): Promise<IllustSearchResult> {
        return this.instance.get("/ajax/search/artworks/" + keywords, {params}).then(res => {
            return res.data.body
        })
    }

    bookmarkData(pid: number): Promise<ResBookmarkData> {
        return this.instance.get(`/ajax/illust/${pid}/bookmarkData`).then(res => {
            return res.data.body
        })
    }

    ugoiraMeta(pid: number): Promise<UgoiraMeta> {
        return this.instance.get(`/ajax/illust/${pid}/ugoira_meta`).then(res => {
            return res.data.body
        })
    }

    followLatest(p: number, mode: "all" | "r18", lang?: string): Promise<FollowLatest> {
        return this.instance.get(`/ajax/follow_latest/illust`, {params: {p, mode, lang}}).then(res => {
            return res.data.body
        })
    }

}


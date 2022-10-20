import {AxiosInstance} from "axios";
import {ResFollowLatestNovel} from "../types/response/ResFollowLatestNovel";

export class ApiNovel {
    private instance: AxiosInstance;

    constructor(instance: AxiosInstance) {
        this.instance = instance;
    }

    followLatest(params: {
        p: number;
        mode: "all" | "r18";
        lang: string | undefined;
    }) {
        return this.instance.get(`/ajax/follow_latest/novel`, {params}).then(res => {
            return new ResFollowLatestNovel(res.data.body)
        })
    }

    //todo 搜索
    search(keywords: string, params: {
        p: number;
        order?: "date_d" | "date";
        mode: "all" | "safe" | "r18";
        s_mode?: "s_tag" | "s_tag_only" | "s_tag_full" | "s_tc";
        lang: string | undefined;
    }) {
        return this.instance.get(`/ajax/search/novels/` + keywords, {params}).then(res => {
            return res.data.body
        })
    }

    //todo 详情
    detail(nid: number, lang?: string) {
        return this.instance.get(`/ajax/novel/` + nid, {params: {lang}}).then(res => {
            return res.data.body
        })
    }

    //todo 查询系列
    series(seriesId: number, lang?: string) {
        return this.instance.get(`/ajax/novel/series/` + seriesId, {params: {lang}}).then(res => {
            return res.data.body
        })
    }

}
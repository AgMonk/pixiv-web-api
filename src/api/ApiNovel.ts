import {AxiosInstance} from "axios";
import {FollowLatest} from "../interface/comment";
import {NovelDetail, NovelSearchResult, NovelSeries} from "../interface/novel";

export class ApiNovel {
    private instance: AxiosInstance;

    constructor(instance: AxiosInstance) {
        this.instance = instance;
    }

    followLatest(p: number, mode: "all" | "r18", lang?: string): Promise<FollowLatest> {
        return this.instance.get(`/ajax/follow_latest/novel`, {params: {p, mode, lang}}).then(res => {
            return res.data.body
        })
    }

    // 搜索
    search(keywords: string, params: {
        p: number;
        order?: "date_d" | "date";
        mode: "all" | "safe" | "r18";
        s_mode?: "s_tag" | "s_tag_only" | "s_tag_full" | "s_tc";
        lang?: string;
    }): Promise<NovelSearchResult> {
        return this.instance.get(`/ajax/search/novels/` + keywords, {params}).then(res => {
            return res.data.body
        })
    }

    // 详情
    detail(nid: number, lang?: string): Promise<NovelDetail> {
        return this.instance.get(`/ajax/novel/` + nid, {params: {lang}}).then(res => {
            return res.data.body
        })
    }

    // 查询系列
    series(seriesId: number, lang?: string): Promise<NovelSeries> {
        return this.instance.get(`/ajax/novel/series/` + seriesId, {params: {lang}}).then(res => {
            return res.data.body
        })
    }

}
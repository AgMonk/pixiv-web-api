import {AxiosInstance} from "axios";
import {NovelDetail, NovelSearchResult, NovelSeries} from "../interface/novel";
import {FollowLatest} from "../interface/commom";
import {DiscoveryBody} from "../interface/illust";

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
        gs: 0 | 1;
        lang?: string;
        scd?: string;
        ecd?: string;
        tgt?: number;
        tlt?: number;
    }): Promise<NovelSearchResult> {
        return this.instance.get(`/ajax/search/novels/` + keywords, {params}).then(res => {
            return res.data.body
        })
    }

    discovery(limit: number, mode: "all" | "safe" | "r18", sampleNovelId?: number, lang?: string): Promise<DiscoveryBody> {
        return this.instance.get(`/ajax/discovery/novels`, {params: {limit, mode, lang, sampleNovelId}}).then(res => {
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

    // 查询系列的各篇标题
    seriesTitles(seriesId: number, lang?: string): Promise<Array<{ available: Boolean, id: string, title: string }>> {
        return this.instance.get(`/ajax/novel/series/${seriesId}/content_titles`, {params: {lang}}).then(res => {
            return res.data.body
        })
    }

}
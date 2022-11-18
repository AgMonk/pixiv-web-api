import {AxiosInstance} from "axios";
import {NovelDetail, NovelSearchResult, NovelSeries} from "../interface/novel";
import {FollowLatest} from "../interface/commom";
import {DiscoveryBody, ResBookmarkData} from "../interface/illust";

export class NovelApi {
    private instance: AxiosInstance;

    constructor(instance: AxiosInstance) {
        this.instance = instance;
    }

    /**
     * 查询收藏状态
     * @param pid
     */
    bookmarkData(pid: number): Promise<ResBookmarkData> {
        return this.instance.get(`/ajax/novel/${pid}/bookmarkData`).then(res => {
            return res.data.body
        })
    }

    /**
     * 详情
     * @param nid
     */
    detail(nid: number): Promise<NovelDetail> {
        return this.instance.get(`/ajax/novel/` + nid).then(res => {
            return res.data.body
        })
    }

    /**
     * 发现
     * @param limit
     * @param mode
     * @param sampleNovelId
     */
    discovery(limit: number, mode: "all" | "safe" | "r18", sampleNovelId?: number): Promise<DiscoveryBody> {
        return this.instance.get(`/ajax/discovery/novels`, {params: {limit, mode, sampleNovelId}}).then(res => {
            return res.data.body
        })
    }

    /**
     * 查询关注作者的最新小说
     * @param p
     * @param mode
     */
    latest(p: number, mode: "all" | "r18"): Promise<FollowLatest> {
        return this.instance.get(`/ajax/follow_latest/novel`, {params: {p, mode}}).then(res => {
            return res.data.body
        })
    }

    /**
     * 搜索
     * @param keywords
     * @param params
     */
    search(keywords: string, params: {
        p: number;
        order?: "date_d" | "date";
        mode: "all" | "safe" | "r18";
        s_mode?: "s_tag" | "s_tag_only" | "s_tag_full" | "s_tc";
        gs: 0 | 1;
        work_lang: string | "zh-cn" | "ja" | "en" | "zh-tw";
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

    // 查询系列
    series(seriesId: number): Promise<NovelSeries> {
        return this.instance.get(`/ajax/novel/series/` + seriesId).then(res => {
            return res.data.body
        })
    }

    // 查询系列中作品的基础信息
    seriesContent(seriesId: number, page: number, size: number, orderBy: 'asc' | 'dsc'): Promise<any> {
        const offset = (page - 1) * size;
        return this.instance.get(`/ajax/novel/series_content/${seriesId}`, {
            params: {
                limit: size, last_order: offset, order_by: orderBy
            }
        }).then(res => {
            return res.data.body.seriesContents
        })
    }

    // 查询系列的各篇标题
    seriesTitles(seriesId: number): Promise<Array<{ available: Boolean, id: string, title: string }>> {
        return this.instance.get(`/ajax/novel/series/${seriesId}/content_titles`).then(res => {
            return res.data.body
        })
    }

}
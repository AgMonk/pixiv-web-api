import {AxiosInstance} from "axios";
import {NovelSeries} from "../interface/novel";

export class NovelSeriesApi {
    private instance: AxiosInstance;

    constructor(instance: AxiosInstance) {
        this.instance = instance;
    }

    /**
     * 查询系列中作品的基础信息
     * @param seriesId
     * @param page
     * @param size
     * @param orderBy
     */
    contents(seriesId: number, page: number, size: number, orderBy: 'asc' | 'dsc'): Promise<any> {
        const offset = (page - 1) * size;
        return this.instance.get(`/ajax/novel/series_content/${seriesId}`, {
            params: {
                limit: size, last_order: offset, order_by: orderBy
            }
        }).then(res => {
            return res.data.body.seriesContents
        })
    }

    /**
     * 查询系列
     * @param seriesId
     */
    info(seriesId: number): Promise<NovelSeries> {
        return this.instance.get(`/ajax/novel/series/` + seriesId).then(res => {
            return res.data.body
        })
    }

    /**
     * 查询系列的各篇标题
     * @param seriesId
     */
    titles(seriesId: number): Promise<Array<{ available: Boolean, id: string, title: string }>> {
        return this.instance.get(`/ajax/novel/series/${seriesId}/content_titles`).then(res => {
            return res.data.body
        })
    }
}
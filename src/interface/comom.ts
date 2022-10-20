/**
 * 收藏数据
 */
export interface BookmarkData {
    id: number,
    private: boolean
}

export interface Thumbnails {
    illust: Array<any>
    novel: Array<any>
    novelDraft: Array<any>
    novelSeries: Array<any>
}
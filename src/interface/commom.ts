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

export interface Translation {
    en?: string
    zh?: string
    zh_tw?: string
    ko?: string
    jp?: string
}

export interface Tag {
    deletable: boolean
    locked: boolean
    tag: string
    translation: Translation
    userId: number
    userName: string
}
/**
 * 收藏数据
 */
import {IllustInfo} from "./illust";
import {NovelInfo} from "./novel";

export interface BookmarkData {
    id: number,
    private: boolean
}

export interface Thumbnails {
    illust: Array<IllustInfo>
    novel: Array<NovelInfo>
    novelDraft: Array<any>
    novelSeries: Array<any>
}

export interface Translation {
    en: string | undefined
    zh: string | undefined
    zh_tw: string | undefined
    ko: string | undefined
    jp: string | undefined
}

export interface Tag {
    deletable: boolean
    locked: boolean
    tag: string
    translation: Translation | undefined
    userId: number
    userName: string
}
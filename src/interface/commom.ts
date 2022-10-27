/**
 * 收藏数据
 */
import {IllustInfo} from "./illust";
import {NovelInfo} from "./novel";
import {ZoneConfig} from "./user";

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

export interface Popular<T> {
    permanent: Array<IllustInfo>
    recent: Array<IllustInfo>
}

export interface FollowLatest {
    page: {
        ids: Array<number>
        isLastPage: boolean
    }
    tagTranslation: object
    thumbnails: Thumbnails
    zoneConfig: ZoneConfig
}
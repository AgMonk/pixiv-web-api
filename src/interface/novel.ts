import {BookmarkData, Tag} from "./commom";
import {Popular} from "./comment";
import {ZoneConfig} from "./user";

/**
 * 小说基础信息
 */
export interface NovelInfo {
    bookmarkCount: number
    bookmarkData: BookmarkData | undefined
    createDate: string
    description: string
    id: number
    profileImageUrl: string
    readingTime: number
    restrict: 0 | 1
    tags: Array<string>
    textCount: number
    title: string
    updateDate: string
    url: string
    useWordCount: boolean
    userId: number
    userName: string
    wordCount: number
    xRestrict: 0 | 1
}

/**
 * 小说详情信息
 */
export interface NovelDetail {
    bookmarkCount: number
    bookmarkData: BookmarkData | undefined
    characterCount: number
    commentCount: number
    commentOff: 0 | 1
    content: string
    coverUrl: string
    createDate: string
    description: string
    id: number
    language: string
    likeCount: number
    likeData: boolean
    markerCount: number
    pageCount: number
    readingTime: number
    restrict: 0 | 1
    tags: {
        authorId: number
        isLocked: boolean
        tags: Array<Tag>
        writable: boolean
    }
    title: string
    uploadDate: string
    useWordCount: boolean
    userId: number
    userName: string
    userNovels: object
    viewCount: number
    wordCount: number
    xRestrict: 0 | 1
    zoneConfig: ZoneConfig

}

export interface NovelSeries {
    caption: string
    cover: {
        urls: {
            _128x128: string
            _240mw: string
            _480mw: string
            _1200x1200: string
            original: string
        }
    },
    createDate: string
    createdTimestamp: number
    firstNovelId: number
    id: number
    language: string
    latestNovelId: number
    profileImageUrl: string
    publishedContentCount: number
    publishedReadingTime: number
    publishedTotalCharacterCount: number
    publishedTotalWordCount: number
    shareText: string
    tags: Array<any>
    title: string
    total: number
    updateDate: string
    updatedTimestamp: number
    useWordCount: boolean
    userId: number
    userName: string
    xRestrict: 0 | 1
    zoneConfig: ZoneConfig
}

export interface NovelSearchResult {
    novel: {
        data: Array<NovelInfo>
        total: number
    }
    popular: Popular<NovelInfo>
    relatedTags: Array<string>
    tagTranslation: object
    zoneConfig: ZoneConfig
}
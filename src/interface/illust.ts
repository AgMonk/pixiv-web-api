import {BookmarkData, Tag} from "./commom";
import {ZoneConfig} from "./user";

/**
 * 绘画基础信息
 */
export interface IllustInfo {
    alt: string
    bookmarkData: BookmarkData
    createDate: string
    description: string
    height: number
    id: number
    illustType: 0 | 1 | 2
    pageCount: number
    profileImageUrl: string
    restrict: 0 | 1
    tags: Array<string>
    title: string
    updateDate: string
    url: string
    userId: number
    userName: string
    width: number
    xRestrict: 0 | 1
}

/**
 * 绘画详细信息
 */
export interface IllustDetail {
    alt: string
    bookStyle: number
    bookmarkCount: number
    bookmarkData: BookmarkData
    commentCount: number
    commentOff: 0 | 1
    createDate: string
    description: string
    height: number
    id: number
    illustComment: string
    illustId: number
    illustTitle: string
    illustType: 0 | 1 | 2
    likeCount: number
    likeData: boolean
    pageCount: number
    request: object
    restrict: 0 | 1
    tags: {
        authorId: number
        isLocked: boolean
        tags: Array<Tag>
        writable: boolean
    }
    title: string
    uploadDate: string
    urls: {
        mini: string
        original: string
        regular: string
        small: string
        thumb: string
    }
    userAccount: string
    userId: number
    userIllusts: object
    userName: string
    viewCount: number
    width: number
    xRestrict: 0 | 1
    zoneConfig: ZoneConfig
}


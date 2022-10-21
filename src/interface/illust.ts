import {BookmarkData, Tag, Thumbnails} from "./commom";
import {ZoneConfig} from "./user";
import {Popular} from "./comment";

/**
 * 绘画基础信息
 */
export interface IllustInfo {
    alt: string
    bookmarkData: BookmarkData | undefined
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

/**
 * 搜索结果
 */
export interface IllustSearchResult {
    illustManga: {
        data: Array<IllustInfo>
        total: number
    }
    popular: Popular<IllustInfo>
    relatedTags: Array<string>
    tagTranslation: object
    zoneConfig: ZoneConfig
}

export interface ResBookmarkData {
    bookmarkData: BookmarkData | undefined;
    id: number;
    isBookmarkable: boolean
}

export interface UgoiraMeta {
    frames: Array<Frame>;
    mimeType: string;
    originalSrc: string;
    src: string;

}

export interface Frame {
    delay: number;
    file: string;
}

export interface DiscoveryBody {
    tagTranslation: object
    thumbnails: Thumbnails
    recommendedIllusts: Array<{
        illustId: string
        recommendMethods: Array<string>
        recommendScore: number
        recommendSeedIllustIds: Array<string>
    }>
}
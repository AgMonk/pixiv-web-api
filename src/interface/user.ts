import {Thumbnails} from "./commom";

/**
 * 用户作品概况
 */
export interface ProfileAll {
    bookmarkCount: {
        private: { illust: number, novel: number };
        public: { illust: number, novel: number };
    }
    externalSiteWorksStatus: object;
    illusts: object;
    novels: object;
    manga: object;
    mangaSeries: Array<any>;
    novelSeries: Array<any>;
    pickup: Array<any>;
    request: Request;
}

export interface Request {
    showRequestTab: boolean,
    showRequestSentTab: boolean,
    postWorks: {
        artworks: string[],
        novels: string[],
    }
}

/**
 * 用户信息
 */
export interface UserInfo {
    acceptRequest: boolean
    canSendMessage: boolean
    comment: string
    commentHtml: string
    followedBack: boolean
    following: number
    image: string
    imageBig: string
    name: string
    region: object
    social: Social
    userId: number
    webpage: any
    workspace: object
}

export interface Social {
    facebook: { url: string },
    twitter: { url: string },
}

/**
 * 用户作品
 */
export interface Profiles {
    extraData: { meta: object };
    works: object;
    zoneConfig: ZoneConfig;
}

export interface UserWorksWithTag<T> {
    extraData: { meta: object };
    works: Array<T>;
    total: number;
    zoneConfig: ZoneConfig;
}

export interface CommissionRequestSent {
    illustSeries: object
    page: {
        sentArtworkCount: number
        sentArtworkRequestIds: Array<number>
        sentNovelCount: number
        sentNovelRequestIds: Array<number>
    }
    requests: Array<any>
    tagTranslation: object
    thumbnails: Thumbnails
    users: Array<UserInfo>
    zoneConfig: ZoneConfig;
}

export interface ZoneConfig {
    _500x500: { url: string };
    expandedFooter?: { url: string };
    rectangle: { url: string } | undefined;
    relatedworks: { url: string } | undefined;
    responsive: { url: string } | undefined;
    footer: { url: string };
    header: { url: string };
    logo: { url: string };
}

export interface UserBookmarks<T> {
    bookmarkTags: object;
    extraData: { meta: object };
    total: number
    works: Array<T>
    zoneConfig: ZoneConfig;
}

export interface UserRecommend {
    thumbnails: Thumbnails
    users: Array<UserInfo>
    recommendUsers: Array<{
        userId: string
        illustIds: string[]
        novelIds: string[]
    }>
}
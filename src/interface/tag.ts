import {Tag} from "./commom";

export interface TagInfo {
    abstract: string,
    en: LangInfo
    en_new: LangInfo
    ja: LangInfo
    ja_new: LangInfo
    tag: string,
    thumbnail: string
}


export interface LangInfo {
    abs: string;
    tag: string;
    url: string;
}

export interface PixivTagInfo {
    authorId: string
    isLocked: boolean
    tags: Array<Tag>
    writable: boolean
    success?: boolean
}

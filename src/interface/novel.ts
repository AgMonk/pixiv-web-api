import {BookmarkData} from "./commom";

/**
 * 小说基础信息
 */
export interface NovelInfo {
    bookmarkCount: number
    bookmarkData: BookmarkData
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
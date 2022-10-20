import {BookmarkData} from "./comom";

/**
 * 绘画基础信息
 */
export interface IllustInfo {
    alt: string
    bookmarkData: BookmarkData
    createDate: Date
    description: string
    height: number
    id: number
    illustType: 0 | 1 | 2
    pageCount: number
    profileImageUrl: string
    restrict: 0 | 1
    tags: Array<string>
    title: string
    updateDate: Date
    url: string
    userId: number
    userName: string
    width: number
    xRestrict: 0 | 1
}
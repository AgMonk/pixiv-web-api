import {AxiosInstance} from "axios";
import {BookmarkTags} from "../interface/bookmark";
import {UserBookmarksParam} from "../interface/param";
import {UserBookmarks} from "../interface/user";
import {IllustInfo} from "../interface/illust";
import {NovelInfo} from "../interface/novel";

export class UserBookmarkApi {
    private instance: AxiosInstance


    constructor(instance: AxiosInstance) {
        this.instance = instance;
    }

    // 查询用户的收藏的插画/漫画中使用的标签
    illustTags(uid: number): Promise<BookmarkTags> {
        return this.instance.get(`/ajax/user/${uid}/illusts/bookmark/tags`).then(res => {
            return res.data.body
        })
    }

    // 查询用户收藏的插画/漫画
    illusts(uid: number, param: UserBookmarksParam): Promise<UserBookmarks<IllustInfo>> {
        const {page, rest, tag, size, lang,} = param;
        const params = {
            offset: (page - 1) * size,
            limit: size,
            rest, tag, lang,
        }
        return this.instance.get(`/ajax/user/${uid}/illusts/bookmarks`, {params}).then(res => {
            return res.data.body
        })
    }

    // 查询用户的收藏小说中使用的标签
    novelTags(uid: number): Promise<BookmarkTags> {
        return this.instance.get(`/ajax/user/${uid}/novels/bookmark/tags`).then(res => {
            return res.data.body
        })
    }

    // 查询用户收藏的小说
    novels(uid: number, param: UserBookmarksParam): Promise<UserBookmarks<NovelInfo>> {
        const {page, rest, tag, size, lang,} = param;
        const params = {
            offset: (page - 1) * size,
            limit: size,
            rest, tag, lang,
        }
        return this.instance.get(`/ajax/user/${uid}/novels/bookmarks`, {params}).then(res => {
            return res.data.body
        })
    }
}
import {AxiosInstance} from "axios";

export class ApiUser {
    private instance: AxiosInstance


    constructor(instance: AxiosInstance) {
        this.instance = instance;
    }

    //todo 查询用户信息
    userInfo(uid: number, full: 1 | 0, lang?: string) {
        return this.instance.get(`/ajax/user/` + uid, {params: {full, lang}}).then(res => {
            return res.data.body
        })
    }

    //todo 查询用户作品概况
    profileAll(uid: number, lang?: string) {
        return this.instance.get(`/ajax/user/${uid}/profile/all`, {params: {lang}}).then(res => {
            return res.data.body
        })
    }

    //todo 查询用户插画/漫画
    profileIllusts(uid: number, ids: number[], lang?: string) {
        const params = {lang, ids, is_first_page: 1, work_category: "illustManga"}
        return this.instance.get(`/ajax/user/${uid}/profile/illusts`, {params}).then(res => {
            return res.data.body
        })
    }

    //todo 查询用户发出约稿的作品
    commissionRequestSent(uid: number, lang?: string) {
        const params = {lang}
        return this.instance.get(`/ajax/commission/page/users/${uid}/request/sent`, {params}).then(res => {
            return res.data.body
        })
    }

    //todo 查询用户的小说
    profileNovels(uid: number, lang?: string) {
        const params = {lang}
        return this.instance.get(`/ajax/user/${uid}/profile/novels`, {params}).then(res => {
            return res.data.body
        })
    }

    //todo 查询用户收藏的插画/漫画
    illustsBookmarks(uid: number, param: {
        page: number;
        size: number;
        tag: string;
        rest: "show" | "hide"
        lang?: string;
    }) {
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

    //todo 查询用户收藏的小说
    novelsBookmarks(uid: number, param: {
        page: number;
        size: number;
        tag: string;
        rest: "show" | "hide"
        lang?: string;
    }) {
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

    //todo 查询用户的收藏的插画/漫画中使用的标签
    illustsBookmarkTags(uid: number, lang?: string) {
        const params = {lang}
        return this.instance.get(`/ajax/user/${uid}/illusts/bookmark/tags`, {params}).then(res => {
            return res.data.body
        })
    }

    //todo 查询用户的收藏小说中使用的标签
    novelsBookmarkTags(uid: number, lang?: string) {
        const params = {lang}
        return this.instance.get(`/ajax/user/${uid}/novels/bookmark/tags`, {params}).then(res => {
            return res.data.body
        })
    }
}
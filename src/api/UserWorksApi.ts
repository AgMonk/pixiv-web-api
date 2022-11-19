import {AxiosInstance} from "axios";
import {NovelTags} from "../interface/bookmark";
import {CommissionRequestSent, ProfileAll, Profiles, UserWorksWithTag} from "../interface/user";
import {WorksWithTagParam} from "../interface/param";
import {IllustInfo} from "../interface/illust";
import {NovelInfo} from "../interface/novel";

export class UserWorksApi {
    private instance: AxiosInstance


    constructor(instance: AxiosInstance) {
        this.instance = instance;
    }

    // 查询用户作品概况
    all(uid: number): Promise<ProfileAll> {
        return this.instance.get(`/ajax/user/${uid}/profile/all`).then(res => {
            return res.data.body
        })
    }

    // 查询用户发出约稿的作品
    commissionRequestSent(uid: number): Promise<CommissionRequestSent> {
        return this.instance.get(`/ajax/commission/page/users/${uid}/request/sent`).then(res => {
            return res.data.body
        })
    }

    // 查询用户绘画使用的标签
    illustTags(uid: number): Promise<NovelTags[]> {
        return this.instance.get(`/ajax/user/${uid}/illusts/tags`).then(res => {
            return res.data.body
        })
    }

    // 查询用户绘画
    illusts(uid: number, ids: number[]): Promise<Profiles> {
        const params = {ids, is_first_page: 1, work_category: "illustManga"}
        return this.instance.get(`/ajax/user/${uid}/profile/illusts`, {params}).then(res => {
            return res.data.body
        })
    }

    // 查询带有指定标签的用户插画
    illustsWithTag(uid: number, params: WorksWithTagParam): Promise<UserWorksWithTag<IllustInfo>> {
        return this.instance.get(`/ajax/user/${uid}/illusts/tag`, {params}).then(res => {
            return res.data.body
        })
    }

    // 查询带有指定标签的用户漫画
    mangasWithTag(uid: number, params: WorksWithTagParam): Promise<UserWorksWithTag<IllustInfo>> {
        return this.instance.get(`/ajax/user/${uid}/manga/tag`, {params}).then(res => {
            return res.data.body
        })
    }

    // 查询用户小说中使用的标签
    novelTags(uid: number): Promise<NovelTags[]> {
        return this.instance.get(`/ajax/user/${uid}/novels/tags`).then(res => {
            return res.data.body
        })
    }

    // 查询用户的小说
    novels(uid: number, ids: number[]): Promise<Profiles> {
        const params = {ids}
        return this.instance.get(`/ajax/user/${uid}/profile/novels`, {params}).then(res => {
            return res.data.body
        })
    }

    //查询带有指定标签的用户小说
    novelsWithTag(uid: number, params: WorksWithTagParam): Promise<UserWorksWithTag<NovelInfo>> {
        return this.instance.get(`/ajax/user/${uid}/novels/tag`, {params}).then(res => {
            return res.data.body
        })
    }
}
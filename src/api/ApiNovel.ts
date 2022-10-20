import {AxiosInstance} from "axios";
import {ResFollowLatestNovel} from "../types/response/ResFollowLatestNovel";

export class ApiNovel {
    private instance: AxiosInstance;

    constructor(instance: AxiosInstance) {
        this.instance = instance;
    }

    followLatest(params: {
        p: number;
        mod: "all" | "r18";
        lang: string | undefined;
    }) {
        return this.instance.get(`/ajax/follow_latest/novel`, {params}).then(res => {
            return new ResFollowLatestNovel(res.data.body)
        })
    }

    //todo 详情
    //todo 搜索
    //todo 查询系列

}
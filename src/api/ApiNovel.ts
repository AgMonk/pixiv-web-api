import {AxiosInstance} from "axios";
import {FollowLatestParam} from "../types/params/FollowLatestParam";
import {ResFollowLatestNovel} from "../types/response/ResFollowLatestNovel";

export class ApiNovel{
    private instance: AxiosInstance;

    constructor(instance: AxiosInstance) {
        this.instance = instance;
    }

    followLatest(params: FollowLatestParam) {
        return this.instance.get(`/ajax/follow_latest/novel`, {params}).then(res => {
            return new ResFollowLatestNovel(res.data.body)
        })
    }

    //todo 详情
    //todo 搜索
    //todo 查询系列

}
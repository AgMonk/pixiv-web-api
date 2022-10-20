import {AxiosInstance} from "axios";

export class ApiComment {
    readonly token: string
    private instance: AxiosInstance

    constructor(instance: AxiosInstance, token: string) {
        this.instance = instance;
        this.token = token;
    }

    //todo 查询作品评论（根）
    //todo 查询作品回复（楼中楼）
    //todo 发布评论
    //todo 删除评论
}
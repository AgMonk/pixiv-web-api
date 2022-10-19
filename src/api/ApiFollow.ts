import {AxiosInstance} from "axios";

export class ApiFollow {
    readonly token: string
    private instance: AxiosInstance

    constructor(instance: AxiosInstance, token: string) {
        this.instance = instance;
        this.token = token;
    }

    //todo 关注
    //todo 取关
}
import {ApiIllustManga} from "./api/illustManga";
import {AxiosInstance} from "axios";

export class Api{
    instance:AxiosInstance
    illustManga:ApiIllustManga


    constructor(instance: AxiosInstance) {
        this.instance = instance;
        this.illustManga = new ApiIllustManga(instance);
    }
}



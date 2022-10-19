import { ApiIllustManga } from "./api/illustManga";
import { AxiosInstance } from "axios";
export declare class Api {
    instance: AxiosInstance;
    illustManga: ApiIllustManga;
    constructor(instance: AxiosInstance);
}

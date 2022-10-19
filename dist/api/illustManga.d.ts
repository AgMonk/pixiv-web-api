import { AxiosInstance } from "axios";
import { IllustMangaInfo } from "../types/illustManga";
export declare class ApiIllustManga {
    instance: AxiosInstance;
    constructor(instance: AxiosInstance);
    detail(pid: number): Promise<IllustMangaInfo>;
}

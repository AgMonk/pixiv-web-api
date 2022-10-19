import { AxiosInstance } from "axios";
import { IllustMangaInfo, IllustMangaSearchResult } from "../types/illustManga";
import { SearchParam } from "../params/illustmanga/SearchParam";
export declare class ApiIllustManga {
    instance: AxiosInstance;
    constructor(instance: AxiosInstance);
    detail(pid: number): Promise<IllustMangaInfo>;
    search(keywords: string, params: SearchParam): Promise<IllustMangaSearchResult>;
}

import { Author, Counts, Size, Times } from "./fields";
export declare class IllustMangaInfo {
    id: number;
    description: string | undefined;
    title: string | undefined;
    urls: object | undefined;
    url: string | undefined;
    tags: Array<any> | undefined;
    tagsType: String | undefined;
    counts: Counts;
    size: Size;
    times: Times;
    author: Author;
    r18: boolean;
    illustType: number;
    bookmarkData: object;
    r18g: boolean;
    constructor(props: {
        hasOwnProperty: (arg0: string) => any;
        id: any;
        illustId: any;
        description: any;
        illustComment: any;
        title: any;
        illustTitle: any;
        urls: any;
        url: any;
        tags: {
            hasOwnProperty: (arg0: string) => any;
            tags: any;
        };
        illustType: any;
        bookmarkData: any;
        xRestrict: number;
        restrict: number;
    });
}
export declare class IllustMangaSearchResult {
    relatedTags: Array<string>;
    constructor(props: {
        illustManga: object;
        popular: object;
        relatedTags: Array<string>;
        tagTranslation: object;
    });
}

//请求参数


export interface UserBookmarksParam {
    page: number;
    size: number;
    tag: string;
    rest: "show" | "hide"
    lang?: string;
}

export interface WorksWithTagParam {
    tag: string;
    offset: number;
    limit: number;
}
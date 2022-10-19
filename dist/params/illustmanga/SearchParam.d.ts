export declare class SearchParam {
    p: number;
    mode: string;
    order: string;
    lang: string | undefined;
    scd: string | undefined;
    ecd: string | undefined;
    constructor(p: number, mode: "all" | "safe" | "r18", order: "date_d" | "date", lang: string | undefined, scd: string | undefined, ecd: string | undefined);
}

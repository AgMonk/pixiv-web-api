export declare class PixivException {
    code: number;
    url: string | undefined;
    message: string;
    data: any | undefined;
    constructor(code: number, url: string | undefined, message: string, data: any);
}

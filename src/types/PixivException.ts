export class PixivException{
    code:number
    url:string|undefined
    message:string
    data:any | undefined


    constructor(code: number, url: string | undefined, message: string, data: any) {
        this.code = code;
        this.url = url;
        this.message = message;
        this.data = data;
    }
}
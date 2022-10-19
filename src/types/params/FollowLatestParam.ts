export class FollowLatestParam{
    p:number
    mod:"all"|"r18"
    lang:string|undefined

    constructor(p: number, mod: "all" | "r18", lang: string | undefined) {
        this.p = p;
        this.mod = mod;
        this.lang = lang;
    }
}
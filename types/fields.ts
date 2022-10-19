// noinspection JSUnresolvedVariable
import {IllustMangaInfo} from "./illustManga";

export class Author {
    id: number;
    name: string;
    fanbox: boolean;
    avatar: string | undefined;
    userIllusts: object | undefined;

    constructor(props: { hasOwnProperty: any; id: any; illustId?: any; description?: any; illustComment?: any; title?: any; illustTitle?: any; urls?: any; url?: any; tags?: { hasOwnProperty: (arg0: string) => any; tags: any; }; illustType?: any; bookmarkData?: any; xRestrict?: number; restrict?: number; userName?: any; profileImageUrl?: any; userIllusts?: any; }) {
        this.id = Number(props.id)
        this.name = props.userName.split("@")[0];
        this.fanbox = props.hasOwnProperty('fanboxPromotion')
        if (props.hasOwnProperty('profileImageUrl')) {
            this.avatar = props.profileImageUrl
        }
        if (props.hasOwnProperty('userIllusts')) {
            let data = Object.create(IllustMangaInfo)
            Object.keys(props.userIllusts)
                .forEach(key => {
                    let item = props.userIllusts[key]
                    data[key] = item ? new IllustMangaInfo(item) : null;
                })
            this.userIllusts = data
        }
    }
}

export class Times {
    createDate: Date | undefined;
    uploadDate: Date | undefined;
    updateDate: Date | undefined;

    constructor(props: { hasOwnProperty?: (arg0: string) => any; id?: any; illustId?: any; description?: any; illustComment?: any; title?: any; illustTitle?: any; urls?: any; url?: any; tags?: { hasOwnProperty: (arg0: string) => any; tags: any; }; illustType?: any; bookmarkData?: any; xRestrict?: number; restrict?: number; createDate?: any; uploadDate?: any; updateDate?: any; }) {
        this.createDate = props.createDate?new Date(props.createDate):undefined
        this.uploadDate = props.uploadDate?new Date(props.uploadDate):undefined
        this.updateDate = props.updateDate?new Date(props.updateDate):undefined
    }
}

export class Counts {
    bookmark:number|undefined
    comment:number|undefined
    like:number|undefined
    page:number|undefined
    view:number|undefined
    constructor(props: { hasOwnProperty?: (arg0: string) => any; id?: any; illustId?: any; description?: any; illustComment?: any; title?: any; illustTitle?: any; urls?: any; url?: any; tags?: { hasOwnProperty: (arg0: string) => any; tags: any; }; illustType?: any; bookmarkData?: any; xRestrict?: number; restrict?: number; bookmarkCount?: any; commentCount?: any; likeCount?: any; pageCount?: any; viewCount?: any; }) {
        this.bookmark=props.bookmarkCount
        this.comment=props.commentCount
        this.like=props.likeCount
        this.page=props.pageCount
        this.view=props.viewCount
    }
}

export class Size {
    height:number|undefined
    width:number|undefined
    constructor(props: { hasOwnProperty?: (arg0: string) => any; id?: any; illustId?: any; description?: any; illustComment?: any; title?: any; illustTitle?: any; urls?: any; url?: any; tags?: { hasOwnProperty: (arg0: string) => any; tags: any; }; illustType?: any; bookmarkData?: any; xRestrict?: number; restrict?: number; height?: any; width?: any; }) {
        this.height = props.height;
        this.width = props.width;
    }
}
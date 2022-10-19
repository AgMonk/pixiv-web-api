// noinspection JSUnresolvedVariable
import {ResIllustMangaInfo} from "./response/ResIllustMangaInfo";

export class Author {
    id: number;
    name: string;
    fanbox: boolean;
    avatar: string | undefined;
    userIllusts: object | undefined;

    constructor(props: { bookmarkData?: any; description?: any; readingTime?: any; id?: any; xRestrict?: any; restrict?: any; title?: any; content?: any; url?: any; coverUrl?: any; language?: any; hasOwnProperty?: any; tags?: any; bookmarkCount?: number | undefined; commentCount?: number | undefined; pageCount?: any; textCount?: number | undefined; useWordCount?: number | undefined; wordCount?: number | undefined; characterCount?: number | undefined; viewCount?: number | undefined; illustId?: any; illustComment?: any; illustTitle?: any; urls?: any; illustType?: any; createDate?: any; uploadDate?: any; updateDate?: any; userId?: any; userName?: any; profileImageUrl?: any; userIllusts?: any }) {
        this.id = Number(props.userId)
        this.name = props.userName.split("@")[0];
        this.fanbox = props.hasOwnProperty('fanboxPromotion')
        if (props.hasOwnProperty('profileImageUrl')) {
            this.avatar = props.profileImageUrl
        }
        if (props.hasOwnProperty('userIllusts')) {
            let data = Object.create(ResIllustMangaInfo)
            Object.keys(props.userIllusts)
                .forEach(key => {
                    let item = props.userIllusts[key]
                    data[key] = item ? new ResIllustMangaInfo(item) : null;
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
        this.createDate = props.createDate ? new Date(props.createDate) : undefined
        this.uploadDate = props.uploadDate ? new Date(props.uploadDate) : undefined
        this.updateDate = props.updateDate ? new Date(props.updateDate) : undefined
    }
}

export class IllustCounts {
    bookmark: number | undefined
    comment: number | undefined
    like: number | undefined
    page: number | undefined
    view: number | undefined

    constructor(props: { hasOwnProperty?: (arg0: string) => any; id?: any; illustId?: any; description?: any; illustComment?: any; title?: any; illustTitle?: any; urls?: any; url?: any; tags?: { hasOwnProperty: (arg0: string) => any; tags: any; }; illustType?: any; bookmarkData?: any; xRestrict?: number; restrict?: number; bookmarkCount?: any; commentCount?: any; likeCount?: any; pageCount?: any; viewCount?: any; }) {
        this.bookmark = props.bookmarkCount
        this.comment = props.commentCount
        this.like = props.likeCount
        this.page = props.pageCount
        this.view = props.viewCount
    }
}

export class NovelCounts {
    bookmark: number | undefined
    comment: number | undefined
    text: number | undefined
    page: number | undefined
    word: number | undefined
    view: number | undefined
    character: number | undefined

    constructor(props: { bookmarkData?: any; description?: any; readingTime?: any; id?: any; xRestrict?: any; restrict?: any; title?: any; content?: any; url?: any; coverUrl?: any; language?: any; hasOwnProperty?: any; tags?: any; bookmarkCount?: number | undefined; commentCount?: number | undefined; pageCount?: any; textCount?: number | undefined; useWordCount?: number | undefined; wordCount?: number | undefined; characterCount?: number | undefined; viewCount?: number | undefined; illustId?: any; illustComment?: any; illustTitle?: any; urls?: any; illustType?: any; createDate?: any; uploadDate?: any; updateDate?: any; userId?: any; userName?: any; profileImageUrl?: any; userIllusts?: any }) {
        this.bookmark = props.bookmarkCount
        this.comment = props.commentCount
        this.page = props.pageCount ? Number(props.pageCount) : undefined
        this.text = props.textCount
        this.word = props.wordCount
        this.character = props.characterCount
        this.view = props.viewCount
    }
}


export class Size {
    height: number | undefined
    width: number | undefined

    constructor(props: { hasOwnProperty?: (arg0: string) => any; id?: any; illustId?: any; description?: any; illustComment?: any; title?: any; illustTitle?: any; urls?: any; url?: any; tags?: { hasOwnProperty: (arg0: string) => any; tags: any; }; illustType?: any; bookmarkData?: any; xRestrict?: number; restrict?: number; height?: any; width?: any; }) {
        this.height = props.height;
        this.width = props.width;
    }
}

export class Popular{
    permanent:Array<ResIllustMangaInfo>
    recent:Array<ResIllustMangaInfo>

    constructor(props: { permanent: any[]; recent: any[]; }) {
        this.permanent = props.permanent.map(i=>new ResIllustMangaInfo(i));
        this.recent = props.recent.map(i=>new ResIllustMangaInfo(i));
    }
}

export class BookmarkData{
    id:number;
    pri:boolean;

    constructor(props: { id: any; private: boolean; }) {
        this.id = Number(props.id)
        this.pri = props.private
    }

}
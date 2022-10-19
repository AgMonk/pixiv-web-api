export declare class Author {
    id: number;
    name: string;
    fanbox: boolean;
    avatar: string | undefined;
    userIllusts: object | undefined;
    constructor(props: {
        hasOwnProperty: any;
        id: any;
        illustId?: any;
        description?: any;
        illustComment?: any;
        title?: any;
        illustTitle?: any;
        urls?: any;
        url?: any;
        tags?: {
            hasOwnProperty: (arg0: string) => any;
            tags: any;
        };
        illustType?: any;
        bookmarkData?: any;
        xRestrict?: number;
        restrict?: number;
        userName?: any;
        profileImageUrl?: any;
        userIllusts?: any;
    });
}
export declare class Times {
    createDate: Date;
    uploadDate: Date;
    updateDate: Date;
    constructor(props: {
        hasOwnProperty?: (arg0: string) => any;
        id?: any;
        illustId?: any;
        description?: any;
        illustComment?: any;
        title?: any;
        illustTitle?: any;
        urls?: any;
        url?: any;
        tags?: {
            hasOwnProperty: (arg0: string) => any;
            tags: any;
        };
        illustType?: any;
        bookmarkData?: any;
        xRestrict?: number;
        restrict?: number;
        createDate?: any;
        uploadDate?: any;
        updateDate?: any;
    });
}
export declare class Counts {
    bookmark: number | undefined;
    comment: number | undefined;
    like: number | undefined;
    page: number | undefined;
    view: number | undefined;
    constructor(props: {
        hasOwnProperty?: (arg0: string) => any;
        id?: any;
        illustId?: any;
        description?: any;
        illustComment?: any;
        title?: any;
        illustTitle?: any;
        urls?: any;
        url?: any;
        tags?: {
            hasOwnProperty: (arg0: string) => any;
            tags: any;
        };
        illustType?: any;
        bookmarkData?: any;
        xRestrict?: number;
        restrict?: number;
        bookmarkCount?: any;
        commentCount?: any;
        likeCount?: any;
        pageCount?: any;
        viewCount?: any;
    });
}
export declare class Size {
    height: number | undefined;
    width: number | undefined;
    constructor(props: {
        hasOwnProperty?: (arg0: string) => any;
        id?: any;
        illustId?: any;
        description?: any;
        illustComment?: any;
        title?: any;
        illustTitle?: any;
        urls?: any;
        url?: any;
        tags?: {
            hasOwnProperty: (arg0: string) => any;
            tags: any;
        };
        illustType?: any;
        bookmarkData?: any;
        xRestrict?: number;
        restrict?: number;
        height?: any;
        width?: any;
    });
}

import {Author, Counts, Size, Times} from "../fields";

export class IllustMangaInfo {
    id: number
    description: string | undefined
    title: string | undefined
    urls: object | undefined
    url: string | undefined
    tags: Array<any> | undefined
    tagsType: String | undefined
    counts: Counts;
    size: Size;
    times: Times;
    author: Author;
    r18: boolean;
    illustType: number;
    bookmarkData: object;
    r18g: boolean;

    constructor(props: { hasOwnProperty: (arg0: string) => any; id: any; userId: any; illustId: any; description: any; illustComment: any; title: any; illustTitle: any; urls: any; url: any; tags: { hasOwnProperty: (arg0: string) => any; tags: any; }; illustType: any; bookmarkData: any; xRestrict: number; restrict: number; }) {
        if (props.hasOwnProperty("id")) {
            this.id = Number(props.id)
        } else if (props.hasOwnProperty("illustId")) {
            this.id = Number(props.illustId)
        } else {
            this.id = -1;
        }
        if (props.hasOwnProperty("description")) {
            this.description = props.description
        } else if (props.hasOwnProperty("illustComment")) {
            this.description = props.illustComment
        }
        if (props.hasOwnProperty("title")) {
            this.title = props.title
        } else if (props.hasOwnProperty("illustTitle")) {
            this.title = props.illustTitle
        }
        if (props.hasOwnProperty("urls")) {
            this.urls = props.urls;
        }
        if (props.hasOwnProperty("url")) {
            this.url = props.url;
        }
        if (props.hasOwnProperty("tags")) {
            if (Array.isArray(props.tags)) {
                this.tags = props.tags
                this.tagsType = "simple";
            } else if (props.tags.hasOwnProperty("tags") && Array.isArray(props.tags.tags)) {
                this.tags = props.tags.tags
                this.tagsType = "detail";
            }
        }


        this.title = props.title;
        this.illustType = Number(props.illustType);
        this.bookmarkData = props.bookmarkData;
        this.r18 = props.xRestrict === 1;
        this.r18g = props.restrict === 1;


        this.counts = new Counts(props)
        this.size = new Size(props)
        this.times = new Times(props)
        this.author = new Author(props);
    }
}



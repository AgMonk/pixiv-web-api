import {Author, BookmarkData, NovelCounts, Times} from "../fields";

export class ResNovelInfo {
    counts: NovelCounts
    bookmarkData: BookmarkData | undefined;
    times: Times;
    author: Author;
    description: string
    id: number;
    readingTime: number;
    r18: boolean;
    r18g: boolean;
    tags: Array<any> | undefined
    tagsType: string | undefined;
    title: string;
    url: string;
    content: string;
    coverUrl: string;
    language: string;

    constructor(props: { bookmarkData?: any; description?: any; readingTime?: any; id?: any; xRestrict?: any; restrict?: any; title?: any; content?: any; url?: any; coverUrl?: any; language?: any; hasOwnProperty?: any; tags?: any; bookmarkCount?: number | undefined; commentCount?: number | undefined; pageCount?: any; textCount?: number | undefined; useWordCount?: number | undefined; wordCount?: number | undefined; characterCount?: number | undefined; viewCount?: number | undefined; illustId?: any; illustComment?: any; illustTitle?: any; urls?: any; illustType?: any; createDate?: any; uploadDate?: any; updateDate?: any; userId?: any; userName?: any; profileImageUrl?: any; userIllusts?: any; }) {
        this.bookmarkData = props.bookmarkData ? new BookmarkData(props.bookmarkData) : undefined;
        this.times = new Times(props)
        this.counts = new NovelCounts(props)
        this.author = new Author(props);
        this.description = props.description
        this.readingTime = props.readingTime
        this.id = Number(props.id)
        this.r18 = props.xRestrict === 1;
        this.r18g = props.restrict === 1;
        this.title = props.title;
        this.content = props.content;
        this.url = props.url;
        this.coverUrl = props.coverUrl;
        this.language = props.language;

        if (props.hasOwnProperty("tags")) {
            if (Array.isArray(props.tags)) {
                this.tags = props.tags
                this.tagsType = "simple";
            } else if (props.tags.hasOwnProperty("tags") && Array.isArray(props.tags.tags)) {
                this.tags = props.tags.tags
                this.tagsType = "detail";
            }
        }
    }

}
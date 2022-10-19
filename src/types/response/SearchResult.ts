import {Author, Popular} from "../fields";
import {IllustMangaInfo} from "./IllustMangaInfo";

export class SearchResult {
    relatedTags: Array<string>;
    tagTranslation: object;
    popular: Popular | undefined;
    data: Array<IllustMangaInfo>;
    total: number;
    users: Array<Author>;

    constructor(props: { illustManga: { total: number, data: Array<any> }; popular: { permanent: any[]; recent: any[]; }; relatedTags: Array<string>; tagTranslation: object; }) {
        const {illustManga, popular, relatedTags, tagTranslation} = props
        //相关标签
        this.relatedTags = relatedTags ? relatedTags : [];
        //标签翻译
        this.tagTranslation = tagTranslation ? tagTranslation : {};
        this.popular = popular ? new Popular(popular) : undefined;
        this.total = illustManga.total
        this.data = illustManga.data.map(i => new IllustMangaInfo(i));

        this.users = [];
        let userId: number[] = [];
        this.data.map(i => i.author).forEach(user => {
            if (userId.indexOf(user.id) === -1) {
                userId.push(user.id)
                this.users.push(user)
            }
        })
    }
}
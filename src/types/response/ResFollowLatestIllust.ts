import {ResIllustMangaInfo} from "./ResIllustMangaInfo";
import {Author} from "../fields";
import {collectAuthor} from "./ResSearchResult";

export class ResFollowLatestIllust {
    tagTranslation: object;
    data: Array<ResIllustMangaInfo> | undefined
    users: Array<Author> | undefined;

    constructor(props: { tagTranslation: any; thumbnails: any; }) {
        const {tagTranslation, thumbnails} = props
        //标签翻译
        this.tagTranslation = tagTranslation ? tagTranslation : {};
        if (thumbnails) {
            const illust = <Array<any>>thumbnails.illust
            this.data = illust.map(i => new ResIllustMangaInfo(i))
            this.users = collectAuthor(this.data);
        }
    }

}
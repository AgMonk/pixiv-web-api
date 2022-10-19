import {ResNovelInfo} from "./ResNovelInfo";

export class ResFollowLatestNovel {
    tagTranslation: object;
    data: Array<any> | undefined

    constructor(props: { tagTranslation: any; thumbnails: any; }) {
        const {tagTranslation, thumbnails} = props
        //标签翻译
        this.tagTranslation = tagTranslation ? tagTranslation : {};
        if (thumbnails) {
            const novel = <Array<any>>thumbnails.novel
            this.data = novel.map(i => new ResNovelInfo(i))
        }
    }

}
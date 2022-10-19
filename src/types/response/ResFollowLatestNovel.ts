import {Thumbnails} from "./Thumbnails";
import {ResIllustMangaInfo} from "./ResIllustMangaInfo";

export class ResFollowLatestNovel {
    tagTranslation: object;
    data: Array<any> | undefined

    constructor(props: { tagTranslation: any; thumbnails: any; }) {
        const {tagTranslation, thumbnails} = props
        //标签翻译
        this.tagTranslation = tagTranslation ? tagTranslation : {};
        if (thumbnails) {
            const novel = <Array<any>>thumbnails.novel
            //todo 转换为小说对象
            this.data = novel
        }
    }

}
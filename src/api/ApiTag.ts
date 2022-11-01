import {AxiosInstance} from "axios";
import {PixivTagInfo, TagInfo} from "../interface/tag";

export class ApiTag {
    readonly token: string
    private instance: AxiosInstance

    constructor(instance: AxiosInstance, token: string) {
        this.instance = instance;
        this.token = token;
    }

    info(tag: string, lang?: string): Promise<TagInfo> {
        return this.instance.get("/ajax/tag/info", {params: {tag, lang}}).then(res => {
            return res.data.body
        })
    }

    suggestByWord(word: string, lang?: string): Promise<Array<{ illust_count: number, tag_name: string, total_count: number }>> {
        return this.instance.get("/ajax/tags/suggest_by_word", {params: {word, lang}}).then(res => {
            return res.data.body.candidates
        })
    }

    illustAdd(pid: number, tag: string): Promise<PixivTagInfo> {
        return this.instance.post(`/ajax/tags/illust/${pid}/add`, {tag}, {
            headers: {
                'x-csrf-token': this.token,
            }
        }).then(res => {
            return res.data.body
        })
    }
}


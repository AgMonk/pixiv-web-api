import {AxiosInstance} from "axios";


export class ApiBookmark {
    private instance: AxiosInstance


    constructor(instance: AxiosInstance) {
        this.instance = instance;
    }

    addIllust(param: {
        illust_id: number;
        restrict: 0 | 1
        comment: string;
        tags: Array<string>;
    }): Promise<number> {
        return this.instance.post("/ajax/illusts/bookmarks/add", param,).then(res => {
            return res.data.body.last_bookmark_id
        })
    }

    delIllust(bookmarkId: number): Promise<any> {
        let formData = new FormData();
        formData.append("bookmark_id", bookmarkId + "")
        return this.instance.post("/ajax/illusts/bookmarks/delete", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
    }

    delIllusts(bookmarkIds: Array<number>): Promise<any> {
        return this.instance.post("/ajax/illusts/bookmarks/remove", {bookmarkIds},)
    }

    addNovel(param: {
        novel_id: number;
        restrict: 0 | 1
        comment: string;
        tags: Array<string>;
    }): Promise<number> {
        return this.instance.post("/ajax/novels/bookmarks/add", param,).then(res => {
            return res.data.body
        })
    }

    delNovel(bookmarkId: number): Promise<any> {
        let formData = new FormData();
        formData.append("book_id", bookmarkId + "")
        formData.append("del", "1")
        return this.instance.post("/ajax/novels/bookmarks/delete", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
    }

    delNovels(bookmarkIds: Array<number>): Promise<any> {
        return this.instance.post("/ajax/novels/bookmarks/remove", {bookmarkIds},)
    }

    like(pid: number, lang?: string): Promise<any> {
        return this.instance.post(`/ajax/illusts/like`, {illust_id: pid},)
    }
}


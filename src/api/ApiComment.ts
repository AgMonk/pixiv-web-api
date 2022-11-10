import {AxiosInstance} from "axios";
import {CommentBody, CommentParam, ResComment} from "../interface/comment";

export class ApiComment {
    private instance: AxiosInstance


    constructor(instance: AxiosInstance) {
        this.instance = instance;
    }

    // 查询作品评论（根）
    illustsRoots(illustId: number, page: number, size: number, lang?: string): Promise<CommentBody> {
        const params = {lang, illust_id: illustId, offset: (page - 1) * size, limit: size}
        return this.instance.get("/ajax/illusts/comments/roots", {params}).then(res => {
            return res.data.body
        })
    }

    // 查询小说评论（根）
    novelsRoots(nid: number, page: number, size: number, lang?: string): Promise<CommentBody> {
        const params = {lang, novel_id: nid, offset: (page - 1) * size, limit: size}
        return this.instance.get("/ajax/novels/comments/roots", {params}).then(res => {
            return res.data.body
        })
    }

    // 查询作品回复（楼中楼）
    illustsReplies(commentId: number, page: number, lang?: string): Promise<CommentBody> {
        const params = {lang, comment_id: commentId, page}
        return this.instance.get("/ajax/illusts/comments/replies", {params}).then(res => {
            return res.data.body
        })
    }

    // 查询小说回复（楼中楼）
    novelsReplies(commentId: number, page: number, lang?: string): Promise<CommentBody> {
        const params = {lang, comment_id: commentId, page}
        return this.instance.get("/ajax/novels/comments/replies", {params}).then(res => {
            return res.data.body
        })
    }

    /**
     * 删除评论
     * @param id 绘画或小说id
     * @param commentId 评论id
     * @param isNovel 是否为小说
     */
    delComment(id: number, commentId: number, isNovel?: boolean): Promise<any> {
        let formData = new FormData();
        formData.append("i_id", "" + id)
        formData.append("del_id", "" + commentId)
        return this.instance.post((isNovel ? '/novel' : '') + "/rpc_delete_comment.php", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
    }

    //发布评论
    comment(params: CommentParam): Promise<ResComment> {
        const {authorUserId, type, comment, stampId, parentId, illustId, novelId} = params
        let formData = new FormData();
        if (illustId) {
            formData.append("illust_id", "" + illustId)
        }
        if (novelId) {
            formData.append("novel_id", "" + novelId)
        }
        formData.append("author_user_id", "" + authorUserId)
        formData.append("type", type)
        if (parentId) {
            formData.append("parent_id", "" + parentId)
        }
        if (type === "comment" && comment) {
            formData.append("comment", comment)
        }
        if (type === "stamp") {
            formData.append("stamp_id", "" + stampId)
        }
        return this.instance.post((novelId ? '/novel' : '') + "/rpc/post_comment.php", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }).then(res => {
            return res.data.body
        })
    }
}
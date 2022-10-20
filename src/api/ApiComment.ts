import {AxiosInstance} from "axios";
import {CommentBody, ResComment} from "../interface/comment";

export class ApiComment {
    readonly token: string
    private instance: AxiosInstance

    constructor(instance: AxiosInstance, token: string) {
        this.instance = instance;
        this.token = token;
    }

    // 查询作品评论（根）
    illustsRoots(illustId: number, page: number, size: number, lang?: string): Promise<CommentBody> {
        const params = {lang, illust_id: illustId, offset: (page - 1) * size, limit: size}
        return this.instance.get("/ajax/illusts/comments/roots", {params}).then(res => {
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

    //贴图表情评论
    commentStamp(illustId: number, authorUserId: number, stampId: number, parentId?: number,): Promise<ResComment> {
        return this.comment({authorUserId, stampId, parentId, illustId, type: "stamp"})
    }

    //文字评论
    commentText(illustId: number, authorUserId: number, comment: string, parentId?: number,): Promise<ResComment> {
        return this.comment({authorUserId, comment, parentId, illustId, type: "comment"})
    }

    //删除评论
    delComment(illustId: number, commentId: number): Promise<any> {
        let formData = new FormData();
        formData.append("i_id", "" + illustId)
        formData.append("del_id", "" + commentId)
        return this.instance.post("/rpc_delete_comment.php", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                'x-csrf-token': this.token,
            }
        })
    }

    //发布评论
    private comment(params: {
        type: "comment" | "stamp";
        illustId: number;
        authorUserId: number;
        parentId?: number | undefined;
        comment?: string | undefined;
        stampId?: number | undefined;
    }): Promise<ResComment> {
        const {authorUserId, type, comment, stampId, parentId, illustId,} = params
        let formData = new FormData();
        formData.append("illust_id", "" + illustId)
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
        return this.instance.post("/rpc/post_comment.php", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                'x-csrf-token': this.token,
            }
        }).then(res => {
            return res.data.body
        })
    }
}
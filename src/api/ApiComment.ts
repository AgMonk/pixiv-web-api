import {AxiosInstance} from "axios";

export class ApiComment {
    readonly token: string
    private instance: AxiosInstance

    constructor(instance: AxiosInstance, token: string) {
        this.instance = instance;
        this.token = token;
    }

    // 查询作品评论（根）
    illustsRoots(param: { illust_id: number; page: number; size: number; lang?: string; }): Promise<{ comments: Array<any>, hasNext: boolean }> {
        const {size, page, lang, illust_id} = param
        const params = {lang, illust_id, offset: (page - 1) * size, limit: size}
        return this.instance.get("/ajax/illusts/comments/roots", {params}).then(res => {
            return res.data.body
        })
    }

    // 查询作品回复（楼中楼）
    illustsReplies(params: { comment_id: number; page: number; lang?: string; }): Promise<{ comments: Array<any>, hasNext: boolean }> {
        return this.instance.get("/ajax/illusts/comments/replies", {params}).then(res => {
            return res.data.body
        })
    }

    commentStamp(params: {
        illustId: number;
        authorUserId: number;
        parentId?: number;
        stampId: number;
    }): Promise<{
        comment: string
        comment_id: number
        parent_id: number | undefined
        stamp_id: number | undefined
        user_id: number
        user_name: string
    }> {
        const {authorUserId, stampId, parentId, illustId,} = params
        return this.comment({authorUserId, stampId, parentId, illustId, type: "stamp"})
    }

    commentText(params: {
        illustId: number;
        authorUserId: number;
        parentId?: number;
        comment: string;
    }): Promise<{
        comment: string
        comment_id: number
        parent_id: number | undefined
        stamp_id: number | undefined
        user_id: number
        user_name: string
    }> {
        const {authorUserId, comment, parentId, illustId,} = params
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

    //todo 发布评论
    private comment(params: {
        type: "comment" | "stamp";
        illustId: number;
        authorUserId: number;
        parentId?: number | undefined;
        comment?: string | undefined;
        stampId?: number | undefined;
    }): Promise<{
        comment: string
        comment_id: number
        parent_id: number | undefined
        stamp_id: number | undefined
        user_id: number
        user_name: string
    }> {
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
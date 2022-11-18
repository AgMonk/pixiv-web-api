import {AxiosInstance} from "axios";
import {CommentBody, CommentParam, ResComment} from "../interface/comment";
import {createFormData} from "../utils/FormDataUtils";

export class CommentNovelApi {
    private instance: AxiosInstance


    constructor(instance: AxiosInstance) {
        this.instance = instance;
    }

    /**
     * 删除评论
     * @param id 绘画或小说id
     * @param commentId 评论id
     */
    del(id: number, commentId: number): Promise<any> {
        let formData = new FormData();
        formData.append("i_id", "" + id)
        formData.append("del_id", "" + commentId)
        return this.instance.post("/novel/rpc_delete_comment.php", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
    }

    /**
     * 发布评论
     * @param params
     */
    post(params: CommentParam): Promise<ResComment> {
        const {authorUserId, type, comment, stampId, parentId, novelId} = params
        let formData = createFormData(authorUserId, type, parentId, comment, stampId);
        formData.append("novel_id", "" + novelId)
        return this.instance.post("/novel/rpc/post_comment.php", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }).then(res => {
            return res.data.body
        })
    }

    /**
     * 查询小说回复（楼中楼）
     * @param commentId
     * @param page
     */
    replies(commentId: number, page: number): Promise<CommentBody> {
        const params = {comment_id: commentId, page}
        return this.instance.get("/ajax/novels/comments/replies", {params}).then(res => {
            return res.data.body
        })
    }

    /**
     * 查询小说评论（根）
     * @param nid
     * @param page
     * @param size
     */
    roots(nid: number, page: number, size: number): Promise<CommentBody> {
        const params = {novel_id: nid, offset: (page - 1) * size, limit: size}
        return this.instance.get("/ajax/novels/comments/roots", {params}).then(res => {
            return res.data.body
        })
    }
}
import {AxiosInstance} from "axios";
import {CommentBody, CommentParam, ResComment} from "../interface/comment";
import {createFormData} from "../utils/FormDataUtils";

export class CommentIllustApi {
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
        return this.instance.post("/rpc_delete_comment.php", formData, {
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
        const {authorUserId, type, comment, stampId, parentId, illustId} = params
        let formData = createFormData(authorUserId, type, parentId, comment, stampId);
        formData.append("illust_id", "" + illustId)
        return this.instance.post("/rpc/post_comment.php", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }).then(res => {
            return res.data.body
        })
    }

    /**
     * 查询作品回复（楼中楼）
     * @param commentId
     * @param page
     */
    replies(commentId: number, page: number): Promise<CommentBody> {
        const params = {comment_id: commentId, page}
        return this.instance.get("/ajax/illusts/comments/replies", {params}).then(res => {
            return res.data.body
        })
    }

    /**
     * 查询作品评论（根）
     * @param illustId
     * @param page
     * @param size
     */
    roots(illustId: number, page: number, size: number): Promise<CommentBody> {
        const params = {illust_id: illustId, offset: (page - 1) * size, limit: size}
        return this.instance.get("/ajax/illusts/comments/roots", {params}).then(res => {
            return res.data.body
        })
    }
}
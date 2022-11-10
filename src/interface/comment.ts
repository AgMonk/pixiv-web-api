export interface Comment {
    comment: string
    commentDate: string
    commentParentId?: number
    commentUserId: number
    editable: boolean
    hasReplies: boolean
    id: number
    img: string
    isDeletedUser: boolean
    stampId: number | undefined
    userId: number
    userName: string
}

export interface CommentBody {
    comments: Array<Comment>,
    hasNext: boolean
}

export interface ResComment {
    comment: string
    comment_id: number
    parent_id: number | undefined
    stamp_id: number | undefined
    user_id: number
    user_name: string
}

export interface CommentParam {
    //评论类型
    type: "comment" | "stamp";
    //如果是绘画，pid
    illustId?: number;
    //如果是小说，nid
    novelId?: number;
    //作品作者uid
    authorUserId: number;
    //如果是楼中楼，父楼id
    parentId?: number;
    //如果是文字评论，评论正文
    comment?: string;
    //如果是表情贴图,贴图编号
    stampId?: number;
}

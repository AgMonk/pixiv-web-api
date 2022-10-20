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
    stampId?: number
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
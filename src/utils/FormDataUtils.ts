export function createFormData(authorUserId: number, type: "comment" | "stamp", parentId: number | undefined, comment: string | undefined, stampId: number | undefined) {
    let formData = new FormData();
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
    return formData;
}
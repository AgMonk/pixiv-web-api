export interface BookmarkTags {
    private: Array<TagCount>
    public: Array<TagCount>
    tooManyBookmark: boolean
    tooManyBookmarkTags: boolean
}

interface TagCount {
    tag: string
    cnt: number
}
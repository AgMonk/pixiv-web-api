export interface BookmarkTags {
    private: Array<TagCount>
    public: Array<TagCount>
    tooManyBookmark: boolean
    tooManyBookmarkTags: boolean
}

export interface TagCount {
    tag: string
    cnt: number
}

export interface NovelTags {
    tag: string
    tag_translation: string
    tag_yomigana: string
    cnt: number
}


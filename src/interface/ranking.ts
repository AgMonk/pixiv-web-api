export interface IllustRanking {
    content: string
    contents: Array<IllustContent>
    data: string
    mode: string
    next: number | false
    next_date: string | false
    page: number
    prev: number | false
    prev_date: string | false
    rank_total: number
}


export interface IllustContent {
    attr: string
    bookmarkable: boolean
    date: string
    height: number
    illust_book_style: string
    illust_id: number
    illust_page_count: string
    illust_series: boolean
    illust_type: "0" | "1" | "2"
    illust_upload_timestamp: number
    is_bookmarked: boolean
    profile_img: string
    rank: number
    rating_count: number
    tags: Array<string>
    title: string
    url: string
    user_id: number
    user_name: string
    view_count: number
    width: number
    yes_rank: number
}
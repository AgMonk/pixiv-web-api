import {BookmarkData} from "../fields";

export class ResBookmarkData {
    bookmarkData: BookmarkData | undefined;
    id: number;
    isBookmarkable: boolean

    constructor(props: { bookmarkData: { id: any; private: boolean; }; id: any; isBookmarkable: boolean; }) {
        this.bookmarkData = props.bookmarkData ? new BookmarkData(props.bookmarkData) : undefined;
        this.id = Number(props.id)
        this.isBookmarkable = props.isBookmarkable
    }

}
export class AddNovelParam {
    novel_id: number;
    restrict: 0 | 1
    comment:string;
    tags:Array<string>

    constructor(novel_id: number, restrict: 0 | 1, comment: string, tags: Array<string>) {
        this.novel_id = novel_id;
        this.restrict = restrict;
        this.comment = comment;
        this.tags = tags;
    }
}
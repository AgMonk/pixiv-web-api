export class AddIllustParam {
    illust_id: number;
    restrict: 0 | 1
    comment:string;
    tags:Array<string>

    constructor(illust_id: number, restrict: 0 | 1, comment: string, tags: Array<string>) {
        this.illust_id = illust_id;
        this.restrict = restrict;
        this.comment = comment;
        this.tags = tags;
    }
}
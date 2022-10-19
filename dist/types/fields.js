"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Popular = exports.Size = exports.Counts = exports.Times = exports.Author = void 0;
// noinspection JSUnresolvedVariable
var illustManga_1 = require("./illustManga");
var Author = /** @class */ (function () {
    function Author(props) {
        this.id = Number(props.id);
        this.name = props.userName.split("@")[0];
        this.fanbox = props.hasOwnProperty('fanboxPromotion');
        if (props.hasOwnProperty('profileImageUrl')) {
            this.avatar = props.profileImageUrl;
        }
        if (props.hasOwnProperty('userIllusts')) {
            var data_1 = Object.create(illustManga_1.IllustMangaInfo);
            Object.keys(props.userIllusts)
                .forEach(function (key) {
                var item = props.userIllusts[key];
                data_1[key] = item ? new illustManga_1.IllustMangaInfo(item) : null;
            });
            this.userIllusts = data_1;
        }
    }
    return Author;
}());
exports.Author = Author;
var Times = /** @class */ (function () {
    function Times(props) {
        this.createDate = props.createDate ? new Date(props.createDate) : undefined;
        this.uploadDate = props.uploadDate ? new Date(props.uploadDate) : undefined;
        this.updateDate = props.updateDate ? new Date(props.updateDate) : undefined;
    }
    return Times;
}());
exports.Times = Times;
var Counts = /** @class */ (function () {
    function Counts(props) {
        this.bookmark = props.bookmarkCount;
        this.comment = props.commentCount;
        this.like = props.likeCount;
        this.page = props.pageCount;
        this.view = props.viewCount;
    }
    return Counts;
}());
exports.Counts = Counts;
var Size = /** @class */ (function () {
    function Size(props) {
        this.height = props.height;
        this.width = props.width;
    }
    return Size;
}());
exports.Size = Size;
var Popular = /** @class */ (function () {
    function Popular(props) {
        this.permanent = props.permanent.map(function (i) { return new illustManga_1.IllustMangaInfo(i); });
        this.recent = props.recent.map(function (i) { return new illustManga_1.IllustMangaInfo(i); });
    }
    return Popular;
}());
exports.Popular = Popular;

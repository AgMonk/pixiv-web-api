"use strict";
// noinspection JSUnresolvedVariable
Object.defineProperty(exports, "__esModule", { value: true });
exports.IllustMangaSearchResult = exports.IllustMangaInfo = void 0;
// noinspection JSUnresolvedVariable
var fields_1 = require("./fields");
var IllustMangaInfo = /** @class */ (function () {
    function IllustMangaInfo(props) {
        if (props.hasOwnProperty("id")) {
            this.id = Number(props.id);
        }
        else if (props.hasOwnProperty("illustId")) {
            this.id = Number(props.illustId);
        }
        else {
            this.id = -1;
        }
        if (props.hasOwnProperty("description")) {
            this.description = props.description;
        }
        else if (props.hasOwnProperty("illustComment")) {
            this.description = props.illustComment;
        }
        if (props.hasOwnProperty("title")) {
            this.title = props.title;
        }
        else if (props.hasOwnProperty("illustTitle")) {
            this.title = props.illustTitle;
        }
        if (props.hasOwnProperty("urls")) {
            this.urls = props.urls;
        }
        if (props.hasOwnProperty("url")) {
            this.url = props.url;
        }
        if (props.hasOwnProperty("tags")) {
            if (Array.isArray(props.tags)) {
                this.tags = props.tags;
                this.tagsType = "simple";
            }
            else if (props.tags.hasOwnProperty("tags") && Array.isArray(props.tags.tags)) {
                this.tags = props.tags.tags;
                this.tagsType = "detail";
            }
        }
        this.title = props.title;
        this.illustType = Number(props.illustType);
        this.bookmarkData = props.bookmarkData;
        this.r18 = props.xRestrict === 1;
        this.r18g = props.restrict === 1;
        this.counts = new fields_1.Counts(props);
        this.size = new fields_1.Size(props);
        this.times = new fields_1.Times(props);
        this.author = new fields_1.Author(props);
    }
    return IllustMangaInfo;
}());
exports.IllustMangaInfo = IllustMangaInfo;
var IllustMangaSearchResult = /** @class */ (function () {
    function IllustMangaSearchResult(props) {
        var illustManga = props.illustManga, popular = props.popular, relatedTags = props.relatedTags, tagTranslation = props.tagTranslation;
        //相关标签
        this.relatedTags = relatedTags ? relatedTags : [];
    }
    return IllustMangaSearchResult;
}());
exports.IllustMangaSearchResult = IllustMangaSearchResult;

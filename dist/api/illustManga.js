"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiIllustManga = void 0;
var illustManga_1 = require("../types/illustManga");
var ApiIllustManga = /** @class */ (function () {
    function ApiIllustManga(instance) {
        this.instance = instance;
    }
    ApiIllustManga.prototype.detail = function (pid) {
        return this.instance.get("/ajax/illust/" + pid).then(function (res) {
            return new illustManga_1.IllustMangaInfo(res.data.body);
        });
    };
    ApiIllustManga.prototype.search = function (keywords, params) {
        return this.instance.get("/ajax/search/artworks/" + keywords, { params: params }).then(function (res) {
            return new illustManga_1.IllustMangaSearchResult(res.data.body);
        });
    };
    return ApiIllustManga;
}());
exports.ApiIllustManga = ApiIllustManga;

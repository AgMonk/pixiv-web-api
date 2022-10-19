"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = void 0;
var illustManga_1 = require("./api/illustManga");
var Api = /** @class */ (function () {
    function Api(instance) {
        this.instance = instance;
        this.illustManga = new illustManga_1.ApiIllustManga(instance);
    }
    return Api;
}());
exports.Api = Api;

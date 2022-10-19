"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = void 0;
var illustManga_1 = require("./api/illustManga");
var PixivException_1 = require("./types/PixivException");
var Api = /** @class */ (function () {
    function Api(instance) {
        this.instance = instance;
        instance.interceptors.response.use(function (res) {
            console.log("Request Success: ", res);
            return res;
        }, function (error) {
            var response = error.response;
            if (response) {
                var data = response.data, status_1 = response.status, config = response.config;
                var url = config.url;
                if (status_1 >= 500) {
                    throw new PixivException_1.PixivException(status_1, url, "Net Error", config.data);
                }
                if (status_1 >= 400) {
                    throw new PixivException_1.PixivException(status_1, url, data.message, config.data);
                }
            }
            throw error;
        });
        this.illustManga = new illustManga_1.ApiIllustManga(instance);
    }
    return Api;
}());
exports.Api = Api;

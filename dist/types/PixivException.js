"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PixivException = void 0;
var PixivException = /** @class */ (function () {
    function PixivException(code, url, message, data) {
        this.code = code;
        this.url = url;
        this.message = message;
        this.data = data;
    }
    return PixivException;
}());
exports.PixivException = PixivException;

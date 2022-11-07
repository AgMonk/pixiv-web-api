import {Canceler} from "axios";

export class CancelerCache {
    static cache = new Map<string, Canceler>()

    //保存Canceler
    static saveCanceler(key: string, canceler: Canceler) {
        CancelerCache.cache.set(key, canceler);
    }

    //取消请求
    static cancel(key: string) {
        let canceler = CancelerCache.cache.get(key)
        if (canceler) {
            console.warn('请求取消 key = ' + key)
            canceler()
            CancelerCache.delete(key);
        }
    }

    //删除Canceler
    static delete(key: string) {
        CancelerCache.cache.delete(key);
    }
}
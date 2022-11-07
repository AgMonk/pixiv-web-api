import axios, {AxiosRequestConfig, Canceler} from "axios";

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

    //检查是否是需要添加cancelToken
    static check(config: AxiosRequestConfig) {
        const url = config.url;
        if (!url) {
            return;
        }
        for (let i = 0; i < patterns.length; i++) {
            const {pattern, getKey} = patterns[i]
            if (pattern.exec(url)) {
                const key = typeof getKey === 'function' ? getKey(config, pattern) : getKey;
                //取消之前的请求
                CancelerCache.cancel(key)
                //添加 cancelToken
                config.cancelToken = new axios.CancelToken(function executor(c) {
                    CancelerCache.saveCanceler(key, c);
                });
                //保存cancelKey
                // @ts-ignore
                config.cancelKey = key
            }
        }

    }
}

const patterns: Array<{ pattern: RegExp, getKey: string | ((config: AxiosRequestConfig, pattern: RegExp) => string) }> = [
    //绘画详情请求
    {pattern: /^\/ajax\/illust\/\d+$/, getKey: 'detail'},
    //搜索绘画请求
    {pattern: /^\/ajax\/search\/artworks\//, getKey: 'search'},
    //最新绘画请求
    {pattern: /^\/ajax\/follow_latest\/illust/, getKey: 'follow_latest_illust'},
]
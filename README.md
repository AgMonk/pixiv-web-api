# Pixiv-Web-Api

提供给浏览器使用的Pixiv-Api，基于Axios

# 安装

```npm
npm install pixiv-web-api-for-browser
```

# 使用

```js
import {Api} from "pixiv-web-api-for-browser"


let instance = axios.create({baseURL: "/pixiv-net/", timeout: 20000});
let api = new Api(instance, token);

api.illustManga.detail(11111).then(res => {
    console.log(res)
})
```

instance为axios对象，可以自行配置参数。
token参数可以不传，此时Api会自行通过请求获取API，但是需要时间。可以通过 `isTokenReady` 方法获知token是否获取成功了，或者通过`fetchToken`方法手动获取token。`POST`请求必须使用token
。token与cookie为一一配对，因此建议在第一次获取之后就保存起来多次使用。

各请求方法放在不同的字段中

- illustManga：绘画作品相关
- novel: 小说相关
- user: 用户相关
- ranking: 排行榜
- bookmark: 收藏
- follow: 关注
- comments: 评论区

各方法含义可参照：[这里](https://github.com/AgMonk/pixiv-utils/blob/master/README.md)
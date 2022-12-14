# Pixiv-Web-Api

提供给浏览器使用的Pixiv-Api，基于Axios

# 安装

```npm
npm install pixiv-web-api-for-browser
```

# 使用

```js
import {Api} from "pixiv-web-api-for-browser"
//cookie设置一次，有效期一年
Api.setCookie("PHPSESSID", "/pixiv-net/")
```

PHPSESSID从已登陆的cookie中获取，"/pixiv-net/" 为nginx反代到官网的路径

```js

let instance = axios.create({baseURL: "/pixiv-net/", timeout: 20000});
let api = new Api(instance, token);

api.illustApi.detail(11111).then(res => {
    console.log(res)
})
```

instance为axios对象，可以自行配置参数。
token与cookie为一一配对，因此建议在第一次获取之后就保存起来多次使用。
`POST`请求必须使用token
如果调用构造函数时未传入token，可以调用`fetchToken`方法发送请求获取

各请求方法放在不同的字段中

各API分组结构参考：[这里](https://github.com/AgMonk/pixiv-utils/blob/master/README.md)
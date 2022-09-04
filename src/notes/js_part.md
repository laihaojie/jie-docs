# js片段

## __dirname

```js
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
```

## 注入js

```js
let script = document.createElement('script')
script.src = 'https://xxx'
let s = document.getElementsByTagName('script')[0]
s.parentNode.insertBefore(script, s)
```

## 随机数

```js
// 浮点数
function randomNumber(min, max) {
  return Math.random() * (max - min) + min
}

// 整数
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}
```

## 不刷新修改url地址栏

```js
history.pushState('', 'title', '修改后的url')
```

## node下载图片
```js
const axios = require('axios')
axios({
  method: 'get',
  url: 'image_url.png',
  responseType: 'stream',
})
  .then((response) => {
    response.data.pipe(fs.createWriteStream('images/name.png'))
  })
```
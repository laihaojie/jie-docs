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

## 统计字符串中某个字符出现的次数

```js
str.split(char).length - 1
```

## 检查对象是否为空

```js
const isEmpty = obj => Object.keys(obj).length === 0
// or
const isEmpty = obj => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object
```

## 等待一段时间后执行

```js
const sleep = time => new Promise(resolve => setTimeout(resolve, time))
```

## image转base64
```js
// 图片文件转base64，利用canvas
function getBase64Image(img) {
  let canvas = document.createElement('canvas')
  canvas.width = img.width
  canvas.height = img.height
  let ctx = canvas.getContext('2d')
  ctx.drawImage(img, 0, 0, img.width, img.height)
  let ext = img.src.substring(img.src.lastIndexOf('.') + 1).toLowerCase()
  let dataURL = canvas.toDataURL(`image/${ext}`)
  return dataURL
}

// 使用
let image = new Image()
// var image = document.createElement('image')
image.src = 'https://bidcard.alltobid.com/cnbauth/Verification/NextCaptcha?SId=110ef5a7-7a8a-4b81-9158-27c542e253a2' // 你的图片路径
image.onload = function () {
  let imgBase64 = getBase64Image(image)
  console.log(imgBase64)
}
```
# JavaScript

## __dirname

```js
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)
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
window.history.replaceState(window.history.state, document.title, '修改后的url')
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

## 原生JS Toast 弹窗

```js
function Toast(msg, duration = 2000) {
  const toastDOM = document.getElementById('custom_toast')
  if (toastDOM)
    document.body.removeChild(toastDOM)

  const m = document.createElement('div')
  m.id = 'custom_toast'
  m.innerHTML = msg
  m.style.cssText = 'font-size: .32rem;color: rgb(255, 255, 255);background-color: rgba(0, 0, 0, 0.6);padding: 10px 15px;margin: 0 0 0 -60px;border-radius: 4px;position: fixed;    top: 50%;left: 50%;width: 130px;text-align: center;'
  document.body.appendChild(m)
  setTimeout(() => {
    if (!document.body.contains(m)) return
    const d = 0.5
    m.style.opacity = '0'
    setTimeout(() => {
      document.body.removeChild(m)
    }, d * 1000)
  }, duration)
}
```

## 根据经度纬度跳转到地图

::: code-group

```js [百度地图]
window.open(`http://api.map.baidu.com/marker?location=${lat},${lng}&title=${title}&content=${address}&output=html`)
```

```js [高德地图]
window.open(`http://uri.amap.com/marker?position=${lng},${lat}&name=${title}&src=mypage&coordinate=gaode&callnative=1`)
```

```js [谷歌地图]
window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`)
```

:::

## Fetch用法

::: code-group

```js [Get请求]
fetch('https://...').then(res => res.json()).then((data) => {

})
```

```js [Post请求]
fetch('https://...', {
  method: 'post',
  body: JSON.stringify(base),
  headers: {
    'Content-Type': 'application/json'
  }
}).then(res => res.json()).then((data) => {

})
```

:::

## 限制控制台调试

```js
(() => {
  function block() {
    if (window.outerHeight - window.innerHeight > 200 || window.outerWidth - window.innerWidth > 200)
      document.body.innerHTML = '检测到非法调试,请关闭后刷新重试!'

    setInterval(() => {
      (function () {
        return false
      }
        .constructor('debugger')
        .call())
    }, 50)
  }
  try {
    block()
  }
  catch (err) { }
})()
```

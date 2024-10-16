# JavaScript

## 注入js

```js
const script = document.createElement('script')
script.src = 'https://xxx'
const s = document.getElementsByTagName('script')[0]
s.parentNode.insertBefore(script, s)
```

## 随机数

```js
// 浮点数
function randomFloatNumber(min, max) {
  return Math.random() * (max - min) + min
}

// 整数
function randomIntNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}
```

## 不刷新修改url地址栏

```js
window.history.replaceState(window.history.state, document.title, '修改后的url')
```

## 统计字符串中某个字符出现的次数

```js
str.split(char).length - 1
```

## 检查对象是否为空

```js
const isEmpty = obj => Object.keys(obj).length === 0
// or
// const isEmpty = obj => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object
```

## 等待一段时间后执行

```js
const sleep = time => new Promise(resolve => setTimeout(resolve, time))
```

## image转base64

```js
// 图片文件转base64，利用canvas
function getBase64Image(img) {
  const canvas = document.createElement('canvas')
  canvas.width = img.width
  canvas.height = img.height
  const ctx = canvas.getContext('2d')
  ctx.drawImage(img, 0, 0, img.width, img.height)
  const ext = img.src.substring(img.src.lastIndexOf('.') + 1).toLowerCase()
  const dataURL = canvas.toDataURL(`image/${ext}`)
  return dataURL
}

// 使用
const image = new Image()
// var image = document.createElement('image')
image.src = 'https://bidcard.alltobid.com/cnbauth/Verification/NextCaptcha?SId=110ef5a7-7a8a-4b81-9158-27c542e253a2' // 你的图片路径
image.onload = function () {
  const imgBase64 = getBase64Image(image)
  console.log(imgBase64)
}
```

## 原生JS Toast 弹窗

::: code-group

```js [Toast]
function Toast(msg, duration = 2000) {
  const toastDOM = document.getElementById('custom_toast')
  if (toastDOM)
    document.body.removeChild(toastDOM)

  const m = document.createElement('div')
  m.id = 'custom_toast'
  m.innerHTML = msg
  m.style.cssText = 'font-size: 18px;color: rgb(255, 255, 255);background-color: rgba(0, 0, 0, 0.6);padding: 10px 15px;margin: 0 0 0 -60px;border-radius: 4px;position: fixed;    top: 50%;left: 50%;width: 130px;text-align: center;'
  document.body.appendChild(m)
  setTimeout(() => {
    if (!document.body.contains(m))
      return
    const d = 0.5
    m.style.opacity = '0'
    setTimeout(() => {
      document.body.removeChild(m)
    }, d * 1000)
  }, duration)
}
```

```js [autolog]
const cssStr = `#autolog{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;pointer-events:none;width:100vw;height:100vh;position:fixed;left:0;top:0;z-index:9999999;cursor:pointer;transition:0.2s}#autolog span{pointer-events:auto;width:max-content;animation:fadein 0.4s;animation-delay:0s;border-radius:6px;padding:10px 20px;box-shadow:0 0 10px 6px rgba(0,0,0,0.1);margin:4px;transition:0.2s;z-index:9999999;font-size:14px;display:flex;align-items:center;justify-content:center;gap:4px;height:max-content}#autolog span.hide{opacity:0;pointer-events:none;transform:translateY(-10px);height:0;padding:0;margin:0}.autolog-warn{background-color:#fffaec;color:#e29505}.autolog-error{background-color:#fde7e7;color:#d93025}.autolog-info{background-color:#e6f7ff;color:#0e6eb8}.autolog-success{background-color:#e9f7e7;color:#1a9e2c}.autolog-{background-color:#fafafa;color:#333}@keyframes fadein{0%{opacity:0;transform:translateY(-10px)}100%{opacity:1;transform:translateY(0)}}`
const svgIcons = {
  warn: `<svg t="1713405237257" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2387" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><path d="M934.4 770.133333L605.866667 181.333333C586.666667 147.2 550.4 128 512 128c-38.4 0-74.666667 21.333333-93.866667 53.333333L89.6 770.133333c-19.2 34.133333-19.2 76.8 0 110.933334S145.066667 938.666667 183.466667 938.666667h657.066666c38.4 0 74.666667-21.333333 93.866667-57.6 19.2-34.133333 19.2-76.8 0-110.933334z m-55.466667 81.066667c-8.533333 14.933333-23.466667 23.466667-38.4 23.466667H183.466667c-14.933333 0-29.866667-8.533333-38.4-23.466667-8.533333-14.933333-8.533333-34.133333 0-49.066667L473.6 213.333333c8.533333-12.8 23.466667-21.333333 38.4-21.333333s29.866667 8.533333 38.4 21.333333l328.533333 588.8c8.533333 14.933333 8.533333 32 0 49.066667z" fill="#e29505" p-id="2388"></path><path d="M512 746.666667m-42.666667 0a42.666667 42.666667 0 1 0 85.333334 0 42.666667 42.666667 0 1 0-85.333334 0Z" fill="#e29505" p-id="2389"></path><path d="M512 629.333333c17.066667 0 32-14.933333 32-32v-192c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v192c0 17.066667 14.933333 32 32 32z" fill="#e29505" p-id="2390"></path></svg>`,
  error: `<svg t="1713405212725" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1744" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><path d="M512 74.666667C270.933333 74.666667 74.666667 270.933333 74.666667 512S270.933333 949.333333 512 949.333333 949.333333 753.066667 949.333333 512 753.066667 74.666667 512 74.666667z m0 810.666666c-204.8 0-373.333333-168.533333-373.333333-373.333333S307.2 138.666667 512 138.666667 885.333333 307.2 885.333333 512 716.8 885.333333 512 885.333333z" fill="#d93025" p-id="1745"></path><path d="M657.066667 360.533333c-12.8-12.8-32-12.8-44.8 0l-102.4 102.4-102.4-102.4c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l102.4 102.4-102.4 102.4c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466666 8.533334s17.066667-2.133333 23.466667-8.533334l102.4-102.4 102.4 102.4c6.4 6.4 14.933333 8.533333 23.466667 8.533334s17.066667-2.133333 23.466666-8.533334c12.8-12.8 12.8-32 0-44.8l-106.666666-100.266666 102.4-102.4c12.8-12.8 12.8-34.133333 0-46.933334z" fill="#d93025" p-id="1746"></path></svg>`,
  info: `<svg t="1713405208589" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1582" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><path d="M853.333333 138.666667H170.666667c-40.533333 0-74.666667 34.133333-74.666667 74.666666v512c0 40.533333 34.133333 74.666667 74.666667 74.666667h151.466666V917.333333c0 12.8 8.533333 25.6 19.2 29.866667 4.266667 2.133333 8.533333 2.133333 12.8 2.133333 8.533333 0 17.066667-4.266667 23.466667-10.666666l136.533333-138.666667H853.333333c40.533333 0 74.666667-34.133333 74.666667-74.666667V213.333333c0-40.533333-34.133333-74.666667-74.666667-74.666666z m10.666667 586.666666c0 6.4-4.266667 10.666667-10.666667 10.666667H501.333333c-8.533333 0-17.066667 4.266667-23.466666 10.666667l-89.6 93.866666V768c0-17.066667-14.933333-32-32-32H170.666667c-6.4 0-10.666667-4.266667-10.666667-10.666667V213.333333c0-6.4 4.266667-10.666667 10.666667-10.666666h682.666666c6.4 0 10.666667 4.266667 10.666667 10.666666v512z" fill="#0e6eb8" p-id="1583"></path><path d="M512 490.666667H298.666667c-17.066667 0-32 14.933333-32 32S281.6 554.666667 298.666667 554.666667h213.333333c17.066667 0 32-14.933333 32-32S529.066667 490.666667 512 490.666667zM672 341.333333H298.666667c-17.066667 0-32 14.933333-32 32S281.6 405.333333 298.666667 405.333333h373.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z" fill="#0e6eb8" p-id="1584"></path></svg>`,
  success: `<svg t="1713405224326" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2225" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><path d="M512 74.666667C270.933333 74.666667 74.666667 270.933333 74.666667 512S270.933333 949.333333 512 949.333333 949.333333 753.066667 949.333333 512 753.066667 74.666667 512 74.666667z m0 810.666666c-204.8 0-373.333333-168.533333-373.333333-373.333333S307.2 138.666667 512 138.666667 885.333333 307.2 885.333333 512 716.8 885.333333 512 885.333333z" fill="#1a9e2c" p-id="2226"></path><path d="M701.866667 381.866667L448 637.866667 322.133333 512c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l149.333334 149.333333c6.4 6.4 14.933333 8.533333 23.466666 8.533334s17.066667-2.133333 23.466667-8.533334l277.333333-277.333333c12.8-12.8 12.8-32 0-44.8-14.933333-12.8-36.266667-12.8-49.066666-2.133333z" fill="#1a9e2c" p-id="2227"></path></svg>`,
}
const autolog = {
  log(text, type = '', time = 2500) {
    if (typeof type === 'number') {
      time = type
      type = ''
    }
    const mainEl = getMainElement()
    let el = document.createElement('span')
    el.className = `autolog-${type}`
    el.innerHTML = svgIcons[type] + text
    mainEl.appendChild(el)
    setTimeout(() => {
      el.classList.add('hide')
    }, time - 500)
    setTimeout(() => {
      mainEl.removeChild(el)
      el = null
    }, time)
  },
}
function getMainElement() {
  let mainEl = document.querySelector('#autolog')
  if (!mainEl) {
    mainEl = document.createElement('div')
    mainEl.id = 'autolog'
    document.body.appendChild(mainEl)
    const style = document.createElement('style')
    style.innerHTML = cssStr
    document.head.insertBefore(style, document.head.firstChild)
  }
  return mainEl
}
export default autolog
```

:::

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

## 注入Cookie

```js
// 注入Cookie 设置不过期
document.cookie = 'name=value; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT;'
```

## 等待某个元素加载完成

```js
function waitForElm(selector) {
  return new Promise((resolve) => {
    const dom = document.querySelector(selector)
    if (dom)
      return resolve(dom)

    const observer = new MutationObserver((mutations) => {
      const elm = document.querySelector(selector)
      if (elm) {
        observer.disconnect()
        resolve(elm)
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })
  })
}
```

## 下载网络图片和接口返回的文件

::: code-group

```js [Fetch]
fetch(url).then(res => res.blob()).then((blob) => {
  const downloadElement = document.createElement('a')
  const href = window.URL.createObjectURL(blob)
  downloadElement.href = href
  downloadElement.download = '文件名'
  document.body.appendChild(downloadElement)
  downloadElement.click()
  document.body.removeChild(downloadElement)
  window.URL.revokeObjectURL(href)
})
```

```ts [Axios]
const res = await axios.get(url, { params: { kind: kind.value, fileName: row.name }, responseType: 'blob' }) as Blob
const blob = new Blob([res], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8' })
const downloadElement = document.createElement('a')
const href = window.URL.createObjectURL(blob)
downloadElement.href = href
downloadElement.download = '文件名'
document.body.appendChild(downloadElement)
downloadElement.click()
document.body.removeChild(downloadElement)
window.URL.revokeObjectURL(href)
```

:::

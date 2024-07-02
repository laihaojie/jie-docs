# NodeJS

<script setup>
import PLimit from './components/p-limit.vue'
</script>

## 个人Package

::: code-group

```bash [前端]
pnpm i @djie/eslint-config@latest @djie/vite-plugin-vue-inspector@latest @djie/unocss@latest -D
```

:::

## 递归删除node_modules以及子文件夹所有node_modules

::: code-group

```bash [Windows PowerShell]
Get-ChildItem -Path . -Recurse -Directory -Filter node_modules | ForEach-Object { Remove-Item -Recurse -Force $_.FullName }
```

```bash [Linux Mac]
find . -name "node_modules" -type d -prune -exec rm -rf '{}' +
```
:::

## __dirname

```js
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)
```

## 下载图片

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

## 控制台替换输出 （输出百分比进度）

```js
process.stdout.clearLine()
process.stdout.cursorTo(0)
process.stdout.write(`下载进度：${percent}%`)
```

## 把文件压缩成zip

::: code-group

```bash [npm]
npm i adm-zip
```

```bash [yarn]
yarn add adm-zip
```

```bash [pnpm]
pnpm i adm-zip
```

:::

### 压缩
```js
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import AdmZip from 'adm-zip'

function zipFolder() {
  const folderPath = path.resolve(process.cwd(), 'dist')
  // Example usage
  const outputPath = path.resolve(process.cwd(), 'dist.zip')

  return new Promise((resolve, reject) => {
    // Create a new zip instance
    const zip = new AdmZip()

    zip.addLocalFolder(folderPath)

    // Write the zip file
    zip.writeZip(outputPath, (err) => {
      if (err) {
        reject(err)
      }
      else {
        // 读取压缩后的文件 返回
        const data = fs.readFileSync(outputPath)
        resolve(data)
      }
    })
  })
}
```

### 解压
```js
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import AdmZip from 'adm-zip'

function unzipFile() {
  const zipPath = path.resolve(process.cwd(), 'dist.zip')
  const outputPath = path.resolve(process.cwd(), 'dist')

  return new Promise((resolve, reject) => {
    const zip = new AdmZip(zipPath)

    // 解压到指定目录 强制覆盖
    zip.extractAllTo(outputPath, true)

    resolve()
  })
}
```

## 限制并发请求

### 示例

<DemoContainer>
    <PLimit></PLimit>
</DemoContainer>

### 代码

<<< @/src/notes/part/components/p-limit.vue

# NodeJS

## 个人Package

::: code-group

```bash [前端]
pnpm i @djie/eslint-config@latest @djie/vite-plugin-vue-inspector@latest @djie/unocss@latest -D
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

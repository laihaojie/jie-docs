# 好用的Node包

## 检查package.json 中 dependencies版本更新

- [*npm-check*](https://www.npmjs.com/package/npm-check)

::: code-group

```bash [npm]
npm install -g npm-check
```

```bash [yarn]
yarn global add npm-check
```

```bash [pnpm]
pnpm add -g npm-check
```

:::

使用

```bash
npm-check -u
```

## 删除文件夹

- [*rimraf*](https://www.npmjs.com/package/rimraf)

::: code-group

```bash [npm]
npm install -g rimraf
```

```bash [yarn]
yarn global add rimraf
```

```bash [pnpm]
pnpm add -g rimraf
```

:::

使用

```bash

rimraf node_modules
```

## 监控文件变化

- [*nodemon*](https://www.npmjs.com/package/nodemon)

::: code-group

```bash [npm]
npm install -g nodemon
```

```bash [yarn]
yarn global add nodemon
```

```bash [pnpm]
pnpm add -g nodemon
```

:::

单个文件运行

```json
{
  "scripts": {
    "dev": "nodemon index.js"
    // .....
  }
}
```

使用配置文件运行 nodemon.json

```json
{
  "watch": [
    "app/**/*.ts",
    "./index.ts",
    "utils/**/*.ts"
  ],
  "ignore": ["node_modules"],
  "exec": "ts-node index.ts",
  "ext": "ts"
}
```

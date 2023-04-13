# 包管理器的限制


## 限制必须使用pnpm
- 新建script preinstall.js

```js
if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.warn(
    '\u001B[33mThis repository requires using pnpm as the package manager '
    + ' for scripts to work properly.\u001B[39m\n',
  )
  process.exit(1)
}
```

- 在package.json中添加

```json
{
  "scripts": {
    "preinstall": "node scripts/preinstall.js"
  }
}
```

## 限制必须使用yarn
- 新建.pnpmfile.cjs

```js
module.exports = {
  hooks: {
    readPackage(pkg, context) {
      console.warn(
        '\u001B[33mThis repository requires using yarn as the package manager '
        + ' for scripts to work properly.\u001B[39m\n',
      )
      process.exit(1)
    }
  }
}
```

- 在package.json中添加

```json
{
  "scripts": {
    "preinstall": "node scripts/preinstall.js"
  }
}
```
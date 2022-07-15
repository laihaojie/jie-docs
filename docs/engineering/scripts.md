# node脚本

- 初始化

```sh
npm init -y
```

- 在package.json中配置bin目录

```json
{
  "bin": {
    "my-cli": "./index.js"
  }
}
```

- 在index.js第一行声明脚本类型

```js
#!/usr/bin/env node
```

- 本地测试

```sh
npm link 
```

然后就可以在本地目录下执行my-cli了

- 删除本地链接

```sh
npm ls --global --depth 0     // 列出所有顶级依赖项
npm ls --global package_name // 检查是否安装了包
npm rm --global package_name  // 卸载全局链接的package_name包
```
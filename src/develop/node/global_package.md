# 全局安装的工具

```txt
@antfu/ni  包管理别名
degit  代码模板拉取
rimraf 或者 npkill  快速删除node_models文件
nrm  npm源管理
nvm  node版本管理
serve  起一个node服务
esno  node运行esm
npm-check-updates 检查packages.json中的依赖是否有更新

@djie/cli 个人脚手架工具
```

::: code-group

```bash [npm]
npm i -g pnpm @antfu/ni degit rimraf nrm serve esno @djie/cli npm-check-updates
```

```bash [yarn]
yarn global add pnpm @antfu/ni degit rimraf nrm serve esno @djie/cli npm-check-updates
```

```bash [pnpm]
pnpm i -g pnpm @antfu/ni degit rimraf nrm serve esno @djie/cli npm-check-updates
```

:::

## 离线安装全局package的方法
1. 在有网络的环境下安装全局package
2. 去到全局node_modules目录下，找到对应的package
3. 进入package目录，确保在package.json所在目录
4. 执行`npm i --offline`，把依赖安装到当前目录
5. 把当前目录打包成tar.gz文件
6. 复制离线环境下，解压tar.gz
7. 进入解压目录，执行`npm i -g .`，安装到全局目录

## 全局安装的package的目录
全局安装的package会在以下目录下：
- Windows: `%APPDATA%\npm\node_modules`
- macOS/Linux: `/usr/local/lib/node_modules` 或者 `/usr/lib/node_modules`

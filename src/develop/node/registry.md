# npm源

- 查看当前源

```sh
npm config get registry
```

- 换源

::: code-group

```sh [淘宝源]
npm config set registry https://registry.npmmirror.com/
```

```sh [NPM源]
npm config set registry https://registry.npmjs.org/
```

:::

## nrm管理npm源

- 安装

```sh
npm install -g nrm open@8.4.2
```

- 使用

```sh
# 查看当前源
nrm current

# 查看源列表
nrm ls

# 切换源
nrm use <name>

# 添加新源
nrm add <名称> <源地址>
nrm add tb https://registry.npmmirror.com/

# 删除源
nrm del <registry>

# 测试源响应速度
nrm test <name>
```

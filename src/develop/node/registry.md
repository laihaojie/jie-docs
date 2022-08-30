# npm源

- 查看当前源
```sh
npm config get registry
```

- 换淘宝源
```sh
npm config set registry https://registry.npm.taobao.org
```

## nrm管理npm源

- 安装
```sh
npm install -g nrm
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
nrm add tb https://registry.npm.taobao.org/

# 删除源
nrm del <registry>

# 测试源响应速度
nrm test <name>
```
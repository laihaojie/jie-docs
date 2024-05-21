# 内网穿透

## frp下载

[下载地址](https://github.com/fatedier/frp/releases)

- 下载后将解压后的文件上传到服务器，并配置好相关配置文件

## 修改服务器端服务配置

- 修改frps.ini 配置文件

```txt
[common]
bind_port = 7000 # 绑定服务器端口  如果端口没有开启，请先开启端口
vhost_http_port = 6125 # 暴露出去的端口  可以给nginx使用代理
```

## 启动进程运行服务器端服务

```sh
chmod +x frps
# 使用pm2 运行
pm2 start frps -- -c frps.ini
```

## 修改本地客户端服务配置

```txt
[common]
server_addr = 47.101.45.132 # 服务器地址
server_port = 7000 # 服务器端口

[web]
type = http # 客户端类型
local_port = 5173  # 本地端口
custom_domains = frp.laihaojie.com # 自定义域名
```

## 启动进程运行本地客户端服

```sh
frpc -c frpc.ini
```

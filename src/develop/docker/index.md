# 常用命令

## 启动命令
```bash
# 启动docker
systemctl start docker
# 停止docker
systemctl stop docker
# 重启docker
systemctl restart docker
# 查看docker状态
systemctl status docker
# 开机启动docker
systemctl enable docker
# 查看docker概要信息
docker info
# 查看docker总体帮助文档
docker --help
# 查看docker命令帮助文档
docker 具体命令 --help
```

## 镜像命令

```bash
# 列出所有镜像
docker images
# 搜索镜像
docker search 镜像名称 --limit 5
# 拉取镜像到本地
docker pull 镜像名称:[版本号]
# 查看镜像 容器 数据卷 所占用的空间
docker system df
# 删除镜像 -f [强制删除] 删除多个
docker rmi 镜像名字或者id  镜像名字或者id  镜像名字或者id 

```
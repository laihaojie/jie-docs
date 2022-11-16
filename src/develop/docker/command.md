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

## 容器命名
```bash
# 运行容器
docker run [选项] 镜像名字或者id [命令] [参数] 
docker run -d 镜像名字或者id # 后台运行 守护进程
选项：
-d 后台运行
-i 交互式运行
-t 终端运行
--name 容器名称
--restart=always 自动重启
--privileged=true 以特权模式运行
--net=host 使用主机网络
--net=none 不使用网络
--net=container:容器名或id 使用其他容器的网络
--net=bridge 桥接网络
--net=macvlan macvlan网络
--net=none 不使用网络
--net=overlay overlay网络
# 列出正在运行的容器 -a 列出所有容器
docker ps
# 退出
exit # 关闭容器 
ctrl + p + q # 退出容器 不关闭 
# 启动已经停止容器
docker start 容器id或者名字
# 重启容器
docker restart 容器id或者名字
# 停止容器
docker stop 容器id或者名字
# 删除容器 -f [强制删除] 删除多个
docker rm 容器id或者名字 容器id或者名字 容器id或者名字
# 查看容器日志
docker logs 容器id或者名字
# 查看容器进程
docker top 容器id或者名字
# 查看容器细节
docker inspect 容器id或者名字
# 进入容器
docker exec -it 容器id或者名字 /bin/bash 
docker attach 容器id或者名字 # 退出容器会关闭容器 基本上不用
# 容器拷贝文件到本地
docker cp 容器id或者名字:容器内文件路径 本地文件路径
# 本地拷贝文件到容器
docker cp 本地文件路径 容器id或者名字:容器内文件路径
# 查看容器端口映射
docker port 容器id或者名字
# 导出容器
docker export 容器id或者名字 > 容器.tar
# 导入容器
docker import 容器.tar 用户名/镜像名:版本号
```
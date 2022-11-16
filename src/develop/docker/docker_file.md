# DockerFile

## 保留字指令

- `FROM`：指定基础镜像
- `MAINTAINER`：指定镜像创建者
- `RUN`：执行命令
- `WORKDIR`：指定工作目录
- `USER`：指定运行容器的用户
- `ENV`：设置环境变量
- `ADD`：复制文件 + 解压
- `COPY`：复制文件
- `CMD`：指定容器启动时执行的命令
- `EXPOSE`：指定容器对外暴露的端口
- `VOLUME`：指定容器对外暴露的目录 容器卷
- `ENTRYPOINT`：指定容器启动时执行的命令
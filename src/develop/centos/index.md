# Centos7

## 命令
```bash
# 查看命令所在位置
which xxx
```

## 安装nginx
```bash
# 安装nginx 
yum install nginx
# 启动nginx
systemctl start nginx
# 重启nginx
systemctl restart nginx
# 停止nginx
systemctl stop nginx

## 配置文件路径
/etc/nginx/nginx.conf

# 关闭阿里云安装Centos后欢迎页
sudo fuser -k 80/tcp
```
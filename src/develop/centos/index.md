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
# /etc/nginx/nginx.conf

# 关闭阿里云安装Centos后欢迎页
lsof -i:80
sudo fuser -k 80/tcp
```

## 安装Mysql

```bash
yum install mysql
yum install mysql-devel

wget http://dev.mysql.com/get/mysql80-community-release-el7-5.noarch.rpm
rpm -ivh mysql80-community-release-el7-5.noarch.rpm
yum install mysql-community-server

systemctl restart mysqld

## 配置文件路径
# /etc/my.cnf

## 修改密码

# 1，先在配置文件里加上 skip-grant-tables 重启mysql后免密登陆进入mysql
# 2，查看当前认证方式以及用户，默认是 caching_sha2_password 认证，
select host, user, authentication_string, plugin from user;

# 3，如果2是默认认证方式，则修改为密码认证为 mysql_native_password先， 在配置文件末尾加上 default_authentication_plugin=mysql_native_password
# 后再次重启mysqld，免密登陆

# 4，不能直接修改密码，会报错。要先清空root密码：
update user set authentication_string='' where user='root';

flush privileges;

# 5，退出mysql,
# 删除/etc/my.cnf文件里的 skip-grant-tables ，再一次重启 mysql 服务，再次登陆的时候是空密码登陆：

mysql -u root -p

## 修改密码策略 只验证长度
set global validate_password.policy=LOW;

## 设置密码
alter user 'root'@'localhost' identified by 'youpassword';

## 设置允许远程访问
use mysql
update user set host='%' where user ='root';
flush privileges;
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%'WITH GRANT OPTION;
```

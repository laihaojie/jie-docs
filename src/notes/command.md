# 各种命令

## Windows命令
```sh
# windows删除DNS缓存 (注意要在cmd里面执行)
ipconfig /flushdns
```

## Linux命令
```sh
# 临时添加环境变量path 文件目录
export PATH=/bin:/usr/bin:$PATH


# 永久添加环境变量path 文件目录 (全局添加)
vim /etc/profile
# 编辑环境变量
export PATH=/bin:/usr/bin:$PATH
# 使环境变量生效
source /etc/profile

# 永久添加环境变量path 文件目录 (当前用户添加)
vim ~/.bash_profile
# 编辑环境变量
export PATH=/bin:/usr/bin:$PATH
# 使环境变量生效
source ~/.bash_profile



# 查看命令所在位置
whereis python

# 添加软连接
ln -s 现在的文件名 软连接名
ln -s /usr/bin/python3.6 /usr/bin/python
```
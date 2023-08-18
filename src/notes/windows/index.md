# 常用命令

```sh
# windows删除DNS缓存 (注意要在cmd里面执行)
ipconfig /flushdns
# 给其他内网ip发送消息弹窗
MSG /server:192.168.137.1 * "自定义消息"
# 查看电脑连接过得WIFI
netsh wlan show profile
# 获取链接过的WIFI密码
netsh wlan show profile name="WIFI名称" key=clear
# 查看当前电脑外网地址真实归属地（无法获取开启代理后的地址）
curl -L ip.tool.lu
# 检查磁盘是否有问题
chkdsk /f
# 检查系统文件是否有问题
sfc /scannow
# 定时关机 （3600秒后关机）
shutdown -s -t 3600
# 取消关机
shutdown -a
```

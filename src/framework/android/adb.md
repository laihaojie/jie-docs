# ADB

[命令文章](https://blog.csdn.net/Next_Second/article/details/73648754)
## 常用命令
```bash
# 列出所有设备
adb devices
# 安装APK
adb install xxx.apk
# 覆盖安装(保留缓存和数据)
adb install -r xxx.apk
# 卸载APK
adb uninstall package
# 卸载时保留数据和缓存目录
adb uninstall -k package

# 查看设备所有应用包名
adb shell pm list packages
# 列出指定包名对应的apk路径
adb shell pm path your.package.name
# 列出指定包名对应的apk路径
adb shell pm path your.package.name
# 清空指定包名对应的应用的数据和缓存文件
adb shell pm clear your.package.name


# 列出进程列表及其pid
adb shell ps
# 杀死指定pid的进程
adb shell kill pid
# 查看指定进程信息
adb shell ps -x pid

# 正常重启
adb reboot


# 将电脑文件复制到设备sd卡上
adb push 电脑文件路径 /sdcard
# 设备文件复制到电脑上
adb pull /sdcard/text.txt 电脑文件路径

# 删除
adb shell rm /sdcard/text.txt
# -f 强制删除文件不需要确认
# -r 递归删除文件夹内文件
# -i 删除文件前需要确认
```



## 连接手机
```bash
# 手机连接USB数据线 打开USB调试
# cmd环境执行
# 配置adb服务的端口号为 5555 会自动重启设备端的adb服务
adb tcpip 5555
adb connect 192.168.1.136
```

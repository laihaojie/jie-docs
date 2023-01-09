# ADB

## 常用命令
```bash
# 列出所有设备
adb devices
```

## 连接手机
```bash
# 手机连接USB数据线 打开USB调试
# cmd环境执行
# 配置adb服务的端口号为 5555 会自动重启设备端的adb服务
adb tcpip 5555
adb connect 192.168.1.136
```

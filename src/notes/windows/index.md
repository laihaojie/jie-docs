# 常见

## host文件位置

```bash
C:\Windows\System32\drivers\etc\hosts
```

## PowerShell profile 文件位置

```bash
C:\Windows\System32\WindowsPowerShell\v1.0\Microsoft.PowerShell_profile.ps1
```

## 杀死端口

```bash
# 查看端口占用
netstat -ano | findstr 8080

# 杀死进程
taskkill -PID 1234 -F
```

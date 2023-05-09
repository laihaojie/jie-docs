# Docker-Desktop

## windows进入docker子系统

```sh
# 进入docker子系统
wsl -d docker-desktop

# 退出docker子系统
exit
```

## Bug记录

```sh
## windows docker 安装 ES vm.max_map_count [65530]
# 进入docker子系统
wsl -d docker-desktop
# 修改配置
sysctl -w vm.max_map_count=262144
# 退出
exit
```
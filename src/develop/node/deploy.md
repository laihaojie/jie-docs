# 部署node服务

## 用pm2部署

## 安装
  
```bash
npm install -g pm2
```

## 添加配置文件

```json
{
  "apps": [
    {
      "name": "app_name",
      "script": "./dist/index.js",
      "instances": "1",
      "exec_mode": "cluster",
      "watch": true,
      "ignore_watch": [
        "node_modules",
        "app"
      ]
    }
  ]
}
```

## 配置说明

apps:json 结构，apps是一个数组，每一个数组成员就是对应一个pm2中运行的应用

- `name` 应用程序名称
- `cwd` 应用程序所在的目录
- `script` 应用程序的脚本路径
- `watch` 是否启用监控模式，默认是false。如果设置成true，当应用程序变动时，pm2会自动重载。这里也可以设置你要监控的文件或文件夹，如：

    ```json
    {
      "apps": [
        {
          "name": "app_name",
          "script": "./dist/index.js",
          "watch": [
            "./dist"
          ]
        }
      ]
    }
    ```

- `ignore_watch` 忽略监控的文件或文件夹，如：
- `autorestart` 启用/禁用应用程序崩溃或退出时自动重启
- `error_file` 自定义应用程序的错误日志文件
- `out_file` 自定义应用程序日志文件
- `pid_file` 自定义应用程序的pid文件
- `instances` 运行实例个数
- `min_uptime` 最小运行时间
- `cron_restart` 定时启动，解决重启能解决的问题

## 启动

```bash
pm2 start pm2config.json
```

## 启动一个进程并把它命名为 app_name

```bash
pm2 start app.js --name app_name
```

## 停止所有进程

```bash
pm2 stop all
```

## 停止指定的进程
  
```bash
pm2 stop app_name
```

## 重启所有进程

```bash
pm2 restart all  or  pm2 reload all
```

## 杀死全部进程
  
```bash
pm2 delete all
```

## 杀死指定的进程

```bash
pm2 delete 0
```

# sequelize

## 安装 

```sh
pnpm i mysql2 sequelize sequelize-typescript
pnpm i sequelize-auto -D
```

- sequelize-auto -h 数据库的IP地址 -d 数据库名 -u 用户名 -x 密码 -p 端口 -t 表名 -o 文件夹相对位置
- "sync": "sequelize-auto -h xxx.xxxx.xx -d dbName -u root -x ***** -p 3306  -o src/db/models -l ts",
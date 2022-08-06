# nodemon

## 安装
```sh
npm install -g nodemon
```


## 单个文件运行
```json
{
  "script": "nodemon index.js"
}
```

## 使用配置文件运行
```json
{
  "watch": [
    "app/**/*.ts",
    "./index.ts",
    "utils/**/*.ts"
  ],
  "ignore": ["node_modules"],
  "exec": "ts-node index.ts",
  "ext": "ts"
}
```
# 部署web项目

```text
name: CI
on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: 16.x

      # 安装pnpm
      - name: Install pnpm
        uses: pnpm/action-setup@v2.2.2
        with:
          version: 7.3.0

      # 安装依赖
      - name: Install dependencies
        run: pnpm install

      # 打包
      - name: Build
        run: pnpm build

      # 打包到阿里云oss
      - uses: manyuanrong/setup-ossutil@v2.0
        with:
          endpoint: oss-cn-shanghai.aliyuncs.com
          access-key-id: ${{ secrets.ACCESSKEYID }}
          access-key-secret: ${{ secrets.ACCESSKEYSECRET }}
      - run: ossutil cp -rf ./dist/ oss://admin-laihaojie-top/

      - name: Send success message
        if: success()
        # 工作流成功钩子
        run: xxx

      - name: Send failed message
        if: failure()
        # 工作流失败钩子
        run: xxxx
```

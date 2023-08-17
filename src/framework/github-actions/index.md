# 部署web项目

## 部署到阿里云OSS

```txt
name: Deploy to Aliyun OSS

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

## 部署到亚马逊S3

```txt
name: Deploy to Amazon S3
on:
  push:
    branches:
      - main

jobs:
  build:
   runs-on: ubuntu-latest
    strategy:
      matrix:
        node: [16.x]
        name: [name]
      fail-fast: false

    steps:
      - uses: actions/checkout@v3

      - name: Install pnpm
        uses: pnpm/action-setup@v2

      - name: Set node version to ${{ matrix.node }}
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node }}

      - name: Install
        run: pnpm i

      - name: Build ${{ matrix.name }}
        run: pnpm build

      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ${{ secrets.AWS_REGION }}

      - name: Deploy static site to S3 bucket
        run: aws s3 sync ./dist/ s3://${{ secrets.AWS_S3_BUCKET }} --delete


      - name: Send success message
        if: success()
        # 工作流成功钩子
        run: xxx

      - name: Send failed message
        if: failure()
        # 工作流失败钩子
        run: xxxx
```

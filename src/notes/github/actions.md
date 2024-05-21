# 部署

## 部署Web到阿里云OSS

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

## 部署Web到亚马逊S3

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

## 部署node服务到阿里云ESC

```txt
name: Deploy
on: push

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy

        # 复制代码到服务器
        uses: cross-the-world/scp-pipeline@master
        env:
          WELCOME: "ssh scp ssh pipelines"
          LASTSSH: "Doing something after copying"
        with:
          host: ${{ secrets.TG_HOST }}
          user: ${{ secrets.TG_USER }}
          pass: ${{ secrets.TG_PASS }}
          connect_timeout: 10s
          local: "./*"
          remote: /app/nodejs/admin

      # 登录到远程服务器并安装依赖
      - name: Deploy2
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.TG_HOST }}
          username: ${{ secrets.TG_USER }}
          password: ${{ secrets.TG_PASS }}
          script: |
            cd /app/nodejs/admin
            pnpm install && pnpm build

  send:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Send success message
        if: success()
        # 工作流成功钩子
        run: xxx

      - name: Send failed message
        if: failure()
        # 工作流失败钩子
        run: xxxx
```

## 部署node服务到亚马逊EC2

```txt
name: Deploy
on:
  push:
    branches:
      - main

env:
  failed_url: https://api-lmapp.lingman.tech/api/Public/ppublishfail
  success_url: https://api-lmapp.lingman.tech/api/Public/ppublish

jobs:
  Copy:
    name: Copy
    runs-on: ubuntu-latest
    environment: production

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Copy to my EC2 instance
        uses: easingthemes/ssh-deploy@v2.1.5
        env:
          SSH_PRIVATE_KEY: ${{ secrets.EC2_SSH_KEY }}
          SOURCE: ./
          REMOTE_HOST: ${{ secrets.REMOTE_HOST }}
          REMOTE_USER: ${{ secrets.REMOTE_USER }}
          TARGET: ${{ secrets.TARGET }}

  Deploy:
    needs: Copy
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      - name: Deploy in EC2
        env:
          SSH_PRIVATE_KEY: ${{ secrets.EC2_SSH_KEY  }}
          REMOTE_HOST: ${{ secrets.REMOTE_HOST }}
          REMOTE_USER: ${{ secrets.REMOTE_USER }}

        run: |
          echo "$SSH_PRIVATE_KEY" > private_key && chmod 600 private_key
          ssh -o StrictHostKeyChecking=no -i private_key ${REMOTE_USER}@${REMOTE_HOST} '

            #Now we have got the access of EC2 and we will start the deploy .
            cd ${{ secrets.TARGET }} &&
            pnpm i &&
            pnpm build &&
            pm2 restart api-ball
          '

      - name: Send success message
        if: success()
        # 工作流成功钩子
        run: xxx

      - name: Send failed message
        if: failure()
        # 工作流失败钩子
        run: xxxx
```

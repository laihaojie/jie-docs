# 部署node服务

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

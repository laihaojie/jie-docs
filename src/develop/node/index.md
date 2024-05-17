# 在linux上安装node

## 安装node

- 第一步

```shell
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
```

- 第二步

```bash
sudo yum install -y nodejs
```

- 1. 第三步检查是否安装成功

```bash
node -V
```

## nvm管理node版本

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

[nvm](https://github.com/nvm-sh/nvm/blob/master/README.md#installing-and-updating)

## 下载压缩包安装

[官网地址](https://nodejs.org/en)

- 解压缩 并且重命名为node

```shell
tar -xvf node-v20.0.0-linux-x64.tar.xz
mv node-v20.0.0-linux-x64 node20
```

- 配置环境变量

```shell
vim ~/.bashrc
```

- 添加

```shell
export PATH=/home/xxx/node20/bin:$PATH
```

- 使配置生效

```shell
source ~/.bashrc
```

- 检查是否安装成功

```shell
node -v
npm -v
```

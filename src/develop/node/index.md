# 在linux上安装node

## 安装node

- 第一步

```shell
curl -fsSL https://rpm.nodesource.com/setup_16.x | sudo bash -
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
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

[nvm](https://github.com/nvm-sh/nvm/blob/master/README.md#installing-and-updating)
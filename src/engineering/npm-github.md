# npm安装github仓库包

```sh
# 直接安装
npm install https://github.com/laihaojie/repo_name.git
npm install git+https://github.com/laihaojie/repo_name.git

# 通过github用户名和仓库名安装
npm install laihaojie/repo_name
npm install github:laihaojie/repo_name

# 通过ssh key 安装
npm install git+ssh://git@github.com:laihaojie/private_repo_name.git

# 安装指定版本
npm install https://github.com/laihaojie/private_repo_name.git#2.0
npm install git+https://github.com/laihaojie/private_repo_name.git#2.0
```

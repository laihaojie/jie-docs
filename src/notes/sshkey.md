# 生成ssh key

```sh
ssh-keygen -t rsa -C "xxxx@xx.com"
# 按照提示输入回车
# 输入密码
```

`id_rsa.pub`是公钥
`id_rsa` 是私钥

## 在github中添加公钥

- 查看公钥

```sh
cat ~/.ssh/id_rsa.pub
```

- 然后添加到github的ssh key中

## 测试公钥是否有用

```sh
ssh -T git@github.com
输入密码验证
```

若返回 Hi XXX! You’ve successfully authenticated, but Gitee.com does not provide shell access. 内容，则证明添加成功。

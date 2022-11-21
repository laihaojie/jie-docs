# 配置

## 配置 Git

```bash
# 配置全局用户
git config --global user.name "用户名" 
git config --global user.email "git账号"
# 配置别名
git config --global alias.co checkout
git config --global alias.ss status
git config --global alias.cm commit
git config --global alias.br branch
git config --global alias.rg reflog
# 这里只是美化 log 的输出，实际使用时可以在 git lg 后面加命令参数，如： git lg -10 显示最近10条提交
git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
# 删除全局配置
git config --global --unset alias.xxx
git config --global --unset user.xxx

# 查看全局配置
git config user.name
git config alias.xxx

```

# Git Hooks

## 设置hooks目录

```bash
# 设置当前项目的hooks目录
git config core.hooksPath <新的目录>
git config core.hooksPath .githooks

# 设置全局的hooks目录
git config --global core.hooksPath ~/.githooks
```
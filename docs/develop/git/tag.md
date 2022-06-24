# Git tag操作

## 查询commit的hash值

```bash
git log --pretty=oneline --abbrev-commit
```

## 创建tag

xxxx代表的是查询commit的hash值

```bash
git tag v1.0.0 xxxx    
```

## 查看tag

```bash
git tag
```

## 提交tag远程仓库

```bash
git push --tags
```

## 删除本地tag

```bash
git tag -d v1.0.0
```

## 删除远程tag

```bash
git push origin :refs/tags/v1.0.0
```

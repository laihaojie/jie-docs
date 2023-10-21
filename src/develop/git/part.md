<!-- 片段 -->

## 删除文件

```txt
# 删除暂存区和工作区的文件
git rm filename  
# 只删除暂存区的文件，不会删除工作区的文件
git rm --cached filename 
```

## 修改文件名称

```txt
# 修改暂存区和工作区的文件名称
# git mv a.txt b.txt
git mv oldName newName
```

## 清除git缓存

```sh
# 不删除物理文件，仅将该文件从缓存中删除
git rm --cached -r "文件路径 or ."

# 不仅将该文件从缓存中删除，还会将物理文件删除（不会回收到垃圾桶）
git rm --f "文件路径 or ."
```

## 打包代码成zip压缩包

```sh
# git archive master --prefix='admin/' --format=zip > master.zip
git archive branchName --prefix='projectName/' --format=zip > projectName.zip
```

## 子分支同步到主分支最后一次提交并合并代码

```sh
# 先切换到子分支
git checkout 子分支名称
# 子分支同步到主分支最后一次提交
git rebase 主分支名称

# 切换到主分支
git checkout 主分支名称
# 主分支合并子分支代码
git merge 子分支名称
```

## 合并不同仓库的代码 不相关的历史

```sh
# 关联远程仓库
git remote add upstream <original-repo-url>
# 检查是否关联成功
git remote -v
# 拉取远程仓库的代码
git fetch upstream

# 切换到需要合并的分支
git checkout <branch-name>

# 合并远程仓库的代码
git merge --allow-unrelated-histories <branch-name>
```

## 把代码临时保存到暂存区

```sh
# 临时将工作区文件的修改保存至堆栈中
git stash save "本次提交说明"

# 查看保存的文件
git stash list

# 将之前保存至堆栈中的文件取出来
git stash pop
```

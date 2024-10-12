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

## 删除当前仓库的所有提交记录

```sh
# 删除所有提交记录
git checkout --orphan new_branch
git add -A
git commit -am "删除所有提交记录"
git branch -D main
git branch -m main

git push -f origin main
# 如果远端分支是受保护的，需要去除保护. 完成后再添加保护
```

## 修改已经commit但还没push的描述信息

假如你上次commit描述写错了你可以用这条命令重新修改描述信息

```bash
git commit --amend --only -m 'xxxxxxx'
```

## 修改最近commit提交信息(描述信息 + 文件)

### 注意如果当前分支是受保护的，需要先去除保护，修改完成后再添加保护

**1. 如果当前历史记录最后一条是你想修改的可以直接用**
```bash
git commit --amend

git push --force
```

**2. 如果想修改历史记录的某一条**
```bash
# 1.启动交互式 rebase： 运行以下命令，HEAD~n 中的 n 是你想回溯的提交数。如果你要修改的是第 5 条提交，则使用 HEAD~5：
git rebase -i HEAD~2

# 2.找到你要修改的提交： 这会打开一个编辑器，显示最近 n 次提交。每条提交前都有一个动作，比如 pick。找到你想修改的提交，把它前面的 pick 改为 edit。

# 3.修改提交信息： 保存并关闭编辑器后，Git 会暂停在你指定的提交。接下来你可以使用以下命令来修改该提交的提交信息：
git commit --amend
# 这会再次打开编辑器，你可以修改提交信息。修改完成后，保存并关闭。

# 4.继续 rebase： 修改完成后，运行以下命令继续 rebase 操作：
git rebase --continue

# 5.强制推送到远程仓库： 如果你的代码已经推送到远程仓库，你需要强制推送修改：
git push --force
```

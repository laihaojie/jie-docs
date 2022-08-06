# Git 常用命令

## 初始化项目，关联远程仓库

```text
# 初始化一个Git仓库
$ git init 
# 关联远程仓库
$ git remote add <name> <git-repo-url>  
# 例如
$ git remote add origin https://github.com/xxxxxx
```

## clone 远程仓库

```text
# 新建好远程仓库，然后 clone 到本地
$ git clone <git-repo-url>

# 将远程仓库下载到（当前 git bash 启动位置下面的）指定文件中，如果没有会自动生成
$ git clone <git-repo-url> <project-name>
```

## 命令

```bash
# 查看工作区和暂存区的状态
$ git status 
# 将工作区的文件提交到暂存区
$ git add .  
# 提交到本地仓库
$ git commit -m "本次提交说明"
# add和commit的合并，便捷写法（未追踪的文件无法直接提交到暂存区/本地仓库）
$ git commit -am "本次提交说明"  
# 将本地分支和远程分支进行关联
$ git push -u origin branchName 
# 将本地仓库的文件推送到远程分支
$ git push
# 拉取远程分支的代码
$ git pull origin branchName 
# 合并分支
$ git merge branchName 
# 查看本地拥有哪些分支
$ git branch
# 查看所有分支（包括远程分支和本地分支）
$ git branch -a 
# 切换分支
$ git checkout branchName 
# 临时将工作区文件的修改保存至堆栈中
$ git stash
# 将之前保存至堆栈中的文件取出来
$ git stash pop
```

## branch

```bash
# 查看本地分支
$ git branch | git branch -l 
# 查看远程分支
$ git branch -r 
# 查看所有分支（本地分支+远程分支）
$ git branch -a 
# 查看所有分支并带上最新的提交信息
$ git branch -av 
# 查看本地分支对应的远程分支
$ git branch -vv 

# 新建分支
# 在别的分支下新建一个分支，新分支会复制当前分支的内容
# 注意：如果当前分支有修改，但是没有提交到仓库，此时修改的内容是不会被复制到新分支的
$ git branch branchname 
# 切换分支(切换分支时，本地工作区，仓库都会相应切换到对应分支的内容)
$ git checkout branchname 
# 创建一个 aaa 分支，并切换到该分支 （新建分支和切换分支的简写）
$ git checkout -b aaa 
# 可以看做是基于 master 分支创建一个 aaa 分支，并切换到该分支
$ git checkout -b aaa master

# 新建一条空分支（详情请看问题列表）
$ git checkout --orphan emptyBranchName
$ git rm -rf . 

# 删除本地分支,会阻止删除包含未合并更改的分支
$ git brnach -d branchname 
# 强制删除一个本地分支，即使包含未合并更改的分支
$ git branch -D branchname  
# 删除远程分支
# 推送一个空分支到远程分支，其实就相当于删除远程分支
$ git push origin  :远程分支名
# 或者
$ git push origin --delete 远程分支名 

# 修改当前分支名
$ git branch -m branchname 

```

## 修改已经commit但还没push的描述信息

假如你上次commit描述写错了你可以用这条命令重新修改描述信息

```bash
git commit --amend --only -m 'xxxxxxx'
```

## 版本切换 & 重设 & 撤销

### checkout相关

```bash
# 恢复暂存区的指定文件到工作区
$ git checkout <filename>
# 恢复暂存区的所有文件到工作区
$ git checkout .

# 回滚到最近的一次提交
# 如果修改某些文件后，没有提交到暂存区，此时的回滚是回滚到上一次提交
# 如果是已经将修改的文件提交到仓库了，这时再用这个命令回滚无效
# 因为回滚到的是之前自己修改后提交的版本
$ git checkout HEAD 
$ git checkout HEAD -- filename
# 回滚到最近一次提交的上一个版本
$ git checkout HEAD^ 
# 回滚到最近一次提交的上2个版本
$ git checkout HEAD^^ 

# 切换分支，在这里也可以看做是回到项目「当前」状态的方式
$ git checkout <当前你正在使用的分支>
# 切换到某个指定的 commit 版本
$ git checkout <commit_id>
# 切换指定 tag 
$ git checkout <tag>
```

### reset相关

```text
# 从暂存区撤销特定文件，但不改变工作区。它会取消这个文件的暂存，而不覆盖任何更改
$ git reset <fileName>
# 重置暂存区最近的一次提交，但工作区的文件不变
$ git reset 
# 等价于 
$ git reset HEAD （默认）
# 重置暂存区与工作区，回退到最近一次提交的版本内容
$ git reset --hard 
# 重置暂存区与工作区，回退到最近一次提交的上一个版本
$ git reset --hard HEAD^ 

# 将当前分支的指针指向为指定 commit（该提交之后的提交都会被移除），同时重置暂存区，但工作区不变
$ git reset <commit>
# 等价于 
$ git reset --mixed  <commit>

# 将当前分支的指针指向为指定 commit（该提交之后的提交都会被移除），但保持暂存区和工作区不变
$ git reset --soft  <commit>
# 将当前分支的指针指向为指定 commit（该提交之后的提交都会被移除），同时重置暂存区、工作区
$ git reset --hard  <commit>
```

### revert相关

```text
# 生成一个撤销最近的一次提交的新提交
$ git revert HEAD 
# 生成一个撤销最近一次提交的上一次提交的新提交
$ git revert HEAD^ 
# 生成一个撤销最近一次提交的上两次提交的新提交
$ git revert HEAD^^ 
# 生成一个撤销最近一次提交的上n次提交的新提交
$ git revert HEAD~num 

# 生成一个撤销指定提交版本的新提交
$ git revert <commit_id>
# 生成一个撤销指定提交版本的新提交，执行时不打开默认编辑器，直接使用 Git 自动生成的提交信息
$ git revert <commit_id> --no-edit
```

## 删除文件

```text
# 删除暂存区和工作区的文件
$ git rm filename  
# 只删除暂存区的文件，不会删除工作区的文件
$ git rm --cached filename 
```

## 清除git缓存

```sh
# 不删除物理文件，仅将该文件从缓存中删除
git rm --cached "文件路径 or ."

# 不仅将该文件从缓存中删除，还会将物理文件删除（不会回收到垃圾桶）
git rm --f "文件路径 or ."
```
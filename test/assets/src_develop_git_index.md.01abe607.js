import{_ as s,h as n,i as a,R as l}from"./chunks/framework.7e07dabb.js";const D=JSON.parse('{"title":"常用命令","description":"","frontmatter":{},"headers":[],"relativePath":"src/develop/git/index.md","filePath":"src/develop/git/index.md","lastUpdated":1692932276000}'),p={name:"src/develop/git/index.md"},e=l(`<h1 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h1><h2 id="初始化项目-关联远程仓库" tabindex="-1">初始化项目，关联远程仓库 <a class="header-anchor" href="#初始化项目-关联远程仓库" aria-label="Permalink to &quot;初始化项目，关联远程仓库&quot;">​</a></h2><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 初始化一个Git仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">git init -b main</span></span>
<span class="line"><span style="color:#A6ACCD;"># 关联远程仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">git remote add &lt;name&gt; &lt;git-repo-url&gt;  </span></span>
<span class="line"><span style="color:#A6ACCD;"># 例如</span></span>
<span class="line"><span style="color:#A6ACCD;">git remote add origin https://github.com/xxxxxx</span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看当前远端仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">git remote -v </span></span>
<span class="line"><span style="color:#A6ACCD;"># 切换远程仓库url</span></span>
<span class="line"><span style="color:#A6ACCD;">git remote set-url origin URL</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="clone-远程仓库" tabindex="-1">clone 远程仓库 <a class="header-anchor" href="#clone-远程仓库" aria-label="Permalink to &quot;clone 远程仓库&quot;">​</a></h2><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 新建好远程仓库，然后 clone 到本地</span></span>
<span class="line"><span style="color:#A6ACCD;">git clone &lt;git-repo-url&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 将远程仓库下载到（当前 git bash 启动位置下面的）指定文件中，如果没有会自动生成</span></span>
<span class="line"><span style="color:#A6ACCD;">git clone &lt;git-repo-url&gt; &lt;project-name&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-label="Permalink to &quot;命令&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看工作区和暂存区的状态</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">status</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 将工作区的文件提交到暂存区</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 提交到本地仓库</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">本次提交说明</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># add和commit的合并，便捷写法（未追踪的文件无法直接提交到暂存区/本地仓库）</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-am</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">本次提交说明</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 将本地分支和远程分支进行关联</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-u</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branchName</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 将本地仓库的文件推送到远程分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 拉取远程分支的代码</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branchName</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 合并分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">merge</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branchName</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看本地拥有哪些分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看所有分支（包括远程分支和本地分支）</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-a</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 切换分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branchName</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 临时将工作区文件的修改保存至堆栈中</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stash</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 将之前保存至堆栈中的文件取出来</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pop</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="branch" tabindex="-1">branch <a class="header-anchor" href="#branch" aria-label="Permalink to &quot;branch&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看本地分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-l</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看远程分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-r</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看所有分支（本地分支+远程分支）</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-a</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看所有分支并带上最新的提交信息</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-av</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看本地分支对应的远程分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-vv</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#查看已经合并的分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--merged</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看没有合并的分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--no-merged</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 新建分支</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 在别的分支下新建一个分支，新分支会复制当前分支的内容</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 注意：如果当前分支有修改，但是没有提交到仓库，此时修改的内容是不会被复制到新分支的</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branchname</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 切换分支(切换分支时，本地工作区，仓库都会相应切换到对应分支的内容)</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branchname</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 创建一个 aaa 分支，并切换到该分支 （新建分支和切换分支的简写）</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-b</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">aaa</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 可以看做是基于 master 分支创建一个 aaa 分支，并切换到该分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-b</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">aaa</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 新建一条空分支（详情请看问题列表）</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--orphan</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">emptyBranchName</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-rf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除本地分支,会阻止删除包含未合并更改的分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">brnach</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branchname</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 强制删除一个本地分支，即使包含未合并更改的分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branchname</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除远程分支</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 推送一个空分支到远程分支，其实就相当于删除远程分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">:远程分支名</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 或者</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--delete</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">远程分支名</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 修改当前分支名</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branchname</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><h2 id="修改已经commit但还没push的描述信息" tabindex="-1">修改已经commit但还没push的描述信息 <a class="header-anchor" href="#修改已经commit但还没push的描述信息" aria-label="Permalink to &quot;修改已经commit但还没push的描述信息&quot;">​</a></h2><p>假如你上次commit描述写错了你可以用这条命令重新修改描述信息</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--amend</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--only</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxxxxxx</span><span style="color:#89DDFF;">&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="修改最近commit提交信息-描述信息-文件" tabindex="-1">修改最近commit提交信息(描述信息 + 文件) <a class="header-anchor" href="#修改最近commit提交信息-描述信息-文件" aria-label="Permalink to &quot;修改最近commit提交信息(描述信息 + 文件)&quot;">​</a></h2><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git commit --amend</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="版本切换-重设-撤销" tabindex="-1">版本切换 &amp; 重设 &amp; 撤销 <a class="header-anchor" href="#版本切换-重设-撤销" aria-label="Permalink to &quot;版本切换 &amp; 重设 &amp; 撤销&quot;">​</a></h2><h3 id="checkout相关" tabindex="-1">checkout相关 <a class="header-anchor" href="#checkout相关" aria-label="Permalink to &quot;checkout相关&quot;">​</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 恢复暂存区的指定文件到工作区</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">filenam</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 恢复暂存区的所有文件到工作区</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 回滚到最近的一次提交</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 如果修改某些文件后，没有提交到暂存区，此时的回滚是回滚到上一次提交</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 如果是已经将修改的文件提交到仓库了，这时再用这个命令回滚无效</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 因为回滚到的是之前自己修改后提交的版本</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HEAD</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HEAD</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">filename</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 回滚到最近一次提交的上一个版本</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HEAD^</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 回滚到最近一次提交的上2个版本</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HEAD^^</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 切换分支，在这里也可以看做是回到项目「当前」状态的方式</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">当前你正在使用的分</span><span style="color:#A6ACCD;">支</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 切换到某个指定的 commit 版本</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">commit_i</span><span style="color:#A6ACCD;">d</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 切换指定 tag </span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">ta</span><span style="color:#A6ACCD;">g</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="reset相关" tabindex="-1">reset相关 <a class="header-anchor" href="#reset相关" aria-label="Permalink to &quot;reset相关&quot;">​</a></h3><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 从暂存区撤销特定文件，但不改变工作区。它会取消这个文件的暂存，而不覆盖任何更改</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset &lt;fileName&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># 重置暂存区最近的一次提交，但工作区的文件不变</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset </span></span>
<span class="line"><span style="color:#A6ACCD;"># 等价于 </span></span>
<span class="line"><span style="color:#A6ACCD;">git reset HEAD （默认）</span></span>
<span class="line"><span style="color:#A6ACCD;"># 重置暂存区与工作区，回退到最近一次提交的版本内容</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset --hard </span></span>
<span class="line"><span style="color:#A6ACCD;"># 重置暂存区与工作区，回退到最近一次提交的上一个版本</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset --hard HEAD^ </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 将当前分支的指针指向为指定 commit（该提交之后的提交都会被移除），同时重置暂存区，但工作区不变</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset &lt;commit&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># 等价于 </span></span>
<span class="line"><span style="color:#A6ACCD;">git reset --mixed  &lt;commit&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 将当前分支的指针指向为指定 commit（该提交之后的提交都会被移除），但保持暂存区和工作区不变</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset --soft  &lt;commit&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># 将当前分支的指针指向为指定 commit（该提交之后的提交都会被移除），同时重置暂存区、工作区</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset --hard  &lt;commit&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="revert相关" tabindex="-1">revert相关 <a class="header-anchor" href="#revert相关" aria-label="Permalink to &quot;revert相关&quot;">​</a></h3><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 生成一个撤销最近的一次提交的新提交</span></span>
<span class="line"><span style="color:#A6ACCD;">git revert HEAD </span></span>
<span class="line"><span style="color:#A6ACCD;"># 生成一个撤销最近一次提交的上一次提交的新提交</span></span>
<span class="line"><span style="color:#A6ACCD;">git revert HEAD^ </span></span>
<span class="line"><span style="color:#A6ACCD;"># 生成一个撤销最近一次提交的上两次提交的新提交</span></span>
<span class="line"><span style="color:#A6ACCD;">git revert HEAD^^ </span></span>
<span class="line"><span style="color:#A6ACCD;"># 生成一个撤销最近一次提交的上n次提交的新提交</span></span>
<span class="line"><span style="color:#A6ACCD;">git revert HEAD~num </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 生成一个撤销指定提交版本的新提交</span></span>
<span class="line"><span style="color:#A6ACCD;">git revert &lt;commit_id&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># 生成一个撤销指定提交版本的新提交，执行时不打开默认编辑器，直接使用 Git 自动生成的提交信息</span></span>
<span class="line"><span style="color:#A6ACCD;">git revert &lt;commit_id&gt; --no-edit</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="删除文件" tabindex="-1">删除文件 <a class="header-anchor" href="#删除文件" aria-label="Permalink to &quot;删除文件&quot;">​</a></h2><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 删除暂存区和工作区的文件</span></span>
<span class="line"><span style="color:#A6ACCD;">git rm filename  </span></span>
<span class="line"><span style="color:#A6ACCD;"># 只删除暂存区的文件，不会删除工作区的文件</span></span>
<span class="line"><span style="color:#A6ACCD;">git rm --cached filename</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="修改文件名称" tabindex="-1">修改文件名称 <a class="header-anchor" href="#修改文件名称" aria-label="Permalink to &quot;修改文件名称&quot;">​</a></h2><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 修改暂存区和工作区的文件名称</span></span>
<span class="line"><span style="color:#A6ACCD;"># git mv a.txt b.txt</span></span>
<span class="line"><span style="color:#A6ACCD;">git mv oldName newName</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="清除git缓存" tabindex="-1">清除git缓存 <a class="header-anchor" href="#清除git缓存" aria-label="Permalink to &quot;清除git缓存&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 不删除物理文件，仅将该文件从缓存中删除</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--cached</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-r</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">文件路径 or .</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 不仅将该文件从缓存中删除，还会将物理文件删除（不会回收到垃圾桶）</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--f</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">文件路径 or .</span><span style="color:#89DDFF;">&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="打包代码成zip压缩包" tabindex="-1">打包代码成zip压缩包 <a class="header-anchor" href="#打包代码成zip压缩包" aria-label="Permalink to &quot;打包代码成zip压缩包&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># git archive master --prefix=&#39;admin/&#39; --format=zip &gt; master.zip</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">archive</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branchName</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--prefix=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">projectName/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--format=zip</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">projectName.zip</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="子分支同步到主分支最后一次提交并合并代码" tabindex="-1">子分支同步到主分支最后一次提交并合并代码 <a class="header-anchor" href="#子分支同步到主分支最后一次提交并合并代码" aria-label="Permalink to &quot;子分支同步到主分支最后一次提交并合并代码&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 先切换到子分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">子分支名称</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 子分支同步到主分支最后一次提交</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rebase</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">主分支名称</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 切换到主分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">主分支名称</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 主分支合并子分支代码</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">merge</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">子分支名称</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,31),o=[e];function r(c,t,i,C,y,b){return n(),a("div",null,o)}const m=s(p,[["render",r]]);export{D as __pageData,m as default};
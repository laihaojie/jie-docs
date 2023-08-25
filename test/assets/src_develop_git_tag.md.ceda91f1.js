import{_ as a,h as s,i as e,R as n}from"./chunks/framework.7e07dabb.js";const b=JSON.parse('{"title":"tag操作","description":"","frontmatter":{},"headers":[],"relativePath":"src/develop/git/tag.md","filePath":"src/develop/git/tag.md","lastUpdated":1692932276000}'),l={name:"src/develop/git/tag.md"},t=n('<h1 id="tag操作" tabindex="-1">tag操作 <a class="header-anchor" href="#tag操作" aria-label="Permalink to &quot;tag操作&quot;">​</a></h1><h2 id="查询commit的hash值" tabindex="-1">查询commit的hash值 <a class="header-anchor" href="#查询commit的hash值" aria-label="Permalink to &quot;查询commit的hash值&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--pretty=oneline</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--abbrev-commit</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="创建tag" tabindex="-1">创建tag <a class="header-anchor" href="#创建tag" aria-label="Permalink to &quot;创建tag&quot;">​</a></h2><p>xxxx代表的是查询commit的hash值</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tag</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">v1.0.0</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxxx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="查看tag" tabindex="-1">查看tag <a class="header-anchor" href="#查看tag" aria-label="Permalink to &quot;查看tag&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tag</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="提交tag远程仓库" tabindex="-1">提交tag远程仓库 <a class="header-anchor" href="#提交tag远程仓库" aria-label="Permalink to &quot;提交tag远程仓库&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--tags</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="删除本地tag" tabindex="-1">删除本地tag <a class="header-anchor" href="#删除本地tag" aria-label="Permalink to &quot;删除本地tag&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tag</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">v1.0.0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="删除远程tag" tabindex="-1">删除远程tag <a class="header-anchor" href="#删除远程tag" aria-label="Permalink to &quot;删除远程tag&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">:refs/tags/v1.0.0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',14),o=[t];function p(r,i,c,d,h,g){return s(),e("div",null,o)}const m=a(l,[["render",p]]);export{b as __pageData,m as default};

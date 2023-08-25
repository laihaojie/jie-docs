import{_ as s,h as n,i as a,R as l}from"./chunks/framework.7e07dabb.js";const b=JSON.parse('{"title":"常用命令","description":"","frontmatter":{},"headers":[],"relativePath":"src/notes/windows/index.md","filePath":"src/notes/windows/index.md","lastUpdated":1692932276000}'),p={name:"src/notes/windows/index.md"},e=l(`<h1 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h1><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># windows删除DNS缓存 (注意要在cmd里面执行)</span></span>
<span class="line"><span style="color:#FFCB6B;">ipconfig</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/flushdns</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 给其他内网ip发送消息弹窗</span></span>
<span class="line"><span style="color:#FFCB6B;">MSG</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/server:192.168.137.1</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">自定义消息</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看电脑连接过得WIFI</span></span>
<span class="line"><span style="color:#FFCB6B;">netsh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wlan</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">show</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">profile</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 获取链接过的WIFI密码</span></span>
<span class="line"><span style="color:#FFCB6B;">netsh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wlan</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">show</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">profile</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">name=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">WIFI名称</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">key=clear</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看当前电脑外网地址真实归属地（无法获取开启代理后的地址）</span></span>
<span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-L</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ip.tool.lu</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 检查磁盘是否有问题</span></span>
<span class="line"><span style="color:#FFCB6B;">chkdsk</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/f</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 检查系统文件是否有问题</span></span>
<span class="line"><span style="color:#FFCB6B;">sfc</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/scannow</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 定时关机 （3600秒后关机）</span></span>
<span class="line"><span style="color:#FFCB6B;">shutdown</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3600</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 取消关机</span></span>
<span class="line"><span style="color:#FFCB6B;">shutdown</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-a</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,2),o=[e];function t(c,r,i,C,y,D){return n(),a("div",null,o)}const d=s(p,[["render",t]]);export{b as __pageData,d as default};

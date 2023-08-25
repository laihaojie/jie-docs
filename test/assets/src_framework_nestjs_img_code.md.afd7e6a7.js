import{_ as s,h as a,i as n,R as l}from"./chunks/framework.7e07dabb.js";const F=JSON.parse('{"title":"图片验证码","description":"","frontmatter":{},"headers":[],"relativePath":"src/framework/nestjs/img_code.md","filePath":"src/framework/nestjs/img_code.md","lastUpdated":1692932276000}'),p={name:"src/framework/nestjs/img_code.md"},o=l(`<h1 id="图片验证码" tabindex="-1">图片验证码 <a class="header-anchor" href="#图片验证码" aria-label="Permalink to &quot;图片验证码&quot;">​</a></h1><ul><li>安装</li></ul><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">svg-captcha</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">svg-to-dataurl</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> svgCaptcha </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">svg-captcha</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> svgToDataURL </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">svg-to-dataurl</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> captcha </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> svgCaptcha</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">inverse</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 翻转颜色</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">fontSize</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">38</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 字体大小</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">noise</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 噪声线条数</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">150</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 宽度</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">40</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 高度</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 验证码长度</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">charPreset</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0123456789</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// background: &#39;white&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">ignoreChars</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0o1i</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 验证码字符中排除 0o1i</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 生成的随机验证码</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> code </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> captcha</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">text</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 生成的svg标签</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> svg </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> captcha</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// svg转base64 生成的图片</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> img </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">svgToDataURL</span><span style="color:#A6ACCD;">(captcha</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,4),e=[o];function t(c,r,y,i,D,C){return a(),n("div",null,e)}const b=s(p,[["render",t]]);export{F as __pageData,b as default};

import{_ as s,h as n,i as a,R as p}from"./chunks/framework.7e07dabb.js";const m=JSON.parse('{"title":"部署node服务","description":"","frontmatter":{},"headers":[],"relativePath":"src/framework/github-actions/node.md","filePath":"src/framework/github-actions/node.md","lastUpdated":1692932276000}'),l={name:"src/framework/github-actions/node.md"},e=p(`<h1 id="部署node服务" tabindex="-1">部署node服务 <a class="header-anchor" href="#部署node服务" aria-label="Permalink to &quot;部署node服务&quot;">​</a></h1><h2 id="部署node服务到阿里云esc" tabindex="-1">部署node服务到阿里云ESC <a class="header-anchor" href="#部署node服务到阿里云esc" aria-label="Permalink to &quot;部署node服务到阿里云ESC&quot;">​</a></h2><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">name: Deploy</span></span>
<span class="line"><span style="color:#A6ACCD;">on: push</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">jobs:</span></span>
<span class="line"><span style="color:#A6ACCD;">  build:</span></span>
<span class="line"><span style="color:#A6ACCD;">    runs-on: ubuntu-latest</span></span>
<span class="line"><span style="color:#A6ACCD;">    steps:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - uses: actions/checkout@v2</span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Deploy</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        # 复制代码到服务器</span></span>
<span class="line"><span style="color:#A6ACCD;">        uses: cross-the-world/scp-pipeline@master</span></span>
<span class="line"><span style="color:#A6ACCD;">        env:</span></span>
<span class="line"><span style="color:#A6ACCD;">          WELCOME: &quot;ssh scp ssh pipelines&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">          LASTSSH: &quot;Doing something after copying&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        with:</span></span>
<span class="line"><span style="color:#A6ACCD;">          host: \${{ secrets.TG_HOST }}</span></span>
<span class="line"><span style="color:#A6ACCD;">          user: \${{ secrets.TG_USER }}</span></span>
<span class="line"><span style="color:#A6ACCD;">          pass: \${{ secrets.TG_PASS }}</span></span>
<span class="line"><span style="color:#A6ACCD;">          connect_timeout: 10s</span></span>
<span class="line"><span style="color:#A6ACCD;">          local: &quot;./*&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">          remote: /app/nodejs/admin</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      # 登录到远程服务器并安装依赖</span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Deploy2</span></span>
<span class="line"><span style="color:#A6ACCD;">        uses: appleboy/ssh-action@master</span></span>
<span class="line"><span style="color:#A6ACCD;">        with:</span></span>
<span class="line"><span style="color:#A6ACCD;">          host: \${{ secrets.TG_HOST }}</span></span>
<span class="line"><span style="color:#A6ACCD;">          username: \${{ secrets.TG_USER }}</span></span>
<span class="line"><span style="color:#A6ACCD;">          password: \${{ secrets.TG_PASS }}</span></span>
<span class="line"><span style="color:#A6ACCD;">          script: |</span></span>
<span class="line"><span style="color:#A6ACCD;">            cd /app/nodejs/admin</span></span>
<span class="line"><span style="color:#A6ACCD;">            pnpm install &amp;&amp; pnpm build</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  send:</span></span>
<span class="line"><span style="color:#A6ACCD;">    needs: build</span></span>
<span class="line"><span style="color:#A6ACCD;">    runs-on: ubuntu-latest</span></span>
<span class="line"><span style="color:#A6ACCD;">    steps:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Send success message</span></span>
<span class="line"><span style="color:#A6ACCD;">        if: success()</span></span>
<span class="line"><span style="color:#A6ACCD;">        # 工作流成功钩子</span></span>
<span class="line"><span style="color:#A6ACCD;">        run: xxx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Send failed message</span></span>
<span class="line"><span style="color:#A6ACCD;">        if: failure()</span></span>
<span class="line"><span style="color:#A6ACCD;">        # 工作流失败钩子</span></span>
<span class="line"><span style="color:#A6ACCD;">        run: xxxx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><h2 id="部署node服务到亚马逊ec2" tabindex="-1">部署node服务到亚马逊EC2 <a class="header-anchor" href="#部署node服务到亚马逊ec2" aria-label="Permalink to &quot;部署node服务到亚马逊EC2&quot;">​</a></h2><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">name: Deploy</span></span>
<span class="line"><span style="color:#A6ACCD;">on:</span></span>
<span class="line"><span style="color:#A6ACCD;">  push:</span></span>
<span class="line"><span style="color:#A6ACCD;">    branches:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - main</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">env:</span></span>
<span class="line"><span style="color:#A6ACCD;">  failed_url: https://api-lmapp.lingman.tech/api/Public/ppublishfail</span></span>
<span class="line"><span style="color:#A6ACCD;">  success_url: https://api-lmapp.lingman.tech/api/Public/ppublish</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">jobs:</span></span>
<span class="line"><span style="color:#A6ACCD;">  Copy:</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: Copy</span></span>
<span class="line"><span style="color:#A6ACCD;">    runs-on: ubuntu-latest</span></span>
<span class="line"><span style="color:#A6ACCD;">    environment: production</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    steps:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Checkout</span></span>
<span class="line"><span style="color:#A6ACCD;">        uses: actions/checkout@v3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Copy to my EC2 instance</span></span>
<span class="line"><span style="color:#A6ACCD;">        uses: easingthemes/ssh-deploy@v2.1.5</span></span>
<span class="line"><span style="color:#A6ACCD;">        env:</span></span>
<span class="line"><span style="color:#A6ACCD;">          SSH_PRIVATE_KEY: \${{ secrets.EC2_SSH_KEY }}</span></span>
<span class="line"><span style="color:#A6ACCD;">          SOURCE: ./</span></span>
<span class="line"><span style="color:#A6ACCD;">          REMOTE_HOST: \${{ secrets.REMOTE_HOST }}</span></span>
<span class="line"><span style="color:#A6ACCD;">          REMOTE_USER: \${{ secrets.REMOTE_USER }}</span></span>
<span class="line"><span style="color:#A6ACCD;">          TARGET: \${{ secrets.TARGET }}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  Deploy:</span></span>
<span class="line"><span style="color:#A6ACCD;">    needs: Copy</span></span>
<span class="line"><span style="color:#A6ACCD;">    runs-on: ubuntu-latest</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    steps:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - uses: actions/checkout@v2</span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Deploy in EC2</span></span>
<span class="line"><span style="color:#A6ACCD;">        env:</span></span>
<span class="line"><span style="color:#A6ACCD;">          SSH_PRIVATE_KEY: \${{ secrets.EC2_SSH_KEY  }}</span></span>
<span class="line"><span style="color:#A6ACCD;">          REMOTE_HOST: \${{ secrets.REMOTE_HOST }}</span></span>
<span class="line"><span style="color:#A6ACCD;">          REMOTE_USER: \${{ secrets.REMOTE_USER }}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        run: |</span></span>
<span class="line"><span style="color:#A6ACCD;">          echo &quot;$SSH_PRIVATE_KEY&quot; &gt; private_key &amp;&amp; chmod 600 private_key</span></span>
<span class="line"><span style="color:#A6ACCD;">          ssh -o StrictHostKeyChecking=no -i private_key \${REMOTE_USER}@\${REMOTE_HOST} &#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            #Now we have got the access of EC2 and we will start the deploy .</span></span>
<span class="line"><span style="color:#A6ACCD;">            cd \${{ secrets.TARGET }} &amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">            pnpm i &amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">            pnpm build &amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">            pm2 restart api-ball</span></span>
<span class="line"><span style="color:#A6ACCD;">          &#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Send success message</span></span>
<span class="line"><span style="color:#A6ACCD;">        if: success()</span></span>
<span class="line"><span style="color:#A6ACCD;">        # 工作流成功钩子</span></span>
<span class="line"><span style="color:#A6ACCD;">        run: xxx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Send failed message</span></span>
<span class="line"><span style="color:#A6ACCD;">        if: failure()</span></span>
<span class="line"><span style="color:#A6ACCD;">        # 工作流失败钩子</span></span>
<span class="line"><span style="color:#A6ACCD;">        run: xxxx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br></div></div>`,5),c=[e];function r(o,i,t,b,C,A){return n(),a("div",null,c)}const y=s(l,[["render",r]]);export{m as __pageData,y as default};

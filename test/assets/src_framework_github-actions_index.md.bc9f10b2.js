import{_ as s,h as n,i as a,R as l}from"./chunks/framework.7e07dabb.js";const m=JSON.parse('{"title":"部署web项目","description":"","frontmatter":{},"headers":[],"relativePath":"src/framework/github-actions/index.md","filePath":"src/framework/github-actions/index.md","lastUpdated":1692932276000}'),p={name:"src/framework/github-actions/index.md"},e=l(`<h1 id="部署web项目" tabindex="-1">部署web项目 <a class="header-anchor" href="#部署web项目" aria-label="Permalink to &quot;部署web项目&quot;">​</a></h1><h2 id="部署到阿里云oss" tabindex="-1">部署到阿里云OSS <a class="header-anchor" href="#部署到阿里云oss" aria-label="Permalink to &quot;部署到阿里云OSS&quot;">​</a></h2><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">name: Deploy to Aliyun OSS</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">on:</span></span>
<span class="line"><span style="color:#A6ACCD;">  push:</span></span>
<span class="line"><span style="color:#A6ACCD;">    branches:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - main</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">jobs:</span></span>
<span class="line"><span style="color:#A6ACCD;">  build:</span></span>
<span class="line"><span style="color:#A6ACCD;">    runs-on: ubuntu-latest</span></span>
<span class="line"><span style="color:#A6ACCD;">    steps:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - uses: actions/checkout@v2</span></span>
<span class="line"><span style="color:#A6ACCD;">      - uses: actions/setup-node@v2</span></span>
<span class="line"><span style="color:#A6ACCD;">        with:</span></span>
<span class="line"><span style="color:#A6ACCD;">          node-version: 16.x</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      # 安装pnpm</span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Install pnpm</span></span>
<span class="line"><span style="color:#A6ACCD;">        uses: pnpm/action-setup@v2.2.2</span></span>
<span class="line"><span style="color:#A6ACCD;">        with:</span></span>
<span class="line"><span style="color:#A6ACCD;">          version: 7.3.0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      # 安装依赖</span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Install dependencies</span></span>
<span class="line"><span style="color:#A6ACCD;">        run: pnpm install</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      # 打包</span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Build</span></span>
<span class="line"><span style="color:#A6ACCD;">        run: pnpm build</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      # 打包到阿里云oss</span></span>
<span class="line"><span style="color:#A6ACCD;">      - uses: manyuanrong/setup-ossutil@v2.0</span></span>
<span class="line"><span style="color:#A6ACCD;">        with:</span></span>
<span class="line"><span style="color:#A6ACCD;">          endpoint: oss-cn-shanghai.aliyuncs.com</span></span>
<span class="line"><span style="color:#A6ACCD;">          access-key-id: \${{ secrets.ACCESSKEYID }}</span></span>
<span class="line"><span style="color:#A6ACCD;">          access-key-secret: \${{ secrets.ACCESSKEYSECRET }}</span></span>
<span class="line"><span style="color:#A6ACCD;">      - run: ossutil cp -rf ./dist/ oss://admin-laihaojie-top/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Send success message</span></span>
<span class="line"><span style="color:#A6ACCD;">        if: success()</span></span>
<span class="line"><span style="color:#A6ACCD;">        # 工作流成功钩子</span></span>
<span class="line"><span style="color:#A6ACCD;">        run: xxx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Send failed message</span></span>
<span class="line"><span style="color:#A6ACCD;">        if: failure()</span></span>
<span class="line"><span style="color:#A6ACCD;">        # 工作流失败钩子</span></span>
<span class="line"><span style="color:#A6ACCD;">        run: xxxx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><h2 id="部署到亚马逊s3" tabindex="-1">部署到亚马逊S3 <a class="header-anchor" href="#部署到亚马逊s3" aria-label="Permalink to &quot;部署到亚马逊S3&quot;">​</a></h2><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">name: Deploy to Amazon S3</span></span>
<span class="line"><span style="color:#A6ACCD;">on:</span></span>
<span class="line"><span style="color:#A6ACCD;">  push:</span></span>
<span class="line"><span style="color:#A6ACCD;">    branches:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - main</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">jobs:</span></span>
<span class="line"><span style="color:#A6ACCD;">  build:</span></span>
<span class="line"><span style="color:#A6ACCD;">   runs-on: ubuntu-latest</span></span>
<span class="line"><span style="color:#A6ACCD;">    strategy:</span></span>
<span class="line"><span style="color:#A6ACCD;">      matrix:</span></span>
<span class="line"><span style="color:#A6ACCD;">        node: [16.x]</span></span>
<span class="line"><span style="color:#A6ACCD;">        name: [name]</span></span>
<span class="line"><span style="color:#A6ACCD;">      fail-fast: false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    steps:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - uses: actions/checkout@v3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Install pnpm</span></span>
<span class="line"><span style="color:#A6ACCD;">        uses: pnpm/action-setup@v2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Set node version to \${{ matrix.node }}</span></span>
<span class="line"><span style="color:#A6ACCD;">        uses: actions/setup-node@v3</span></span>
<span class="line"><span style="color:#A6ACCD;">        with:</span></span>
<span class="line"><span style="color:#A6ACCD;">          node-version: \${{ matrix.node }}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Install</span></span>
<span class="line"><span style="color:#A6ACCD;">        run: pnpm i</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Build \${{ matrix.name }}</span></span>
<span class="line"><span style="color:#A6ACCD;">        run: pnpm build</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Configure AWS Credentials</span></span>
<span class="line"><span style="color:#A6ACCD;">        uses: aws-actions/configure-aws-credentials@v1</span></span>
<span class="line"><span style="color:#A6ACCD;">        with:</span></span>
<span class="line"><span style="color:#A6ACCD;">          aws-access-key-id: \${{ secrets.AWS_ACCESS_KEY_ID }}</span></span>
<span class="line"><span style="color:#A6ACCD;">          aws-secret-access-key: \${{ secrets.AWS_SECRET_ACCESS_KEY }}</span></span>
<span class="line"><span style="color:#A6ACCD;">          aws-region: \${{ secrets.AWS_REGION }}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Deploy static site to S3 bucket</span></span>
<span class="line"><span style="color:#A6ACCD;">        run: aws s3 sync ./dist/ s3://\${{ secrets.AWS_S3_BUCKET }} --delete</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Send success message</span></span>
<span class="line"><span style="color:#A6ACCD;">        if: success()</span></span>
<span class="line"><span style="color:#A6ACCD;">        # 工作流成功钩子</span></span>
<span class="line"><span style="color:#A6ACCD;">        run: xxx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Send failed message</span></span>
<span class="line"><span style="color:#A6ACCD;">        if: failure()</span></span>
<span class="line"><span style="color:#A6ACCD;">        # 工作流失败钩子</span></span>
<span class="line"><span style="color:#A6ACCD;">        run: xxxx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div>`,5),r=[e];function c(i,o,t,b,C,A){return n(),a("div",null,r)}const y=s(p,[["render",c]]);export{m as __pageData,y as default};

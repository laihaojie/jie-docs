import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '阿杰',
  lang: 'zh-CN',
  lastUpdated: true,
  themeConfig: {
    nav: [
      {
        text: '工具软件',
        items: [
          {
            items: [
              { text: 'VsCode', link: '/utils/vscode/' },
            ],
          },
        ],
      },
      {
        text: '框架文档',
        items: [
          {
            items: [
              { text: 'Github Actions', link: '/framework/github-actions/' },
              { text: 'Uniapp', link: '/framework/uniapp/' },
              { text: 'React-Native', link: '/framework/react-native/' },
              { text: 'Android', link: '/framework/android/' },
              { text: 'MongoDB', link: '/framework/mongodb/' },
            ],
          },
        ],
      },
      {
        text: '前端工程化',
        link: '/engineering/',
      },
      {
        text: '开发环境',
        items: [
          {
            items: [
              { text: 'Node 相关', link: '/develop/node/' },
              { text: 'Git 相关', link: '/develop/git/' },
              { text: '键盘侠', link: '/develop/vim/' },
            ],
          },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' },
        ],
      },
      { text: '随手记', link: '/notes/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/laihaojie' },
    ],
    sidebar: {
      '/utils/': [
        {
          text: 'VsCode',
          collapsible: true,
          items: [
            { text: '插件', link: '/utils/vscode/' },
            { text: '配置文件', link: '/utils/vscode/config' },
          ],
        },
      ],
      '/engineering/': [
        {
          text: '前端工程化',
          collapsible: true,
          items: [
            { text: 'eslint', link: '/engineering/' },
            { text: '代码提交检查', link: '/engineering/pre-commit' },
            { text: '命令行交互', link: '/engineering/prompts' },
            { text: 'node脚本', link: '/engineering/scripts' },
            { text: '包管理器限制', link: '/engineering/package-manager' },
          ],
        },
      ],
      '/framework/': [
        {
          text: 'Github Actions',
          collapsible: true,
          items: [
            { text: '部署web', link: '/framework/github-actions/' },
            { text: '部署node服务', link: '/framework/github-actions/node' },
          ],
        },
        {
          text: 'uniapp',
          collapsible: true,
          items: [
            { text: '升级依赖', link: '/framework/uniapp/' },
          ],
        },
        {
          text: 'React-Native',
          collapsible: true,
          items: [
            { text: '添加', link: '/framework/react-native/' },
            { text: '自定义package', link: '/framework/react-native/package' },
            { text: 'icon图标', link: '/framework/react-native/icons' },
            { text: 'webview', link: '/framework/react-native/webview' },
            { text: '消息推送', link: '/framework/react-native/message-push' },
          ],
        },
        {
          text: 'Android',
          collapsible: true,
          items: [
            { text: '签名文件', link: '/framework/android/' },
          ],
        },
        {
          text: 'MongoDB',
          collapsible: true,
          items: [
            { text: '安装', link: '/framework/mongodb/' },
            { text: '在nestjs中使用', link: '/framework/mongodb/nestjs' },
            { text: '增删改查', link: '/framework/mongodb/crud' },
          ],
        },
      ],
      '/develop/': [
        {
          text: 'Node 相关',
          collapsible: true,
          items: [
            { text: '安装', link: '/develop/node/' },
            { text: '部署', link: '/develop/node/deploy' },
            { text: '发布package', link: '/develop/node/publish' },
            { text: 'nodemon', link: '/develop/node/nodemon' },
          ],
        },
        {
          text: 'Git 相关',
          collapsible: true,
          items: [
            { text: '常用命令', link: '/develop/git/' },
            { text: '配置', link: '/develop/git/config' },
            { text: 'tag', link: '/develop/git/tag' },
          ],
        },
        {
          text: '键盘侠',
          collapsible: true,
          items: [
            { text: 'vim', link: '/develop/vim/' },
            { text: 'vscode', link: '/develop/vim/vscode' },
            { text: '游乐场', link: '/develop/vim/playground' },
          ],
        },
      ],
      '/notes/': [
        {
          text: '随手记',
          collapsible: true,
          items: [
            { text: '正则', link: '/notes/' },
            { text: 'css', link: '/notes/css' },
            { text: '各种命令', link: '/notes/command' },
            { text: 'npmrc', link: '/notes/npmrc' },
            { text: 'ssh-key', link: '/notes/sshkey' },
            { text: '位运算', link: '/notes/bti' },
            { text: 'markdown语法', link: '/notes/markdown' },
          ],
        },
      ],
    },
    algolia: {
      appId: 'S9J30WHNBE',
      apiKey: '39b330225e68321010adc394aacf069e',
      indexName: 'laihaojie',
      // debug: false,
    },
    lastUpdatedText: '上次更新于',
  },
})

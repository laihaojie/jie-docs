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
              { text: 'VsCode', link: '/src/utils/vscode/' },
            ],
          },
        ],
      },
      {
        text: '框架文档',
        items: [
          {
            items: [
              { text: 'Github Actions', link: '/src/framework/github-actions/' },
              { text: 'Uniapp', link: '/src/framework/uniapp/' },
              { text: 'React-Native', link: '/src/framework/react-native/' },
              { text: 'Android', link: '/src/framework/android/' },
              { text: 'MongoDB', link: '/src/framework/mongodb/' },
            ],
          },
        ],
      },
      {
        text: '前端工程化',
        link: '/src/engineering/',
      },
      {
        text: '开发环境',
        items: [
          {
            items: [
              { text: 'Node 相关', link: '/src/develop/node/' },
              { text: 'Git 相关', link: '/src/develop/git/' },
              { text: '键盘侠', link: '/src/develop/vim/' },
            ],
          },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' },
        ],
      },
      { text: '随手记', link: '/src/notes/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/laihaojie' },
    ],
    sidebar: {
      '/src/utils/': [
        {
          text: 'VsCode',
          collapsible: true,
          items: [
            { text: '插件', link: '/src/utils/vscode/' },
            { text: '配置文件', link: '/src/utils/vscode/config' },
          ],
        },
      ],
      '/src/engineering/': [
        {
          text: '前端工程化',
          collapsible: true,
          items: [
            { text: 'eslint', link: '/src/engineering/' },
            { text: '代码提交检查', link: '/src/engineering/pre-commit' },
            { text: '命令行交互', link: '/src/engineering/prompts' },
            { text: 'node脚本', link: '/src/engineering/scripts' },
            { text: '包管理器限制', link: '/src/engineering/package-manager' },
          ],
        },
      ],
      '/src/framework/': [
        {
          text: 'Github Actions',
          collapsible: true,
          items: [
            { text: '部署web', link: '/src/framework/github-actions/' },
            { text: '部署node服务', link: '/src/framework/github-actions/node' },
          ],
        },
        {
          text: 'uniapp',
          collapsible: true,
          items: [
            { text: '升级依赖', link: '/src/framework/uniapp/' },
          ],
        },
        {
          text: 'React-Native',
          collapsible: true,
          items: [
            { text: '添加', link: '/src/framework/react-native/' },
            { text: '自定义package', link: '/src/framework/react-native/package' },
            { text: 'icon图标', link: '/src/framework/react-native/icons' },
            { text: 'webview', link: '/src/framework/react-native/webview' },
            { text: '消息推送', link: '/src/framework/react-native/message-push' },
          ],
        },
        {
          text: 'Android',
          collapsible: true,
          items: [
            { text: '签名文件', link: '/src/framework/android/' },
          ],
        },
        {
          text: 'MongoDB',
          collapsible: true,
          items: [
            { text: '安装', link: '/src/framework/mongodb/' },
            { text: '在nestjs中使用', link: '/src/framework/mongodb/nestjs' },
            { text: '增删改查', link: '/src/framework/mongodb/crud' },
          ],
        },
      ],
      '/src/develop/': [
        {
          text: 'Node 相关',
          collapsible: true,
          items: [
            { text: '安装', link: '/src/develop/node/' },
            { text: '部署', link: '/src/develop/node/deploy' },
            { text: '发布package', link: '/src/develop/node/publish' },
            { text: 'nodemon', link: '/src/develop/node/nodemon' },
          ],
        },
        {
          text: 'Git 相关',
          collapsible: true,
          items: [
            { text: '常用命令', link: '/src/develop/git/' },
            { text: '配置', link: '/src/develop/git/config' },
            { text: 'tag', link: '/src/develop/git/tag' },
          ],
        },
        {
          text: '键盘侠',
          collapsible: true,
          items: [
            { text: 'vim', link: '/src/develop/vim/' },
            { text: 'vscode', link: '/src/develop/vim/vscode' },
            { text: '游乐场', link: '/src/develop/vim/playground' },
          ],
        },
      ],
      '/src/notes/': [
        {
          text: '随手记',
          collapsible: true,
          items: [
            { text: '正则', link: '/src/notes/' },
            { text: 'css', link: '/src/notes/css' },
            { text: '各种命令', link: '/src/notes/command' },
            { text: 'npmrc', link: '/src/notes/npmrc' },
            { text: 'ssh-key', link: '/src/notes/sshkey' },
            { text: '位运算', link: '/src/notes/bti' },
            { text: 'markdown语法', link: '/src/notes/markdown' },
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

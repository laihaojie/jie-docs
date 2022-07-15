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
              { text: 'Vim', link: '/develop/vim/' },
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
            { text: 'pre-commit', link: '/engineering/pre-commit' },
            { text: '命令行交互', link: '/engineering/prompts' },
            { text: '脚本', link: '/engineering/scripts' },
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
      ],
      '/develop/': [
        {
          text: 'Node 相关',
          collapsible: true,
          items: [
            { text: '安装', link: '/develop/node/' },
            { text: '部署', link: '/develop/node/deploy' },
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
          text: 'Vim',
          collapsible: true,
          items: [
            { text: '快捷键', link: '/develop/vim/' },
            { text: '游乐场', link: '/develop/vim/playground' },
          ],
        },
      ],
      '/notes/': [
        {
          text: '随手记',
          collapsible: true,
          items: [
            { text: '正则', link: '/notes/rege' },
            // { text: '正则', link: '/notes/rege' },
          ],
        },
      ],
    },
    algolia: {
      appId: 'MB68ZSCNEB',
      apiKey: '9dec19c7b65aed3f52186ca638798b08',
      indexName: 'docs_laihaojie',
      // debug: false,
    },
    lastUpdatedText: '上次更新于',
  },
})

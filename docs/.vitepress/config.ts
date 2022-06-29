import { defineConfigWithTheme } from 'vitepress'

export default defineConfigWithTheme({
  title: '阿杰',
  themeConfig: {
    nav: [
      {
        text: '工具软件',
        link: '/utils/',
      },
      { text: '框架文档', link: '/framework/' },
      { text: '插件扩展', link: '/extension/' },
      {
        text: '开发环境',
        items: [
          {
            items: [
              { text: 'Node 相关', link: '/develop/node/' },
              { text: 'Git 相关', link: '/develop/git/' },
              { text: 'Github Actions', link: '/develop/git/' },
            ],
          },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' },
        ],
      },
      { text: '视频教程', link: '/video/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/laihaojie' },
    ],
    sidebar: {
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
          text: 'Github Actions',
          collapsible: true,
          items: [
            { text: '部署web项目', link: '/develop/github-actions/' },
            { text: '部署node服务', link: '/develop/github-actions/node' },
          ],
        },
      ],
    },
  },

})

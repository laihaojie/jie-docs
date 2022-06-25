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
            text: 'Git 相关',
            items: [
              { text: '常用命令', link: '/develop/git/' },
              { text: 'tag操作', link: '/develop/git/tag' },
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
          text: 'Git 相关',
          collapsible: true,
          items: [
            { text: '常用命令', link: '/develop/git/' },
            { text: 'tag', link: '/develop/git/tag' },
          ],
        },
      ],
    },
  },

})

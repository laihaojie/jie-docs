import { defineConfigWithTheme } from 'vitepress'

export default defineConfigWithTheme({
  title: '阿杰',
  themeConfig: {
    nav: [
      { text: '工具软件', link: '/utils/' },
      { text: '框架文档', link: '/framework/' },
      { text: '插件扩展', link: '/extension/' },
      { text: '开发环境', link: '/develop/' },
      { text: '视频教程', link: '/video/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/laihaojie' },
    ],
    sidebar: {
      '/utils/': [
        {
          text: '工具软件',
          collapsible: true,
          items: [
            // { text: 'Index', link: '/utils/' },
            { text: 'A', link: '/utils/a' },
            { text: 'B', link: '/utils/b' },
          ],
        },
      ],
    },
  },

})

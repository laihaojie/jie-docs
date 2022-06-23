import { defineConfigWithTheme } from 'vitepress'

export default defineConfigWithTheme({
  title: '阿杰',
  themeConfig: {
    nav: [
      { text: '工具软件', link: '/guide' },
      { text: '框架文档', link: '/guide' },
      { text: '插件扩展', link: '/guide' },
      { text: '开发环境', link: '/guide' },
      { text: '视频教程', link: '/guide' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/laihaojie' },
    ],
  },

})

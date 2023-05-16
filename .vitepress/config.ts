import { defineConfig } from 'vitepress'
import { getMds } from '../scripts'

export default defineConfig({
  title: '阿杰',
  lang: 'zh-CN',
  lastUpdated: true,
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css', crossorigin: '' }],
    ['script', {}, `
        // var _hmt = _hmt || []; 
        // (function() { 
        // var hm = document.createElement(“script”); 
        // hm.src = “//hm.baidu.com/hm.js?XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX”; 
        // var s = document.getElementsByTagName(“script”)[0]; 
        // s.parentNode.insertBefore(hm, s); 
        // })(); 
        console.log('%c阿杰', 'font-size: 50px; color: #ff0000;');
        // const token = localStorage.getItem('token');
        // console.log(token);
    `],
  ],
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/laihaojie/jie-docs/edit/main/:path',
      text: '在GitHub编辑',
    },
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
              { text: 'Flutter', link: '/src/framework/flutter/' },
              { text: 'React Native', link: '/src/framework/react-native/' },
              { text: 'Android', link: '/src/framework/android/' },
              { text: 'NestJS', link: '/src/framework/nestjs/' },
              { text: 'Electron', link: '/src/framework/electron/' },
              { text: 'MongoDB', link: '/src/framework/mongodb/' },
            ],
          },
        ],
      },
      {
        text: '前端技术',
        items: [
          {
            items: [
              { text: 'UnoCss', link: '/src/frontend/unocss/' },
            ],
          },
        ],
      },
      {
        text: '前端工程化',
        link: '/src/engineering/',
      },
      {
        text: '环境搭建',
        items: [
          {
            items: [
              { text: 'Node 相关', link: '/src/develop/node/' },
              { text: 'Docker', link: '/src/develop/docker/' },
              { text: 'Git 相关', link: '/src/develop/git/' },
              { text: '键盘侠', link: '/src/develop/vim/' },
            ],
          },
          {
            text: '服务器',
            items: [
              { text: 'Centos', link: '/src/develop/centos/' },
            ],
          },
          {
            text: '其他',
            items: [
              { text: '内网穿透', link: '/src/develop/other/frp' },
            ],
          },
          // { text: 'Item C', link: '/item-3' },
        ],
      },
      { text: '随手记', link: '/src/notes/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/laihaojie' },
    ],
    sidebar: {
      '/src/utils/': [
        { text: 'VsCode', collapsed: false, items: getMds('/utils/vscode/') },
      ],
      '/src/engineering/': [
        { text: '前端工程化', collapsed: false, items: getMds('/engineering/') },
      ],
      '/src/frontend/': [
        { text: 'UnoCss', collapsed: false, items: getMds('/frontend/unocss/') },
      ],
      '/src/framework/': [
        { text: 'Github Actions', collapsed: false, items: getMds('/framework/github-actions/') },
        { text: 'Uniapp', collapsed: false, items: getMds('/framework/uniapp/') },
        { text: 'Flutter', collapsed: false, items: getMds('/framework/flutter/') },
        { text: 'Electron', collapsed: false, items: getMds('/framework/electron/') },
        { text: 'React-Native', collapsed: false, items: getMds('/framework/react-native/') },
        { text: 'Android', collapsed: false, items: getMds('/framework/android/') },
        { text: 'NestJs', collapsed: false, items: getMds('/framework/nestjs/') },
        { text: 'MongoDB', collapsed: false, items: getMds('/framework/mongodb/') },
      ],
      '/src/develop/': [
        { text: 'Node 相关', collapsed: false, items: getMds('/develop/node/') },
        { text: 'Docker', collapsed: false, items: getMds('/develop/docker/') },
        { text: 'Git 相关', collapsed: false, items: getMds('/develop/git/') },
        { text: '键盘侠', collapsed: false, items: getMds('/develop/vim/') },
        { text: 'Centos', collapsed: false, items: getMds('/develop/centos/') },
        { text: '其他', collapsed: false, items: getMds('/develop/other/') },
      ],
      '/src/notes/': [
        { text: '随手记', collapsed: false, items: getMds('/notes/') },
        { text: 'Windows', collapsed: false, items: getMds('/notes/windows/') },
      ],
      '/src/other/': [
        { text: '娜第', collapsed: false, items: getMds('/other/') },
        { text: 'Python作业', collapsed: false, items: getMds('/other/python/') },
      ],
    },
    algolia: {
      appId: 'S9J30WHNBE',
      apiKey: '39b330225e68321010adc394aacf069e',
      indexName: 'laihaojie',
      // debug: false,
    },
    logo: '/logo.png',
    lastUpdatedText: '上次更新于',
  },
  vue: {
    template: {
      compilerOptions: {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        isCustomElement: tag => customElements.includes(tag),
      },
    },
  },
  markdown: {
    config: (md) => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      md.use(require('markdown-it-katex'))
    },
  },
})

const customElements = [
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml',
]

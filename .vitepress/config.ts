import { defineConfig } from 'vitepress'
import { getMds } from '../scripts'

export default defineConfig({
  title: '阿杰',
  lang: 'zh-CN',
  lastUpdated: true,
  head: [['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css', crossorigin: '' }]],
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
              { text: 'React Native', link: '/src/framework/react-native/' },
              { text: 'Android', link: '/src/framework/android/' },
              { text: 'NestJS', link: '/src/framework/nestjs/' },
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
          items: getMds('/utils/vscode/'),
        },
      ],
      '/src/engineering/': [
        {
          text: '前端工程化',
          collapsible: true,
          items: getMds('/engineering/'),
        },
      ],
      '/src/framework/': [
        {
          text: 'Github Actions',
          collapsible: true,
          items: getMds('/framework/github-actions/'),
        },
        {
          text: 'uniapp',
          collapsible: true,
          items: getMds('/framework/uniapp/'),
        },
        {
          text: 'React-Native',
          collapsible: true,
          items: getMds('/framework/react-native/'),
        },
        {
          text: 'Android',
          collapsible: true,
          items: getMds('/framework/android/'),
        },
        {
          text: 'NestJs',
          collapsible: true,
          items: getMds('/framework/nestjs/'),
        },
        {
          text: 'MongoDB',
          collapsible: true,
          items: getMds('/framework/mongodb/'),
        },
      ],
      '/src/develop/': [
        {
          text: 'Node 相关',
          collapsible: true,
          items: getMds('/develop/node/'),
        },
        {
          text: 'Git 相关',
          collapsible: true,
          items: getMds('/develop/git/'),
        },
        {
          text: '键盘侠',
          collapsible: true,
          items: getMds('/develop/vim/'),
        },
      ],
      '/src/notes/': [
        {
          text: '随手记',
          collapsible: true,
          items: getMds('/notes/'),
        },
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

import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import ItKatex from 'markdown-it-katex'
import { defineConfig } from 'vitepress'
import { nav } from './nav'
import { customElements } from './shared/customeElements'
import { sidebar } from './sidebar'

export default defineConfig({
  title: '阿杰',
  lang: 'zh-CN',
  lastUpdated: true,
  appearance: 'dark',
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
    ['script', { type: 'text/javascript', src: '/js/particles.js' }],
    ['link', { rel: 'stylesheet', href: '/css/particles.css' }],
    ['script', { type: 'text/javascript', src: '/js/index.js' }],
  ],
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/laihaojie/jie-docs/edit/main/:path',
      text: '在GitHub编辑',
    },
    nav: nav(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/laihaojie' },
    ],
    sidebar: sidebar(),
    algolia: {
      appId: 'S9J30WHNBE',
      apiKey: '39b330225e68321010adc394aacf069e',
      indexName: 'laihaojie',
      // debug: false,
    },
    // logo: '/logo.png',
    logo: '/an.webp',
    lastUpdatedText: '上次更新于',
    // footer: {
    //   message: '阿杰的编程手册',
    //   copyright: 'Copyright © 2023 ajie',
    // },
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
      md.use(ItKatex)
    },
    lineNumbers: true,
    codeTransformers: [
      transformerTwoslash(),
    ],
  },
})

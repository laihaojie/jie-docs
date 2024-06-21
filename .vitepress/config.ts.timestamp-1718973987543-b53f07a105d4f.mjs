// .vitepress/config.ts
import { defineConfig } from "file:///C:/Users/lu/Documents/my-project/jie-docs/node_modules/.pnpm/vitepress@1.2.3_@algolia+client-search@4.23.3_@types+node@20.14.2_postcss@8.4.38_sass@1.77.5__f4eumkysr35ne3mdj64htt4eu4/node_modules/vitepress/dist/node/index.js";
import ItKatex from "file:///C:/Users/lu/Documents/my-project/jie-docs/node_modules/.pnpm/markdown-it-katex@2.0.3/node_modules/markdown-it-katex/index.js";
import { transformerTwoslash } from "file:///C:/Users/lu/Documents/my-project/jie-docs/node_modules/.pnpm/@shikijs+vitepress-twoslash@1.6.5_typescript@5.4.5/node_modules/@shikijs/vitepress-twoslash/dist/index.mjs";

// .vitepress/nav.ts
function nav() {
  return [
    {
      text: "\u5DE5\u5177\u8F6F\u4EF6",
      items: [
        {
          items: [
            { text: "VsCode", link: "/src/utils/vscode/" }
          ]
        }
      ]
    },
    {
      text: "\u6846\u67B6\u6587\u6863",
      items: [
        {
          items: [
            { text: "Uniapp", link: "/src/framework/uniapp/" },
            { text: "Flutter", link: "/src/framework/flutter/" },
            { text: "React Native", link: "/src/framework/react-native/" },
            { text: "Android", link: "/src/framework/android/" },
            { text: "NestJS", link: "/src/framework/nestjs/" },
            { text: "Electron", link: "/src/framework/electron/" },
            { text: "MongoDB", link: "/src/framework/mongodb/" }
          ]
        }
      ]
    },
    {
      text: "\u524D\u7AEF\u6280\u672F",
      items: [
        {
          items: [
            { text: "UnoCss", link: "/src/frontend/unocss/" }
          ]
        }
      ]
    },
    {
      text: "\u524D\u7AEF\u5DE5\u7A0B\u5316",
      link: "/src/engineering/"
    },
    {
      text: "\u73AF\u5883\u642D\u5EFA",
      items: [
        {
          items: [
            { text: "Node \u76F8\u5173", link: "/src/develop/node/" },
            { text: "Docker", link: "/src/develop/docker/" },
            { text: "Git \u76F8\u5173", link: "/src/develop/git/" },
            { text: "\u952E\u76D8\u4FA0", link: "/src/develop/vim/keyboard" }
          ]
        },
        {
          text: "\u670D\u52A1\u5668",
          items: [
            { text: "Centos", link: "/src/develop/centos/" }
          ]
        },
        {
          text: "\u5176\u4ED6",
          items: [
            { text: "\u5185\u7F51\u7A7F\u900F", link: "/src/develop/other/frp" }
          ]
        }
        // { text: 'Item C', link: '/item-3' },
      ]
    },
    {
      text: "\u968F\u624B\u8BB0",
      items: [
        { text: "\u4EE3\u7801\u7247\u6BB5", link: "/src/notes/part/javascript" },
        { text: "BUG", link: "/src/notes/bug/front_end" },
        { text: "\u968F\u624B\u8BB0", link: "/src/notes/command" },
        { text: "Windows", link: "/src/notes/windows/" },
        { text: "Github", link: "/src/notes/github/part" },
        { text: "Mysql", link: "/src/notes/mysql/" }
      ]
    },
    {
      text: "Fun",
      items: [
        {
          items: [
            { text: "\u524D\u7AEF", link: "/src/fun/frontend/" },
            { text: "Python", link: "/src/fun/python/" }
          ]
        }
      ]
    }
  ];
}

// scripts/index.ts
import path from "node:path";
import fs from "file:///C:/Users/lu/Documents/my-project/jie-docs/node_modules/.pnpm/fs-extra@11.2.0/node_modules/fs-extra/lib/index.js";
var __vite_injected_original_dirname = "C:\\Users\\lu\\Documents\\my-project\\jie-docs\\scripts";
var src_path = path.resolve(__vite_injected_original_dirname, "../src");
function getMds(root_path) {
  const dir_path = path.join(src_path, root_path);
  const dirs = fs.readdirSync(dir_path);
  return dirs.map((file) => {
    const fullPath = path.join(dir_path, file);
    const stats = fs.statSync(fullPath);
    if (!stats.isDirectory()) {
      const content = fs.readFileSync(fullPath, "utf-8");
      const fileName = file.split(".")[0].trim();
      const title = content.match(/#\s+(.*)$/m)?.[1].trim();
      const note = content.match(/<!--(.*?)-->/)?.[1].trim();
      return {
        text: note || title || fileName,
        link: `/src${root_path}${file}`,
        disable: note === "disable"
      };
    } else {
      return {};
    }
  }).filter((i) => !i.disable || !i.link);
}

// .vitepress/sidebar.ts
function sidebar() {
  return {
    "/src/utils/": [
      { text: "VsCode", collapsed: false, items: getMds("/utils/vscode/") }
    ],
    "/src/engineering/": [
      { text: "\u524D\u7AEF\u5DE5\u7A0B\u5316", collapsed: false, items: getMds("/engineering/") }
    ],
    "/src/frontend/": [
      { text: "UnoCss", collapsed: false, items: getMds("/frontend/unocss/") },
      { text: "Vue", collapsed: false, items: getMds("/frontend/vue/") }
    ],
    "/src/framework/": [
      { text: "Uniapp", collapsed: false, items: getMds("/framework/uniapp/") },
      { text: "Flutter", collapsed: false, items: getMds("/framework/flutter/") },
      { text: "Electron", collapsed: false, items: getMds("/framework/electron/") },
      { text: "React-Native", collapsed: false, items: getMds("/framework/react-native/") },
      { text: "Android", collapsed: false, items: getMds("/framework/android/") },
      { text: "NestJs", collapsed: false, items: getMds("/framework/nestjs/") },
      { text: "MongoDB", collapsed: false, items: getMds("/framework/mongodb/") }
    ],
    "/src/develop/": [
      { text: "Node \u76F8\u5173", collapsed: false, items: getMds("/develop/node/") },
      { text: "Docker", collapsed: false, items: getMds("/develop/docker/") },
      { text: "Git \u76F8\u5173", collapsed: false, items: getMds("/develop/git/") },
      { text: "\u952E\u76D8\u4FA0", collapsed: false, items: getMds("/develop/vim/") },
      { text: "Centos", collapsed: false, items: getMds("/develop/centos/") },
      { text: "\u5176\u4ED6", collapsed: false, items: getMds("/develop/other/") }
    ],
    "/src/notes/": [
      { text: "\u4EE3\u7801\u7247\u6BB5", collapsed: false, items: getMds("/notes/part/") },
      { text: "BUG", collapsed: false, items: getMds("/notes/bug/") },
      { text: "\u968F\u624B\u8BB0", collapsed: false, items: getMds("/notes/") },
      { text: "Windows", collapsed: false, items: getMds("/notes/windows/") },
      { text: "Github", collapsed: false, items: getMds("/notes/github/") }
    ],
    "/src/fun/": [
      { text: "\u524D\u7AEF", collapsed: false, items: getMds("/fun/frontend/") },
      { text: "Python", collapsed: false, items: getMds("/fun/python/") }
    ],
    "/src/other/": [
      { text: "\u5A1C\u7B2C", collapsed: false, items: getMds("/other/") },
      { text: "Python\u4F5C\u4E1A", collapsed: false, items: getMds("/other/python/") }
    ]
  };
}

// .vitepress/shared/customeElements.ts
var customElements = [
  "math",
  "maction",
  "maligngroup",
  "malignmark",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mi",
  "mlongdiv",
  "mmultiscripts",
  "mn",
  "mo",
  "mover",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "ms",
  "mscarries",
  "mscarry",
  "mscarries",
  "msgroup",
  "mstack",
  "mlongdiv",
  "msline",
  "mstack",
  "mspace",
  "msqrt",
  "msrow",
  "mstack",
  "mstack",
  "mstyle",
  "msub",
  "msup",
  "msubsup",
  "mtable",
  "mtd",
  "mtext",
  "mtr",
  "munder",
  "munderover",
  "semantics",
  "math",
  "mi",
  "mn",
  "mo",
  "ms",
  "mspace",
  "mtext",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "msqrt",
  "mstyle",
  "mmultiscripts",
  "mover",
  "mprescripts",
  "msub",
  "msubsup",
  "msup",
  "munder",
  "munderover",
  "none",
  "maligngroup",
  "malignmark",
  "mtable",
  "mtd",
  "mtr",
  "mlongdiv",
  "mscarries",
  "mscarry",
  "msgroup",
  "msline",
  "msrow",
  "mstack",
  "maction",
  "semantics",
  "annotation",
  "annotation-xml"
];

// .vitepress/config.ts
var config_default = defineConfig({
  title: "\u963F\u6770",
  lang: "zh-CN",
  lastUpdated: true,
  appearance: "dark",
  head: [
    ["link", { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css", crossorigin: "" }],
    ["script", {}, `
        // var _hmt = _hmt || []; 
        // (function() { 
        // var hm = document.createElement(\u201Cscript\u201D); 
        // hm.src = \u201C//hm.baidu.com/hm.js?XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\u201D; 
        // var s = document.getElementsByTagName(\u201Cscript\u201D)[0]; 
        // s.parentNode.insertBefore(hm, s); 
        // })(); 
        console.log('%c\u963F\u6770', 'font-size: 50px; color: #ff0000;');
        // const token = localStorage.getItem('token');
        // console.log(token);
    `],
    ["script", { type: "text/javascript", src: "/js/particles.js" }],
    ["link", { rel: "stylesheet", href: "/css/particles.css" }],
    ["script", { type: "text/javascript", src: "/js/index.js" }]
  ],
  themeConfig: {
    editLink: {
      pattern: "https://github.com/laihaojie/jie-docs/edit/main/:path",
      text: "\u5728GitHub\u7F16\u8F91"
    },
    nav: nav(),
    socialLinks: [
      { icon: "github", link: "https://github.com/laihaojie" }
    ],
    sidebar: sidebar(),
    algolia: {
      appId: "S9J30WHNBE",
      apiKey: "39b330225e68321010adc394aacf069e",
      indexName: "laihaojie"
      // debug: false,
    },
    // logo: '/logo.png',
    logo: "/an.webp",
    lastUpdatedText: "\u4E0A\u6B21\u66F4\u65B0\u4E8E"
    // footer: {
    //   message: '阿杰的编程手册',
    //   copyright: 'Copyright © 2023 ajie',
    // },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag)
      }
    }
  },
  markdown: {
    config: (md) => {
      md.use(ItKatex);
    },
    lineNumbers: true,
    codeTransformers: [
      transformerTwoslash()
    ]
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcudHMiLCAiLnZpdGVwcmVzcy9uYXYudHMiLCAic2NyaXB0cy9pbmRleC50cyIsICIudml0ZXByZXNzL3NpZGViYXIudHMiLCAiLnZpdGVwcmVzcy9zaGFyZWQvY3VzdG9tZUVsZW1lbnRzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcbHVcXFxcRG9jdW1lbnRzXFxcXG15LXByb2plY3RcXFxcamllLWRvY3NcXFxcLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcbHVcXFxcRG9jdW1lbnRzXFxcXG15LXByb2plY3RcXFxcamllLWRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2x1L0RvY3VtZW50cy9teS1wcm9qZWN0L2ppZS1kb2NzLy52aXRlcHJlc3MvY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZXByZXNzJ1xyXG5pbXBvcnQgSXRLYXRleCBmcm9tICdtYXJrZG93bi1pdC1rYXRleCdcclxuaW1wb3J0IHsgdHJhbnNmb3JtZXJUd29zbGFzaCB9IGZyb20gJ0BzaGlraWpzL3ZpdGVwcmVzcy10d29zbGFzaCdcclxuaW1wb3J0IHsgbmF2IH0gZnJvbSAnLi9uYXYnXHJcbmltcG9ydCB7IHNpZGViYXIgfSBmcm9tICcuL3NpZGViYXInXHJcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnRzIH0gZnJvbSAnLi9zaGFyZWQvY3VzdG9tZUVsZW1lbnRzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICB0aXRsZTogJ1x1OTYzRlx1Njc3MCcsXHJcbiAgbGFuZzogJ3poLUNOJyxcclxuICBsYXN0VXBkYXRlZDogdHJ1ZSxcclxuICBhcHBlYXJhbmNlOiAnZGFyaycsXHJcbiAgaGVhZDogW1xyXG4gICAgWydsaW5rJywgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL0thVGVYLzAuNS4xL2thdGV4Lm1pbi5jc3MnLCBjcm9zc29yaWdpbjogJycgfV0sXHJcbiAgICBbJ3NjcmlwdCcsIHt9LCBgXHJcbiAgICAgICAgLy8gdmFyIF9obXQgPSBfaG10IHx8IFtdOyBcclxuICAgICAgICAvLyAoZnVuY3Rpb24oKSB7IFxyXG4gICAgICAgIC8vIHZhciBobSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXHUyMDFDc2NyaXB0XHUyMDFEKTsgXHJcbiAgICAgICAgLy8gaG0uc3JjID0gXHUyMDFDLy9obS5iYWlkdS5jb20vaG0uanM/WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhcdTIwMUQ7IFxyXG4gICAgICAgIC8vIHZhciBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXHUyMDFDc2NyaXB0XHUyMDFEKVswXTsgXHJcbiAgICAgICAgLy8gcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShobSwgcyk7IFxyXG4gICAgICAgIC8vIH0pKCk7IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCclY1x1OTYzRlx1Njc3MCcsICdmb250LXNpemU6IDUwcHg7IGNvbG9yOiAjZmYwMDAwOycpO1xyXG4gICAgICAgIC8vIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codG9rZW4pO1xyXG4gICAgYF0sXHJcbiAgICBbJ3NjcmlwdCcsIHsgdHlwZTogJ3RleHQvamF2YXNjcmlwdCcsIHNyYzogJy9qcy9wYXJ0aWNsZXMuanMnIH1dLFxyXG4gICAgWydsaW5rJywgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogJy9jc3MvcGFydGljbGVzLmNzcycgfV0sXHJcbiAgICBbJ3NjcmlwdCcsIHsgdHlwZTogJ3RleHQvamF2YXNjcmlwdCcsIHNyYzogJy9qcy9pbmRleC5qcycgfV0sXHJcbiAgXSxcclxuICB0aGVtZUNvbmZpZzoge1xyXG4gICAgZWRpdExpbms6IHtcclxuICAgICAgcGF0dGVybjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9sYWloYW9qaWUvamllLWRvY3MvZWRpdC9tYWluLzpwYXRoJyxcclxuICAgICAgdGV4dDogJ1x1NTcyOEdpdEh1Ylx1N0YxNlx1OEY5MScsXHJcbiAgICB9LFxyXG4gICAgbmF2OiBuYXYoKSxcclxuICAgIHNvY2lhbExpbmtzOiBbXHJcbiAgICAgIHsgaWNvbjogJ2dpdGh1YicsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vbGFpaGFvamllJyB9LFxyXG4gICAgXSxcclxuICAgIHNpZGViYXI6IHNpZGViYXIoKSxcclxuICAgIGFsZ29saWE6IHtcclxuICAgICAgYXBwSWQ6ICdTOUozMFdITkJFJyxcclxuICAgICAgYXBpS2V5OiAnMzliMzMwMjI1ZTY4MzIxMDEwYWRjMzk0YWFjZjA2OWUnLFxyXG4gICAgICBpbmRleE5hbWU6ICdsYWloYW9qaWUnLFxyXG4gICAgICAvLyBkZWJ1ZzogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgLy8gbG9nbzogJy9sb2dvLnBuZycsXHJcbiAgICBsb2dvOiAnL2FuLndlYnAnLFxyXG4gICAgbGFzdFVwZGF0ZWRUZXh0OiAnXHU0RTBBXHU2QjIxXHU2NkY0XHU2NUIwXHU0RThFJyxcclxuICAgIC8vIGZvb3Rlcjoge1xyXG4gICAgLy8gICBtZXNzYWdlOiAnXHU5NjNGXHU2NzcwXHU3Njg0XHU3RjE2XHU3QTBCXHU2MjRCXHU1MThDJyxcclxuICAgIC8vICAgY29weXJpZ2h0OiAnQ29weXJpZ2h0IFx1MDBBOSAyMDIzIGFqaWUnLFxyXG4gICAgLy8gfSxcclxuICB9LFxyXG4gIHZ1ZToge1xyXG4gICAgdGVtcGxhdGU6IHtcclxuICAgICAgY29tcGlsZXJPcHRpb25zOiB7XHJcbiAgICAgICAgaXNDdXN0b21FbGVtZW50OiB0YWcgPT4gY3VzdG9tRWxlbWVudHMuaW5jbHVkZXModGFnKSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBtYXJrZG93bjoge1xyXG4gICAgY29uZmlnOiAobWQpID0+IHtcclxuICAgICAgbWQudXNlKEl0S2F0ZXgpXHJcbiAgICB9LFxyXG4gICAgbGluZU51bWJlcnM6IHRydWUsXHJcbiAgICBjb2RlVHJhbnNmb3JtZXJzOiBbXHJcbiAgICAgIHRyYW5zZm9ybWVyVHdvc2xhc2goKSxcclxuICAgIF0sXHJcbiAgfSxcclxufSlcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxsdVxcXFxEb2N1bWVudHNcXFxcbXktcHJvamVjdFxcXFxqaWUtZG9jc1xcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxsdVxcXFxEb2N1bWVudHNcXFxcbXktcHJvamVjdFxcXFxqaWUtZG9jc1xcXFwudml0ZXByZXNzXFxcXG5hdi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvbHUvRG9jdW1lbnRzL215LXByb2plY3QvamllLWRvY3MvLnZpdGVwcmVzcy9uYXYudHNcIjtpbXBvcnQgdHlwZSB7IERlZmF1bHRUaGVtZSB9IGZyb20gJ3ZpdGVwcmVzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBuYXYoKTogRGVmYXVsdFRoZW1lLk5hdkl0ZW1bXSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHtcclxuICAgICAgdGV4dDogJ1x1NURFNVx1NTE3N1x1OEY2Rlx1NEVGNicsXHJcbiAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyB0ZXh0OiAnVnNDb2RlJywgbGluazogJy9zcmMvdXRpbHMvdnNjb2RlLycgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6ICdcdTY4NDZcdTY3QjZcdTY1ODdcdTY4NjMnLFxyXG4gICAgICBpdGVtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1VuaWFwcCcsIGxpbms6ICcvc3JjL2ZyYW1ld29yay91bmlhcHAvJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdGbHV0dGVyJywgbGluazogJy9zcmMvZnJhbWV3b3JrL2ZsdXR0ZXIvJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdSZWFjdCBOYXRpdmUnLCBsaW5rOiAnL3NyYy9mcmFtZXdvcmsvcmVhY3QtbmF0aXZlLycgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnQW5kcm9pZCcsIGxpbms6ICcvc3JjL2ZyYW1ld29yay9hbmRyb2lkLycgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnTmVzdEpTJywgbGluazogJy9zcmMvZnJhbWV3b3JrL25lc3Rqcy8nIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ0VsZWN0cm9uJywgbGluazogJy9zcmMvZnJhbWV3b3JrL2VsZWN0cm9uLycgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnTW9uZ29EQicsIGxpbms6ICcvc3JjL2ZyYW1ld29yay9tb25nb2RiLycgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6ICdcdTUyNERcdTdBRUZcdTYyODBcdTY3MkYnLFxyXG4gICAgICBpdGVtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1Vub0NzcycsIGxpbms6ICcvc3JjL2Zyb250ZW5kL3Vub2Nzcy8nIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiAnXHU1MjREXHU3QUVGXHU1REU1XHU3QTBCXHU1MzE2JyxcclxuICAgICAgbGluazogJy9zcmMvZW5naW5lZXJpbmcvJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6ICdcdTczQUZcdTU4ODNcdTY0MkRcdTVFRkEnLFxyXG4gICAgICBpdGVtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ05vZGUgXHU3NkY4XHU1MTczJywgbGluazogJy9zcmMvZGV2ZWxvcC9ub2RlLycgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnRG9ja2VyJywgbGluazogJy9zcmMvZGV2ZWxvcC9kb2NrZXIvJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdHaXQgXHU3NkY4XHU1MTczJywgbGluazogJy9zcmMvZGV2ZWxvcC9naXQvJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdTk1MkVcdTc2RDhcdTRGQTAnLCBsaW5rOiAnL3NyYy9kZXZlbG9wL3ZpbS9rZXlib2FyZCcgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnXHU2NzBEXHU1MkExXHU1NjY4JyxcclxuICAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ0NlbnRvcycsIGxpbms6ICcvc3JjL2RldmVsb3AvY2VudG9zLycgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnXHU1MTc2XHU0RUQ2JyxcclxuICAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1NTE4NVx1N0Y1MVx1N0E3Rlx1OTAwRicsIGxpbms6ICcvc3JjL2RldmVsb3Avb3RoZXIvZnJwJyB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIHsgdGV4dDogJ0l0ZW0gQycsIGxpbms6ICcvaXRlbS0zJyB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogJ1x1OTY4Rlx1NjI0Qlx1OEJCMCcsXHJcbiAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgeyB0ZXh0OiAnXHU0RUUzXHU3ODAxXHU3MjQ3XHU2QkI1JywgbGluazogJy9zcmMvbm90ZXMvcGFydC9qYXZhc2NyaXB0JyB9LFxyXG4gICAgICAgIHsgdGV4dDogJ0JVRycsIGxpbms6ICcvc3JjL25vdGVzL2J1Zy9mcm9udF9lbmQnIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAnXHU5NjhGXHU2MjRCXHU4QkIwJywgbGluazogJy9zcmMvbm90ZXMvY29tbWFuZCcgfSxcclxuICAgICAgICB7IHRleHQ6ICdXaW5kb3dzJywgbGluazogJy9zcmMvbm90ZXMvd2luZG93cy8nIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAnR2l0aHViJywgbGluazogJy9zcmMvbm90ZXMvZ2l0aHViL3BhcnQnIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAnTXlzcWwnLCBsaW5rOiAnL3NyYy9ub3Rlcy9teXNxbC8nIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiAnRnVuJyxcclxuICAgICAgaXRlbXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICB7IHRleHQ6ICdcdTUyNERcdTdBRUYnLCBsaW5rOiAnL3NyYy9mdW4vZnJvbnRlbmQvJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdQeXRob24nLCBsaW5rOiAnL3NyYy9mdW4vcHl0aG9uLycgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgXVxyXG59XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcbHVcXFxcRG9jdW1lbnRzXFxcXG15LXByb2plY3RcXFxcamllLWRvY3NcXFxcc2NyaXB0c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcbHVcXFxcRG9jdW1lbnRzXFxcXG15LXByb2plY3RcXFxcamllLWRvY3NcXFxcc2NyaXB0c1xcXFxpbmRleC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvbHUvRG9jdW1lbnRzL215LXByb2plY3QvamllLWRvY3Mvc2NyaXB0cy9pbmRleC50c1wiO2ltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCdcclxuaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJ1xyXG5pbXBvcnQgdHlwZSB7IERlZmF1bHRUaGVtZSB9IGZyb20gJ3ZpdGVwcmVzcydcclxuXHJcbmNvbnN0IHNyY19wYXRoID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL3NyYycpXHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW51c2VkLWltcG9ydHMvbm8tdW51c2VkLXZhcnNcclxuZnVuY3Rpb24gcmVhZEZpbGVzKHJvb3RfcGF0aCkge1xyXG4gIGNvbnN0IGRpcnMgPSBmcy5yZWFkZGlyU3luYyhyb290X3BhdGgpXHJcbiAgZm9yIChjb25zdCBkaXIgb2YgZGlycykge1xyXG4gICAgY29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4ocm9vdF9wYXRoLCBkaXIpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhmdWxsUGF0aClcclxuICAgIGZzLnN0YXQoZnVsbFBhdGgsIChfZXJyLCBzdGF0cykgPT4ge1xyXG4gICAgICBpZiAoc3RhdHMuaXNEaXJlY3RvcnkoKSlcclxuICAgICAgICByZXR1cm4gcmVhZEZpbGVzKGZ1bGxQYXRoKVxyXG4gICAgICBlbHNlXHJcbiAgICAgICAgY29uc29sZS5sb2coZnVsbFBhdGgpXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuLy8gcmVhZEZpbGVzKHNyY19wYXRoKVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1kcyhyb290X3BhdGgpOiBEZWZhdWx0VGhlbWUuU2lkZWJhckl0ZW1bXSB7XHJcbiAgY29uc3QgZGlyX3BhdGggPSBwYXRoLmpvaW4oc3JjX3BhdGgsIHJvb3RfcGF0aClcclxuICBjb25zdCBkaXJzID0gZnMucmVhZGRpclN5bmMoZGlyX3BhdGgpXHJcblxyXG4gIHJldHVybiBkaXJzLm1hcCgoZmlsZSkgPT4ge1xyXG4gICAgY29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4oZGlyX3BhdGgsIGZpbGUpXHJcbiAgICBjb25zdCBzdGF0cyA9IGZzLnN0YXRTeW5jKGZ1bGxQYXRoKVxyXG4gICAgaWYgKCFzdGF0cy5pc0RpcmVjdG9yeSgpKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZnVsbFBhdGgsICd1dGYtOCcpXHJcblxyXG4gICAgICBjb25zdCBmaWxlTmFtZSA9IGZpbGUuc3BsaXQoJy4nKVswXS50cmltKClcclxuICAgICAgY29uc3QgdGl0bGUgPSBjb250ZW50Lm1hdGNoKC8jXFxzKyguKikkL20pPy5bMV0udHJpbSgpXHJcbiAgICAgIGNvbnN0IG5vdGUgPSBjb250ZW50Lm1hdGNoKC88IS0tKC4qPyktLT4vKT8uWzFdLnRyaW0oKVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0ZXh0OiBub3RlIHx8IHRpdGxlIHx8IGZpbGVOYW1lLFxyXG4gICAgICAgIGxpbms6IGAvc3JjJHtyb290X3BhdGh9JHtmaWxlfWAsXHJcbiAgICAgICAgZGlzYWJsZTogbm90ZSA9PT0gJ2Rpc2FibGUnLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcmV0dXJuIHt9XHJcbiAgICB9XHJcbiAgfSkuZmlsdGVyKGkgPT4gIWkuZGlzYWJsZSB8fCAhaS5saW5rKSBhcyBEZWZhdWx0VGhlbWUuU2lkZWJhckl0ZW1bXVxyXG59XHJcbi8vIGNvbnNvbGUubG9nKGdldE1kcygnL25vdGVzLycpKVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGx1XFxcXERvY3VtZW50c1xcXFxteS1wcm9qZWN0XFxcXGppZS1kb2NzXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGx1XFxcXERvY3VtZW50c1xcXFxteS1wcm9qZWN0XFxcXGppZS1kb2NzXFxcXC52aXRlcHJlc3NcXFxcc2lkZWJhci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvbHUvRG9jdW1lbnRzL215LXByb2plY3QvamllLWRvY3MvLnZpdGVwcmVzcy9zaWRlYmFyLnRzXCI7aW1wb3J0IHsgZ2V0TWRzIH0gZnJvbSAnLi4vc2NyaXB0cydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaWRlYmFyKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICAnL3NyYy91dGlscy8nOiBbXHJcbiAgICAgIHsgdGV4dDogJ1ZzQ29kZScsIGNvbGxhcHNlZDogZmFsc2UsIGl0ZW1zOiBnZXRNZHMoJy91dGlscy92c2NvZGUvJykgfSxcclxuICAgIF0sXHJcbiAgICAnL3NyYy9lbmdpbmVlcmluZy8nOiBbXHJcbiAgICAgIHsgdGV4dDogJ1x1NTI0RFx1N0FFRlx1NURFNVx1N0EwQlx1NTMxNicsIGNvbGxhcHNlZDogZmFsc2UsIGl0ZW1zOiBnZXRNZHMoJy9lbmdpbmVlcmluZy8nKSB9LFxyXG4gICAgXSxcclxuICAgICcvc3JjL2Zyb250ZW5kLyc6IFtcclxuICAgICAgeyB0ZXh0OiAnVW5vQ3NzJywgY29sbGFwc2VkOiBmYWxzZSwgaXRlbXM6IGdldE1kcygnL2Zyb250ZW5kL3Vub2Nzcy8nKSB9LFxyXG4gICAgICB7IHRleHQ6ICdWdWUnLCBjb2xsYXBzZWQ6IGZhbHNlLCBpdGVtczogZ2V0TWRzKCcvZnJvbnRlbmQvdnVlLycpIH0sXHJcbiAgICBdLFxyXG4gICAgJy9zcmMvZnJhbWV3b3JrLyc6IFtcclxuICAgICAgeyB0ZXh0OiAnVW5pYXBwJywgY29sbGFwc2VkOiBmYWxzZSwgaXRlbXM6IGdldE1kcygnL2ZyYW1ld29yay91bmlhcHAvJykgfSxcclxuICAgICAgeyB0ZXh0OiAnRmx1dHRlcicsIGNvbGxhcHNlZDogZmFsc2UsIGl0ZW1zOiBnZXRNZHMoJy9mcmFtZXdvcmsvZmx1dHRlci8nKSB9LFxyXG4gICAgICB7IHRleHQ6ICdFbGVjdHJvbicsIGNvbGxhcHNlZDogZmFsc2UsIGl0ZW1zOiBnZXRNZHMoJy9mcmFtZXdvcmsvZWxlY3Ryb24vJykgfSxcclxuICAgICAgeyB0ZXh0OiAnUmVhY3QtTmF0aXZlJywgY29sbGFwc2VkOiBmYWxzZSwgaXRlbXM6IGdldE1kcygnL2ZyYW1ld29yay9yZWFjdC1uYXRpdmUvJykgfSxcclxuICAgICAgeyB0ZXh0OiAnQW5kcm9pZCcsIGNvbGxhcHNlZDogZmFsc2UsIGl0ZW1zOiBnZXRNZHMoJy9mcmFtZXdvcmsvYW5kcm9pZC8nKSB9LFxyXG4gICAgICB7IHRleHQ6ICdOZXN0SnMnLCBjb2xsYXBzZWQ6IGZhbHNlLCBpdGVtczogZ2V0TWRzKCcvZnJhbWV3b3JrL25lc3Rqcy8nKSB9LFxyXG4gICAgICB7IHRleHQ6ICdNb25nb0RCJywgY29sbGFwc2VkOiBmYWxzZSwgaXRlbXM6IGdldE1kcygnL2ZyYW1ld29yay9tb25nb2RiLycpIH0sXHJcbiAgICBdLFxyXG4gICAgJy9zcmMvZGV2ZWxvcC8nOiBbXHJcbiAgICAgIHsgdGV4dDogJ05vZGUgXHU3NkY4XHU1MTczJywgY29sbGFwc2VkOiBmYWxzZSwgaXRlbXM6IGdldE1kcygnL2RldmVsb3Avbm9kZS8nKSB9LFxyXG4gICAgICB7IHRleHQ6ICdEb2NrZXInLCBjb2xsYXBzZWQ6IGZhbHNlLCBpdGVtczogZ2V0TWRzKCcvZGV2ZWxvcC9kb2NrZXIvJykgfSxcclxuICAgICAgeyB0ZXh0OiAnR2l0IFx1NzZGOFx1NTE3MycsIGNvbGxhcHNlZDogZmFsc2UsIGl0ZW1zOiBnZXRNZHMoJy9kZXZlbG9wL2dpdC8nKSB9LFxyXG4gICAgICB7IHRleHQ6ICdcdTk1MkVcdTc2RDhcdTRGQTAnLCBjb2xsYXBzZWQ6IGZhbHNlLCBpdGVtczogZ2V0TWRzKCcvZGV2ZWxvcC92aW0vJykgfSxcclxuICAgICAgeyB0ZXh0OiAnQ2VudG9zJywgY29sbGFwc2VkOiBmYWxzZSwgaXRlbXM6IGdldE1kcygnL2RldmVsb3AvY2VudG9zLycpIH0sXHJcbiAgICAgIHsgdGV4dDogJ1x1NTE3Nlx1NEVENicsIGNvbGxhcHNlZDogZmFsc2UsIGl0ZW1zOiBnZXRNZHMoJy9kZXZlbG9wL290aGVyLycpIH0sXHJcbiAgICBdLFxyXG4gICAgJy9zcmMvbm90ZXMvJzogW1xyXG4gICAgICB7IHRleHQ6ICdcdTRFRTNcdTc4MDFcdTcyNDdcdTZCQjUnLCBjb2xsYXBzZWQ6IGZhbHNlLCBpdGVtczogZ2V0TWRzKCcvbm90ZXMvcGFydC8nKSB9LFxyXG4gICAgICB7IHRleHQ6ICdCVUcnLCBjb2xsYXBzZWQ6IGZhbHNlLCBpdGVtczogZ2V0TWRzKCcvbm90ZXMvYnVnLycpIH0sXHJcbiAgICAgIHsgdGV4dDogJ1x1OTY4Rlx1NjI0Qlx1OEJCMCcsIGNvbGxhcHNlZDogZmFsc2UsIGl0ZW1zOiBnZXRNZHMoJy9ub3Rlcy8nKSB9LFxyXG4gICAgICB7IHRleHQ6ICdXaW5kb3dzJywgY29sbGFwc2VkOiBmYWxzZSwgaXRlbXM6IGdldE1kcygnL25vdGVzL3dpbmRvd3MvJykgfSxcclxuICAgICAgeyB0ZXh0OiAnR2l0aHViJywgY29sbGFwc2VkOiBmYWxzZSwgaXRlbXM6IGdldE1kcygnL25vdGVzL2dpdGh1Yi8nKSB9LFxyXG4gICAgXSxcclxuICAgICcvc3JjL2Z1bi8nOiBbXHJcbiAgICAgIHsgdGV4dDogJ1x1NTI0RFx1N0FFRicsIGNvbGxhcHNlZDogZmFsc2UsIGl0ZW1zOiBnZXRNZHMoJy9mdW4vZnJvbnRlbmQvJykgfSxcclxuICAgICAgeyB0ZXh0OiAnUHl0aG9uJywgY29sbGFwc2VkOiBmYWxzZSwgaXRlbXM6IGdldE1kcygnL2Z1bi9weXRob24vJykgfSxcclxuICAgIF0sXHJcbiAgICAnL3NyYy9vdGhlci8nOiBbXHJcbiAgICAgIHsgdGV4dDogJ1x1NUExQ1x1N0IyQycsIGNvbGxhcHNlZDogZmFsc2UsIGl0ZW1zOiBnZXRNZHMoJy9vdGhlci8nKSB9LFxyXG4gICAgICB7IHRleHQ6ICdQeXRob25cdTRGNUNcdTRFMUEnLCBjb2xsYXBzZWQ6IGZhbHNlLCBpdGVtczogZ2V0TWRzKCcvb3RoZXIvcHl0aG9uLycpIH0sXHJcbiAgICBdLFxyXG4gIH1cclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGx1XFxcXERvY3VtZW50c1xcXFxteS1wcm9qZWN0XFxcXGppZS1kb2NzXFxcXC52aXRlcHJlc3NcXFxcc2hhcmVkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxsdVxcXFxEb2N1bWVudHNcXFxcbXktcHJvamVjdFxcXFxqaWUtZG9jc1xcXFwudml0ZXByZXNzXFxcXHNoYXJlZFxcXFxjdXN0b21lRWxlbWVudHMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2x1L0RvY3VtZW50cy9teS1wcm9qZWN0L2ppZS1kb2NzLy52aXRlcHJlc3Mvc2hhcmVkL2N1c3RvbWVFbGVtZW50cy50c1wiO2V4cG9ydCBjb25zdCBjdXN0b21FbGVtZW50cyA9IFtcclxuICAnbWF0aCcsXHJcbiAgJ21hY3Rpb24nLFxyXG4gICdtYWxpZ25ncm91cCcsXHJcbiAgJ21hbGlnbm1hcmsnLFxyXG4gICdtZW5jbG9zZScsXHJcbiAgJ21lcnJvcicsXHJcbiAgJ21mZW5jZWQnLFxyXG4gICdtZnJhYycsXHJcbiAgJ21pJyxcclxuICAnbWxvbmdkaXYnLFxyXG4gICdtbXVsdGlzY3JpcHRzJyxcclxuICAnbW4nLFxyXG4gICdtbycsXHJcbiAgJ21vdmVyJyxcclxuICAnbXBhZGRlZCcsXHJcbiAgJ21waGFudG9tJyxcclxuICAnbXJvb3QnLFxyXG4gICdtcm93JyxcclxuICAnbXMnLFxyXG4gICdtc2NhcnJpZXMnLFxyXG4gICdtc2NhcnJ5JyxcclxuICAnbXNjYXJyaWVzJyxcclxuICAnbXNncm91cCcsXHJcbiAgJ21zdGFjaycsXHJcbiAgJ21sb25nZGl2JyxcclxuICAnbXNsaW5lJyxcclxuICAnbXN0YWNrJyxcclxuICAnbXNwYWNlJyxcclxuICAnbXNxcnQnLFxyXG4gICdtc3JvdycsXHJcbiAgJ21zdGFjaycsXHJcbiAgJ21zdGFjaycsXHJcbiAgJ21zdHlsZScsXHJcbiAgJ21zdWInLFxyXG4gICdtc3VwJyxcclxuICAnbXN1YnN1cCcsXHJcbiAgJ210YWJsZScsXHJcbiAgJ210ZCcsXHJcbiAgJ210ZXh0JyxcclxuICAnbXRyJyxcclxuICAnbXVuZGVyJyxcclxuICAnbXVuZGVyb3ZlcicsXHJcbiAgJ3NlbWFudGljcycsXHJcbiAgJ21hdGgnLFxyXG4gICdtaScsXHJcbiAgJ21uJyxcclxuICAnbW8nLFxyXG4gICdtcycsXHJcbiAgJ21zcGFjZScsXHJcbiAgJ210ZXh0JyxcclxuICAnbWVuY2xvc2UnLFxyXG4gICdtZXJyb3InLFxyXG4gICdtZmVuY2VkJyxcclxuICAnbWZyYWMnLFxyXG4gICdtcGFkZGVkJyxcclxuICAnbXBoYW50b20nLFxyXG4gICdtcm9vdCcsXHJcbiAgJ21yb3cnLFxyXG4gICdtc3FydCcsXHJcbiAgJ21zdHlsZScsXHJcbiAgJ21tdWx0aXNjcmlwdHMnLFxyXG4gICdtb3ZlcicsXHJcbiAgJ21wcmVzY3JpcHRzJyxcclxuICAnbXN1YicsXHJcbiAgJ21zdWJzdXAnLFxyXG4gICdtc3VwJyxcclxuICAnbXVuZGVyJyxcclxuICAnbXVuZGVyb3ZlcicsXHJcbiAgJ25vbmUnLFxyXG4gICdtYWxpZ25ncm91cCcsXHJcbiAgJ21hbGlnbm1hcmsnLFxyXG4gICdtdGFibGUnLFxyXG4gICdtdGQnLFxyXG4gICdtdHInLFxyXG4gICdtbG9uZ2RpdicsXHJcbiAgJ21zY2FycmllcycsXHJcbiAgJ21zY2FycnknLFxyXG4gICdtc2dyb3VwJyxcclxuICAnbXNsaW5lJyxcclxuICAnbXNyb3cnLFxyXG4gICdtc3RhY2snLFxyXG4gICdtYWN0aW9uJyxcclxuICAnc2VtYW50aWNzJyxcclxuICAnYW5ub3RhdGlvbicsXHJcbiAgJ2Fubm90YXRpb24teG1sJyxcclxuXVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtWLFNBQVMsb0JBQW9CO0FBQy9XLE9BQU8sYUFBYTtBQUNwQixTQUFTLDJCQUEyQjs7O0FDQTdCLFNBQVMsTUFBOEI7QUFDNUMsU0FBTztBQUFBLElBQ0w7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxRQUNMO0FBQUEsVUFDRSxPQUFPO0FBQUEsWUFDTCxFQUFFLE1BQU0sVUFBVSxNQUFNLHFCQUFxQjtBQUFBLFVBQy9DO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0w7QUFBQSxVQUNFLE9BQU87QUFBQSxZQUNMLEVBQUUsTUFBTSxVQUFVLE1BQU0seUJBQXlCO0FBQUEsWUFDakQsRUFBRSxNQUFNLFdBQVcsTUFBTSwwQkFBMEI7QUFBQSxZQUNuRCxFQUFFLE1BQU0sZ0JBQWdCLE1BQU0sK0JBQStCO0FBQUEsWUFDN0QsRUFBRSxNQUFNLFdBQVcsTUFBTSwwQkFBMEI7QUFBQSxZQUNuRCxFQUFFLE1BQU0sVUFBVSxNQUFNLHlCQUF5QjtBQUFBLFlBQ2pELEVBQUUsTUFBTSxZQUFZLE1BQU0sMkJB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Q0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFDRjs7O0FKL0VBLElBQU8saUJBQVEsYUFBYTtBQUFBLEVBQzFCLE9BQU87QUFBQSxFQUNQLE1BQU07QUFBQSxFQUNOLGFBQWE7QUFBQSxFQUNiLFlBQVk7QUFBQSxFQUNaLE1BQU07QUFBQSxJQUNKLENBQUMsUUFBUSxFQUFFLEtBQUssY0FBYyxNQUFNLG9FQUFvRSxhQUFhLEdBQUcsQ0FBQztBQUFBLElBQ3pILENBQUMsVUFBVSxDQUFDLEdBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBV2Q7QUFBQSxJQUNELENBQUMsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLEtBQUssbUJBQW1CLENBQUM7QUFBQSxJQUMvRCxDQUFDLFFBQVEsRUFBRSxLQUFLLGNBQWMsTUFBTSxxQkFBcUIsQ0FBQztBQUFBLElBQzFELENBQUMsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLEtBQUssZUFBZSxDQUFDO0FBQUEsRUFDN0Q7QUFBQSxFQUNBLGFBQWE7QUFBQSxJQUNYLFVBQVU7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxLQUFLLElBQUk7QUFBQSxJQUNULGFBQWE7QUFBQSxNQUNYLEVBQUUsTUFBTSxVQUFVLE1BQU0sK0JBQStCO0FBQUEsSUFDekQ7QUFBQSxJQUNBLFNBQVMsUUFBUTtBQUFBLElBQ2pCLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFdBQVc7QUFBQTtBQUFBLElBRWI7QUFBQTtBQUFBLElBRUEsTUFBTTtBQUFBLElBQ04saUJBQWlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtuQjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gsVUFBVTtBQUFBLE1BQ1IsaUJBQWlCO0FBQUEsUUFDZixpQkFBaUIsU0FBTyxlQUFlLFNBQVMsR0FBRztBQUFBLE1BQ3JEO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFVBQVU7QUFBQSxJQUNSLFFBQVEsQ0FBQyxPQUFPO0FBQ2QsU0FBRyxJQUFJLE9BQU87QUFBQSxJQUNoQjtBQUFBLElBQ0EsYUFBYTtBQUFBLElBQ2Isa0JBQWtCO0FBQUEsTUFDaEIsb0JBQW9CO0FBQUEsSUFDdEI7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

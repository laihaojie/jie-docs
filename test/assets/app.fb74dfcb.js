import{M as s,a6 as i,a7 as p,a8 as c,a9 as u,aa as l,ab as f,ac as d,ad as m,ae as h,af as g,J as w,f as A,m as v,e as y,b as P,ag as _,ah as b,ai as C,aj as R}from"./chunks/framework.7e07dabb.js";import{t as D}from"./chunks/theme.d6f345e7.js";async function E(){return!0}const L={...D,async enhanceApp({app:e,router:a,siteData:t}){if(window.location.pathname!=="/login.html"&&!await E())return window.location.href="login.html"}};function r(e){if(e.extends){const a=r(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const o=r(L),T=A({name:"VitePressApp",setup(){const{site:e}=v();return y(()=>{P(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),_(),b(),C(),o.setup&&o.setup(),()=>R(o.Layout)}});async function j(){const e=S(),a=O();a.provide(p,e);const t=c(e.route);return a.provide(u,t),a.component("Content",l),a.component("ClientOnly",f),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:a,router:e,siteData:d}),{app:a,router:e,data:t}}function O(){return m(T)}function S(){let e=s,a;return h(t=>{let n=g(t);return e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),s&&(e=!1),w(()=>import(n),[])},o.NotFound)}s&&j().then(({app:e,router:a,data:t})=>{a.go().then(()=>{i(a.route,t.site),e.mount("#app")})});export{j as createApp};
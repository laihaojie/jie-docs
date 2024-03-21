# vite配置

```ts
// import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', '@vueuse/core'],
      dts: true,
    }),
    Unocss(),
    // legacy({
    //   targets: ['> 1%, last 1 version, ie >= 11'],
    //   additionalLegacyPolyfills: ['regenerator-runtime/runtime'], // 面向IE11时需要此插件
    // }),
  ],
  build: {
    rollupOptions: {
      input: {
        app: './login.html', // 打包的入口文件
      },
    },
    outDir: './docs/public/', // 打包的输出目录
    // assetsDir: 'login-assets', // 打包的静态资源目录
    emptyOutDir: false, // 是否清空输出目录
  },
  publicDir: 'src/public',
  server: {
    open: '/login.html', // 打开的页面
  },
})
```

```ts twoslash
console.log('hello')
//      ^?
```

# UnoCss

## 使用

::: code-group

  ```bash [pnpm]
  pnpm add -D unocss
  ```

  ```bash [yarn]
  yarn add -D unocss
  ```

  ```bash [npm]
  npm install -D unocss
  ```

:::

## 配置 vite.config.ts

```ts
// vite.config.ts
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    UnoCSS(),
  ],
})
```

添加 `virtual:uno.css` 到你的 `main.ts` 文件中:

```ts
// main.ts
import 'virtual:uno.css'
```

## 配置 uno.config.ts

```js
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer !outline-none hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    ['fc', 'flex justify-center items-center'],
    ['bc', 'c-#005CEC b-b-2px  b-#005CEC'],
    ['dian', 'w6px h6px b-3px b-#005CEC rounded-3px mt6px mr10px'],
    ['cf', 'before:content-[""] after:content-[""] before:table after:table after:clear-both after:hidden [zoom:1]'],
    ['fl', 'float-left'],
    ['fr', 'float-right'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose m-auto text-left'.split(' '),
})
```

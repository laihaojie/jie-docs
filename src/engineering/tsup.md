<!-- 打包工具 tsup -->
# tsup

- 安装 tsup

```sh
pnpm i tsup -D

# 如果tsconfig.json 中开启了emitDecoratorMetadata 还需要安装 @swc/core
pnpm i @swc/core -D
```

```sh
npx tsup ./index.ts --dts --format cjs,esm,iife -d ./dist
```

## tsup 配置

```ts
import type { Options } from 'tsup'

export const tsup: Options = {
  entry: [
    'src/*.ts',
  ],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: true,
  clean: true,
  shims: true,
  // 跳过 node_modules 打包
  // skipNodeModulesBundle: true,
  // 跳过指定 package 打包
  external: ['miniprogram-ci']
}
```

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

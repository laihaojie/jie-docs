# TypeScript

## 强制断言

```ts
// eslint-disable-next-line @typescript-eslint/no-inferrable-types
const name: string = '阿杰'
const age: number = name as unknown as number
```
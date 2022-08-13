# TypeScript

## 强制断言

```ts
// eslint-disable-next-line @typescript-eslint/no-inferrable-types
const name: string = '阿杰'
const age: number = name as unknown as number
```

## as const
  
```ts
const a = 1 as const // 这时候 a 的类型就不是number了，而是一个常量一个具体值(1)，不能改变
```
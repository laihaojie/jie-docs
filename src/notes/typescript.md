# TypeScript

## 配置文件

- files - 设置要编译的文件的名称；
- include - 设置需要进行编译的文件，支持路径模式匹配；
- exclude - 设置无需进行编译的文件，支持路径模式匹配；
- compilerOptions - 设置与编译流程相关的选项。

```json
{
  "compilerOptions": {

    /* 基本选项 */
    "target": "es5", // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES6'/'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
    "module": "commonjs", // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
    "lib": [], // 指定要包含在编译中的库文件
    "allowJs": true, // 允许编译 javascript 文件
    "checkJs": true, // 报告 javascript 文件中的错误
    "jsx": "preserve", // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
    "declaration": true, // 生成相应的 '.d.ts' 文件
    "sourceMap": true, // 生成相应的 '.map' 文件
    "outFile": "./", // 将输出文件合并为一个文件
    "outDir": "./", // 指定输出目录
    "rootDir": "./", // 用来控制输出目录结构 --outDir.
    "removeComments": true, // 删除编译后的所有的注释
    "noEmit": true, // 不生成输出文件
    "importHelpers": true, // 从 tslib 导入辅助工具函数
    "isolatedModules": true, // 将每个文件做为单独的模块 （与 'ts.transpileModule' 类似）.

    /* 严格的类型检查选项 */
    "strict": true, // 启用所有严格类型检查选项
    "noImplicitAny": true, // 在表达式和声明上有隐含的 any类型时报错
    "strictNullChecks": true, // 启用严格的 null 检查
    "noImplicitThis": true, // 当 this 表达式值为 any 类型的时候，生成一个错误
    "alwaysStrict": true, // 以严格模式检查每个模块，并在每个文件里加入 'use strict'

    /* 额外的检查 */
    "noUnusedLocals": true, // 有未使用的变量时，抛出错误
    "noUnusedParameters": true, // 有未使用的参数时，抛出错误
    "noImplicitReturns": true, // 并不是所有函数里的代码都有返回值时，抛出错误
    "noFallthroughCasesInSwitch": true, // 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）

    /* 模块解析选项 */
    "moduleResolution": "node", // 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
    "baseUrl": "./", // 用于解析非相对模块名称的基目录
    "paths": {}, // 模块名到基于 baseUrl 的路径映射的列表
    "rootDirs": [], // 根文件夹列表，其组合内容表示项目运行时的结构内容
    "typeRoots": [], // 包含类型声明的文件列表
    "types": [], // 需要包含的类型声明文件名列表
    "allowSyntheticDefaultImports": true, // 允许从没有设置默认导出的模块中默认导入。

    /* Source Map Options */
    "sourceRoot": "./", // 指定调试器应该找到 TypeScript 文件而不是源文件的位置
    "mapRoot": "./", // 指定调试器应该找到映射文件而不是生成文件的位置
    "inlineSourceMap": true, // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
    "inlineSources": true, // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性

    /* 其他选项 */
    "experimentalDecorators": true, // 启用装饰器
    "emitDecoratorMetadata": true // 为装饰器提供元数据的支持
  }
}
```

## 强制断言

```ts
const name: string = '阿杰'
const age: number = name as unknown as number
```

## as const
  
```ts
const a = 1 as const // 这时候 a 的类型就不是number了，而是一个常量一个具体值(1)，不能改变
const list = [1, '2', 3] as const // 将数组转换为常量  元祖(tuple)，不能改变
const obj = { a: 1, b: 2 } as const // 将对象转换为常量  对象(object)，不能改变
```

## 装饰器 Decorator

- 装饰器类型

```ts
declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void
declare type PropertyDecorator = (target: object, propertyKey: string | symbol) => void
declare type MethodDecorator = <T>(target: object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void
declare type ParameterDecorator = (target: object, propertyKey: string | symbol, parameterIndex: number) => void
```

- 类装饰器

```ts
const classDecorator: ClassDecorator = (target: Function) => {
  console.log(target)
  target.prototype.getName = function () {
    return target.name
  }
}
@classDecorator
class User {}

const user: any = new User()

console.log(user.getName())
```

- 方法装饰器

```ts
const methodDecorator: MethodDecorator = (target: object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
  const method = descriptor.value
  descriptor.value = function () {
    const res = method()
    console.log(res)
    return res
  }
}

class Cat {
  @methodDecorator
  public sayHello() {
    return 'Hello World'
  }
}
new Cat().sayHello()
```

- 装饰器工厂

```ts
const DecoratorFactory = function (str: string): ClassDecorator {
  return (target: Function) => {
    console.log(target)
    target.prototype.getName = function () {
      return target.name + str
    }
  }
}

@DecoratorFactory('hello')
class User {}

const user: any = new User()

console.log(user.getName())
```

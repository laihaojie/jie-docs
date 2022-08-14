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
const list = [1, '2', 3] as const // 将数组转换为常量  元祖(tuple)，不能改变
const obj = { a: 1, b: 2 } as const // 将对象转换为常量  对象(object)，不能改变
```

## 装饰器 Decorator

- 装饰器类型

```ts
declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void
declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void
declare type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void
declare type ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => void
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
const methodDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
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
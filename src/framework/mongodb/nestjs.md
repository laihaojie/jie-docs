# 在nestjs中使用mongodb

## 安装

```sh
pnpm i @nestjs/mongoose mongoose
```

## 注册使用

- 在app.module.ts中引入mongodb

```js
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
  ],
})
export class AppModule {}
```

## 创建Schema

- 使用装饰器创建

```js
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type CatDocument = Cat & Document

@Schema()
export class Cat extends Document {
  @Prop()
    name: string

  @Prop()
    age: number

  @Prop()
    breed: string
}

export const CatSchema = SchemaFactory.createForClass(Cat)
```

- 使用原生创建

```js
import * as mongoose from 'mongoose'

export const CatSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: {
    type: String,
    required: true,
  },
})
```

## 模型注入

- 在cat.module.ts中注入模型

```js
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { CatsController } from './cats.controller'
import { CatsService } from './cats.service'
import { Cat, CatSchema } from './schemas/cat.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
```

- 在cat.service.ts中引入模型

```js
import type { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import type { Cat, CatDocument } from './schemas/cat.schema'
import type { CreateCatDto } from './dto/create-cat.dto'

@Injectable()
export class CatsService {
  constructor(@InjectModel('Cat') private catModel: Model<CatDocument>) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    // eslint-disable-next-line new-cap
    const createdCat = new this.catModel(createCatDto)
    return createdCat.save()
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec()
  }
}
```

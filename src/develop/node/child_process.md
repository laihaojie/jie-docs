# 子进程

## 开启一个子进程

```js
// 开启一个子进程 (文件路径)
const child = fork('src/child.js')
// 给子进程传递消息
child.send(user_list)
// 接受子进程传递过来的消息
child.on('message', (data) => {
  console.log(data)
})
```

- child.js

```js
// 接受主进程传递过来的消息
process.on('message', (data) => {
  console.log(data)
  // 给主进程发消息
  process.send({ message: '这是给主进程传递过去的消息' })
})
```

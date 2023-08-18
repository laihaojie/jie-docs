# 代码片段

## 开机自启动

```js
if (process.env.NODE_ENV !== 'development') {
  // 开机自启动
  app.setLoginItemSettings({
    openAtLogin: true,
    path: app.getPath('exe'),
  })
}
```

## 自动打开调试窗口

```js
mainWindow.webContents.openDevTools()
```

## 拦截响应body

```js
try {
  mainWindow.webContents.debugger.attach('1.3')
}
catch (err) {
  console.log('Debugger attach failed: ', err)
}

mainWindow.webContents.debugger.on('detach', (event, reason) => {
  console.log('Debugger detached due to: ', reason)
})

mainWindow.webContents.debugger.on('message', (event, method, params) => {
  if (method === 'Network.responseReceived') {
    console.log(params.response.url)
    mainWindow.webContents.debugger.sendCommand('Network.getResponseBody', { requestId: params.requestId }).then((response) => {
      console.log(response)
    })
  }
})

mainWindow.webContents.debugger.sendCommand('Network.enable')
```

## 设置session隔离

```js
const mainWindow = new BrowserWindow({
  width: 1900,
  height: 1000,
  webPreferences: {
    // preload: join(__dirname, '../preload.js'),
    nodeIntegration: false,
    // 每次打开设置不同的值, 保证每次窗口打开都是一个新的session 不会共享cookie applicationCache等
    partition: Date.now().toString(),
  },
})
```

## 加载本地静态资源

```js
const addPath = url.format({
  pathname: join(app.getAppPath(), 'renderer', 'index.html'),
  protocol: 'file:',
  slashes: true,
  hash: '/add',
})
mainWindow.loadURL(addPath)
```

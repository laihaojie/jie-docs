# 代码片段

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

##  设置session隔离
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
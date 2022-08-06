# 消息推送

## JPUSH 消息推送 

[*引用原文*](https://blog.csdn.net/Bombas/article/details/123654883)

注册[*极光推送*](https://www.jiguang.cn/)账号  创建应用

- 安装 jpush-react-native jcore-react-native

```sh
npm install jpush-react-native jcore-react-native
```

- android配置

- 在AndroidManifest.xml中添加

```xml
<application>
  <meta-data android:name="JPUSH_CHANNEL" android:value="${JPUSH_CHANNEL}" />
  <meta-data android:name="JPUSH_APPKEY" android:value="${JPUSH_APPKEY}" />
</application>
```

- 在app/build.gradle中添加

```text 
implementation project(':jpush-react-native')  // 添加 jpush 依赖
implementation project(':jcore-react-native')  // 添加 jcore 依赖
```

- 在 settings.gradle 中添加

```text
include ':jpush-react-native'
project(':jpush-react-native').projectDir = new File(rootProject.projectDir, '../node_modules/jpush-react-native/android')
include ':jcore-react-native'
project(':jcore-react-native').projectDir = new File(rootProject.projectDir, '../node_modules/jcore-react-native/android')
```

- 初始化jpush

```typescript
// 初始化
JPush.init({ appKey: 'appKey', titchannelle: 'developer-default', production: true })
// 连接状态
JPush.addConnectEventListener((result) => {
  console.log(`connectListener:${JSON.stringify(result)}`)
})

// 通知回调
JPush.addNotificationListener((result) => {
  console.log(`notificationListener:${JSON.stringify(result)}`)
})

// 本地通知回调
JPush.addLocalNotificationListener((result) => {
  console.log(`localNotificationListener:${JSON.stringify(result)}`)
})

// tag alias事件回调
JPush.addTagAliasListener((result) => {
  console.log(`tagAliasListener:${JSON.stringify(result)}`)
})

// 手机号码事件回调
JPush.addMobileNumberListener((result) => {
  console.log(`mobileNumberListener:${JSON.stringify(result)}`)
})

JPush.getRegistrationID((registerID) => {
  console.log('registerID : ', registerID)
})
```
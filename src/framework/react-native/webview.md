# 添加webview

- 安装react-native-webview

```sh
yarn add react-native-webview --save
```

- 在MainActivity.java中添加

```java
// 添加webview依赖
import android.webkit.WebView;

@Override
protected void onCreate(Bundle savedInstanceState) {
  SplashScreen.show(this);
  super.onCreate(null);
  // 初始化webview
  WebView.setWebContentsDebuggingEnabled(true);
}
```
# React-native

## android 添加 react-native-splash-screen 

- 安装
  
```sh
npm install react-native-splash-screen --save
```

- 在MainApplication.java中添加
  
```java
// react-native-splash-screen >= 0.3.1 
import org.devio.rn.splashscreen.SplashScreenReactPackage;

private final ReactNativeHost mReactNativeHost =
    new ReactNativeHost(this) {
      @Override
      public boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
      }

      @Override
      protected List<ReactPackage> getPackages() {
        @SuppressWarnings("UnnecessaryLocalVariable")
        List<ReactPackage> packages = new PackageList(this).getPackages();
        // 初始化react-native-splash-screen
        new SplashScreenReactPackage();
        return packages;
      }

      @Override
      protected String getJSMainModuleName() {
        return "index";
      }
    };
```

- 在MainActivity.java中添加
  
```java
// react-native-splash-screen >= 0.3.1 
import org.devio.rn.splashscreen.SplashScreen; 


@Override
protected void onCreate(Bundle savedInstanceState) {
  // 初始化 react-native-splash-screen
  SplashScreen.show(this);
  super.onCreate(null);
}

```
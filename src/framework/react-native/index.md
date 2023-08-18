# 添加splash

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
import android.os.Bundle;
// react-native-splash-screen >= 0.3.1 
import org.devio.rn.splashscreen.SplashScreen; 


@Override
protected void onCreate(Bundle savedInstanceState) {
  // 初始化 react-native-splash-screen
  SplashScreen.show(this);
  super.onCreate(null);
}

```

- 新建layout文件 launch_screen.xml
  
```xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@color/white"
    >

    <ImageView
        android:id="@+id/ivLogo"
        android:layout_width="100dp"
        android:layout_height="100dp"
        android:scaleType="centerCrop"
        android:src="@mipmap/ic_launcher"
        android:layout_marginBottom="200dp"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent" />


    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginTop="32dp"
        android:text="阿杰 App"
        android:textColor="@color/black"
        android:textSize="25dp"
        android:textStyle="bold"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toBottomOf="@+id/ivLogo">

    </TextView>


</androidx.constraintlayout.widget.ConstraintLayout>
```

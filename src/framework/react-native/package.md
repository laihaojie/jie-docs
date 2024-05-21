# 自定义package

- 添加testManager.java

```java
package com.jieapp;

import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.uimanager.IllegalViewOperationException;

public class TestManager extends ReactContextBaseJavaModule {

    public TestManager(ReactApplicationContext reactContext) {

        super(reactContext);

    }

    //    重写getName方法声明Module类名称,在RN调用时用到
    @Override
    public String getName() {
        return "TestManager";
    }

    /**
     * 获取app版本号
     * @param successCallback
     */
    @ReactMethod
    public void getAppVersion(Callback successCallback) {
        try {
            PackageInfo info = getPackageInfo();
            if (info != null) {
                successCallback.invoke(info.versionName);
            } else {
                successCallback.invoke("");
            }
        } catch (IllegalViewOperationException e) {

        }
    }

    private PackageInfo getPackageInfo() {
        PackageManager manager = getReactApplicationContext().getPackageManager();
        PackageInfo info = null;
        try {
            info = manager.getPackageInfo(getReactApplicationContext().getPackageName(), 0);
            return info;
        } catch (Exception e) {
            e.printStackTrace();
        } finally {

            return info;
        }
    }

    @ReactMethod
    public void getStrings(Callback successCallback) {
        successCallback.invoke("我是android 返回的字符串");
    }

    /**
     * Promise方式
     * @param name
     * @param promise
     */
    @ReactMethod
    public void promiseMethod(String name, Promise promise) {
        WritableMap writableMap = new WritableNativeMap();

        writableMap.putString("age","20");
        writableMap.putString("time",Tools.TestString());

        WritableMap map = Arguments.createMap();
        map.putString("name","zhangsan");
        writableMap.putMap("map", map);

        promise.resolve(writableMap);
    }

}
```

- 添加testPackage.java

```java

package com.jieapp;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class TestPackage implements ReactPackage {

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }

    @Override
    public List<NativeModule> createNativeModules(
            ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();

        // 添加一个安卓原生的activity模块
        modules.add(new TestManager(reactContext));

        return modules;
    }

}
```

- 在MainApplication.java中注册

```java
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
          // Packages that cannot be autolinked yet can be added manually here, for example:
          // 添加自定义的package
          packages.add(new TestPackage());
          return packages;
        }

        @Override
        protected String getJSMainModuleName() {
          return "index";
        }
      };

```

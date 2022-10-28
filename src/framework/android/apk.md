# APK分包

``` java
android {
  ...
  splits {

    // 基于不同的abi架构配置不同的apk
    abi {

      // 必须为true，打包才会为不同的abi生成不同的apk
      enable true
     
      // 默认情况下，包含了所有的ABI。
      // 所以使用reset()清空所有的ABI，再使用include指定我们想要生成的架构armeabi-v7a、arm-v8a
      reset()

      // 逗号分隔列表的形式指定 Gradle 应针对哪些 ABI 生成 APK。只与 reset() 结合使用，以指定确切的 ABI 列表。
      include "armeabi-v7a", "arm64-v8a"

      // 是否生成通用的apk，也就是包含所有ABI的apk。如果设为 true，那么除了按 ABI 生成的 APK 之外，Gradle 还会生成一个通用 APK。
      universalApk true
    }
  }


  
  buildTypes {
      debug {
          signingConfig signingConfigs.debug
      }

      release {
          // TODO: Add your own signing config for the release build.
          // Signing with the debug keys for now, so `flutter run --release` works.
          signingConfig signingConfigs.release
          
      }

      // 为不同的abi架构配置不同的签名
      applicationVariants.all { variant ->
          variant.outputs.all { output ->
  
              String abi = ""
              if (output.getFilters() != null && output.getFilters().size() > 0) {
                  abi = output.getFilters().get(0).getIdentifier()
              }
              println abi
              if(abi == "armeabi-v7a") {
                  output.outputFileName = "app-armeabi-v7a.apk"
              } else if(abi == "arm64-v8a") {
                  output.outputFileName = "jieapp.apk"
              }
          }

      }

    }
}
```
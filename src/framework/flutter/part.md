# 代码片段

## 按条件导包
```dart
// 如果都不满足默认导入default
import 'package:default.dart'
   if (dart.library.io) 'package:io.dart'
   if (dart.library.js) 'package:js.dart'
   if (dart.library.html) 'package:html.dart';
```

## 跟换icon

[flutter_launcher_icons](https://pub.dev/packages/flutter_launcher_icons)

- 在pubspec.yaml添加配置
  
```yaml
dev_dependencies:
  flutter_test:
    sdk: flutter

  flutter_launcher_icons: ^0.10.0

flutter_icons:
  android: launcher_icon
  ios: true
  image_path: assets/logo.png
  min_sdk_android: 21 # android min sdk min:16, default 21
  web:
    generate: true
    image_path: assets/logo.png

  windows:
    generate: true
    image_path: assets/logo.png
    icon_size: 48 # min:48, max:256, default: 48

```
  
- 运行命令
  
```sh
flutter pub run flutter_launcher_icons:main
```
# 代码片段

## 按条件导包
```dart
// 如果都不满足默认导入default
import 'package:default.dart'
   if (dart.library.io) 'package:io.dart'
   if (dart.library.js) 'package:js.dart'
   if (dart.library.html) 'package:html.dart';
```
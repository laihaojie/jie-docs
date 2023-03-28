# 打包

## 命令

```bash
# 创建项目
flutter create --org com.xxxx  -i swift -a java project_name

# 打包 apk
flutter build apk

# 打包 aab
flutter build appbundle

# 根据不同的 abi 架构配置不同的 apk
flutter build apk --split-per-abi # 按abi分包

# android 混淆 
# 文档 https://www.jianshu.com/p/4dd5e5977f36
flutter build apk --obfuscate --split-debug-info=/<project-name>/<directory>
flutter build apk --obfuscate --split-debug-info=./symbols
flutter build appbundle --obfuscate --split-debug-info=./symbols


# 清理全局缓存
dart pub cache clean
```
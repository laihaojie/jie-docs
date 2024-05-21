# uniapp 代码片段

## css变量

`--status-bar-height` 系统状态栏高度
`--window-top` 内容区域距离顶部的距离
`--window-bottom` 内容区域距离底部的距离

获取上安全距离： env(safe-area-inset-top)

获取左安全距离：env(safe-area-inset-left)

获取右安全距离：env(safe-area-inset-right)

获取下安全距离：env(safe-area-inset-bottom)

可以在底部的盒子加下内边距 padding-bottom: env(safe-area-inset-bottom) 避免元素被遮挡。

## 去除首页警告弹窗

```json
// 在manifest.json  app-puls中添加
{
  "app-plus": {
    "compatible": {
      "ignoreVersion": true
    }
  }
}
```

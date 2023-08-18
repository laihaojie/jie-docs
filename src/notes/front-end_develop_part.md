# 前端开发代码片段

## JS

```js
// 弹出确认框
ElMessageBox.confirm('您确定要删除吗?', '提示', { type: 'warning' }).then(async () => {
  await Api.removeCognition(item.id)
  loadData()
  ElMessage.success('删除成功')
}).catch(() => { })

// 弹出输入框
ElMessageBox.prompt('请输入', '提示').then(async ({ value }) => {
  savePlantree(value)
}).catch(() => { })
```

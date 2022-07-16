# 常用css

## unocss
- `line-clamp-2` 文字溢出...
- `whitespace-pre-wrap`  pre标签文字换行

## css

```css
/* 文本溢出... */
white-space:nowrap;
text-overflow:ellipsis;
overflow:hidden;

/* 多行文本溢出 */
display:-webkit-box;
-webkit-box-orient:vertical;
-webkit-line-clamp:2;
overflow:hidden;
```
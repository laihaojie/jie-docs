# 常用css

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

/* 下滑线 */
text-decoration:underline;
/* 中横线 */
text-decoration:line-through;

/* pre标签文字换行 */

pre {
    white-space: pre-wrap; /* css-3 */
    word-wrap: break-word; /* InternetExplorer5.5+ */
    white-space: -moz-pre-wrap; /* Mozilla,since1999 */
    white-space: -pre-wrap; /* Opera4-6 */
    white-space: -o-pre-wrap; /* Opera7 */
}
/* 删除默认样式 */
button {
   all: unset;
}

/* css渐变 */
#grad {
    /* 从上到下 */
    background-image: linear-gradient(red, yellow);
    /* 从左到右 */
    background-image: linear-gradient(to right, red , yellow);
}

/* 隐藏滚动条 */
.wrapper::-webkit-scrollbar { /* 整个滚动条 */  
    width: 0; /* 纵向滚动条的宽度  */  
    background: rgba(213,215,220,0.3);
    border: none;
    height: 10px;
}
.wrapper::-webkit-scrollbar-track { /* 滚动条轨道  */  
    border: none;   
}
/* 横向滚动条宽度  */  
.wrapper::-webkit-scrollbar-thumb { /* 滚动条里面的小方块  */  
    border-radius: 10px;
    background: #ccc;
}
```

## 灰色滤镜
```css
html.gray {
    filter: grayscale(85%) saturate(80%);
    -webkit-filter: grayscale(85%) saturate(80%);
    -moz-filter: grayscale(85%) saturate(80%);
    -ms-filter: grayscale(85%) saturate(80%);
    -o-filter: grayscale(85%) saturate(80%);
    filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale");
    filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=.85);
    -webkit-filter: grayscale(.85) saturate(.8);
}
```


## 引入字体图标
```css
/* 导入 */
@font-face {
  font-family: 'font-name';
  src: url('/font.ttf'), url('/font.woff') format('truetype'),
}
/* 使用 */
.text{
  font-family: 'font-name';
}
```
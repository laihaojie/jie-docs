# JavaScript

## 第一章 什么是JavaScript

### 1.1 JavaScript历史 

```
JavaScript诞生于1995年 原名叫(LiveScript)
1997年,JavaScript 1.1作为提案被提交给欧洲计算机制造商协会(Ecma) . 第39技术委员会(TC39).承担了"标准化一门通用,跨平台,厂商中立的脚本语言的语法和语义"的任务.
```

### 1.2 JavaScript的实现

```
JavaScript是由 ECMAScript + DOM + BOM 组成

核心(ECMAScript) + 文档对象模型(DOM) + 浏览器对象模型(BOM)
DOM document
BOM window location navigator screen history
```

## 第二章 HTML中的JavaScript

### 2.1 \<script>元素

```
scr属性: 设置外部文件的url地址或本地文件地址
defer属性: 可是使得js代码等到文档完全解析完成在解析当前js文件
async属性: 异步加载js文件 但不能保证js文件加载顺序
```

### 2.2 行内代码

```
虽然可以直接在HTML文件中嵌入JavaScript代码 但通常认为尽可能把代码放入外部文件当中, 优势主要有 可维护性高 浏览器可缓存 适应未来
```

### 2.3 文档模式

```
分为混杂模式和标准模式 主要区别在于如何对待图片元素周围的空白(在表格中使用图片最明显)
```

### 2.4 \<noscript>元素

```
noscript 只有浏览器不支持脚本 或者 浏览器对脚本的支持关闭 才会显示其中的内容否则不会显示
```

## 第三章 语言基础

### 3.1语法

```
一切都区分大小写 无论是变量,函数名,操作符都区分大小写
标识符: 第一个字必须是 字母, 下划线, 美元符, 或者数字
注释: 单行注释 // 或者 多行注释 /* */
严格模式: 在文件首行添加字符串 "use strict"
```

### 3.2 关键字与保留字

```
关键字: break do in typeof case else instanceof var class extends return while const finally super with continue for switch yield debugger function this default if throw delete import try
保留字:始终保留: enum 严格模式下保留: implements package public interface protected static let private 模板代码中保留: await
```

### 3.3 变量

```
变量声明:
 var 函数的局部作用于 可以重复定义 存在变量提升问题
 let 代码块作用域  重复定义会报错 不存在变量提升问题
    const 代码块作用域 顶层不可修改 修改会报错 不存在变量提升    问题
```

### 3.4 数据类型

```
typeof 数据类型判断
Undefined 类型
Number 类型
String 类型
Object 类型
Boolean 类型
Null 类型
Symbol 类型
```

### 3.5 操作符

```
非数字类型会使用Number()进行转换 操作符遇到对象视情况而定使用对象的valueOf()或toString()

一元操作符: 单个变量进行运算操作  (+)(-)
位操作符: 二进制数转十进制 ((2**当前位数) * 当前值) + .....
布尔操作符: 逻辑非(!) 取反, 逻辑与(&&) 看前面一个值是否是对象或为true 返回后一个值,否则与之相反  逻辑或(||)  看前面一个是否是对象或者为true 返回前面一个,否则与之相反
乘性操作符:  (*) (/)
指数操作符:  (**)
加性操作符: 两个变量进行运算操作 (+) (-)
关系操作符:(>) (<) (<=) (>=)  返回值为布尔值
相等操作符: (==) (!=) 会进行类型转换比较 (===) (!==)进行类型比较 类型相等进行判等比较
条件操作符: 就是三元运算符  boolean类型 ? 变量A : 变量B
赋值操作符:(*=) (+=) (-=) (%=) (/=) (<<=) (>>=) (>>>=)
逗号操作符: 可以进行分隔操作 但是在赋值操作中 去最后一个逗号后面的
```

### 3.6 语句

```txt
if 语句
do-while 语句
while 语句
for for-in for-of 语句
标签语句
break 和 continue 语句
with 语句
switch 语句
函数

标签语句:
start: for (let i = 0;i < count; i ++){
 console.log(i) // 这里的start就是标签
 可以使用 break start 退出到指定位置
}

```

## 第五章 基本引用类型

### 5.1 Date

```javascript
const date = new Date() 
获取时间毫秒数: date.getTime()
获取年份: date.getFullyear()
获取月份: date.getMonth() + 1
获取日: date.getDate()
获取星期几: date.getDay()
获取小时: date.getHours()
获取分钟: date.getMinutes()
获取秒: date.getSeconds()
获取毫秒: date.getMilliseconds()
```

### 5.2 RegExp

```javascript
const reg = new RegExp()
```

### 5.3 原始值包装类型

```javascript
Boolean Number String
const bool = new Boolean()
const num = new Number()
toFixed(2) 返回包含指定小数点位数值字符串
isInteger() 判断是个数值是否为整数
const str = new String()
字符串的操作方法:
concat(...str) 用于将一个或者多个字符串拼接成一个新的字符串
slice() substr() 方法 字符串截取
indexOf(str) 返回字符在字符串中的位置没有找到返回-1
includes(str) 判断子字符串是否在字符串中 返回布尔值
trim() 去除字符串两边的空白
repeat(3) 复制3次字符串
padStart() padEnd() 复制字符串 第一个参数是复制的长度第二个参数 如果长度没有达到默认用第二个参数填补
toLocaleLowerCase() 将字符串转为小写
toLocaleUpperCase() 将字符串转为大写
match() 字符串匹配方法 参数可传正则
```

### 5.4 单列内置对象

```javascript
Global对象  其实就是平常使用的全局方法比如 isNaN() isFinite() parseInt() ParseFloat() 
URL编码方法
编码: encodeURIComponent()
解码: decodeURIComponent()
eval() 该方法可以看做一个完整的JavaScript解释器 可以执行js代码 eval("console.log('hello world')")
window对象 document对象

Math
Math.max() 最大值
Math.min() 最小值
Math.ceil() 向上取整
Math.floor() 向下取整
Math.round() 四舍五入
Math.random() 返回0-1的随机小数
生成 min-max的随机数:
function random(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
```

## 第六章 集合引用类型

### 6.1 Object

```
对象创建方式: 
const obj = new Object() 或者字面量 const obj = {}

```

### 6.2 Array

```
数组创建方式:
const arr = new Array() 或者字面量 const arr = []

Array静态方法: Array.from() Array.of()  创建数组 参数为可迭代对象

数组可以用逗号 ,  占位 未赋值的为undefined
可以直接修改arr.length 来修改数组长度

Array.isArray() 可以检测是否为数组

迭代器方法: keys() values() entries() 返回的都是迭代器

栈方法: push() 在最后一个位置添加 pop() 删除最后一个元素

队列方法: shift() 删除数组第一个元素并返回 unshift()在第一个位置添加元素

排序方法: reverse() 数组反转 sort((a,b)=>a-b) 可以传一个函数 
                                  
操作方法: concat() 合并数组 slice() 切割数组 
splice(1,2,3)第一个参数索引 第二个参数删除个数 第三个添加元素 

find((value,index,arr)=>value==1) 查找元素 满足条件退出不在继续匹配

迭代方法:
一下方法都需传入函数
(value,index,arr)=> boolea
arr.every() arr.some() 返回布尔类型 判断是否满足条件
arr.filter() 过滤数组
arr.forEach() 遍历数组
arr.map() 根据返回结果构成新数组

```

### 6.4 Map

### 6.6 Set

​

## 第十章 函数

### 10.1 箭头函数

```
()=>{return }
只有一个参数可以不写括号
函数体只有一行可以不不写大括号 默认返回函数体执行结果 没有返回undefined

```

### 10.2 函数名

```
函数名其实是指向函数的指针 函数名==指针 指针 + () 可以调用函数
指针.name 可以获取函数名的字符串结果
```

### 10.3 理解参数

```
函数的参数都不是必传的  
也可以不写命名参数
如果没有写命名参数 可以从函数中 arguments里面获取值
arguments是一个数组  但不是 Array的实例

箭头函数中没有arguments
```

### 10.4 没有重载

```
默认没有重载
如果重新定义函数默认会覆盖之间的定义
```

### 10.5 默认参数值

```
只需要在定义时括号内写 (name='慧慧子')
如果传了使用传过来的结果 没传使用默认参数
还可以写成 (name=nikename)
默认参数可以写变量
```

### 10.6 参数扩展与收集

```
扩展参数可以使用三个点来解构 ...arr 后面跟着的是一个可迭代对象
如果还有命名参数 扩展参数必须写在命名参数后面  因为不确定 可迭代对象里面有多少值 可能会发生位置错乱
```

### 10.7 函数申明与函数表达式

```
如果是用函数声明的方式定义的函数 调用该函数的时候不需要在乎调用位置 因为 函数声明会提升 全部提升到源代码顶部
```

### 10.8 函数作为值

```
函数也可以作为一个值来给别处使用 比如说常见的闭包
```

### 10.9 函数内部

```
函数内部存在两个特殊的对象 arguments 和 this
arguments对象有一个属性callee 该属性指向的是函数的指针
可以通过该属性来调用当前函数

this 如果在全局中指向的是window
在箭头函数中指向的是箭头函数的上下文

caller属性可以获取谁调用的它
```

### 10.10 函数属性与方法

```
每个函数都有两个属性和方法 length prototype
length 是函数命名参数的个数
prototype 原型链 tostring() valueof() 都是放在原型链上

call() apply() bind()
第一个参数都是this上下文 指定当前函数this指向 call apply 都是直接调用函数 区别是第二个参数传入方式不同  bind 是返回一个函数指针后续调用
```

### 10.11 函数表达式

```
function(){} 匿名函数 兰姆达
```

### 10.12 递归

```javascript
// 自己调用自己
function fib(n){
    if(n<2){
        return n
    }
    return fib(n -1) + fib(n - 2)
}
    
```

### 10.13 尾调用优化

```
function waibu(){
 return neibu()
}
```

### 10.14 闭包

```
闭包指的是那些引用了另一个函数作用域中的变量的函数  通常函数嵌套内存函数引用了外层函数的变量就叫做闭包   

闭包会占用内存比较多


this

谁调用this指向谁   不确定很模糊指向window

```

### 10.15 立即调用的函数表达式

```
(function(){})();  函数的自调用  
自调用函数会产生一个块级作用域 外部不能访问函数内部
```

### 10.16 私有变量

```
javascript是没有私有变量的概念的    但是在函数中或者在局部作用域中的参数或者定义的变量  外部是不能访问的 那这些变量对于外部来说可以当做私有变量  

外部如果想访问内部变量 内存函数使用外部函数的变量 可以在局部函数中通过闭包的方式返回给外部使用 



```

## 第十二章 BOM

### 12.1 window对象

```javascript
BOM的核心是window对象 在浏览器中是ECMAScript的Global对象
Global作用域中 var定义的变量是挂载到window上面的
获取浏览器视口大小:
let pageWidth = window.innerWidth,
    pageHeight = window.innerHeight;
if(typeof pageWidth != "number"){
    if(document.compatMode == "CSS1Compat"){  // 检查页面是否属于标准模式
        pageWidht = document.documentElement.clientWidth
        pageHeight = document.documentElement.clientHeight
    } else {
        pageWidth = document.body.clientWidth
        pageHeight = document.body.clientHeight
    }
}

导航与打开新窗口:
window.open() 第一个参数为目标地址  第二个参数为窗口名称

定时器:
JavaScript 在浏览器中是单线程执行的
setTimeout() 指定一段时间后指定某些带代码
setInterval() 指定每隔一段时间执行某些代码
都会返回一个定时ID 可以用 clearTimeout clearInterval 取消定时任务
一般来说尽量是不要使用setInterval 如果不主动取消 只能通过页面卸载清除

系统对话框:
alert() confirm() prompt()
alert 弹出一个警告框
confirm 弹出一个选择框
prompt 弹出一个输入框


```

### 12.2 location对象

```
location属性列表:
hash URL散列值 (#后面的字符串)
host 服务器名及端口号
hostname 服务器名
herf 当前完整的url
pathname URL中的路径
port 请求的端口
protocol 页面使用的协议
search URL 的查询字符串
username 域名前指定的用户名
password 页面前指定的密码
origin URL的源地址
```

### 12.3 navigator对象

```
navigator在各个浏览器都有不同 都有自己的属性
里面的属性和方法都是关于浏览器本身的属性 比如appVersion查看浏览器版本 mediaDevices 返回可用媒体设备 onLine检测是否联网
```

### 12.4 screen对象

```
screen对象可以获取浏览器窗口显示的信息 比如获取屏幕像素宽高 screen.width screen.height
```

### 12.5 history对象

```
对于当前窗口 go() 方法 可以返回指定历史页面 负数为后退 正数为前进 如果历史页面不存在不做任何跳转
后退一页 history.back() 前进一页 history.forward()
```

## 第十四章 DOM

### 14.1 节点层级

```
document节点表示每个文档的根结点 唯一一个子节点是<html>元素  <html>元素我们称之为文档元素

Node类型:
所有节点类型都继承自Node类型

节点关系:
文档中所有节点都与其他节点有关系
每个节点都有childNodes 属性 该属性返回所有子节点

节点操作:
appendChild()填在子节点末尾添加  insertBefore()有两个参数第一个参数为更新的节点第二个参数为插入位置的后节点 意思就是新节点会添加在传入的第二个参数节点前面  replaceChild()第一个参数为新节点 第二个参数为要替换的节点

Document类型:
文档对象 document 是HTMLDocument 的实例 HTMLDocument继承自Document 表示整个HTML页面 document是window对象的实例

浏览器标题 document.title

获取完整的URL document.URL

获取域名 document.domain

获取来源 document.referrer

定位元素:
getElementById() 传入一个id值 区分大小写
getElementsByTagName() 传入一个标记名称 返回HTMLCollection 列表 提供一个额外的筛选方法 可以用过属性来筛选 通过namedItem()传入属性值来获取单一节点
getElementByname() 根据节点的name属性值来筛选 返回节点列表

文档写入:
document.write()

属性操作:
getAttribute() 传入属性名称可以获取属性值
setAttribute() 两个参数 第一个属性名 第二个属性值 如果有该属性则覆盖
removeAttribute()

创建元素:
document.createElement() 传入一个参数 标签名  返回一个节点 让后通过appendChild()添加至文档树

```

### 14.2 DOM编程

```
动态脚本:
let script = document.createElement("script");
script.src = "index.js";
document.body.appendChild(script);

动态样式:
let link = document.createElement('link');
link.rel = "stylesheet";
link.type = "text/css";
link.href = "index.css";
let head = document.getElementsByTagName("head")[0];
head.appendCHild(link);

MutationObserv 接口:
过给构造函数传入一个回调函数 生成观察者对象(Observe)
let observe = new MutationObserve((mutationRecords)=>{console.log("Hello!")})
observe.observe(document.body,{attributes:true})
document.body.className = 'hello' // 打印Hello

上面代码监控了 body的属性变化 如果body属性发生改变可以触发回调函数


```

## 第十五章 DOM扩展

### 15.1 Selectors API

```
querySelector() 方法接收CSS选择符参数 返回DOM树中查询到的第一个节点
querySelectorAll() 方法接收CSS选择符参数 返回多个结果 NodeList 的静态实例
matches() 返回布尔值 检测是否可以被querySelector查找
```

### 15.2 元素遍历

```

```

### 15.3 HTML5

```
css扩展类:
getElementsByClassName() 
clasList 节点的类名列表 可以通过add remove来操作class
<div id="app" data-id="123" data-name="好好">hello</div>
let div = document.getElementById("app")
div.dataset.id
div.dataset.name
自定义属性 data-  通过dataset 取值  

innerHtml: 会返回该节点所有后代HTML字符串 如果赋值则更新dom
outerHTMl: 会返回该节点本身和所有后代HTML字符串 如果赋值则更新dom

children 返回只包含Element 类型的子节点
contains() 确定节点是否是当前节点的子节点 返回布尔值




```

## 第十六章 DOM2 DOM3

```
let app = document.getElementById("app")
app.style.cssText = ----
cssText可以获取元素css 也可以快速设置多个css


offsetHeight 元素在垂直方向占用的尺寸 盒模型高度
offsetWidth 元素在水平方向占用的像素尺寸 盒模型宽度
offsetLeft 元素距离左边框的距离
offsetTop 元素距离上边框的距离

元素尺寸 不算边框
clientHeight 内容区域高度 不算边框
clientWidth 内容区域宽度 不算边框

滚动尺寸
scrollHeight
scrollLeft
scrollTop
scrollWidth

```

## 第十七章 事件

### 17.1 事件流

```
let btn = document.getElementById("app")
btn.addEventListener("click",()=>{})


事件流包含两个阶段  事件捕获和事件冒泡
事件捕获是从根节点 document 传递到div 然后事件冒泡是从div 传递到document

阻止事件冒泡的方式

1.event.stopPropagation();
事件处理过程中，阻止了事件冒泡，但不会阻击默认行为

2.return false;
事件处理过程中，阻止了事件冒泡，也阻止了默认行为

事件类型:
用户界面事件 load 加载完成后触发(检测img元素是否加载完成) unload 页面卸载后触发
键盘事件 keydown 可以通过event.keyCode来判断按下的那个键
焦点事件 鼠标事件 滚轮事件 输入事件 合成事件

事件委托 利用事件冒泡原理 在最顶层做处理 依次判断事件源从哪个元素发出然后处理响应逻辑


```

## 第二十三章 JSON

### 23.1  语法

```
JSON 语法支持表示三种类型的值
简单值: 字符串 数值 布尔值 和 null
对象:对象表示有序键值对 每个值可以是简单值 也可以是复杂类型
数组: 数组表示可以通过数值索引访问的值的有序列表,数组的值可以是任意类型,包括简单值,对象,甚至其它数组
```

### 23.2 解析与序列化

```
JSON 对象 有两个方法
stringify() 将JavaScript数据类型转为json类型 有三个参数 第一个转化对象 第二个过滤字段规则可以传对象里面键值的数组,转化结果就只包含传了的结果 第二个参数还可以是一个函数 该函数第一个参数是key 第二个为value 也可以根据key值过滤 第三个为字符串缩进起到美化输出的作用
parse() 将json类型转为JavaScript类型
```

## 第二十四章 网络请求与远程资源

### 24.1 XMLHttpRequest 对象

## 第二十五章 客户端存储

### 25.1 cookie

```
document.cookie 

限制:
不超过300个cookit
每个cookit不超过4096字节
每个域不超过20个cookie
每个域不能超过81920字节
每个域能设置cookie总数也是受限制的,但不同浏览器的限制不同


```

### 25.2 Web Storage

```
localStorage 本地持久化存储
方法取值:localStorage.getItem("name")
方法存值:localStorage.setItem("name","hello")
删除方法:localStorage.removeItem("name")]
属性取值:localStorage.name
属性存值:localStorage.name = "hello"
当Storage对象发生变化之后会在文档上触发storage事件

sessionStorage
存储方式跟localStorage一样
值存储回话数据, 数据只会存储到浏览器关闭.这跟浏览器关闭时会消失的回话cookie类似

localStorage sessionStorage 存值限制为 每个源 5MB
```

### 25.3 IndexDB

```
是浏览器中存储结构化数据的一个方案 IndexDB使用对象存储而不是表格保存数据. IndexDB数据库就是在一个公共命名空间下的一组对象存储,类似于NoSQL风格的实现
```

# JSDoc中给函数参数添加类型

## 第三方库类型

```javascript
/**
 * @param {import('axios').AxiosRequestConfig} config
 */
function foo(config) {
  // ...
}
```

## 1. 基本类型

```javascript
/**
 * @param {number} a
 * @param {string} b
 * @param {boolean} c
 * @param {object} d
 * @param {Array} e
 */
function foo(a, b, c, d, e) {
  // ...
}
```

## 2. 可选参数

```javascript
/**
 * @param {number} [a]
 * @param {string} [b]
 * @param {boolean} [c]
 * @param {object} [d]
 * @param {Array} [e]
 */
function foo(a, b, c, d, e) {
  // ...
}
```

## 3. 默认值

```javascript
/**
 * @param {number} [a]
 * @param {string} [b]
 * @param {boolean} [c]
 * @param {object} [d]
 * @param {Array} [e]
 */
function foo(a, b, c, d, e) {
  // ...
}
```

## 4. 可选参数和默认值

```javascript
/**
 * @param {number} [a]
 * @param {string} [b]
 * @param {boolean} [c]
 * @param {object} [d]
 * @param {Array} [e]
 */
function foo(a, b, c, d, e) {
  // ...
}
```

## 5. 可变参数

```javascript
/**
 * @param {...number} a
 * @param {...string} b
 * @param {...boolean} c
 * @param {...object} d
 * @param {...Array} e
 */
function foo(a, b, c, d, e) {
  // ...
}
```

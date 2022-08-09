# JS浮点数运算

[bignumber.js](https://github.com/MikeMcl/bignumber.js)

- 安装
  
```sh
pnpm install bignumber.js
```

- 使用

```js
import BigNumber from 'bignumber.js'

a = new BigNumber(1011, 2) // "11"
b = new BigNumber('zz.9', 36) // "1295.25"
c = a.plus(b) // "1306.25"
```

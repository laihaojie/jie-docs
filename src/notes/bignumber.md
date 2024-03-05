# JS浮点数运算

[`decimal.js`](https://github.com/MikeMcl/decimal.js)

[`bignumber.js`](https://github.com/MikeMcl/bignumber.js)

- 安装

::: code-group

```sh [decimal.js]
pnpm install decimal.js
```

```sh [bignumber.js]
pnpm install bignumber.js
```

:::

- 使用

::: code-group

```js [decimal.js]
import Decimal from 'decimal.js'

const a = new Decimal(0.1) // 0.1
const b = new Decimal(0.2) // 0.2
const c = a.plus(b) // 0.3
console.log(c.toNumber())
```

```js [bignumber.js]
import BigNumber from 'bignumber.js'

const a = new BigNumber(0.1) // 0.1
const b = new BigNumber(0.2) // 0.2
const c = a.plus(b) // 0.3
console.log(c.toNumber())
```

:::

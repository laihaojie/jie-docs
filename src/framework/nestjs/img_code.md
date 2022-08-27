# 图片验证码

- 安装

```sh
pnpm i svg-captcha svg-to-dataurl
```

```js
import svgCaptcha from 'svg-captcha'
import svgToDataURL from 'svg-to-dataurl'

const captcha = svgCaptcha.create({
  inverse: false, // 翻转颜色
  fontSize: 38, // 字体大小
  noise: 2, // 噪声线条数
  width: 150, // 宽度
  height: 40, // 高度
  size: 6, // 验证码长度
  charPreset: '0123456789',
  // background: 'white',
  ignoreChars: '0o1i', // 验证码字符中排除 0o1i
})
// 生成的随机验证码
const code = captcha.text
// 生成的图片
const img = svgToDataURL(captcha.data)
```
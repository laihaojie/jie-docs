# Eslint

- 安装 eslint

```sh
pnpm i eslint @djie/eslint-config -D
```

 [*@djie/eslint-config*](https://github.com/laihaojie/eslint-config)这个包是我个人自己使用的eslint配置文件, 在[@antfu](https://github.com/antfu/eslint-config)的基础上改的

- 新建 eslint.config.js 文件

```js
// {
//   "extends": ["@djie"]
//   // "overrides": [{
//   //   "files": ["*.nvue"],
//   //   "extends": ["@djie/eslint-config-vue"]
//   // }]
// }
import jie from '@djie/eslint-config'

export default jie()
```

- 在package.json中添加配置

```json
{
  "scripts": {
    "lint:fix": "eslint . --fix",
    "lint": "eslint ."
  }
}
```

- vscode 配置

```json
{
  // Enable the ESlint flat config support
  "eslint.experimental.useFlatConfig": true,

  // Disable the default formatter, use eslint instead
  "prettier.enable": false,
  "editor.formatOnSave": false,

  // Auto fix
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit",
    "source.organizeImports": "never"
  },

  // Silent the stylistic rules in you IDE, but still auto fix them
  "eslint.rules.customizations": [
    { "rule": "style/*", "severity": "off" },
    { "rule": "*-indent", "severity": "off" },
    { "rule": "*-spacing", "severity": "off" },
    { "rule": "*-spaces", "severity": "off" },
    { "rule": "*-order", "severity": "off" },
    { "rule": "*-dangle", "severity": "off" },
    { "rule": "*-newline", "severity": "off" },
    { "rule": "*quotes", "severity": "off" },
    { "rule": "*semi", "severity": "off" }
  ],

  // Enable eslint for all supported languages
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml"
  ]
}
```

## 配置改动

```js
// 新加的
rules = {
  'vue/html-indent': 'off',
  'vue/html-closing-bracket-newline': 'off',
  'vue/html-self-closing': 'off',
  'vue/first-attribute-linebreak': 'off',
  'vue/singleline-html-element-content-newline': 'off'
}

// 修改的
rules = {

}
```

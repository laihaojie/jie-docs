# Eslint

- 安装 eslint

```sh
pnpm i eslint @djie/eslint-config -D
```

 [*@djie/eslint-config*](https://github.com/laihaojie/eslint-config)这个包是我个人自己使用的eslint配置文件, 在[@antfu](https://github.com/antfu/eslint-config)的基础上改的

- 新建 .eslintrc 文件

```json
{
  "extends": ["@djie"]
  // "overrides": [{
  //   "files": ["*.nvue"],
  //   "extends": ["@djie/eslint-config-vue"]
  // }]
}
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
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "vue",
    "html",
    "vue-html",
    "nvue"
  ],
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.tabSize": 2
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

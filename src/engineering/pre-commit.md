# 代码格式化

## 使用simple-git-hooks

- 安装 [simple-git-hooks](https://www.npmjs.com/package/simple-git-hooks) 和 [lint-staged](https://www.npmjs.com/package/lint-staged)

```sh
pnpm i simple-git-hooks lint-staged -D
```

- 在package.json中添加配置

```json
{
  "script": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "prepare": "simple-git-hooks"
  },
  "simple-git-hooks": {
    "pre-commit": "npx.cmd lint-staged"
    // "pre-commit": "pnpm exec lint-staged --concurrent false"
    // All unused hooks will be removed automatically by default
    // but you can use the `preserveUnused` option like following to prevent this behavior

    // if you'd prefer preserve all unused hooks
    // "preserveUnused": true,

    // if you'd prefer preserve specific unused hooks
    // "preserveUnused": ["commit-msg"]
  },
  "lint-staged": {
    "*.{js,ts,tsx,vue,md,json}": [
      "eslint --fix"
    ]
  }
}
```

- 更新githooks

```sh
# [Optional] These 2 steps can be skipped for non-husky users
git config core.hooksPath .git/hooks/
rm -rf .git/hooks

# Update ./git/hooks
npx simple-git-hooks
```

设置完成之后 git commit 之前就会触发lint检查, 看是否有错误

## 使用husky

- 安装 [husky](https://www.npmjs.com/package/husky) 和 [lint-staged](https://www.npmjs.com/package/lint-staged)

```sh
pnpm i husky lint-staged -D
```

- 在package.json中添加配置

```json
{
  "script": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "prepare": "husky install"
  },
  "lint-staged": {
    "*.{js,ts,tsx,vue,md,json}": [
      "eslint --fix"
    ]
  }
}
```

- 运行命令

```bash
npx husky install
npx husky add .husky/pre-commit "pnpm exec lint-staged"
```

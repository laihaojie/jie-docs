# 代码格式化 

## GitHooks & lint-staged

- 安装 simple-git-hooks 
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
    // "pre-commit": "npx lint-staged"
    "pre-commit": "pnpm exec lint-staged --concurrent false"
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
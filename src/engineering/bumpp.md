<!-- bumpp -->

# Bumpp

## 安装

::: code-group

  ```bash [pnpm]
  pnpm add bumpp -D
  ```

  ```bash [yarn]
  yarn add bumpp -D
  ```

  ```bash [npm]
  npm install bumpp -D
  ```
:::

## 使用
```bash
bumpp --commit --push --all --tag
```

## 只升级版本
```bash
bumpp patch -y --no-verify --no-tag --no-commit --no-push
```

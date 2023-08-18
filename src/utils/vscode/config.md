# VsCode配置

## eslint 配置

```json
{
  "editor.formatOnSave": true,
  "editor.formatOnType": true,
  "eslint.codeAction.showDocumentation": {
    "enable": true
  },
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "editor.tabSize": 2,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "javascriptreact",
    "html",
    "typescriptreact",
    "vue"
  ]
}
```

## vim 插件配置

```json
{
  "vim.handleKeys": {
    "<C-c>": false,
    "<C-a>": false,
    "<C-x>": false,
    "<C-f>": false,
    "<C-h>": false,
    "<C-s>": false,
    "<C-z>": false,
    "<C-y>": false
  },
  "vim.normalModeKeyBindings": [
    {
      "before": ["H"],
      "after": ["^"]
    },
    {
      "before": ["L"],
      "after": ["g", "_"]
    }
  ],
  "vim.operatorPendingModeKeyBindings": [
    {
      "before": ["H"],
      "after": ["^"]
    },
    {
      "before": ["L"],
      "after": ["g", "_"]
    }
  ]
}
```

## 窗口颜色配置

```json
{
  "workbench.colorCustomizations": {
    "activityBar.background": "#580B3E",
    "titleBar.activeBackground": "#7B0F56",
    "titleBar.activeForeground": "#FFFCFE"
  }
}
```

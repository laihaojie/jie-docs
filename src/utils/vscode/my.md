<!-- 个人配置 -->

```json
{
  "workbench.editorAssociations": {
    "*.ipynb": "jupyter.notebook.ipynb"
  },
  "jie.background": [
    {
      "key": "yyx",
      "description": "尤雨溪",
      "address": "https://s.laihaojie.com/public/images/rD6eNNb4Tk7N6KC.png"
    },
    {
      "key": "xjj",
      "description": "图一",
      "address": "https://img.tusu.cc/XL/Tu/2022/07/7082313558130391302.jpg"
    },
    {
      "key": "meinv",
      "description": "图二",
      "address": "https://s.laihaojie.com/img/image.png"
    },
    {
      "key": "emoji",
      "description": "emoji",
      "address": "https://s.laihaojie.com/img/smiling-face-with-sunglasses_1f60e.png"
    }
  ],
  "jie.defaultBackground": "yyx",
  // vim配置
  "vim.leader": "<Space>",
  "vim.easymotion": true,
  "vim.sneak": true,
  "vim.handleKeys": {
    "<C-c>": false,
    "<C-a>": false,
    "<C-x>": false,
    "<C-f>": false,
    "<C-r>": false,
    "<C-h>": false,
    "<C-s>": false,
    "<C-z>": false,
    "<C-y>": false,
    "<C-v>": false,
    "<C-i>": false,
    "<C-p>": false,
    "<C-d>": false
  },
  "vim.normalModeKeyBindings": [
    {
      "before": [
        "H"
      ],
      "after": [
        "^"
      ]
    },
    {
      "before": [
        "L"
      ],
      "after": [
        "g",
        "_"
      ]
    },
    {
      "before": [
        "J"
      ],
      "after": [
        "5",
        "j"
      ]
    },
    {
      "before": [
        "K"
      ],
      "after": [
        "5",
        "k"
      ]
    }
  ],
  "vim.normalModeKeyBindingsNonRecursive": [
    {
      "before": [
        "J"
      ],
      "after": [
        "5",
        "j"
      ]
    },
    {
      "before": [
        "K"
      ],
      "after": [
        "5",
        "k"
      ]
    },
    {
      "before": [
        "f"
      ],
      "after": [
        "s"
      ]
    },
    {
      "before": [
        "F"
      ],
      "after": [
        "S"
      ]
    },
    {
      "before": [
        "s"
      ],
      "after": [
        "c",
        "l"
      ]
    },
    {
      "before": [
        "S"
      ],
      "after": [
        "^",
        "C"
      ]
    }
  ],
  "vim.visualModeKeyBindings": [
    {
      "before": [
        "H"
      ],
      "after": [
        "^"
      ]
    },
    {
      "before": [
        "L"
      ],
      "after": [
        "g",
        "_"
      ]
    },
    {
      "before": [
        "J"
      ],
      "after": [
        "5",
        "j"
      ]
    },
    {
      "before": [
        "K"
      ],
      "after": [
        "5",
        "k"
      ]
    }
  ],
  "vim.visualModeKeyBindingsNonRecursive": [
    {
      "before": [
        "f"
      ],
      "after": [
        "s"
      ]
    }
  ],
  "vim.operatorPendingModeKeyBindings": [
    {
      "before": [
        "H"
      ],
      "after": [
        "^"
      ]
    },
    {
      "before": [
        "L"
      ],
      "after": [
        "g",
        "_"
      ]
    }
  ],
  "vim.operatorPendingModeKeyBindingsNonRecursive": [
    {
      "before": [
        "f"
      ],
      "after": [
        "z"
      ]
    },
    {
      "before": [
        "F"
      ],
      "after": [
        "Z"
      ]
    }
  ],
  "javascript.updateImportsOnFileMove.enabled": "always",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "security.workspace.trust.untrustedFiles": "open",
  "path-autocomplete.extensionOnImport": true,
  "liveServer.settings.donotShowInfoMsg": true,
  "cSpell.customDictionaries": {
    "custom-dictionary-user": {
      "name": "custom-dictionary-user",
      "path": "~/.cspell/custom-dictionary-user.txt",
      "addWords": true,
      "scope": "user"
    }
  },
  "git.autofetch": true,
  "git.confirmSync": false,
  "errorLens.enabledDiagnosticLevels": [
    "error",
    "warning"
  ],
  // copilot 配置
  "github.copilot.enable": {
    "*": true,
    "plaintext": true,
    "markdown": true,
    "scminput": false,
    "yaml": true,
    "javascript": true,
    "typescriptreact": true,
    "jsonc": true,
    "json": true
  },
  // volar 配置
  "volar.autoCompleteRefs": false,
  "volar.codeLens.pugTools": false,
  "volar.codeLens.scriptSetupTools": true,
  "volar.completion.preferredTagNameCase": "pascal",
  "files.associations": {
    "*.cjson": "jsonc",
    "*.wxss": "css",
    "*.wxs": "javascript",
    "*.nvue": "vue",
    "*.jie": "c:\\Users\\lu\\Documents\\my-project\\vscode-extension\\icons\\icon.svg"
  },
  "emmet.includeLanguages": {
    "wxml": "html"
  },
  // html提示配置
  "htmlhint.options": {
    "attr-lowercase": false
  },
  "minapp-vscode.disableAutoConfig": true,
  "editor.inlineSuggest.enabled": true,
  // 文件格式化配置
  "[vue]": {
    "editor.defaultFormatter": "Vue.volar"
  },
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "[json]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  // eslint
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
    {
      "rule": "style/*",
      "severity": "off"
    },
    {
      "rule": "*-indent",
      "severity": "off"
    },
    {
      "rule": "*-spacing",
      "severity": "off"
    },
    {
      "rule": "*-spaces",
      "severity": "off"
    },
    {
      "rule": "*-order",
      "severity": "off"
    },
    {
      "rule": "*-dangle",
      "severity": "off"
    },
    {
      "rule": "*-newline",
      "severity": "off"
    },
    {
      "rule": "*quotes",
      "severity": "off"
    },
    {
      "rule": "*semi",
      "severity": "off"
    }
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
  ],
  "explorer.confirmDelete": false,
  // "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  // 打开终端配置
  "terminal.integrated.profiles.windows": {
    "PowerShell": {
      "source": "PowerShell",
      "icon": "terminal-powershell"
    },
    "Command Prompt": {
      "path": [
        "${env:windir}\\Sysnative\\cmd.exe",
        "${env:windir}\\System32\\cmd.exe"
      ],
      "args": [],
      "icon": "terminal-cmd"
    },
    "Git Bash": {
      "source": "Git Bash"
    }
  },
  "terminal.integrated.defaultProfile.windows": "Git Bash",
  // git commit 插件配置
  "GitCommitPlugin.MaxSubjectWords": 30,
  // 修改底部状态栏颜色
  "workbench.colorCustomizations": {
    "statusBar.background": "#3C3C3C"
  },
  // 注释
  "editor.tokenColorCustomizations": {
    "comments": "#6b6b6b"
  },
  "editor.guides.bracketPairs": "active",
  "dart.flutterCreateOrganization": "com.lingman.xgc",
  "gitlens.advanced.messages": {
    "suppressLineUncommittedWarning": true
  },
  "dart.debugExternalPackageLibraries": false,
  "dart.debugSdkLibraries": false,
  // dart 配置
  "dart.lineLength": 800,
  "workbench.startupEditor": "none",
  "explorer.confirmDragAndDrop": false,
  "editor.stickyScroll.enabled": true,
  "[scss]": {
    "editor.defaultFormatter": "vscode.css-language-features"
  },
  "[markdown]": {
    "editor.defaultFormatter": "DavidAnson.vscode-markdownlint"
  },
  "workbench.iconTheme": "material-icon-theme",
  "editor.tabSize": 2,
  "editor.accessibilitySupport": "off",
  "workbench.layoutControl.enabled": false,
  "workbench.tree.enableStickyScroll": true,
  // Unknown at rule @apply scss
  "css.validate": false,
  "scss.validate": false,
  "less.validate": false,
  "window.zoomLevel": 1,
  // 文件夹展开
  "explorer.compactFolders": false,
  // 改为false即可禁止拖动
  "editor.dragAndDrop": false,
  // 如下是被vscode认为是单词分隔符的字符  比如material-icon-theme 会被认为是三个单词
  "editor.wordSeparators": "`~#!@$%^&*()=+[{]}\\|;:'\",<>/?."
}
```

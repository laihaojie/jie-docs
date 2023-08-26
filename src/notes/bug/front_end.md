# 前端

## Error: error:0308010C:digital envelope routines::unsupported

::: code-group

```bash [Linux, macOS, Git bash, etc]
export NODE_OPTIONS=--openssl-legacy-provider
```

```bash [Windows cmd]
set NODE_OPTIONS=--openssl-legacy-provider
```

```bash [Windows PowerShell]
$env:NODE_OPTIONS = "--openssl-legacy-provider"
```

:::

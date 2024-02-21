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

-  在package.json中添加

```json
{
  "scripts": {
    "dev": "set NODE_OPTIONS=--openssl-legacy-provider && vite"
  }
}
```

## has been blocked by CORS policy: The request client is not a secure context and the resource is in more-private address space private

```
1:两种资源都改成https

2:做代理或改dns 两种资源都改成 内网或者外网ip

3:配置chrome选项为disable chrome://flags/#block-insecure-private-network-requests

或者访问者资源加响应头 Access-Control-Allow-Private-Network
```

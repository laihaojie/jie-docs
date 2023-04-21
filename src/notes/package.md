# package.json

```json
{
  "script": {
    "release": "npx bumpp && npm publish --access public --registry https://registry.npmjs.org"
  }
}
```

## 限制node版本

```json
{
  "engines": {
    "node": ">=16.16.0",
    "yarn": ">=1.22.4"
  }
}
```
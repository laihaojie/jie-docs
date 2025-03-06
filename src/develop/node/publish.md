# package相关

## 发布package

- 发布普通包

```sh
npm publish --registry https://registry.npmjs.org
```

- 发布组织包

```sh
npm publish --access public --registry https://registry.npmjs.org
```

## 查看package信息

```sh
npm view packageName

# 查看具体版本信息
npm view packageName version
```

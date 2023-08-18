# 签名文件

## 生成包签名

```sh
keytool -genkey -alias com.jieapp -keyalg RSA -validity 200000 -keystore ./jieapp.keystore
```

## 查看包签名

```sh
keytool -V -list -keystore ./jieapp.keystore
```

## 获取秘钥散列

```sh
keytool -exportcert -alias com.jieapp -keystore ./jieapp.keystore | openssl sha1 -binary | openssl base64
```

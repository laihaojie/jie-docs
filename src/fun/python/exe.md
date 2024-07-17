# 打包exe

- 安装pyinstaller
```bash
pip install pyinstaller -i https://pypi.tuna.tsinghua.edu.cn/simple

```

- 打包
```bash
# 进入虚拟环境
Pyinstaller -F py_word.py 打包exe
 
Pyinstaller -F -w py_word.py 不带控制台的打包
 
Pyinstaller -F -w -i chengzi.ico py_word.py 打包指定exe图标打包
```

- [参考](https://blog.csdn.net/libaineu2004/article/details/112612421)
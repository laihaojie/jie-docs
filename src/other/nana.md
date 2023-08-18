# 娜娜

## 基本信息

- 生日 2003年02月21日

## 喜好

- 不喜欢吃鱼
- 不喜欢吃会生寄生虫的食物
- 不喜欢海鲜里面带沙子的食物
- 喜欢酸的食物
- 喜欢吃葡萄

## 课表

<img src='/imags/other/kebiao.jpg' alt='图片替换文本' width='700' />

## 学校

- 周1,周3,周4查寝

## 爱心代码

```python
import time

# 打印爱心图案
def print_love():
    myData = "na wa zi I LOVE YOU"
    for char in myData.split():
        allChar = []
        for y in range(12, -12, -1):
            lst = []
            lst_con = ''
            for x in range(-30, 30):
                formula = ((x * 0.05) ** 2 + (y * 0.1) ** 2 - 1) ** 3 - (x * 0.05) ** 2 * (y * 0.1) ** 3
                if formula <= 0:
                    lst_con += char[(x) % len(char)]
                else:
                    lst_con += ' '
            lst.append(lst_con)
            allChar += lst
        print('\n'.join(allChar))
        time.sleep(1)

if __name__ == '__main__':
    print_love()
```

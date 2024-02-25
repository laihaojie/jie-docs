#  原生Sql

## 更新字段

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;

# 示例
UPDATE t_table
SET descriptionAt = now(), description = 'test'
WHERE id = 1 and description is not null;
```

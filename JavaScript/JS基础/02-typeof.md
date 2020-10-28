

```
const num = 1 
console.log(typeof num)
```

+ typeof 运算符对  **数组**  返回 “object”  (因为在JavaScript中数组属于对象)

  （分辨两者的区别，详细请见笔试题注意）

+ typeof 运算符能返回的 **原始数据**  有：
  + string
  + number
  + boolean
  + undefined

+ typeof 运算符能返回的 **复杂数据** 有：
  + function
  + object

```
typeof {name:'Bill', age:62} // 返回 "object"
typeof [1,2,3,4]             // 返回 "object" (并非 "array"，参见下面的注释)
typeof null                  // 返回 "object"
typeof function myFunc(){}   // 返回 "function"
```


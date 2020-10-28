# 高阶函数

**需求：将给定数组中，小于100的元素，乘以2，再依次相加求和**

```javascript
const nums = [10, 20, 111, 222, 444, 40, 50];

//暴力

// let newNums = nums.filter(function(n){
//     return n < 100;
// }).map(function (n) {
//     return n * 2
//   }).reduce(function(preValue, n){
//       return preValue + n
//   }, 0)
// console.log("JavaScript高阶函数使用：", newNums);

//使用ES6箭头函数

let newNums = nums.filter(n => n < 100).map(n => n * 2).reduce((preValue, n) => preValue + n);
console.log("箭头函数式编程", newNums);
```

+ filter函数
+ map函数
+ reduce函数

## filter

**filter函数的主要用途是对数组元素进行过滤，并返回一个符合条件的元素的数组**

```javascript
let nums = [10,20,30,111,222,333]
```

**选出nums中小于100的数**

```javascript
let newNums = nums.filter(n => n<100)
```

## map

**map函数是对数组每个元素的映射操作，并返回一个新数组，原数组不会改变**



**将newNums中每个数字乘2**

```javascript
let new2Nums = newNums.map(n => n*2)
```

## reduce

**reduce函数主要用于对数组所有元素的汇总操作，如全部相加、相乘等**



**将new2Nums中数字全部相加：**

```javascript
let new3Nums = new2Nums.reduce((preValue,n) =>preValue + n)
```




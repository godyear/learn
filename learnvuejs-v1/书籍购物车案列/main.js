const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '《算法导论》',
                day:'1999-03-12',
                price: 85.00,
                count: 1,
            },
            {
                id: 2,
                name: '《UNIX编程艺术》',
                day:'2000-11-07',
                price: 59.00,
                count: 1,
            },
            {
                id: 3,
                name: '《编程珠玑》',
                day:'2012-08-08',
                price: 75.00,
                count: 1,
            },
            {
                id: 4,
                name: '《代码大全》',
                day:'2009-07-04',
                price: 69.00,
                count: 1,
            },
        ]
    },
    methods: {
        increment(index) {
            console.log('increment');
            console.log(index);
            this.books[index].count++;
        },
        decrement(index) {
            console.log('decrement');
            console.log(index);
            this.books[index].count--;
        },
        removeHandle(index) {
            this.books.splice(index, 1)
        }
    },
    computed: {
        totalPrice() {
            //1.for普通用法
            // let totalPrice = 0;
            // for (let i = 0; i < this.books.length; i++) {
            //     totalPrice += this.books[i].price * this.books[i].count;
            // }
            //2.for i in xx用法
            // return totalPrice
            // let totalPrice = 0;
            // for (let i in this.books) {
            //     totalPrice += this.books[i].price * this.books[i].count;
            // }
            // return totalPrice
            //3.for i of xxx用法
        //     let totalPrice = 0;
        //     for (let item of this.books) {
        //         totalPrice +=item.price * item.count;
        //     }
        //     return totalPrice
        // }
        //函数式编程
        // return this.books.reduce(function(preValue, book) {
        //     return preValue + book.price * book.count  
        // }, 0)

        //箭头函数

        return this.books.reduce((preValue, book) => (preValue + book.price * book.count), 0)
    }   
    },
    filters: {
        showPrice(price) {
            return '￥' + price.toFixed(2)
        }
    }
    
})


// const nums = [10, 20, 111, 222, 444, 40, 50];
// let newNums = nums.filter(function(n){
//     return n < 100;
// }).map(function (n) {
//     return n * 2
//   }).reduce(function(preValue, n){
//       return preValue + n
//   }, 0)
// console.log("JavaScript高阶函数使用：", newNums);
// let newNums = nums.filter(n => n < 100).map(n => n * 2).reduce((preValue, n) => preValue + n);
// console.log(newNums);



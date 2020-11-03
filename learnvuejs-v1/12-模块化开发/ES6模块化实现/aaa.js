let name = '小明'
let age = 18
let flag = true
function sum(num1, num2) {
    return num1 + num2
}

if(flag){
    console.log(sum(10, 20));

}

//第一种导出方式

export {
    flag, sum
}

//第二种导出方式

export var A = 10000 //let A 会找不到
export var B = 2000 //let B也会找不到

//第三导出函数和类
export function mul(num1, num2) {
    return num1 * num2
}
export class Person {
    run() {
        console.log('在奔跑');
        
    }
}
export default function (argument){
    console.log(argument);
}   
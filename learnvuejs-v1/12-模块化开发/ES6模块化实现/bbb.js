//1.导入{}中定义的量
import {sum, flag} from "./aaa.js" ;
//2.导入export定义的量
import {A, B} from "./aaa.js";
//3.导入export的function
import {mul} from "./aaa.js";
let name = '小红';
//4.导入类
import {Person} from "./aaa.js"

import argument from './aaa.js'
if(flag){
    console.log('bbbbbbbb');
    console.log(sum(100, 200));
    console.log(mul(A, B));
    console.log(sum(A, B));
    
}

const person = new Person()
person.run()

argument('你好啊！')
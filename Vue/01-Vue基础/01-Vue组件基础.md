## Vue组件基础

**内部调用render函数**

1. 创建组件构造器

   ```javascript
   //Vue.extend()
   const cpnC = Vue.extend({
       template:`
               <div>
                   <h2>我是标题</h2>
                   <p>我是i内容哈哈哈哈哈</p>
                   <p>我是内容呵呵呵呵</p>
               </div>
               `
   })
   ```

2. 注册组件

   ```javascript
   //Vue.extend()
   const cpnC = Vue.extend({
       template:`
               <div>
                   <h2>我是标题</h2>
                   <p>我是i内容哈哈哈哈哈</p>
                   <p>我是内容呵呵呵呵</p>
               </div>
               `
   })
   //Vue.component()
   Vue.component('my-cpn', cpnC)
   
   ```

3. 使用组件

   ```javascript
   //Vue.extend()
   const cpnC = Vue.extend({
       template:`
               <div>
                   <h2>我是标题</h2>
                   <p>我是i内容哈哈哈哈哈</p>
                   <p>我是内容呵呵呵呵</p>
               </div>
               `
   })
   //Vue.component()
   Vue.component('my-cpn', cpnC)
   
   //使用组件
   const app = new Vue({
       el:'#app',
       data:{
           
       },
   })
   ```

   

## Vue全局组件和局部组件

+ 全局组件：直接在<script></script>标签中进行注册
+ 局部组件：在对应的Vue实例当中进行注册

```javascript
    const cpnC = Vue.extend({
        template: `
            <div>
                <h2>我是标题</h2>
                <p>我是i内容哈哈哈哈哈</p>
                <p>我是内容呵呵呵呵</p>
            </div>
            `
        })
    const app_0 = new Vue({
        el: '#app_0',
        components: {
            cpn: cpnC
        }
    })
    const app_1 = new Vue({
        el: '#app_1'
    })
```



## Vue父组件和子组件

```javascript
        const cpn_2 = Vue.extend({
            template:`
                <div>
                    <h1>aaaaaa</h1>
                    <p>assssssss</p>
                </div>
            `,
        })

        const cpn_1 = Vue.extend({
            template:` 
                <div>
                    <h1>我是标题</h1>
                    <p>我是内容啊啊啊啊啊</p>
                    <cpn2></cpn2>
                </div>
            `,
            components:{
                cpn2:cpn_2
            }
        })
        const app = new Vue({
            el: '#app',
            components:{
                cpn1:cpn_1
            }
        })
        
        //Vue是cpn1的父组件，cpn1是cpn2的父组件
```



## Vue组件语法糖

```javascript
        /* 1.全局组件语法糖 */
        Vue.component('cpn1', {
            template:` 
                <div>
                    <h1>我是标题</h1>
                    <p>我是内容啊啊啊啊啊</p>
                    <cpn2></cpn2>
                </div>
            `
        })
        /* 2.局部组件语法糖 */
        const app = new Vue({
            el: '#app',
            components:{
                cpn2:{
                    template:` 
                <div>
                    <h1>我是标题</h1>
                    <p>我是内容啊啊啊啊啊</p>
                </div>
            `
                }
            }
        })
```

## Vue模板与组件分离写法

```html
    <template id = 'cpn_1'>
        <div>
            <h1>我是标题</h1>
            <p>我是内容哈哈哈哈哈哈</p>
        </div>
    </template>

    <script src="../js/vue.js"></script>
    <script>
        const app = new Vue({
            el: '#app',
            components:{
                cpn:{
                    template:'#cpn_1'
                }
            }
        })
    </script>
```



## Vue组件中数据的存放

**vue中组件的数据需要用一个函数来返回值**

**这样组件和组件之间的data才不会相互影响，也不会被同一个methods更改**

```html
<body>
    <div id = 'app'>
        <!-- 当data是一个函数时，所创建的组件实例则不会共享数据 -->
        <!-- 函数会在栈空间内创建地址 -->
        <!-- 如果是对象就会使组件共用同一个内存地址 -->
        <Counter></Counter>
        <Counter></Counter>
        <Counter></Counter>
        <Counter></Counter>
    </div>


    <template id = "Counter">
        <div>
            <h1>当前数字是：{{counter}}</h1>
            <button @click="plus">+</button>
            <button @click="reduce">-</button>
        </div>
    </template id>

    <script src="../js/vue.js"></script>
    <script>
        const app = new Vue({
            el: '#app',
            components:{
                Counter:{
                    template:'#Counter',
                data() {
                    return{
                        counter: 0,
                    }
                },
                methods:{
                    plus(){
                        this.counter++
                    },
                    reduce(){
                        this.counter--
                    }
                }
                }
            }
        })
    </script>
</body>
```


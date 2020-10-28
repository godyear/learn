## 父传子

**props**

1. 在子组件中新增一个props属性；并在对应的地方用v-bind绑定
2. 有两种方式：
   1. 字符串数组，数组中的字符串就是传递时的名称
   2. 对象，对象可以设置传递时的类型，也可以为默认值
3. props传值需要在所用的组件标签后v-bind值

```html
<body>
    <div id = 'app'>
        <cpn :cmovies="movies" :cmessage="message"></cpn>
    </div> 


    <template id = "cpn">
        <div>
            <ul>
                <li v-for="item in cmovies">{{item}}</li>
            </ul>
            <p>{{cmessage}}</p>
        </div>
    </template id>


    <script src="../js/vue.js"></script>
    <script>
        const app = new Vue({
            el: '#app',
            data:{
                movies:['海王', '海贼王', '海尔兄弟'],
                message:'你好啊！',
            },
            components:{
                cpn:{
                    template:"#cpn",
                    props:{
                        cmovies:{
                            type: Array,
                            default() {
                                return []
                            },
                            required:true
                        },
                        cmessage:{
                            type:String,
                            default:'aaaaa',
                            required:true
                        }
                    }
                }
            }
        })
    </script>
</body>
```



## 子传父

**$emit()**

1. 在子methods中定义方法，在父组件中用v-on监听
2. 一定要在使用组件的标签后面绑定$emit发送的方法

```html
<body>
    <div id = 'app'>
        <h1>当前数：{{counter}}</h1>
        <cpn @counter_1="counter_2"></cpn>
    </div>
    <template id = 'cpn'>
        <div>
            <button @click="plus">+</button>
            <button @click="reduce">-</button>
        </div>
    </template>
    <script src="../js/vue.js"></script>
    <script>
        const cpn = {
            template:'#cpn',
            data() {
                return{
                    count:0
                }
            },
            methods:{
                plus(){
                    this.count++;
                    console.log(this.count);
                    this.$emit('counter_1', this.count)
                },
                reduce(){
                    this.count--;
                    console.log(this.count);
                    this.$emit("counter_1", this.count)
                }
            },
        }
        const app = new Vue({
            el: '#app',
            data:{
                counter:0,
            },
            methods:{
                counter_2(count){
                    console.log('父组件未接收到值时counter:', this.counter);
                    this.counter = count;
                    console.log('父组件接收到值时counter:', this.counter); 
                }
            },
            components:{
                cpn,
            }
        })
    </script>
</body>
```

## 组件通信（数据双向绑定）

**用v-model来对父子组件进行数据双向绑定**

**v-model的原理：v-bind+@input**

```html
<body>
    <div id = 'app'>
        {{total}}
        <h2>子组件</h2>
        <cpn v-model="total"></cpn>
        <h2>父组件</h2>
        <button @click='increament'>++</button>
    </div>

    <template id = 'cpn'>
        <div>
            <button @click="plus">+</button>
            <button @click='reduce'>-</button>
        </div>
    </template>

    <script src="../js/vue.js"></script>
    <script>
        const cpn = {
            template:'#cpn',
            data(){
                return{
                    count:0
                }
            },
            methods:{
                plus(){
                    this.count++;
                    this.$emit('input', this.count);
                },
                reduce(){
                    this.count--;
                    this.$emit('input', this.count)
                }
            }
        }
        const app = new Vue({
            el: '#app',
            data:{
                total:0
            },
            components:{
                cpn
            },
            methods:{
                increament(){
                    this.total++
                }
            }
        })

    </script>
</body>
```


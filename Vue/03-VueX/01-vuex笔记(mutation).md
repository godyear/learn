## mutations响应规则



![image-20200624203515603](C:\Users\17840\AppData\Roaming\Typora\typora-user-images\image-20200624203515603.png)



## mutations基本应用

+ ```javascript
  state:{
      counter:100
  },
  mutations:{
      incrementCounter(state) {
          state.counter++
      }
  }
  ```

  **在stor/index.js中定义好mutations的一个方法**	

+ ```html
  <button @click="plus">+</button>
  ```

+ ```javascript
  methods:{
      plus() {
          this.$store.commit('increment')
      }
  }
  ```

  **需要commit**

  

## mutations传参

+ ```javascript
  mutations:{
      incrementStudent(state, stu) {
          state.students.push(stu)
      }
  }
  ```

+ ```html
  <button @click="addStudent">+学生</button>
  ```

+ ```javascript
  methods:{
      addStudent() {
          const stu = {
          name: 'jiayi',
          id:114,
          age:22,
      }
          this.$store.commit('incrementStudent', stu)
    }
  }
  ```

  

## mutations提交风格

+ 普通的提交风格

  ```javascript
  this.$store.commit('incrementStudent', stu)
  ```

+ 特殊的提交封装

  ```javas
  this.$store.commit({
  	type: 'incrementStudent',
  	payload
  })
  ```

  **mutations中提取时，payload是作为一个对象其中会含有stu这个对象**

+ mutations中的incrementStudent方法如下：

  ```javascrip
  incrementStudent(state, payload) {
  	state.students.push(payload.stu)
  }
  ```

  


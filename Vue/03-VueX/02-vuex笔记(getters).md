+ ```javascript
  state:{
      counter:100
  },
  getters:{
      power(state) {
          return state.counter * state.counter
      }
  }
  ```

+ 需要getters里面的方法传入state(目前省略会出错)

+ getters中的方法需要return返回

+ getters可以作为一个参数，传入到其他getters的方法中

  ```javascript
  more20stu(state) {
      
      return state.students.filter(s => s.age >= 20)
  },
  more20stuLength(state, getters){
      
      return getters.more20stu.length
  }
  ```

  

+ 需要用户传参到getters中去时，可以将getters中的某一个方法返回为一个函数，再接受参数

  ```javascript
  moreAgestu(state){
      
      return function (age) {
          
          return state.students.filter(s => s.age > age)
          
      }
  }
  ```

  ```html
  <h2>{{$store.getters.moreAgestu(20)}}</h2>
  ```

  

  
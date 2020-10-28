## 认识Modules

+ Vue使用单一状态树，那么也意味着很多状态都会交给VueX来管理
+ 当应用变得很复杂的时候，store对象就很有可能变得很臃肿
+ 为了解决这个问题，VueX允许我们将store分割成模块(modules),而每个模块拥有自己的state、mutations、actions、getters等

## Modules中的mutations

```html
<h2>------------App内容:modules内容-------------</h2>
<!--store中的modules中的a:moduleA会被放入state-->
<h2>{{$store.state.a.name}}</h2>
<button @click="updata('lisi')">修改名字</button>
<h2>{{$store.getters.fullname}}</h2>

<!--App.vue-->
```

```javascrip
//  store/index.js
const moduleA = {
	state: {
		name: 'kobe',
		age: 18,
		height: 1.89
	},
	mutations:{
		updata(state, name) {
			state.name = name
		}
	},
	getters:{
		fullname(state) {
			return state.name + '111'
		}
	}
}

//随后将moduleA放入store的modules中
const store = new Vue.Store({
	modules:{
    	a: moduleA
  	}
})
```

```javas
// App.vue
methods:{
	updata(name) {
		this.$store.commit('updata', name)
	}
}
```

**modules当中的mutations方法名不要和外部相同**

## Modules中的getters

+ module A中 的getters可以得到rootState的值

```javas
//  store/index.js
const moduleA = {
	state: {
		name: 'kobe',
		age: 18,
		height: 1.89
	},
	mutations:{
		updata(state, name) {
			state.name = name
		}
	},
	getters:{
		fullname(state) {
			return state.name + '111'
		},
		fullname2(state, getters) {
			return getters.fullname + '222'
		},
		fullname3(state, getters, rootState) {
			return getters.fullname2 + rootState.counter
			// expected output: kobe1112221000
		}
	}
}

const store = new Vuex.Store{
	state:{
		counter:1000
	}
}
```

## Modules中的actions

**actions会有一个默认的参数 -> context(类似就近)**

```javas
  mutations:{
    updata(state, name) {
      state.name = name
    }
  },
  actions:{
    aupdate(context, name) {
      return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('updata', name)
        resolve(console.log('修改成功！'))
      }, 1000)
      })
    }
  },
```

```html	
methods:{
	asyncUpdata(name) {
       this.$store.dispatch('aupdate', name)
       .then(console.log('提交成功！'))
    }
}
```

**依旧可以使用rootActions**


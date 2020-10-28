## Actions的基本定义

**Actions是用来对异步操作的VueX**

+ 组件中通过$store.dispatch传给actions

+ actions 通过commit提交给mutations
+ mutations直接修改state

**components中：**

```html
<button @click="updateInfo('you')">修改信息</button>
```

**methods**

```javascrip
updateInfo(name) {
	this.$store.dispatch('upinfo', name)
}
```

**store/index.js**

```javas
state:{
	info:{
		name: 'zhiou',
		age: 18,
		height: 1.89
	}
}
```

```javascrip
actions:{
	aUpdataInfo(context, name) {
		setTimeout(() => {
			context.commit('upinfo', name)
		}, 1000)
	}
}
```

```javascrip
mutations:{
	upinfo(state, name){
		state.info.name = name
	}
}
```

## Actions中使用Promise

**store/index.js**

```javascrip	
actions:{
	aUpdataInfo(context, name) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				context.commit('upinfo', name)
				resolve('传递成功！')
			}, 1000)
		})
	}
}
```

**components中的methods**

```javas
methods:{
	updateInfo(name) {
		this.$store.dispatch('aUpdataInfo', name)
		.then(console.log('提交成功！'))
	}
}
```


## 为什么选择axios

+ 在浏览器中发送XMLHttpRequerts请求
+ 在node.js中发送http请求
+ 支持Promise API
+ 拦截请求和响应
+ 转换请求和响应数据

## axios请求方式

**支持多种请求方式**

+ axios(config)
+ axios.request(config)
+ axios.get(url[, config])
+ axios.delete(url[, config])
+ axios.head(url[, config])
+ axios.post(url[, data[, config]])
+ axios.put(url[, data[, config]])
+ axios.patch(url[,data[, config]])

## axios框架基本使用

```javascript
axios({
  url: 'http://123.207.32.32:8000/home/multidata',
  method: 'get'
}).then(res => {
  console.log(res);
})
```

+ 针对get请求的参数拼接

```javas
axios({
	url:'http://123.207.32.32:8000/home/multidata',
	method: 'get',
	params: {
		type: 'pop',
		page: 1
	}
}).then(res => {
	console.log(res)
})

//等同于
axios({
	url: 'http://123.207.32.32:8000/home/multidata?type=pop$page=1',
	method: 'get'
}).then(res => {
	console.log(res)
})
```

## axios发送并发请求

```javas
//axios发送并发请求（类似于Promise的all方法）
//返回结果是一个数组
axios.all([axios({
	url:'http://123.207.32.32:8000/home/multidata'
}), axios({
	url: 'http://123.207.32.32:8000/home/data',
	params: {
		type: 'sell',
		page: 5
	}
})
.then(res => {
	console.log(res)
})])
```

## axios配置相关

+ 全局配置

  **在开发中有很多参数都是固定的，可以进行一些抽取，也可以利用axios的全局配置**

+ defaults全局属性（默认）

  ```javas
  axios.defaults.baseURL = 'http://152.136.185.210:8000/api/n3'
  axios.defaults.timeout = 5000  //超时无效ms
  
  axios.all([axios({
  	url:'/home/multidata'
  }), axios({
  	url: '/home/data',
  	params: {
  		type: 'sell',
  		page: 5
  	}
  })
  .then(res => {
  	console.log(res)
  })])
  ```


+ post请求需要传data:{key:'aaa'},get请求传params:{id:12}

## axios实例

```javascript
//每个服务器对应一个baseURL和一个axios实例
const instance1 = axios.create({
    baseURL:'http://152.136.185.210:8000/api/n3'
})

instance1({
    url:'/home/multidata'
}).then(res => {
    console.log(res);
})

instance1({
    url:'/home/data',
    params:{
        type:'pop',
        page:1
    }
}).then(res => {
    console.log(res)
})
```

## axios代码封装(Promise)

**第三方库依赖太高时，需要进行封装**

+ 第一种写法：

```javascript
//在src文件夹下创建一个network文件夹
// src/network/request.js
import axios from 'axios'
export function request(config, success, faillure) {
    //创建一个axios实例
    const instance1 = axios.create({
        baseURL:'http://152.136.185.210:8000/api/n3'
    })
    
    //发送真正的网络请求
    instance(config)
    .then(res => {
        success(res)
    })
    .catch(err => {
        faillure(err)
    })
}

//在src/main.js文件夹中
import {request} from './network/request'
request({
    url:'/home/multidata'
}, res => {
    console.log(res)
}, err => {
    console.log(err)
})
```

+ 第二种写法

  **promise**

```javascript
//src/network/request.js
import axios from 'axios'
export function request(config) {
    return new Promise((resolve, reject) => {
        const instance1 = axios.create({
            baseURL:'http://152.136.185.210:8000/api/n3'
        })
        instance1(config)
        .then(res => {
            resolve(res)
        })
        .catch(err => {
            reject(err)
        })
    })
}

//在src/main.js文件夹中
import {request} from './network/request'
request({
  url:'/home/multidata'
})
.then(res => {
  console.log(res);
})
.catch(err => {
  console.log(err);
})
```

+ 第三种写法

```javascript
//axios实例本身就会返回Promise
//src/network/request.js
import axios from 'axios'
export function request(config) {
    const instance1 = axios.create({
        baseURL:'http://152.136.185.210:8000/api/n3'
    })
    return instance1(config)
}

//在src/main.js文件夹中
import {request} from './network/request'
request({
  url:'/home/multidata'
})
.then(res => {
  console.log(res);
})
.catch(err => {
  console.log(err);
})
```

## axios拦截器

**在发送网络请求之前进行拦截**

**拦截之后一定要把拦截到的数据返回出去**

+ 请求拦截

```javascript
// src/network/request.js

import axios from 'axios'
export function request(config) {
    //1.axios实例

    const instance1 = axios.create({
        baseURL:'http://152.136.185.210:8000/api/n3'
    })

    //2.拦截器
    //请求拦截
    instance1.interceptors.request.use(config => {
        console.log(config);
        //返回拦截到的config
        
        
        //1.config中信息不符合服务器要求时
        //2.每次发送网络请求时，都希望在界面显示一个图标
        //3.某些网络请求（登录），必须携带一些特殊的信息
        
        return config
    }, err => {
        console.log(err);
    })

    // instance1.interceptors.response

    //3.发送网络请求
    return instance1(config)
}

//在src/main.js文件夹中
import {request} from './network/request'
request({
  url:'/home/multidata'
})
.then(res => {
  console.log(res);
})
.catch(err => {
  console.log(err);
})
```

+ 响应拦截

```JavaScript
// src/network/request.js
import axios from 'axios'
export function request(config) {
    //1.axios实例

    const instance1 = axios.create({
        baseURL:'http://152.136.185.210:8000/api/n3'
    })

    //2.拦截器
    //请求拦截
    instance1.interceptors.request.use(config => {
        // console.log(config);
        //返回拦截到的config
        return config
    }, err => {
        // console.log(err);
    })
    //响应拦截
    instance1.interceptors.response.use(res => {
        // console.log(res)
        return res.data
    }, err => {
        console.log(err)
    })

    //3.发送网络请求
    return instance1(config)
}

//在src/main.js文件夹中
import {request} from './network/request'
request({
  url:'/home/multidata'
})
.then(res => {
  console.log(res);
})
.catch(err => {
  console.log(err);
})
```


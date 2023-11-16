# 组件对象

在Vue中，一个JS对象就是一个组件

```js
<div id="root"></div>
<script>
    const Root={
        template:'<h1>{{msg}}</h1>',
        data(){
            return {
                msg:'你好，Vue'
            }
        }

    }
    const app=Vue.createApp(Root)
    app.mount('#root')
</script>
```

data中声明的变量会添加至组件对象中

```js
Vue.createApp(Root).mount('#root')
```



## template

模板

决定了组件在页面中呈现的结构

template可以直接在被绑定的网页中写

```js
<div id="root">
    <h1>{{msg}}</h1>
    </div>
```

如果两者都存在，则template中的内容会代替根元素中的HTML结构

# data

data函数中的`this`就是*vm*，

```js
  data(){
    this.name='Sam'
    return{
      msg:'Java'
    }
  }
```

`return`中的数据才是响应式数据，直接向组件实例中添加的属性不会被Vue所代理，不是响应式数据

## $data

`vm.$data`是实际的代理对象

直接向`vm.data`添加的属性不会成为响应式数据

# 代理模式

## 为对象创建代理

```js
    let obj={name:'lai'}
    const handler={}
    const proxy=new Proxy(obj,handler)
    console.log(proxy)
```

> *Proxy(Object) {name: 'lai'}*
>
> 1. [[Handler]]: Object
>
> 2. [[Target]]: Object
>
> 3. [[IsRevoked]]: false

vm就是一个代理对象（*Proxy*）

Target中存储了被代理对象的属性

```js
proxy.name//lai
```

```js
proxy.name='sun'
obj.name//sun
```

`handler`中可以指定代理的行为

### get

读取属性时会调用get方法读取被代理对象的值

```js
get(target,prop,receiver)
```

- `target`：被代理对象
- `prop`：属性
- `receiver`：代理对象

```js
get(target,prop,receiver){
    return target[prop]
}
```

### set

通过代理修改对象时触发

```js
set(target,prop,value,receiver){
     target[prop]=value
}
```

- `value`：通过代理对象设置的值



vue是一个Proxy对象

在vue中，data返回的对象会被vue所代理。当我们通过代理去读取属性时，返回值之前，他会先做一个追踪的操作：track（）追踪谁用了该属性

当我们使用代理修改属性时，会通知之前所有使用了该值的地方进行数据的更新：`trigger`()触发所有使用该值的位置进行更新

```js
vm.age=20
```


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

# methods

指定组件中使用的方法，其将会挂载在组件实例vm中

methods中的this指向的是组件实例



# computed

## getter

计算属性：根据data中的属性通过一定的逻辑计算得到的属性。

使用计算属性时，将其当作一个属性而不是函数。

```js
{{info}}
```

```js
computed: {
    info(){
        if (this.age<10) {
            return '你还是个孩子'
        }
        else{
            return '你已经长大了'
        }
    }
},
```



> methods在模板重新渲染时都会调用
>
> computed会对数据缓存，当绑定的相关属性（age）没有变化时则不会被调用

## setter


# history

## push



浏览器中的历史记录是一个栈

浏览器会记录每一个router-link的的指向值

## replace

在router-link中可以开启replace模式

```js
    <router-link to="/b" :replace="true">点击切换B</router-link>
```

或：

```js
    <router-link to="/b" replace>点击切换B</router-link>
```

replace模式会将浏览器history占顶元素进行替换

# 编程式路由导航

## pull/repalce

用于取代`router-link`实现路由的跳转,在router-link实现跳转的实际上是push/replace

```js
<button @click='goTo(m)'> </button>
```

```js
method：{
    goTo(){
        this.$router.push({
            name:'section-a',
            query:{
                id:m.id,
                title:m.title
        }
        })
    }
}
```

点击按钮后将指向该路由规则，并传入参数给组件

也可以使用repalce跳转：

```js
method：{
    goTo(){
        this.$router.replace({
            name:'section-a',
            query:{
                id:m.id,
                title:m.title
        }
        })
    }
}
```

## back/forward

- back后退
- forward前进

## go

```js
this.$router.go(num)
```

num为正数：向前前进num步

num为负数：向后后退num步

# 缓存路由组件

由于跳转至其他组件，原组件将被销毁，因此在组件中的数据也会消失，

```js
<keep-alive include="组件名字"></keep-alive>
```

该组件将保持活跃
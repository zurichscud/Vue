

# 计算属性

## 引入

实现输入姓与名并在页面渲染

```js
        姓：<input type="text" v-model="firstname" ><br>
        名：<input type="text" v-model="lastname" >
```

### 插值语法

将计算得到属性的方法（表达式）写在插值语法中

```js
 span>{{firstname+lastname}}</span>
```

该风格不被Vue官方推荐

### methods实现

在methods中定义一个方法，方法会被挂载在Vue实例中，因此我们可以在插值表达式中直接调用该方法

```js
     <span>{{fullname}}</span>
```

```js
const vm = new Vue({
    el: '#app',//通过EL配置选择器
    data: {
        firstname:'黎',
        lastname:'锐'
    },
    methods: {
        fullname(){
            return this.firstname+this.lastname
        }
    })
```



## 计算属性

**计算属性**：没有具体准确的值，每次计算都需要根据已有属性进行计算才能够得到。

### 计算属性声明

计算属性本质是一个对象，该对象有get成员和set成员

```js
computed{
    计算属性名:{
        get(){//get逻辑},
        set(){//set逻辑}
    }
}
```

声明了计算属性后，Vue内部会生成一个属性名称相同的属性，类似于data中的属性。但是得到计算属性需要调用计算属性对象内部的get方法。

```js
const vm = new Vue({
    el: '#app',//通过EL配置选择器
    data: {
        firstname:'黎',
        lastname:'锐'
    },
    computed:{
        fullname:{
            get(){
                return this.firstname+this.lastname
            },
            set(){

            }
        }
})
```

```js
console.(vm.fullname)
//黎锐
```

计算属性时，Vue已经帮助我们维护好了函数内this指向了Vue实例。因此计算属性中不能使用箭头函数



### get

get调用时机：

- 初次读取`计算属性值`时(fullname)
- 所依赖的数据发生变化时（this.firstname）

### set

set调用时机：

- 当计算属性被`View`修改时

### 缓存

计算属性的优越性就是缓存。

```js
<span>{{fullname}}</span>
<span>{{fullname}}</span>
<span>{{fullname}}</span>
```

当页面需要重复渲染相同的一个属性，如果使用methods，则需要重复调用多次，methods得到的属性值没有缓存。

使用computed得到的值将会进行缓存。只要依赖的属性不发生变化，他就只需要调用一次

## 计算属性的省略

计算属性常常只需要`get`，而没有`set`的需求。一旦计算属性只有`get`便可以简写成：

```js
computed:{
    fullname(){
        //get逻辑
    }
}
```

# 监视属性

## 监视属性声明

当我们需要监视data域中的某个属性发生变化，我们可以在Vue实例中声明`watch`配置对象。

监视的属性必须存在

```js
watch:{
	监视属性名:{
		handler(){}
	}

}
```

- 使用vm.$watch

```js
vm.$watch('isHot',{
            handler(now,old){
                console.log('isHot被修改了'+now+'->'+old);
            }})
```



## handler

当监视的属性值发生变化时，将执行`handler`函数

```js
watch:{
    isHot:{
        handler(){
            console.log('isHot被修改了');
        }
    }
}
```

`handler`有两个参数，

```js
handler(newValue,oldValue){
   
}
```

- `olaValue`监视属性修改前的值
- `newValue`监视属性修改后的值

## immediate

在监视属性声明可以加入该配置项：immediate

```js
watch:{
    isHot:{
        immediate:true
        handler(){}
    }
}
```

immediate:true表示页面打开时，立即执行一次handler

## 深度监视

当我们监视的属性是引用类型时，我们监视的实际上是他的地址。如果我们想要监视他的成员，需要加入配置项：

```js
deep:true
```

如果我们想要监视某个引用数据类型的成员，我们需要将key加上引号

```js
watch:{
   ' numbers.a':{
        immediate:true
        handler(){}
    }
}
```

## 监视简写

如果watch中的配置项只有handler时，可以进行简写：

```js
监视属性名(){
    //handler函数体
}
```

# watch与computed

异步操作

computed能够完成的功能，watch也可以完成。例如使用watch实现姓和名的拼接：

```js
watch: {
    firstname(value) {
        this.fullname = value + this.lastname
    },
    lastname(value) {
        this.fullname=this.firstname+value
    }
}
```

但是watch能够完成的功能，computed不一定能够完成。watch可以处理异步操作，**computed无法处理异步操作**。

假设添加一个新的需求：1s再渲染最终的姓名

```js
watch: {
    firstname(value) {
        setTimeout(() => {
            this.fullname = value + this.lastname
        }, 1000);
    },
    lastname(value) {
        setTimeout(() => {
            this.fullname=this.firstname+value
        }, 1000);
    }
}
```

使用computed尝试解决：

```js
computed: {
    fullname: {
        get() {
            const name=undefined
            setTimeout(() => {
                name= this.firstname + this.lastname
            }, 1000);
            return name
        }
    }
```

name得到的是undefined，因为setTimeout是异步函数，1s后才能够得到name的值
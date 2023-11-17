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

## 响应对象

对象中的属性也会变成响应式数据

```js
        data(){
            return {
                msg:'你好，Vue',
                stu:{
                    name:'孙悟空',
                    age:12,
                    gender:'男',
                    friend:{
                        father:'父亲',
                        mother:'妈妈',
                    }
                }
            }
        }
```

## 响应数组

Vue2不支持

数组中的每个元素都是响应式的

```js
        data(){
            return {
                msg:'你好，Vue',
                age:8,
                friend:['猪八戒','玉兔公主']
            }
        },
```



## data规范

所有的响应式数据都建议写在data中，如果还没有指定值，则可设置为`null`

# ref



## 基本语法

ref函数用于创建一个响应式数据

```js
ref(param)
```

- ***Param**：任意类型的数据*
- *Return*：`RefImpl`类型，响应式数据

原理：将param包装成了*Ref*对象`{value:param}`，再变为响应式数据

因此访问ref生成的响应式数据时需要使用`value`访问到具体的param

```js
const obj=ref({name:'lai'})
console.log(obj.value.name)
```

在template中可以不使用value直接使用，vm会自动得到*RefImpl*的value

```js
let msg=ref('hello Vue')
function f() {
  console.log(msg.value)
}
```

## RefImpl

基本数据类型会被包装成RefImpl类型的对象

原理：通过`Object.defineProperty()`的`get`和`set`完成的

## Proxy

对象包装成Proxy类型的对象

`ref`对于对象类型会调用`reactive`函数实现响应式数据



# reactive

## 基本语法

`reactive`函数将定义一个对象类型的响应式数据

```js
reactive(Object)
```

- *Object*：对象类型的数据
- *Return*：`Proxy`类型的响应式数据







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

# 事件处理

## 绑定事件

```js
v-on:事件类型=“回调函数”
```

```js
        const vm = new Vue({
            el: '#app',//通过EL配置选择器
            data: {       
            },
            methods: {
                show(e) {
                    alert('Hello')
                    console.log(e.target.innerText);
                }
            }
        })
```

```html
    <div id="app">
        <button v-on:click="show">点击我</button>
    </div>
```

在Vue中methods的函数不建议使用箭头函数

由于事件绑定比较常见，因此可以简写成

```html
@事件类型=“回调函数”
```

```html
    <div id="app">
        <button @click="show">点击我</button>
    </div>
```

## 事件传参

当我们想在View中接收参数时，应该如何定义事件？

我们可以在绑定事件时，传入实参

```html
<div id="app">
    <button @click="show(6666)">点击我</button>
</div>
```

在JS函数定义处声明接收该实参的形参number

```js
        const vm = new Vue({
            el: '#app',//通过EL配置选择器
            data: {       
            },
            methods: {
                show(number) {
                    alert('Hello')
                }
            }
        })
```

我们也可以传入多个实参，但是事件参数应该如何表示？

Vue提出可以使用`$event`表示事件的实参占位符。此时在函数定义中便可以接收到事件对象

```html
<div id="app">
    <button @click="show(6666,$event)">点击我</button>
</div>
```

```js
const vm = new Vue({
    el: '#app',//通过EL配置选择器
    data: {       
    },
    methods: {
        show(number,e) {
            alert('Hello')
        }
    }
})
```

methods并不参与事件代理。方法是给别人调用的，没有数据代理的意义。**方法就是逻辑，一般一个页面的的逻辑是固定的，但是数据可以不断变化**，这就是为什么methods不参与代理，也不写在`data`中。

## 事件函数的简化

当事件函数只有一行代码时，可以不在methods中声明，直接写在标签中

```js
<button @click="isHot=!isHot">点击我</button>
```



# 事件修饰符

## prevent

```html
<button @click.prevent="show">点击我</button>
```

代替了代码中的`e.preventDefault()`阻止默认行为

## stop

阻止事件的冒泡

```html
<button @click.stop="show">点击我</button>
```

## once

事件只触发一次

```html
<button @click.once="show">点击我</button>
```

## capture

设置事件流的传播为**捕获**方式，默认事件的传播为冒泡

```html
<button @click.capture="show">点击我</button>
```

## self

只有`e.target`是当前的元素时才触发，其作用也相当于阻止冒泡

```html
    <div id="app">
        <button v-on:click="show">点击我</button>
    </div>
```

点击button时，会冒泡至div，执行同一个事件：show，e.target为当前点击的DOM对象

```html
    <div id="app"  @click.self="show2">
        <button @click="show1">点击我</button>
    </div>
```

`@click.self`表示只有点击该元素div才会触发事件

## 多事件修饰符

修饰符可以有多个，像链式编程一样书写即可

```html
<button @click.prevent.stop="show">点击我</button>
```



# 键盘事件

##  按键别名

- `enter`

```html
<input type="text" placeholder="按下回车发送消息" @keyup.enter="show">
```

绑定了键盘事件，当enter弹出时触发show事件函数

- `delete`（包括backspace）
- `esc`退出
- `up`
- `down`
- `left`
- `right`
- `tab`：必须配合keydown绑定


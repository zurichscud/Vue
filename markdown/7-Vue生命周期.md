# 生命周期

Vue在不同的生命周期会调用不同的生命周期函数，也称生命周期钩子（Vue将函数钩出）

- beforeCreate
- created
- beforeMount
- mounted
- beforeUpdate
- updated
- beforeDestroy
- destroyed

<img src="https://v2.cn.vuejs.org/images/lifecycle.png" alt="Vue 实例生命周期" style="zoom:50%;" />

# mounted

## beforeMount



## mounted



mounted是Vue中的挂载配置项

Vue完成模板解析并把真实DOM放入页面后，调用mounted

```js
mounted(){
    console.log('挂载了')
}
```

<img src="assets/image-20231108133812807.png" alt="image-20231108133812807" style="zoom:67%;" />

# destroy

## beforeDestroy


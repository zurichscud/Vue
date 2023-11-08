# 脚手架

脚手架的英文名*Vue.cli*，*command line interface*

脚手架版本选择最新即可

脚手架官方文档：https://cli.vuejs.org/zh/

## 安装@Vue/cli

```js
npm install -g @vue/cli
```

## 创建 脚手架

```js
vue create Vue项目名
```

vue cli将会在当前工作路径下生成该名字的项目文件夹

根据提示即可进入Vue cli的示范文件

![image-20231108182856274](assets/image-20231108182856274.png)

# Vue 脚手架结构

`babel.config.js`：ES6转为ES5的工具

## package.json

script中

- serve 启动服务
- build 构建Vue工程文件
- lint 语法检查


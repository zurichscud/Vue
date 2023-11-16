# vue3 router

## 安装

```js
npm install vue-router@4
```

## main.js



```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app=createApp(App)
app.use(router)
app.mount('#app')

```

## index.js

```js
import {createRouter,createWebHashHistory} from 'vue-router'
import ShowB from '../components/ShowB'
export default createRouter({
    history:createWebHashHistory(),
    routes: [
        {
            name:'section-a',
            path: '/a',
            component:()=>import ('../components/ShowA'),
        },
        {
            name:'section-b',
            path:'/b',
            component: ShowB
        }

    ]
})
```


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
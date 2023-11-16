import VueRouter from 'vue-router'
import ShowA from '../components/ShowA'
import ShowB from '../components/ShowB'
import NewsList from '../components/NewsList'
import MsgList from '../components/MsgList'
import DisplayDetail from '../components/DisplayDetail'
export default new VueRouter({
    routes: [
        {
            name:'section-a',
            path: '/a',
            component:ShowA,
            children:[
                {
                    name:'xingwen',
                    path:'news',
                    component:NewsList
                },
                {
                    name:'info',
                    path:'message',
                    component:MsgList,
                    children:[{
                        path:'detail',
                        component:DisplayDetail
                    },
                ]
                }
            ]
        },
        {
            name:'section-b',
            path:'/b',
            component:ShowB,

        }
    ]
})
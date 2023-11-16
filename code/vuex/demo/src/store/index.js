import Vuex from 'vuex'
import Vue from 'vue'

//准备Actions：用于处理业务逻辑，例如ajax
const actions={
    join(context,value){
        console.log('actions的join被调用了',context,value);
        context.commit('JOIN',value)
    },
    joinWait(context,value){
        setTimeout(()=>context.commit('JOIN',value),1000)
    }
}
//Mutation：用于操作数据
const mutations={
    JOIN(state,value){
        console.log('JOIN被调用了',state,value);
        console.log('----------------');
        state.msg += value

    }

}
//用户存储数据
const state={
    msg:'Hello',
}
// 创建store
Vue.use(Vuex)
export default new Vuex.Store({
    actions,
    mutations,
    state,
}) 
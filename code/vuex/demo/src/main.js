import Vue from 'vue'
import App from './App.vue'
// 关闭生产环境提示
Vue.config.productionTip = false
import store from './store'

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')

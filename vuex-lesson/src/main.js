import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,  // 所有组件里$store获取store中数据
  render: h => h(App)
}).$mount('#app')

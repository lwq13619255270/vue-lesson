import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,  // $router  获取所有的方法 $route 所有的属性  
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import VueRouter from 'vue-router'
// 1、引入组件
import Home from '../views/Home.vue'

Vue.use(VueRouter)   // 全局使用 这样router可以在所有的组件上使用

// 2、设置路由映射表 将路由和组件的关系映射起来
const routes = [
  {
    path: '/home',  // 路由路径
    name: 'home',   //  命令路由
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/User.vue'),
    children: [
      {
        path: 'add',
        component: () => import('../views/UserAdd.vue')
      },
      {
        path: 'list',
        component: () => import('../views/UserList.vue')
      }
    ]
  },
  {
    path: '*',  // 重定向
    redirect: {
      path: '/'
    }
  }
]

// 3、将routes放入放入router中渲染
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // linkActiveClass:"aa" 设置选中的css样式
})

export default router

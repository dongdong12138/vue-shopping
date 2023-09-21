import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    // 注册
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '@/views/Register.vue')
  },
  {
    // 登录
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
  },
  {
    // 首页
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home/Home.vue')
  },
  {
    // 购物车
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "cart" */ '@/views/Cart.vue')
  },
  {
    // 订单
    path: '/order',
    name: 'order',
    component: () => import(/* webpackChunkName: "order" */ '@/views/Order.vue')
  },
  {
    // 我的
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "user" */ '@/views/User.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

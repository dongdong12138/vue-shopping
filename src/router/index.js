import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    // 注册
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '@/views/Register.vue'),
    beforeEnter(to, from, next) {
      const isLogin = JSON.parse(localStorage.getItem('userInfo'))
      if (from.name === 'login') return next()
      isLogin ? next({ name: from.name }) : next()
    }
  },
  {
    // 登录
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
    beforeEnter(to, from, next) {
      const isLogin = JSON.parse(localStorage.getItem('userInfo'))
      if (from.name === 'register') return next()
      isLogin ? next({ name: from.name }) : next()
    }
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

router.beforeEach((to, from, next) => {
  const isLogin = JSON.parse(localStorage.getItem('userInfo'))
  if (isLogin || to.name === 'login' || to.name === 'register') {
    next()
  } else {
    next({ name: 'login' })
  }
})

export default router

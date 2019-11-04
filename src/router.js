import Vue from 'vue'
import Router from 'vue-router'

import Login from './views/login.vue'
import Home from './views/home.vue'
import Base from './views/base.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/base'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Home
    },
    {
      path: '/base',
      name: 'base',
      component: Base
    }
    // {
    //   path: '/404',
    //   name: '404',
    //   component: () => import('./views/helpPage/404.vue')
    // }
  ]
})

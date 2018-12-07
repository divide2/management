import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Mine from '@/pages/mine'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [{ // 首页
    name: 'home',
    path: '/',
    component: Home
  }, {
    name: 'mine', // 我的页面
    path: '/mine',
    component: Mine
  }]
})

export default router
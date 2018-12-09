import Vue from 'vue'
import Router from 'vue-router'

import Routes from './main'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/',
  routes: Routes
})
router.beforeEach((to, from, next) => {
  console.log(to, from)
  // 判断页面是否需要权限操作
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.login) { // 判断是否已登录
      next({
        name: 'login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})
export default router

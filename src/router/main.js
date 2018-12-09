const routes = [{ // 首页
  name: 'home',
  path: '/',
  component: () => import('@/pages/home'),
  meta: {
    requiresAuth: true
  }
}, {
  name: 'mine', // 我的页面
  path: '/mine',
  component: () => import('@/pages/mine'),
  meta: {
    requiresAuth: true
  }
}, {
  name: 'login', // 我的页面
  path: '/login',
  component: () => import('@/pages/login')
}]

export default routes

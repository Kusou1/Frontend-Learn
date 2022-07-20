import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('@/views/news/index')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('@/views/user/index')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/user/profile')
  },
  {
    path: '/scan',
    name: 'Scan',
    component: () => import('@/views/scan/index')
  },
  {
    path: '/inappbrowser',
    name: 'Inappbrowser',
    component: () => import('@/views/inappbrowser/index')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

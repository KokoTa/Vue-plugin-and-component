import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/vue-toast-k',
      name: 'Vue-toast-k',
      component: () => import('./views/Vue-toast-k.vue')
    },
    {
      path: '/tree-test',
      name: 'Tree-test',
      component: () => import('./views/Tree-test.vue')
    }
  ]
})

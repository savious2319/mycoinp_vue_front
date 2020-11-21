import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Portfolio from '../components/Module/Portfolio/Portfolio.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'portfolio',
    component: Portfolio
  },
  /*
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
  */
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

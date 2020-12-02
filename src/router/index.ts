import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Cryptocurrency from '../components/Module/Portfolio/Cryptocurrency/Cryptocurrency.vue'
//import LegalTender from '../components/Module/Portfolio/LegalTender/LegalTender.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'portfolio',
    component: Cryptocurrency
  },
  {
    path: '/portfolio/cryptocurrency',
    name: 'portfolio',
    component: Cryptocurrency
  },
  /*
  {
    path: '/portfolio/legaltender',
    name: 'LegalTender',
    component: LegalTender
  },
  */
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

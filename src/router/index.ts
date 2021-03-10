import { createRouter, createWebHistory } from 'vue-router'
import Cryptocurrency from '@/components/Module/Portfolio/Cryptocurrency/Cryptocurrency.vue'
import LegalTender from '@/components/Module/Portfolio/LegalTender/LegalTender.vue'
import AllCoin from '@/components/Module/AllCoin/AllCoin.vue'
import Exchanges from '@/components/Module/Exchanges/Exchanges.vue'
import Defi from '@/components/Module/Defi/Defi.vue';
import Hilo from '@/components/Module/Plus/Hilo/Hilo.vue';
import NoticeList from '@/components/Module/Notice/List/List.vue';
import NoticeDetails from '@/components/Module/Notice/Details/Details.vue';
import FaqList from '@/components/Module/Faq/List/List.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Cryptocurrency,
    props: true
  },
  // {
  //   path: '/plus/:userId',
  //   name: 'plus',
  //   component: Cryptocurrency
  // },
  {
    path: '/portfolio/cryptocurrency',
    name: 'portfolio',
    component: Cryptocurrency
  },
  {
    path: '/portfolio/legaltender',
    name: 'LegalTender',
    component: LegalTender
  },
  {
    path: '/allCoin',
    name: 'AllCoin',
    component: AllCoin
  },
  {
    path: '/exchanges',
    name: 'Exchanges',
    component: Exchanges
  },
  {
    path: '/defi',
    name: 'Defi',
    component: Defi
  },
  {
    path: '/plus/hilo',
    name: 'hilo',
    component: Hilo
  },
  {
    path: '/notice/list',
    name: 'NoticeList',
    component: NoticeList
  },
  {
    path: '/notice/details',
    name: 'NoticeDetails',
    component: NoticeDetails
  },
  {
    path: '/faq',
    name: 'FaqList',
    component: FaqList
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

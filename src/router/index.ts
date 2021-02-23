import { createRouter, createWebHistory } from 'vue-router'
import Cryptocurrency from '@/components/Module/Portfolio/Cryptocurrency/Cryptocurrency.vue'
import LegalTender from '@/components/Module/Portfolio/LegalTender/LegalTender.vue'
import AllCoin from '@/components/Module/AllCoin/AllCoin.vue'
import Exchanges from '@/components/Module/Exchanges/Exchanges.vue'
import Defi from '@/components/Module/Defi/Defi.vue';
import PlusHi from '@/components/Module/PlusHi/PlusHi.vue';
import NoticeList from '@/components/Module/Notice/List/List.vue';
import NoticeDetails from '@/components/Module/Notice/Details/Details.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Cryptocurrency
  },
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
    path: '/PlusHi',
    name: 'PlusHi',
    component: PlusHi
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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

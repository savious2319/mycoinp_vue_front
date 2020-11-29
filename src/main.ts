import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueScreen from 'vue-screen';
import vuescroll from 'vuescroll';

Vue.use(VueScreen); 
Vue.use(vuescroll); 

/** 전역 컴포넌트 Start */
import Header from '@/components/LayOut/Header/Header.vue';
import HeaderLanguage from '@/components/LayOut/Header/Header-Language/Header-Language.vue';
import HeaderBackUp from '@/components/LayOut/Header/Header-BackUp/Header-BackUp.vue';
import Navigation from '@/components/LayOut/Navigation/Navigation.vue';
import NavigationGasPrice from '@/components/LayOut/Navigation/Navigation-GasPrice/Navigation-GasPrice.vue';
import Aside from '@/components/LayOut/Aside/Aside.vue';
import Footer from '@/components/LayOut/Footer/Footer.vue';

Vue.component('Header', Header)
Vue.component('HeaderLanguage', HeaderLanguage)
Vue.component('HeaderBackUp', HeaderBackUp)
Vue.component('Navigation', Navigation)
Vue.component('NavigationGasPrice', NavigationGasPrice)
Vue.component('Aside', Aside)
Vue.component('Footer', Footer)

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

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
/** 전역 컴포넌트 End */

/** 포트폴리오 가상화폐 Start */
import CryptocurrencyLeft from '@/components/Module/Portfolio/Cryptocurrency/Left/Cryptocurrency-Left.vue';
import CryptocurrencyLeftAdvertisement from '@/components/Module/Portfolio/Cryptocurrency/Left/Advertisement/Cryptocurrency-Left-Advertisement.vue';
import CryptocurrencyLeftPortfolio from '@/components/Module/Portfolio/Cryptocurrency/Left/Portfolio/Cryptocurrency-Left-Portfolio.vue';
import CryptocurrencyLeftTotalValue from '@/components/Module/Portfolio/Cryptocurrency/Left/TotalValue/Cryptocurrency-Left-TotalValue.vue';

Vue.component('CryptocurrencyLeft', CryptocurrencyLeft)
Vue.component('CryptocurrencyLeftAdvertisement', CryptocurrencyLeftAdvertisement)
Vue.component('CryptocurrencyLeftPortfolio', CryptocurrencyLeftPortfolio)
Vue.component('CryptocurrencyLeftTotalValue', CryptocurrencyLeftTotalValue)
/** 포트폴리오 가상화폐 End */

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

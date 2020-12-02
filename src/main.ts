import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueScreen from 'vue-screen';
import vuescroll from 'vuescroll';

Vue.use(VueScreen); 
Vue.use(vuescroll); 

/** LayOut Start */
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
/** LayOut End */

/** Portfolio Cryptocurrency Start */
import Cryptocurrency from '@/components/Module/Portfolio/Cryptocurrency/Cryptocurrency.vue';

import CryptocurrencyLeft from '@/components/Module/Portfolio/Cryptocurrency/Left/Left.vue';
import CryptocurrencyLeftAdvertisement from '@/components/Module/Portfolio/Cryptocurrency/Left/Advertisement/Advertisement.vue';
import CryptocurrencyLeftPortfolio from '@/components/Module/Portfolio/Cryptocurrency/Left/Portfolio/Portfolio.vue';
import CryptocurrencyLeftTotalValue from '@/components/Module/Portfolio/Cryptocurrency/Left/TotalValue/TotalValue.vue';

import CryptocurrencyRight from '@/components/Module/Portfolio/Cryptocurrency/Right/Right.vue';
import CryptocurrencyRightAdvertisement from '@/components/Module/Portfolio/Cryptocurrency/Right/Advertisement/Advertisement.vue';
import CryptocurrencyRightBuySell from '@/components/Module/Portfolio/Cryptocurrency/Right/BuySell/BuySell.vue';
import CryptocurrencyRightOfficialMessages from '@/components/Module/Portfolio/Cryptocurrency/Right/OfficialMessages/OfficialMessages.vue';
import CryptocurrencyRightPortfolioDetail from '@/components/Module/Portfolio/Cryptocurrency/Right/PortfolioDetail/PortfolioDetail.vue';
import CryptocurrencyRightTradingView from '@/components/Module/Portfolio/Cryptocurrency/Right/TradingView/TradingView.vue';

Vue.component('Cryptocurrency', Cryptocurrency)

Vue.component('CryptocurrencyLeft', CryptocurrencyLeft)
Vue.component('CryptocurrencyLeftAdvertisement', CryptocurrencyLeftAdvertisement)
Vue.component('CryptocurrencyLeftPortfolio', CryptocurrencyLeftPortfolio)
Vue.component('CryptocurrencyLeftTotalValue', CryptocurrencyLeftTotalValue)

Vue.component('CryptocurrencyRight', CryptocurrencyRight)
Vue.component('CryptocurrencyRightAdvertisement', CryptocurrencyRightAdvertisement)
Vue.component('CryptocurrencyRightBuySell', CryptocurrencyRightBuySell)
Vue.component('CryptocurrencyRightOfficialMessages', CryptocurrencyRightOfficialMessages)
Vue.component('CryptocurrencyRightPortfolioDetail', CryptocurrencyRightPortfolioDetail)
Vue.component('CryptocurrencyRightTradingView', CryptocurrencyRightTradingView)
/** Portfolio Cryptocurrency End */

/** Portfolio LegalTender Start */
import LegalTender from '@/components/Module/Portfolio/LegalTender/LegalTender.vue';

import LegalTenderLeft from '@/components/Module/Portfolio/LegalTender/Left/Left.vue';
import LegalTenderLeftAdvertisement from '@/components/Module/Portfolio/LegalTender/Left/Advertisement/Advertisement.vue';
import LegalTenderLeftPortfolio from '@/components/Module/Portfolio/LegalTender/Left/Portfolio/Portfolio.vue';
import LegalTenderLeftTotalValue from '@/components/Module/Portfolio/LegalTender/Left/TotalValue/TotalValue.vue';

import LegalTenderRight from '@/components/Module/Portfolio/LegalTender/Right/Right.vue';
import LegalTenderRightAdvertisement from '@/components/Module/Portfolio/LegalTender/Right/Advertisement/Advertisement.vue';
import LegalTenderRightBuySell from '@/components/Module/Portfolio/LegalTender/Right/BuySell/BuySell.vue';
import LegalTenderRightOfficialMessages from '@/components/Module/Portfolio/LegalTender/Right/OfficialMessages/OfficialMessages.vue';
import LegalTenderRightPortfolioDetail from '@/components/Module/Portfolio/LegalTender/Right/PortfolioDetail/PortfolioDetail.vue';
import LegalTenderRightTradingView from '@/components/Module/Portfolio/LegalTender/Right/TradingView/TradingView.vue';

Vue.component('LegalTender', LegalTender)

Vue.component('LegalTenderLeft', LegalTenderLeft)
Vue.component('LegalTenderLeftAdvertisement', LegalTenderLeftAdvertisement)
Vue.component('LegalTenderLeftPortfolio', LegalTenderLeftPortfolio)
Vue.component('LegalTenderLeftTotalValue', LegalTenderLeftTotalValue)

Vue.component('LegalTenderRight', LegalTenderRight)
Vue.component('LegalTenderRightAdvertisement', LegalTenderRightAdvertisement)
Vue.component('LegalTenderRightBuySell', LegalTenderRightBuySell)
Vue.component('LegalTenderRightOfficialMessages', LegalTenderRightOfficialMessages)
Vue.component('LegalTenderRightPortfolioDetail', LegalTenderRightPortfolioDetail)
Vue.component('LegalTenderRightTradingView', LegalTenderRightTradingView)
/** Portfolio LegalTender End */

/** AllCoin Start */
import AllCoin from '@/components/Module/AllCoin/AllCoin.vue';
import AllCoinLeftAllCoinList from '@/components/Module/AllCoin/Left/AllCoinList/AllCoinList.vue';

import AllCoinRight from '@/components/Module/AllCoin/Right/Right.vue';
import AllCoinRightCoinDetail from '@/components/Module/AllCoin/Right/CoinDetail/CoinDetail.vue';
import AllCoinRightTradingView from '@/components/Module/AllCoin/Right/TradingView/TradingView.vue';

Vue.component('AllCoin', AllCoin)
Vue.component('AllCoinLeftAllCoinList', AllCoinLeftAllCoinList)
Vue.component('AllCoinRight', AllCoinRight)
Vue.component('AllCoinRightCoinDetail', AllCoinRightCoinDetail)
Vue.component('AllCoinRightTradingView', AllCoinRightTradingView)
/** AllCoin End */

/** Exchanges Start */
import Exchanges from '@/components/Module/Exchanges/Exchanges.vue';
import ExchangesLeftExchangeList from '@/components/Module/Exchanges/Left/ExchangeList/ExchangeList.vue';
import ExchangesRightExchangeCoinList from '@/components/Module/Exchanges/Right/ExchangeCoinList/ExchangeCoinList.vue';

Vue.component('Exchanges', Exchanges)
Vue.component('ExchangesLeftExchangeList', ExchangesLeftExchangeList)
Vue.component('ExchangesRightExchangeCoinList', ExchangesRightExchangeCoinList)
/** Exchanges End */


Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

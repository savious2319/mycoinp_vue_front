import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';
import { VueWindowSizePlugin } from 'vue-window-size/option-api';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import { fas } from '@fortawesome/free-solid-svg-icons'

const app = createApp(App);

app.use(router);
app.use(PerfectScrollbar);
app.use(VueWindowSizePlugin);
library.add(fas);

/** LayOut Start */
import Header from '@/components/LayOut/Header/Header.vue';
import HeaderLanguage from '@/components/LayOut/Header/Header-Language/Header-Language.vue';
import HeaderBackUp from '@/components/LayOut/Header/Header-BackUp/Header-BackUp.vue';
import Navigation from '@/components/LayOut/Navigation/Navigation.vue';
import NavigationGasPrice from '@/components/LayOut/Navigation/Navigation-GasPrice/Navigation-GasPrice.vue';
import Aside from '@/components/LayOut/Aside/Aside.vue';
import Footer from '@/components/LayOut/Footer/Footer.vue';

app.component('Header', Header)
app.component('HeaderLanguage', HeaderLanguage)
app.component('HeaderBackUp', HeaderBackUp)
app.component('Navigation', Navigation)
app.component('NavigationGasPrice', NavigationGasPrice)
app.component('Aside', Aside)
app.component('Footer', Footer)
/** LayOut End */

/** Popup Start */
import popupTradingView from '@/components/Module/Shared/Popup/popupTradingView/popupTradingView.vue';
import popupMemo from '@/components/Module/Shared/Popup/popupMemo/popupMemo.vue';
import popupFiatType from '@/components/Module/Shared/Popup/popupFiatType/popupFiatType.vue';
import popupPortFolio from '@/components/Module/Shared/Popup/popupPortFolio/popupPortFolio.vue';
import popupPortfolioCoin from '@/components/Module/Shared/Popup/popupPortfolioCoin/popupPortfolioCoin.vue';
import popupPortfolioFiat from '@/components/Module/Shared/Popup/popupPortfolioFiat/popupPortfolioFiat.vue';
import popupPortfolioCoinSell from '@/components/Module/Shared/Popup/popupPortfolioCoinSell/popupPortfolioCoinSell.vue';
import popupPortfolioFiatSell from '@/components/Module/Shared/Popup/popupPortfolioFiatSell/popupPortfolioFiatSell.vue';
import popupSelectCoinPair from '@/components/Module/Shared/Popup/popupSelectCoinPair/popupSelectCoinPair.vue';
import popupSelectCoinWhereWallet from '@/components/Module/Shared/Popup/popupSelectCoinWhereWallet/popupSelectCoinWhereWallet.vue';

app.component('popupTradingView', popupTradingView)
app.component('popupMemo', popupMemo)
app.component('popupFiatType', popupFiatType)
app.component('popupPortFolio', popupPortFolio)
app.component('popupPortfolioCoin', popupPortfolioCoin)
app.component('popupPortfolioFiat', popupPortfolioFiat)
app.component('popupPortfolioCoinSell', popupPortfolioCoinSell)
app.component('popupPortfolioFiatSell', popupPortfolioFiatSell)
app.component('popupSelectCoinPair', popupSelectCoinPair)
app.component('popupSelectCoinWhereWallet', popupSelectCoinWhereWallet)
/** Popup End */


/** Portfolio Cryptocurrency Start */
import Cryptocurrency from '@/components/Module/Portfolio/Cryptocurrency/Cryptocurrency.vue';

import CryptocurrencyLeft from '@/components/Module/Portfolio/Cryptocurrency/Left/Left.vue';
import CryptocurrencyLeftAdvertisement from '@/components/Module/Portfolio/Cryptocurrency/Left/Advertisement/Advertisement.vue';
import CryptocurrencyLeftTotalValue from '@/components/Module/Portfolio/Cryptocurrency/Left/TotalValue/TotalValue.vue';
import CryptocurrencyLeftPortfolio from '@/components/Module/Portfolio/Cryptocurrency/Left/Portfolio/Portfolio.vue';
import CryptocurrencyLeftPortfoliobyCoins from '@/components/Module/Portfolio/Cryptocurrency/Left/Portfolio/byCoins/byCoins.vue';
import CryptocurrencyLeftPortfoliobyWallets from '@/components/Module/Portfolio/Cryptocurrency/Left/Portfolio/byWallets/byWallets.vue';
import CryptocurrencyLeftPortfoliobyDates from '@/components/Module/Portfolio/Cryptocurrency/Left/Portfolio/byDates/byDates.vue';

import CryptocurrencyRight from '@/components/Module/Portfolio/Cryptocurrency/Right/Right.vue';
import CryptocurrencyRightAdvertisement from '@/components/Module/Portfolio/Cryptocurrency/Right/Advertisement/Advertisement.vue';
import CryptocurrencyRightBuySell from '@/components/Module/Portfolio/Cryptocurrency/Right/BuySell/BuySell.vue';
import CryptocurrencyRightOfficialMessages from '@/components/Module/Portfolio/Cryptocurrency/Right/OfficialMessages/OfficialMessages.vue';
import CryptocurrencyRightPortfolioDetail from '@/components/Module/Portfolio/Cryptocurrency/Right/PortfolioDetail/PortfolioDetail.vue';
import CryptocurrencyRightTradingView from '@/components/Module/Portfolio/Cryptocurrency/Right/TradingView/TradingView.vue';

app.component('Cryptocurrency', Cryptocurrency)

app.component('CryptocurrencyLeft', CryptocurrencyLeft)
app.component('CryptocurrencyLeftAdvertisement', CryptocurrencyLeftAdvertisement)
app.component('CryptocurrencyLeftTotalValue', CryptocurrencyLeftTotalValue)
app.component('CryptocurrencyLeftPortfolio', CryptocurrencyLeftPortfolio)
app.component('CryptocurrencyLeftPortfoliobyCoins', CryptocurrencyLeftPortfoliobyCoins)
app.component('CryptocurrencyLeftPortfoliobyWallets', CryptocurrencyLeftPortfoliobyWallets)
app.component('CryptocurrencyLeftPortfoliobyDates', CryptocurrencyLeftPortfoliobyDates)

app.component('CryptocurrencyRight', CryptocurrencyRight)
app.component('CryptocurrencyRightAdvertisement', CryptocurrencyRightAdvertisement)
app.component('CryptocurrencyRightPortfolioDetail', CryptocurrencyRightPortfolioDetail)
app.component('CryptocurrencyRightTradingView', CryptocurrencyRightTradingView)
app.component('CryptocurrencyRightOfficialMessages', CryptocurrencyRightOfficialMessages)
app.component('CryptocurrencyRightBuySell', CryptocurrencyRightBuySell)
/** Portfolio Cryptocurrency End */

/** Portfolio LegalTender Start */
import LegalTender from '@/components/Module/Portfolio/LegalTender/LegalTender.vue';

import LegalTenderLeft from '@/components/Module/Portfolio/LegalTender/Left/Left.vue';
import LegalTenderLeftAdvertisement from '@/components/Module/Portfolio/LegalTender/Left/Advertisement/Advertisement.vue';
import LegalTenderLeftTotalValue from '@/components/Module/Portfolio/LegalTender/Left/TotalValue/TotalValue.vue';
import LegalTenderLeftPortfolio from '@/components/Module/Portfolio/LegalTender/Left/Portfolio/Portfolio.vue';

import LegalTenderRight from '@/components/Module/Portfolio/LegalTender/Right/Right.vue';
import LegalTenderRightAdvertisement from '@/components/Module/Portfolio/LegalTender/Right/Advertisement/Advertisement.vue';
import LegalTenderRightBuySell from '@/components/Module/Portfolio/LegalTender/Right/BuySell/BuySell.vue';
import LegalTenderRightOfficialMessages from '@/components/Module/Portfolio/LegalTender/Right/OfficialMessages/OfficialMessages.vue';
import LegalTenderRightPortfolioDetail from '@/components/Module/Portfolio/LegalTender/Right/PortfolioDetail/PortfolioDetail.vue';
import LegalTenderRightTradingView from '@/components/Module/Portfolio/LegalTender/Right/TradingView/TradingView.vue';

app.component('LegalTender', LegalTender)

app.component('LegalTenderLeft', LegalTenderLeft)
app.component('LegalTenderLeftAdvertisement', LegalTenderLeftAdvertisement)
app.component('LegalTenderLeftPortfolio', LegalTenderLeftPortfolio)
app.component('LegalTenderLeftTotalValue', LegalTenderLeftTotalValue)

app.component('LegalTenderRight', LegalTenderRight)
app.component('LegalTenderRightAdvertisement', LegalTenderRightAdvertisement)
app.component('LegalTenderRightBuySell', LegalTenderRightBuySell)
app.component('LegalTenderRightOfficialMessages', LegalTenderRightOfficialMessages)
app.component('LegalTenderRightPortfolioDetail', LegalTenderRightPortfolioDetail)
app.component('LegalTenderRightTradingView', LegalTenderRightTradingView)
/** Portfolio LegalTender End */

/** AllCoin Start */
import AllCoin from '@/components/Module/AllCoin/AllCoin.vue';
import AllCoinLeft from '@/components/Module/AllCoin/Left/Left.vue';
import AllCoinLeftAllCoinList from '@/components/Module/AllCoin/Left/AllCoinList/AllCoinList.vue';

import AllCoinRight from '@/components/Module/AllCoin/Right/Right.vue';
import AllCoinRightCoinDetail from '@/components/Module/AllCoin/Right/CoinDetail/CoinDetail.vue';
import AllCoinRightTradingView from '@/components/Module/AllCoin/Right/TradingView/TradingView.vue';
import AllCoinRightBuyExchange from '@/components/Module/AllCoin/Right/BuyExchange/BuyExchange.vue';
import AllCoinRightOfficialMessages from '@/components/Module/AllCoin/Right/OfficialMessages/OfficialMessages.vue';

app.component('AllCoin', AllCoin)
app.component('AllCoinLeft', AllCoinLeft)
app.component('AllCoinLeftAllCoinList', AllCoinLeftAllCoinList)
app.component('AllCoinRight', AllCoinRight)
app.component('AllCoinRightCoinDetail', AllCoinRightCoinDetail)
app.component('AllCoinRightTradingView', AllCoinRightTradingView)
app.component('AllCoinRightBuyExchange', AllCoinRightBuyExchange)
app.component('AllCoinRightOfficialMessages', AllCoinRightOfficialMessages)
/** AllCoin End */

/** Exchanges Start */
import Exchanges from '@/components/Module/Exchanges/Exchanges.vue';
import ExchangesLeft from '@/components/Module/Exchanges/Left/Left.vue';
import ExchangesLeftExchangeList from '@/components/Module/Exchanges/Left/ExchangeList/ExchangeList.vue';

import ExchangesRight from '@/components/Module/Exchanges/Right/Right.vue';
import ExchangesRightCoinDetail from '@/components/Module/Exchanges/Right/CoinDetail/CoinDetail.vue';
import ExchangesRightExchangeCoinList from '@/components/Module/Exchanges/Right/ExchangeCoinList/ExchangeCoinList.vue';
import { library } from '@fortawesome/fontawesome-svg-core';

app.component('Exchanges', Exchanges)
app.component('ExchangesLeft', ExchangesLeft)
app.component('ExchangesLeftExchangeList', ExchangesLeftExchangeList)
app.component('ExchangesRight', ExchangesRight)
app.component('ExchangesRightCoinDetail', ExchangesRightCoinDetail)
app.component('ExchangesRightExchangeCoinList', ExchangesRightExchangeCoinList)
/** Exchanges End */


app.mount('#app')
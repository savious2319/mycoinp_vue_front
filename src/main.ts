import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';
import { VueWindowSizePlugin } from 'vue-window-size/option-api';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import { fas } from '@fortawesome/free-solid-svg-icons'
import VueSmoothScroll from 'vue3-smooth-scroll'
import { library } from '@fortawesome/fontawesome-svg-core';

const app = createApp(App);

app.use(router);
app.use(PerfectScrollbar);
app.use(VueWindowSizePlugin);
app.use(VueSmoothScroll, {
    duration: 500, 
    offset: -50,
})
library.add(fas);

/** LayOut Start */
import Header from '@/components/LayOut/Header/Header.vue';
import HeaderLanguage from '@/components/LayOut/Header/Header-Language/Header-Language.vue';
import HeaderBackUp from '@/components/LayOut/Header/Header-BackUp/Header-BackUp.vue';
import SubHeader from '@/components/LayOut/SubHeader/SubHeader.vue';
import Navigation from '@/components/LayOut/Navigation/Navigation.vue';
import NavigationGasPrice from '@/components/LayOut/Navigation/Navigation-GasPrice/Navigation-GasPrice.vue';
import Aside from '@/components/LayOut/Aside/Aside.vue';
import Footer from '@/components/LayOut/Footer/Footer.vue';

app.component('Header', Header)
app.component('HeaderLanguage', HeaderLanguage)
app.component('HeaderBackUp', HeaderBackUp)
app.component('SubHeader', SubHeader)
app.component('Navigation', Navigation)
app.component('NavigationGasPrice', NavigationGasPrice)
app.component('Aside', Aside)
app.component('Footer', Footer)
/** LayOut End */

/** Shared Start */
import BtnTopFull from '@/components/Shared/BtnTopFull/BtnTopFull.vue';
import BtnTopLeft from '@/components/Shared/BtnTopLeft/BtnTopLeft.vue';
import BtnTopRight from '@/components/Shared/BtnTopRight/BtnTopRight.vue';
import Pagenation from '@/components/Shared/Pagenation/Pagenation.vue';

app.component('BtnTopFull', BtnTopFull)
app.component('BtnTopLeft', BtnTopLeft)
app.component('BtnTopRight', BtnTopRight)
app.component('Pagenation', Pagenation)
/** Shared End */

/** Popup Start */
import popupTradingView from '@/components/Shared/Popup/popupTradingView/popupTradingView.vue';
import popupMemo from '@/components/Shared/Popup/popupMemo/popupMemo.vue';
import popupFiatType from '@/components/Shared/Popup/popupFiatType/popupFiatType.vue';
import popupPortFolio from '@/components/Shared/Popup/popupPortFolio/popupPortFolio.vue';
import popupPortfolioCoin from '@/components/Shared/Popup/popupPortfolioCoin/popupPortfolioCoin.vue';
import popupPortfolioFiat from '@/components/Shared/Popup/popupPortfolioFiat/popupPortfolioFiat.vue';
import popupPortfolioCoinSell from '@/components/Shared/Popup/popupPortfolioCoinSell/popupPortfolioCoinSell.vue';
import popupPortfolioFiatSell from '@/components/Shared/Popup/popupPortfolioFiatSell/popupPortfolioFiatSell.vue';
import popupSelectCoinPair from '@/components/Shared/Popup/popupSelectCoinPair/popupSelectCoinPair.vue';
import popupSelectCoinWhereWallet from '@/components/Shared/Popup/popupSelectCoinWhereWallet/popupSelectCoinWhereWallet.vue';
import popupHiloSet from '@/components/Shared/Popup/popupHiloSet/popupHiloSet.vue';
import popupCoinName from '@/components/Shared/Popup/popupCoinName/popupCoinName.vue';

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
app.component('popupHiloSet', popupHiloSet)
app.component('popupCoinName', popupCoinName)
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
import CryptocurrencyRightBuySellBuy from '@/components/Module/Portfolio/Cryptocurrency/Right/BuySell/Buy/Buy.vue';
import CryptocurrencyRightBuySellSell from '@/components/Module/Portfolio/Cryptocurrency/Right/BuySell/Sell/Sell.vue';
import CryptocurrencyRightBuySellHistory from '@/components/Module/Portfolio/Cryptocurrency/Right/BuySell/History/History.vue';
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
app.component('CryptocurrencyRightBuySellBuy', CryptocurrencyRightBuySellBuy)
app.component('CryptocurrencyRightBuySellSell', CryptocurrencyRightBuySellSell)
app.component('CryptocurrencyRightBuySellHistory', CryptocurrencyRightBuySellHistory)
/** Portfolio Cryptocurrency End */

/** Portfolio LegalTender Start */
import LegalTender from '@/components/Module/Portfolio/LegalTender/LegalTender.vue';

import LegalTenderLeft from '@/components/Module/Portfolio/LegalTender/Left/Left.vue';
import LegalTenderLeftAdvertisement from '@/components/Module/Portfolio/LegalTender/Left/Advertisement/Advertisement.vue';
import LegalTenderLeftTotalValue from '@/components/Module/Portfolio/LegalTender/Left/TotalValue/TotalValue.vue';
import LegalTenderLeftPortfolio from '@/components/Module/Portfolio/LegalTender/Left/Portfolio/Portfolio.vue';
import LegalTenderLeftPortfoliobyCoins from '@/components/Module/Portfolio/LegalTender/Left/Portfolio/byCoins/byCoins.vue';
import LegalTenderLeftPortfoliobyWallets from '@/components/Module/Portfolio/LegalTender/Left/Portfolio/byWallets/byWallets.vue';
import LegalTenderLeftPortfoliobyDates from '@/components/Module/Portfolio/LegalTender/Left/Portfolio/byDates/byDates.vue';

import LegalTenderRight from '@/components/Module/Portfolio/LegalTender/Right/Right.vue';
import LegalTenderRightAdvertisement from '@/components/Module/Portfolio/LegalTender/Right/Advertisement/Advertisement.vue';
import LegalTenderRightBuySell from '@/components/Module/Portfolio/LegalTender/Right/BuySell/BuySell.vue';
import LegalTenderRightBuySellDeposit from '@/components/Module/Portfolio/LegalTender/Right/BuySell/Deposit/Deposit.vue';
import LegalTenderRightBuySellWithdraw from '@/components/Module/Portfolio/LegalTender/Right/BuySell/Withdraw/Withdraw.vue';
import LegalTenderRightBuySellHistory from '@/components/Module/Portfolio/LegalTender/Right/BuySell/History/History.vue';
import LegalTenderRightOfficialMessages from '@/components/Module/Portfolio/LegalTender/Right/OfficialMessages/OfficialMessages.vue';
import LegalTenderRightPortfolioDetail from '@/components/Module/Portfolio/LegalTender/Right/PortfolioDetail/PortfolioDetail.vue';

app.component('LegalTender', LegalTender)

app.component('LegalTenderLeft', LegalTenderLeft)
app.component('LegalTenderLeftAdvertisement', LegalTenderLeftAdvertisement)
app.component('LegalTenderLeftTotalValue', LegalTenderLeftTotalValue)
app.component('LegalTenderLeftPortfolio', LegalTenderLeftPortfolio)
app.component('LegalTenderLeftPortfoliobyCoins', LegalTenderLeftPortfoliobyCoins)
app.component('LegalTenderLeftPortfoliobyWallets', LegalTenderLeftPortfoliobyWallets)
app.component('LegalTenderLeftPortfoliobyDates', LegalTenderLeftPortfoliobyDates)

app.component('LegalTenderRight', LegalTenderRight)
app.component('LegalTenderRightAdvertisement', LegalTenderRightAdvertisement)
app.component('LegalTenderRightPortfolioDetail', LegalTenderRightPortfolioDetail)
app.component('LegalTenderRightOfficialMessages', LegalTenderRightOfficialMessages)
app.component('LegalTenderRightBuySell', LegalTenderRightBuySell)
app.component('LegalTenderRightBuySellDeposit', LegalTenderRightBuySellDeposit)
app.component('LegalTenderRightBuySellWithdraw', LegalTenderRightBuySellWithdraw)
app.component('LegalTenderRightBuySellHistory', LegalTenderRightBuySellHistory)
/** Portfolio LegalTender End */

/** AllCoin Start */
import AllCoin from '@/components/Module/AllCoin/AllCoin.vue';
import AllCoinLeft from '@/components/Module/AllCoin/Left/Left.vue';
import AllCoinLeftAllCoinList from '@/components/Module/AllCoin/Left/AllCoinList/AllCoinList.vue';

import AllCoinRight from '@/components/Module/AllCoin/Right/Right.vue';
import AllCoinRightCoinDetail from '@/components/Module/AllCoin/Right/CoinDetail/CoinDetail.vue';
import AllCoinRightBuyExchange from '@/components/Module/AllCoin/Right/BuyExchange/BuyExchange.vue';
import AllCoinRightOfficialMessages from '@/components/Module/AllCoin/Right/OfficialMessages/OfficialMessages.vue';

app.component('AllCoin', AllCoin)
app.component('AllCoinLeft', AllCoinLeft)
app.component('AllCoinLeftAllCoinList', AllCoinLeftAllCoinList)
app.component('AllCoinRight', AllCoinRight)
app.component('AllCoinRightCoinDetail', AllCoinRightCoinDetail)
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

app.component('Exchanges', Exchanges)
app.component('ExchangesLeft', ExchangesLeft)
app.component('ExchangesLeftExchangeList', ExchangesLeftExchangeList)
app.component('ExchangesRight', ExchangesRight)
app.component('ExchangesRightCoinDetail', ExchangesRightCoinDetail)
app.component('ExchangesRightExchangeCoinList', ExchangesRightExchangeCoinList)
/** Exchanges End */

/** Defi Start */
import Defi from '@/components/Module/Defi/Defi.vue';
import DefiLeft from '@/components/Module/Defi/Left/Left.vue';
import DefiLeftSingleAssets from '@/components/Module/Defi/Left/SingleAssets/SingleAssets.vue';
import DefiLeftMultiAssets from '@/components/Module/Defi/Left/MultiAssets/MultiAssets.vue';

import DefiRight from '@/components/Module/Defi/Right/Right.vue';
import DefiRightCoinDetail from '@/components/Module/Defi/Right/CoinDetail/CoinDetail.vue';
import DefiRightSingleAssets from '@/components/Module/Defi/Right/SingleAssets/SingleAssets.vue';
import DefiRightMultiAssets from '@/components/Module/Defi/Right/MultiAssets/MultiAssets.vue';

app.component('Defi', Defi)
app.component('DefiLeft', DefiLeft)
app.component('DefiLeftSingleAssets', DefiLeftSingleAssets)
app.component('DefiLeftMultiAssets', DefiLeftMultiAssets)
app.component('DefiRight', DefiRight)
app.component('DefiRightCoinDetail', DefiRightCoinDetail)
app.component('DefiRightSingleAssets', DefiRightSingleAssets)
app.component('DefiRightMultiAssets', DefiRightMultiAssets)
/** Defi End */

/** Hilo Start */
import Hilo from '@/components/Module/Plus/Hilo/Hilo.vue';
import HiloLeft from '@/components/Module/Plus/Hilo/Left/Left.vue';
import HiloLeftHigh from '@/components/Module/Plus/Hilo/Left/High/High.vue';
import HiloLeftLow from '@/components/Module/Plus/Hilo/Left/Low/Low.vue';

import HiloRight from '@/components/Module/Plus/Hilo/Right/Right.vue';
import HiloRightCoinDetail from '@/components/Module/Plus/Hilo/Right/CoinDetail/CoinDetail.vue';
import HiloRightBuyExchange from '@/components/Module/Plus/Hilo/Right/BuyExchange/BuyExchange.vue';
import HiloRightOfficialMessages from '@/components/Module/Plus/Hilo/Right/OfficialMessages/OfficialMessages.vue';

app.component('Hilo', Hilo)
app.component('HiloLeft', HiloLeft)
app.component('HiloLeftHigh', HiloLeftHigh)
app.component('HiloLeftLow', HiloLeftLow)
app.component('HiloRight', HiloRight)
app.component('HiloRightCoinDetail', HiloRightCoinDetail)
app.component('HiloRightBuyExchange', HiloRightBuyExchange)
app.component('HiloRightOfficialMessages', HiloRightOfficialMessages)
/** Hilo End */

/** Notice Start */
import NoticeList from '@/components/Module/Notice/List/List.vue';
import NoticeListSection from '@/components/Module/Notice/List/Section/Section.vue';
import NoticeDetails from '@/components/Module/Notice/Details/Details.vue';
import NoticeDetailsSection from '@/components/Module/Notice/Details/Section/Section.vue';
import FaqList from '@/components/Module/Faq/List/List.vue';
import FaqListSection from '@/components/Module/Faq/List/Section/Section.vue';

app.component('NoticeList', NoticeList)
app.component('NoticeListSection', NoticeListSection)
app.component('NoticeDetails', NoticeDetails)
app.component('NoticeDetailsSection', NoticeDetailsSection)
app.component('FaqList', FaqList)
app.component('FaqListSection', FaqListSection)
/** Notice End */

app.mount('#app')
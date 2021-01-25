<template>
  <div class="buySell">
    <ul class="tabs">
      <li>
        <button type="button" :class="{'active': tabs.isBuy}" @click="btnBy('isBuy')">Buy [ 3/15 ]</button>
        <button type="button" class="icoReg" @click="btnpopupPortfolio">Registration</button>
      </li>
      <li>
        <button type="button" :class="{'active': tabs.isSell}" @click="btnBy('isSell')">Sell [ 3 ]</button>
      </li>
      <li>
        <button type="button" :class="{'active': tabs.isHistory}" @click="btnBy('isHistory')">History</button>
      </li>
    </ul>
    <p>
      <span>2020-03-24</span>
      <span>Wallet name</span>
      <button type="button"><i class="fas fa-pencil-alt"/><span>Memo</span></button>
      <button type="button"><i class="fas fa-trash-alt"/><span>Delete</span></button>
    </p>
    <CryptocurrencyRightBuySellBuy v-if="tabs.isBuy"/>
    <CryptocurrencyRightBuySellSell v-if="tabs.isSell"/>
    <CryptocurrencyRightBuySellHistory v-if="tabs.isHistory"/>
  </div>
  <!--
  <popupPortfolioFiat v-if="ispopupPortfolio"/>
  <popupPortfolioFiatSell v-if="ispopupPortfolio"/>
  -->
  <popupPortfolioCoin v-if="ispopupPortfolio"/>
  <div class="mask" v-if="ispopupPortfolio" @click="btnpopupPortfolio"></div>

  <popupPortfolioCoinSell v-if="ispopupPortfolioSell"/>
  <div class="mask" v-if="ispopupPortfolioSell" @click="btnpopupPortfolioSell"></div>
</template>

<script>
export default {
  data () {
    return {
      tabs:{
				isBuy: true,
				isSell: false,
				isHistory: false
			},
      ispopupPortfolio: false,
      ispopupPortfolioSell: false,
      isAll: false
    }
  },
  methods: {
    btnBy: function(arg){
      Object.keys(this.tabs).forEach(key => {
        if(key == arg){
          this.tabs[key] = true;
        } else{
          this.tabs[key] = false;
        }
      });
    },
    btnpopupPortfolio: function(){
      if(this.ispopupPortfolio == false){
          this.ispopupPortfolio = true;
      } else{
          this.ispopupPortfolio = false;
      }
    },
    btnpopupPortfolioSell: function(){
      if(this.ispopupPortfolioSell == false){
          this.ispopupPortfolioSell = true;
      } else{
          this.ispopupPortfolioSell = false;
      }
    },
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "BuySell.scss";
</style>

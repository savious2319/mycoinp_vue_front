<template>
  <div class="buySell">
    <ul class="tabs">
      <li>
        <button type="button" href="#adRight" v-smooth-scroll="{container: '.sectionRight'}" :class="{'active': tabs.isBuy}" @click="btnBy('isBuy')">Deposit [ 100 ]</button>
        <button type="button" class="icoReg" @click="btnpopupPortfolio">Registration</button>
      </li>
      <li>
        <button type="button" href="#adRight" v-smooth-scroll="{container: '.sectionRight'}" :class="{'active': tabs.isSell}" @click="btnBy('isSell')">Withdraw [ 3 ]</button>
      </li>
      <li>
        <button type="button" href="#adRight" v-smooth-scroll="{container: '.sectionRight'}" :class="{'active': tabs.isHistory}" @click="btnBy('isHistory')">History</button>
      </li>
    </ul>
    <LegalTenderRightBuySellDeposit v-if="tabs.isBuy"/>
    <LegalTenderRightBuySellWithdraw v-if="tabs.isSell"/>
    <LegalTenderRightBuySellHistory v-if="tabs.isHistory"/>
  </div>
  <!--
  <popupPortfolioFiat v-if="ispopupPortfolio"/>
  <popupPortfolioFiatSell v-if="ispopupPortfolio"/>
  -->
  <popupPortfolioCoin v-if="ispopupPortfolio" @cancel="btnpopupPortfolio"/>
  <div class="mask" v-if="ispopupPortfolio"></div>

  <popupPortfolioCoinSell v-if="ispopupPortfolioSell" @cancel="btnpopupPortfolioSell"/>
  <div class="mask" v-if="ispopupPortfolioSell"></div>
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

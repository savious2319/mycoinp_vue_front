<template>
  <div class="Portfolio">
    <div class="tab">
      <button type="button" :class="{'active': portfolio.isbyCoins}" @click="btnBy('isbyCoins')">by Coins</button>
      <button type="button" :class="{'active': portfolio.isbyWallets}" @click="btnBy('isbyWallets')">by Wallets</button>
      <button type="button" :class="{'active': portfolio.isbyDates}" @click="btnBy('isbyDates')">by Dates</button>
    </div>
    <LegalTenderLeftPortfoliobyCoins v-if="portfolio.isbyCoins"/>
    <LegalTenderLeftPortfoliobyWallets v-if="portfolio.isbyWallets"/>
    <LegalTenderLeftPortfoliobyDates v-if="portfolio.isbyDates"/>
  </div>
</template>

<script>
export default {
  data () {
		return {
      portfolio:{
				isbyCoins: true,
				isbyWallets: false,
				isbyDates: false
			},
    }
  },
  methods: {
    btnBy: function(arg){
      Object.keys(this.portfolio).forEach(key => {
        if(key == arg){
          this.portfolio[key] = true;
        } else{
          this.portfolio[key] = false;
        }
      });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "Portfolio.scss";
</style>

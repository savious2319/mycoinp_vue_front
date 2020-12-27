<template>
  <div class="Portfolio">
    <div class="tab">
      <button type="button" :class="{'active': portfolio.isbyCoins}" @click="btnbyCoins">by Coins</button>
      <button type="button" :class="{'active': portfolio.isbyWallets}" @click="btnbyWallets">by Wallets</button>
      <button type="button" :class="{'active': portfolio.isbyDates}" @click="btnbyDates">by Dates</button>
    </div>
    <CryptocurrencyLeftPortfoliobyCoins v-if="portfolio.isbyCoins"/>
    <CryptocurrencyLeftPortfoliobyWallets v-if="portfolio.isbyWallets"/>
    <CryptocurrencyLeftPortfoliobyDates v-if="portfolio.isbyDates"/>
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
    btnbyCoins: function(){
			this.portfolio.isbyCoins = true;
			this.portfolio.isbyWallets = false;
			this.portfolio.isbyDates = false;
    },
    btnbyWallets: function(){
			this.portfolio.isbyCoins = false;
			this.portfolio.isbyWallets = true;
			this.portfolio.isbyDates = false;
    },
    btnbyDates: function(){
			this.portfolio.isbyCoins = false;
			this.portfolio.isbyWallets = false;
			this.portfolio.isbyDates = true;
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "Portfolio.scss";
</style>

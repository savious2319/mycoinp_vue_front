<template>
  <CryptocurrencyRightAdvertisement/>
  <CryptocurrencyRightPortfolioDetail/>
  <CryptocurrencyRightTradingView/>
  <div class="tabContents">
    <div class="tabs">
      <button>Official Messages</button>
      <button class="active">Buy & Sell</button>
    </div>
    <CryptocurrencyRightOfficialMessages/>
    <CryptocurrencyRightBuySell/>
  </div>
</template>

<script lang="ts">
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "Right.scss";
</style>

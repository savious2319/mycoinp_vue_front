<template>
  <CryptocurrencyRightAdvertisement/>
  <ExchangesRightCoinDetail/>
  <ExchangesRightExchangeCoinList/>
  <BtnTopRight v-if="!container.scrollDown"/>
</template>

<script>
export default {
    props : ['container'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/assets/scss/sectionRight.scss";
</style>

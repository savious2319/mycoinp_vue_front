<template>
  <CryptocurrencyLeftAdvertisement/>
  <ExchangesLeftExchangeList/>
  <BtnTopLeft v-if="!container.scrollDown" :class="{'scrollTop': !container.scrollTop}"/>
</template>

<script>
export default {
  props : ['container'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/assets/scss/sectionLeft.scss";
</style>

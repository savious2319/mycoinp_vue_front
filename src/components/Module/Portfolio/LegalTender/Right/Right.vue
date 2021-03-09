<template>
  <LegalTenderRightAdvertisement/>
  <LegalTenderRightPortfolioDetail/>
  <CryptocurrencyRightTradingView/>
  <div class="tabContents">
    <div class="tabs">
      <button type="button">Official Messages</button>
      <button type="button" class="active">Buy & Sell</button>
    </div>
    <!-- <LegalTenderRightOfficialMessages/> -->
    <LegalTenderRightBuySell/>
  </div>
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

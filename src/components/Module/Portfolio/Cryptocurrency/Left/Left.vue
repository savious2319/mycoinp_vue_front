<template>
  <CryptocurrencyLeftAdvertisement/>
  <CryptocurrencyLeftTotalValue/>
  <CryptocurrencyLeftPortfolio/>
  <button type="button" class="btnReg" :class="{'scrollDown': !container.scrollTop}" @click="btnLayerPopup">Registration</button>
  <BtnTopLeft v-if="!container.scrollDown" :class="{'scrollTop': container.scrollTop}"/>
  <popupPortFolio v-if="isLayerPopup" @cancel="btnLayerPopup"/>
  <div class="mask" v-if="isLayerPopup"></div>
</template>

<script>
export default {
  props : ['container'],
  data () {
    return {
      isLayerPopup: false,
    }
  },
  methods: {
    btnLayerPopup: function(){
      this.isLayerPopup = !this.isLayerPopup;
    },
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/assets/scss/sectionLeft.scss";
</style>

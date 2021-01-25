<template>
  <LegalTenderLeftAdvertisement/>
  <LegalTenderLeftTotalValue/>
  <LegalTenderLeftPortfolio/>
  <button type="button" class="btnReg" @click="btnLayerPopup">Registration</button>
  <!-- <BtnTopLeft v-if="!container.scrollDown"/> -->
  <BtnTopLeft v-if="!container.scrollDown"/>
  <popupPortFolio v-if="isLayerPopup"/>
  <div class="mask" v-if="isLayerPopup" @click="btnLayerPopup"></div>
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
        if(this.isLayerPopup == false){
            this.isLayerPopup = true;
        } else{
            this.isLayerPopup = false;
        }
    },
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/assets/scss/sectionLeft.scss";
</style>

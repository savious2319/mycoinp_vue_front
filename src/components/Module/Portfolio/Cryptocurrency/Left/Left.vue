<template>
  <CryptocurrencyLeftAdvertisement/>
  <CryptocurrencyLeftTotalValue/>
  <CryptocurrencyLeftPortfolio/>
  <button type="button" class="btnReg" @click="btnLayerPopup">Registration</button>
  <button type="button" class="btnTop" :class="{'show': !containerScroll.scrollDown}" @click="btnTop">Top</button>
  <popupPortFolio v-if="isLayerPopup"/>
  <div class="mask" v-if="isLayerPopup" @click="btnLayerPopup"></div>
</template>

<script>
export default {
  props : ['containerScroll'],
  data () {
    return {
      isLayerPopup: false,
    }
  },
  methods: {
    btnTop: function(){
        this.$emit.containerScroll.scrollTop = 0;
    },
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

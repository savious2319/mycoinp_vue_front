<template>
  <CryptocurrencyLeftAdvertisement/>
  <ExchangesLeftExchangeList/>
  <button type="button" class="btnTop">Top</button>
  <popupPortFolio v-if="isLayerPopup"/>
  <div class="mask" v-if="isLayerPopup" @click="btnLayerPopup"></div>
</template>

<script>
export default {
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
  @import "Left.scss";
</style>

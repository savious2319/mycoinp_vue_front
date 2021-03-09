<template>
    <div class="PortfolioDetail">
        <div class="coinName">
            <dl class="col3">
                <dt>
                    <button type="button" class="btnBookmark">
                        <i class="fas fa-star"></i>
                        <span>bookmark</span>
                    </button>           
                    <img src="@/assets/img/ico_coin.png" alt="">
                </dt>
                <dd>XZC</dd>
                <dd>ZCoin</dd>
            </dl>
            <button type="button" @click="btnLayerPopup"><i class="fas fa-search"/><span>Search</span></button>
        </div>
        <ul>
            <li>https://bitcoin.org</li>
            <li>
                <span><em>₫</em>123,456,78</span>
                <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
            </li>
            <li>
                <span>+0.12</span>
                <em>%</em>
            </li>
        </ul>
    </div>
    <popupCoinName v-if="isLayerPopup" @cancel="btnLayerPopup"/>
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
      this.isLayerPopup = !this.isLayerPopup;
    },

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "CoinDetail.scss";
</style>

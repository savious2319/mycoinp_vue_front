<template>
  <div class="PortfolioDetail">
    <div class="coinName">
      <dl>
        <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
        <dd>XZC</dd>
        <dd>ZCoin</dd>
      </dl>
      <button type="button" @click="btnLayerPopup"><span>Memo</span></button>
      <button type="button"><i class="fas fa-trash-alt"/><span>Delete</span></button>
        <popupMemo v-if="isLayerPopup" @cancel="btnLayerPopup"/>
        <div class="mask" v-if="isLayerPopup" @click="btnLayerPopup"></div>
    </div>
    <p>1 USD = <em>₩</em>1,150</p>
    <article>
        <dl>
            <dt>Net Invest</dt>
            <dd>
                <em>$</em>
                <strong>123,456,789</strong>
            </dd>
        </dl>
        <dl>
            <dt>Deposit</dt>
            <dd>
                <em>$</em>
                <strong>123,456,789</strong>
                <span>K</span>
            </dd>
        </dl>
        <dl>
            <dt>Withdrawal</dt>
            <dd>
                <em>$</em>
                <strong>10,000</strong>
            </dd>
        </dl>
    </article>
  </div>
</template>

<script>
export default {
    data () {
		return {
            isLayerPopup: false,
            isMore: false
        }
    },
    methods: {
		btnMore: function(){
            this.isMore = !this.isMore;
        },
        btnLayerPopup: function(){
            this.isLayerPopup = !this.isLayerPopup;
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "PortfolioDetail.scss";
</style>

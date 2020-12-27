<template>
  <div class="PortfolioDetail">
    <div class="coinName">
      <dl>
        <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
        <dd>XZC</dd>
        <dt>4</dt>
        <dd>ZCoin</dd>
      </dl>
      <button type="button" @click="btnLayerPopup"><span>Memo</span></button>
      <button type="button"><i class="fas fa-trash-alt"/><span>Delete</span></button>
        <popupMemo v-if="isLayerPopup"/>
        <div class="mask" v-if="isLayerPopup" @click="btnLayerPopup"></div>
    </div>
    <p>1 USD = <em>₩</em>1,150</p>
    <article>
        <button type="button" :class="{'on': isMore}" @click="btnMore">More</button>
        <dl>
            <dt>Buy Value</dt>
            <dd>
                <em>₫</em>
                <strong>123,456,789</strong>
                <span>K</span>
            </dd>
        </dl>
        <dl>
            <dt>Profit & Loss</dt>
            <dd>
                <em>₫</em>
                <strong class="fall">123,456,789</strong>
                <span>K</span>
            </dd>
        </dl>
        <dl>
            <dt><em>%</em>Profit </dt>
            <dd>
                <strong class="fall">-10000<em>%</em></strong>
            </dd>
        </dl>
        <dl v-if="isMore">
            <dt>Buy Value</dt>
            <dd>
                <em>₫</em>
                <strong>123,456,789</strong>
                <span>K</span>
            </dd>
        </dl>
        <dl v-if="isMore">
            <dt>Profit & Loss</dt>
            <dd>
                <em>₫</em>
                <strong class="fall">123,456,789</strong>
                <span>K</span>
            </dd>
        </dl>
        <dl v-if="isMore">
            <dt>%Profit </dt>
            <dd>
                <strong class="fall">-10000<em>%</em></strong>
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
            if(this.isMore == false){
                this.isMore = true;
            } else{
                this.isMore = false;
            }
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
  @import "PortfolioDetail.scss";
</style>

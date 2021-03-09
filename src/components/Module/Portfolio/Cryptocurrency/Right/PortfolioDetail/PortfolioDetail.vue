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
    <ul>
        <li>
            <span><em>₫</em>123,456,78</span>
            <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </li>
        <li>
            <span>+0.12</span>
            <em>%</em>
        </li>
    </ul>
    <article>
        <button type="button" :class="{'on': isMore}" @click="btnMore">More</button>
        <dl>
            <dt>Est.Value</dt>
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
                <strong class="orange">123,456,789</strong>
                <span>K</span>
            </dd>
        </dl>
        <dl>
            <dt><em>%</em>Profit </dt>
            <dd>
                <strong class="orange">-10000<em>%</em></strong>
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
            <dt>Avg.Buy Price</dt>
            <dd>
                <em>₫</em>
                <strong class="orange">123,456,789</strong>
                <span>K</span>
            </dd>
        </dl>
        <dl v-if="isMore">
            <dt>Hold Amount</dt>
            <dd>
                <strong class="orange">-10000<em>%</em></strong>
            </dd>
        </dl>
        <div v-if="isMore">
            <!-- 빈공간 -->
        </div>
        <dl v-if="isMore">
            <dt>Cumulative Gain</dt>
            <dd>
                <em>₫</em>
                <strong class="orange">123,456,789</strong>
                <span>K</span>
            </dd>
        </dl>
        <dl v-if="isMore">
            <dt>Realized Gain</dt>
            <dd>
                <strong class="orange">-10000<em>%</em></strong>
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

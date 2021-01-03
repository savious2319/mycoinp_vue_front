<template>
  <div class="buySell">
    <ul class="tabs">
      <li>
        <button type="button" class="active">Buy [ 3/15 ]</button>
        <button type="button" class="icoReg" @click="btnpopupPortfolio">Registration</button>
      </li>
      <li>
        <button type="button">Sell [ 3 ]</button>
      </li>
      <li>
        <button type="button">History</button>
      </li>
    </ul>
    <div>
      <span>2020-03-24</span>
      <span>Wallet name</span>
      <button type="button"><i class="fas fa-pencil-alt"/><span>Memo</span></button>
      <button type="button"><i class="fas fa-trash-alt"/><span>Delete</span></button>
    </div>
    <article>
      <dl>
          <dt>Buy Value</dt>
          <dd>
              <em>₫</em>
              <strong>123,456,789</strong>
              <span>K</span>
          </dd>
      </dl>
      <dl>
          <dt>Buy Price</dt>
          <dd>
              <em>₫</em>
              <strong class="fall">123,456,789</strong>
              <span>K</span>
          </dd>
      </dl>
      <dl>
          <dt>Amount</dt>
          <dd>
              <strong class="fall">-10000<em>%</em></strong>
          </dd>
      </dl>
      <dl>
          <dt>Est. Value</dt>
          <dd>
              <em>₫</em>
              <strong>123,456,789</strong>
              <span>K</span>
          </dd>
      </dl>
      <dl>
          <dt>Buy Exchange</dt>
          <dd>
              <em>₫</em>
              <strong class="fall">123,456,789</strong>
              <span>K</span>
          </dd>
      </dl>
      <dl>
          <dt>Hold Amount</dt>
          <dd>
              <strong class="fall">-10000<em>%</em></strong>
          </dd>
      </dl>
      <dl>
          <dt>Profit & Loss</dt>
          <dd>
              <em>₫</em>
              <strong>123,456,789</strong>
              <span>K</span>
          </dd>
      </dl>
      <dl>
          <dt><em>%</em>Profit</dt>
          <dd>
              <em>₫</em>
              <strong class="fall">123,456,789</strong>
              <span>K</span>
          </dd>
      </dl>
      <span>
        <button type="button" @click="btnpopupPortfolioSell">Sell [ 0 ] +</button>
      </span>
    </article>
  </div>
  <!--
  <popupPortfolioFiat v-if="ispopupPortfolio"/>
  <popupPortfolioFiatSell v-if="ispopupPortfolio"/>
  -->
  <popupPortfolioCoin v-if="ispopupPortfolio"/>
  <div class="mask" v-if="ispopupPortfolio" @click="btnpopupPortfolio"></div>

  <popupPortfolioCoinSell v-if="ispopupPortfolioSell"/>
  <div class="mask" v-if="ispopupPortfolioSell" @click="btnpopupPortfolioSell"></div>
</template>

<script>
export default {
  data () {
    return {
      ispopupPortfolio: false,
      ispopupPortfolioSell: false,
      isAll: false
    }
  },
  methods: {
    btnpopupPortfolio: function(){
      if(this.ispopupPortfolio == false){
          this.ispopupPortfolio = true;
      } else{
          this.ispopupPortfolio = false;
      }
    },
    btnpopupPortfolioSell: function(){
      if(this.ispopupPortfolioSell == false){
          this.ispopupPortfolioSell = true;
      } else{
          this.ispopupPortfolioSell = false;
      }
    },
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "BuySell.scss";
</style>

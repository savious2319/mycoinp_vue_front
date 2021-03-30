<template>
    <p>
      <span>2020-03-24</span>
      <button type="button"><i class="fas fa-pencil-alt"/><span>Memo</span></button>
      <button type="button"><i class="fas fa-trash-alt"/><span>Delete</span></button>
    </p>
    <article>
        <dl>
            <dt>Where</dt>
            <dd><strong>Binance</strong></dd>
        </dl>
        <dl>
            <dt>Deposit</dt>
            <dd>
                <em>$</em>
                <strong>20,000</strong>
            </dd>
        </dl>
        <span>
            <button type="button" @click="btnpopupPortfolioSell">withdraw</button>
        </span>
    </article>

    <p>
      <span>2020-03-24</span>
      <button type="button"><i class="fas fa-pencil-alt"/><span>Memo</span></button>
      <button type="button"><i class="fas fa-trash-alt"/><span>Delete</span></button>
    </p>
    <article>
        <dl>
            <dt>Where</dt>
            <dd><strong>Binance</strong></dd>
        </dl>
        <dl>
            <dt>Deposit</dt>
            <dd>
                <em>$</em>
                <strong>20,000</strong>
            </dd>
        </dl>
        <span>
            <button type="button" @click="btnpopupPortfolioSell">withdraw</button>
        </span>
    </article>
    <popupPortfolioFiatSell v-if="ispopupPortfolioSell" @cancel="btnpopupPortfolioSell"/>
    <div class="mask" v-if="ispopupPortfolioSell"></div>
</template>

<script>
export default {
  data () {
    return {
      ispopupPortfolioSell: false,
    }
  },
  methods: {
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
  @import "Deposit.scss";
</style>

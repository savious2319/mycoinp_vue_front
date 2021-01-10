<template>
  <div class="buySell">
    <ul class="tabs">
      <li>
        <button type="button" :class="{'active': tabs.isBuy}" @click="btnBy('isBuy')">Buy [ 3/15 ]</button>
        <button type="button" class="icoReg" @click="btnpopupPortfolio">Registration</button>
      </li>
      <li>
        <button type="button" :class="{'active': tabs.isSell}" @click="btnBy('isSell')">Sell [ 3 ]</button>
      </li>
      <li>
        <button type="button" :class="{'active': tabs.isHistory}" @click="btnBy('isHistory')">History</button>
      </li>
    </ul>
    <p>
      <span>2020-03-24</span>
      <span>Wallet name</span>
      <button type="button"><i class="fas fa-pencil-alt"/><span>Memo</span></button>
      <button type="button"><i class="fas fa-trash-alt"/><span>Delete</span></button>
    </p>
    <article v-if="tabs.isBuy">
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
        <button type="button" @click="btnpopupPortfolioSell">widthraw</button>
      </span>
    </article>
    <article v-if="tabs.isSell">
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
        <button type="button" @click="btnpopupPortfolioSell">widthraw</button>
      </span>
    </article>
    <div v-if="tabs.isHistory">
      <table>
        <thead>
          <tr>
            <th>
              <span>Date</span>
            </th>
            <th>
              <button type="button" :class="{'active': isAll}" @click="isAll = !isAll">All</button>
              <div v-if="isAll">
                <button type="button">All</button>
                <button type="button">Buy</button>
                <button type="button">Sell</button>
              </div>
            </th>
            <th>
              <p>
                <span>Coin</span>
                <span>Exchange</span>
                <span>Price</span>
                <span>Amount</span>
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>2020-07-20</span>
            </td>
            <td>
              <span class="rise">Sell</span>
            </td>
            <td>
              <p>
                <span>GUSD</span>
                <span>Upbit</span>
                <span><em>₫</em>123,456,78<i>K</i></span>
                <span>123,456,78<i>K</i></span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <span>2020-07-20</span>
            </td>
            <td>
              <span class="fall">Buy</span>
            </td>
            <td>
              <p>
                <span>GUSD</span>
                <span>Upbit</span>
                <span><em>₫</em>123,456,78<i>K</i></span>
                <span>123,456,78<i>K</i></span>
              </p>
            </td>
          </tr>
          <tr>
            <td colspan="3" class="not">Add Your Portfolio ...</td>
          </tr>
        </tbody>
      </table>
    </div>
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
      tabs:{
				isBuy: true,
				isSell: false,
				isHistory: false
			},
      ispopupPortfolio: false,
      ispopupPortfolioSell: false,
      isAll: false
    }
  },
  methods: {
    btnBy: function(arg){
      Object.keys(this.tabs).forEach(key => {
        if(key == arg){
          this.tabs[key] = true;
        } else{
          this.tabs[key] = false;
        }
      });
    },
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

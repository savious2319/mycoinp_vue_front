<template>
<table>
  <thead>
    <tr>
      <th>
        <span class="thSearch">
          <button type="button" class="btnBookmark active">
            <i class="fas fa-star"></i>
            <span>bookmark</span>
          </button>
          <button type="button" class="btnSearch">
            <i class="fas fa-search"/>
            <span>Search</span>
          </button>
          <input type="text" v-model="searchText" placeholder="Search...">
          <button type="button" class="btnClear" title="Clear" v-if="searchText.length > 0" @click="searchText = ''">
            <i class="fas fa-times"/>
            <span>Clear</span>
          </button>
        </span>
      </th>
      <th>Price</th>
      <th><button type="button" class="thSort up"><em>%</em>Chg</button></th>
      <th><button type="button" class="thSort down">Vol</button></th>
      <th><button type="button" class="thSort">M.Cap</button></th>
    </tr>
  </thead>
  <tbody>
    <tr class="bookmark">
      <td>
        <dl @click="MobileDetailShow">
          <dt>
            <button type="button" class="btnBookmark active">
              <i class="fas fa-star"></i>
              <span>bookmark</span>
            </button>
          </dt>
          <dd>XZC</dd>
          <dt>4</dt>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td>
        <em>₫</em>123,456,78<i>K</i>
        <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
      </td>
      <td class="orange realTime">-10000<s>%</s></td>
      <td><em>₫</em>123,456,78<i>K</i></td>
      <td>
        <span class="grean" @click="isMarketcap = !isMarketcap">+10000<s>%</s></span>
        <button type="button" class="tdSort" v-if="$windowWidth < 841" @click="isTradingview = !isTradingview" :class="{'up': isTradingview}">열기</button>
        <div class="marketcap" v-if="isMarketcap">
          <dl @click="MobileDetailShow">
            <dt>Max:</dt>
            <dd>21,000,000</dd>
            <dt>Total:</dt>
            <dd>18,559,743</dd>
            <dt>Circulation:</dt>
            <dd>18,599,743</dd>
          </dl>
          <p>
            <span>Source</span>
            <a href="#none">https://blockchain.info</a>
          </p>
        </div>
      </td>
    </tr>
    <tr class="not" v-if="isTradingview">
      <td colspan="5">
        <div class="tradingview">
          <div class="btnSet">
            <strong>XZC/</strong>
            <label for=""><input type="radio">USD</label>
            <label for=""><input type="radio">BTC</label>
            <button class="active" type="button">D</button>
            <button type="button">W</button>
            <button type="button">M</button>
            <button class="add" type="button">add</button>
            <span>by TradingView</span>
            <button class="fullscrean" type="button">fullscrean</button>
          </div>
          <div class="chart">
            Chart
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>

  <!-- 모바일 상세 페이지 Start -->
  <div class="mobileDetail" v-if="isMobile.wrap">
      <SubHeader title="AllCoin Detail" @MobileDetailHide="MobileDetailHide"/>
      <div class="sectionRight" v-on:scroll.passive="handleScrollMobile">
          <AllCoinRight v-bind:container="isMobile"/>
      </div>
  </div>
  <!-- 모바일 상세 페이지 End -->

</template>

<script>
const OFFSET = 60;
export default {
  data () {
		return {
      searchText: "",
      isMarketcap: false,
      isTradingview: false,
      isMobile : {
          wrap: false,
          scrollDown: true,
          lastScrollPosition: 0,
      },
		}
	},
  methods: {
    MobileDetailShow: function(){
      if(this.$windowWidth < 640){
        this.isMobile.wrap = !this.isMobile.wrap;
      }
    },
    MobileDetailHide: function() {
        this.isMobile.wrap = !this.isMobile.wrap;
    },
    handleScrollMobile: function(e) {
        if (e.target.scrollTop < 0) {
            return
        }
        if (Math.abs(e.target.scrollTop - this.isMobile.lastScrollPosition) < OFFSET) {
            return
        }
        this.isMobile.scrollDown = e.target.scrollTop < 500;
    },
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "AllCoinList.scss";
</style>

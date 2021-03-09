<template>
  <table>
    <thead>
      <tr>
        <th>
          <span class="thSearch">
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
        <th><button type="button" class="thSort down">Est.Value</button></th>
        <th><button type="button" class="thSort"><em>%</em>Profit</button></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <dl @click="MobileDetailShow">
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
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
        <td class="flugrean">
          +10000<s>%</s>
          <button type="button" class="tdSort" v-if="$windowWidth < 841" @click="isTradingview = !isTradingview" :class="{'up': isTradingview}">열기</button>
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
      <SubHeader title="PortFolio Detail" @MobileDetailHide="MobileDetailHide"/>
      <div class="sectionRight" v-on:scroll.passive="handleScrollMobile">
          <LegalTenderRight v-bind:container="isMobile"/>
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
        this.isMobile.scrollDown = e.target.scrollTop < this.isMobile.lastScrollPosition
        this.isMobile.lastScrollPosition = e.target.scrollTop
    },
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "byCoins.scss";
</style>

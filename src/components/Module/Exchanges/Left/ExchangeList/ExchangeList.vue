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
      <th>#Coins</th>
      <th><em>$</em>Vol</th>
      <th>Top</th>
      <th><em>$</em>Vol</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bookmark" @click="MobileDetailShow">
      <td>
        <dl class="col3">
          <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
          <dd>XZC</dd>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td>313</td>
      <td><em>₫</em>456<i>K</i></td>
      <td><img src="@/assets/img/ico_coin.png" alt=""> BTC</td>
      <td><em>₫</em>456,78<i>K</i> <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button></td>
    </tr>
    <tr class="not">
      <td colspan="5">Add Your Portfolio ...</td>
    </tr>
  </tbody>
</table>
<p>#Coins는 본 사이트에서 제공하는 해당거래소의 코인 수이며, 실제 해당거래소에 상장
된 코인의 수와 다를 수 있습니다.</p>

  <!-- 모바일 상세 페이지 Start -->
  <div class="mobileDetail" v-if="isMobile.wrap">
      <SubHeader title="Exchanges Detail" @MobileDetailHide="MobileDetailHide"/>
      <div id="contents" v-on:scroll.passive="handleScrollMobile">
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
  @import "ExchangeList.scss";
</style>

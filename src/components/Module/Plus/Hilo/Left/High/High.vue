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
      <th>
        <span>High</span>
        <span>Price</span>
      </th>
      <th>Exchange</th>
      <th><em>%</em>Premium</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bookmark">
      <td>
        <dl class="col3" @click="MobileDetailShow">
          <dt><i class="fas fa-star"></i></dt>
          <dd>XZC</dd>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td>
        <span class="grean">6,789<i>K</i></span>
        <span>6,789<i>K</i></span>
      </td>
      <td><img src="@/assets/img/ico_coin.png" alt=""> <strong>Huobi Global</strong></td>
      <td class="grean">+661<s>%</s></td>
    </tr>
    <tr>
      <td>
        <dl class="col3" @click="MobileDetailShow">
          <dt><i class="fas fa-star"></i></dt>
          <dd>XZC</dd>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td>
        <span class="grean">6,789<i>K</i></span>
        <span>6,789<i>K</i></span>
      </td>
      <td><img src="@/assets/img/ico_coin.png" alt=""> <strong>Huobi Global</strong></td>
      <td class="grean">+661<s>%</s></td>
    </tr>
  </tbody>
</table>

  <!-- 모바일 상세 페이지 Start -->
  <div class="mobileDetail" v-if="isMobile.wrap">
      <SubHeader title="Hi-Lo" @MobileDetailHide="MobileDetailHide"/>
      <div class="sectionRight" v-on:scroll.passive="handleScrollMobile">
        <HiloRight v-bind:container="isMobile"/>
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
        this.isMobile.scrollDown = e.target.scrollTop < 500;
    },
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "High.scss";
</style>

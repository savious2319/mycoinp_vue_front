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
      <th>Top <em>$</em>Vol</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in data" :key="item.id" class="bookmark">
      <td>
        <dl class="col3" @click="MobileDetailShow">
          <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
          <dd>{{ item.user }}</dd>
          <dd>{{ item.genre }}</dd>
        </dl>
      </td>
      <td>313</td>
      <td><em>₫</em>456<i>K</i></td>
      <td>
        <span><img src="@/assets/img/ico_coin.png" alt=""> BTC : </span>
        <span><em>₫</em>456<i>K</i></span>
      </td>
    </tr>
  </tbody>
</table>
<p><img src="@/assets/img/ico_info.png" alt=""> #Coins는 본 사이트에서 제공하는 해당거래소의 코인 수이며, 실제 해당거래소에 상장
된 코인의 수와 다를 수 있습니다.</p>

  <!-- 모바일 상세 페이지 Start -->
  <div class="mobileDetail" v-if="isMobile.wrap">
      <SubHeader title="Exchanges Detail" @MobileDetailHide="MobileDetailHide"/>
      <div class="sectionRight" v-on:scroll.passive="handleScrollMobile">
          <ExchangesRight v-bind:container="isMobile"/>
      </div>
  </div>
  <!-- 모바일 상세 페이지 End -->

</template>

<script>
const OFFSET = 60;
import axios from 'axios'
export default {
  //name: "my-little-div",
  data () {
		return {
      //new_data: [],
      data: [
        {
		"user":"AAA",
		"genre":"myS",
		"location":"A3",
		"size":"2"
	},
	{
		"user":"BBB",
		"genre":"myS",
		"location":"A13",
		"size":"1"
	},
	{
		"user":"CCC",
		"genre":"myS",
		"location":"B2",
		"size":"2"
	}
      ],
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
    getNewData: function(){
      console.log(window.location.hostname);
      let path = "https://raw.githubusercontent.com/joshua1988/doit-vuejs/master/data/demo.json";

      axios.get(path)
            .then(res => {
              console.log(res);
              this.new_data = res.data;
              console.log("this.new_data : " + JSON.stringify(this.new_data));
              console.log(this.new_data.fe1);
              console.log(this.new_data.fe2);
            })
            .catch(error => console.error(error))
    }
  },
  
    created() {
       this.getNewData();
    },

    mounted(){
      
    }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "ExchangeList.scss";
</style>

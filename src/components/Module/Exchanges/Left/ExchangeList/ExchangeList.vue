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
    <tr v-for="item in exchangeLeft" :key="item" class="bookmark">
      <td>
        <dl class="col3" @click="MobileDetailShow">
          <!-- <dt><img src="@/assets/img/ico_coin.png" alt=""></dt> -->
          <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
          <dd>{{ item.ex_name }}</dd>
          <dd>{{ item.ex_country }}</dd>
        </dl>
      </td>
      <td>345</td> 
      <td><em>₫</em>{{ item.exchange_total }}<i>K</i></td>
      <td>
        <span><img src="@/assets/img/ico_coin.png" alt=""> BTC : </span>
        <span><em>₫</em>{{ item.exchange_max_vol24 }}<i>K</i></span>
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
//var exchangeLeft = new Array();
var seq_key = [];
  let exchange_list_api = "http://192.168.1.115:18100/mpi/common/exchange/list";
  let coin_count_api = "";
  let exchange_trade_data_api = "http://192.168.1.115:18100/mpi/exchange/trade-data";
  let coin_map_list_api = "http://192.168.1.115:18100/mpi/allcoin/coin-list";
export default {
  data () {
		return {
      ex_list: [],
      ex_coin: [],
      ex_trade: [],
      coin_list: [],
      exchangeLeft: [],
      searchText: "",
      isMobile : {
          wrap: false,
          scrollDown: true,
          lastScrollPosition: 0,
      },
		}
	},
  computed: {
    
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
    exchange_list: function(){
      //console.log(window.location.hostname);

      axios.get(exchange_list_api)
            .then(res => {
              console.log("exchange_list_api");
              console.log(res);
              this.ex_list.push(res.data.exchange_list);
              //console.log(Object.keys(this.ex_list[0]));
              for (const key in this.ex_list[0]) {
                seq_key.push(key);
              }
              //console.log(seq_key);
              //console.log(seq_key[0]);

              // console.log(JSON.stringify(this.ex_list[0][seq_key[0]].exchange_name_eng));
              // console.log(JSON.stringify(this.ex_list[0][seq_key[0]].country_nm));

            })
            .catch(error => console.error(error))
    },
    coin_count: function(){
      axios.get(coin_count_api)
            .then(res => {
              console.log(res);
              // this.exchanges = [].concat(res.data.exchange_list);
              //this.data2 = res.data.exchange_list;
              //console.log(this.exchanges[1].exchange_name_eng);
            })
            .catch(error => console.error(error))

    },
    exchange_trade_data: function(){
      axios.get(exchange_trade_data_api)
            .then(res => {
              console.log("exchange_trade_data_api");
              console.log(res);
              this.ex_trade.push(res.data.data);
              //console.log(this.exchanges[1].exchange_name_eng);
              console.log(JSON.stringify(this.ex_trade[0][1]));

              console.log(">>>>>>>>" + seq_key.length);

// console.log(JSON.stringify(this.ex_list[0][seq_key[0]].exchange_name_eng));

        for (var i = 0; i < seq_key.length; i++) {
          let arr = {};
          arr["ex_img"] = this.ex_list[0][seq_key[i]].reqHash;
          arr["ex_name"] = this.ex_list[0][seq_key[i]].exchange_name_eng;
          arr["ex_country"] = this.ex_list[0][seq_key[i]].country_nm;
          arr["ex_max_vol24"] = this.ex_trade[0][seq_key[i]].exchange_max_vol24;
          arr["ex_max_vol24_coinId"] = this.ex_trade[0][seq_key[i]].exchange_max_vol24_coin_id;
          arr["exchange_total"] = this.ex_trade[0][seq_key[i]].exchange_total;

          console.log(arr);
          this.exchangeLeft.push(arr);
          
        }

        console.log("exchangeLeft");
        console.log(JSON.stringify(this.exchangeLeft));
            })
            .catch(error => console.error(error))

    },
    coin_map_list: function(){
      axios.get(coin_map_list_api)
            .then(res => {
              console.log(res.data);
              this.coin_list.push(res.data);
              console.log(JSON.stringify(res.data));
              //console.log(this.exchanges[1].exchange_name_eng);
              // for (let i = 0; i < this.ex_trade.length; i++) {
                
              // }
            })
            .catch(error => console.error(error))

    },
    exchangeLeftData: function(){
        
    }

  },
  
    created() {
      console.log("created");
       this.exchange_list();
       //this.coin_count();
       this.exchange_trade_data();
       //this.coin_map_list();
       //this.exchangeLeftData();
    },
    beforeMount() {
      console.log("beforeMount");
      
    },
    mounted(){
      console.log("mounted");
    }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "ExchangeList.scss";
</style>

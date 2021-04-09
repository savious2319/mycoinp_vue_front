/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
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
          <dt><img :src="item.ex_image" alt=""></dt>
          <dd>{{ item.ex_name }}</dd>
          <dd>{{ item.ex_country }}</dd>
        </dl>
      </td>
      <td>{{ item.ex_cnt }}</td> 
      <td><em>₫</em>{{ item.exchange_total }}<i>K</i></td>
      <td>
        <!-- <span><img src="@/assets/img/ico_coin.png" alt=""> {{ item.coin_symbol }} : </span> -->
        <span><img :src="item.coin_icon_url" alt=""> {{ item.coin_symbol }} : </span>
        <span><em>₫</em>{{ item.ex_max_vol24 }}<i>K</i></span>
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
var ex_cd = [];
var coinCd = [];
  let exchange_list_api = "http://192.168.1.115:18100/mpi/common/exchange/list";
  let coin_count_api = "http://192.168.1.115:18100/mpi/exchange/coin-exchange-count?exchange_list=28,31,11,13,26,21,8,5,34,37,1,2,3,9,10,12,17,18,19,22,23,24,25,29,30,32,35,36,39,40,41,42,43,44,45,46,47,48";
  let exchange_trade_data_api = "http://192.168.1.115:18100/mpi/exchange/trade-data";
  let coin_map_list_api = "http://192.168.1.115:18100/mpi/allcoin/coin-light";
export default {
  data () {
		return {
      ex_list: [],
      ex_coin: [],
      ex_trade: [],
      coin_info: [],
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
      axios.get(exchange_list_api)
            .then(res => {
              console.log("exchange_list");
              console.log(res);
              this.ex_list.push(res.data.exchange_list);
              //console.log(JSON.stringify(this.ex_list));
            })
            .catch(error => console.error(error))  

    //  return new Promise((resolve, reject) => {
       
    //    axios.get(exchange_list_api)
    //          .then(res => {
    //            console.log("exchange_list_api");
    //            //console.log(res);
    //            this.ex_list.push(res.data.exchange_list);
    //            console.log(JSON.stringify(this.ex_list));
    //            resolve('1');
    //          })
    //          .catch(error => {
    //            console.error(error)
    //            reject(error)
    //          })
    //  }) 
    },
    coin_count: function(){
      axios.get(coin_count_api)
            .then(res => {
              console.log("coin_count");
              console.log(res);
              this.ex_coin = res.data.exchangecntlist;
              //console.log(this.ex_coin[37].cnt);
            })
            .catch(error => console.error(error))

    //   return new Promise((resolve, reject) => {
       
    //    axios.get(coin_count_api)
    //          .then(res => {
    //            console.log("coin_cnt");
    //            //console.log(res);
    //            this.ex_coin.push(res.data.exchangecntlist);
    //            console.log(JSON.stringify(this.ex_coin));
    //            resolve("1");
    //          })
    //          .catch(error => {
    //            console.error(error)
    //            reject(error)
    //          })
    //  })   
    },
    exchange_trade_data: function(){
      
      axios.get(exchange_trade_data_api)
            .then(res => {
              console.log("exchange_trade_data_api");
              console.log(res);
              this.ex_trade.push(res.data.data);
      
       })
       .catch(error => console.error(error))

    //   return new Promise((resolve, reject) => {
       
    //    axios.get(exchange_trade_data_api)
    //          .then(res => {
    //            console.log("exchange_trade_data_api");
    //            //console.log(res);
    //            this.ex_trade.push(res.data.data);
    //            console.log(JSON.stringify(this.ex_trade));
    //            resolve("1");
    //          })
    //          .catch(error => {
    //            console.error(error)
    //            reject(error)
    //          })
    //  })
         
    },
    coin_map_list: function(){
      
      //var sDate = new Date().getTime();
      //         var eDate = new Date().getTime();
      //         var resDate = (eDate - sDate) / 1000;

      axios.get(coin_map_list_api)
            .then(res => {
              console.log("coin_map_list");
              console.log(res);
              this.coin_info.push(res.data);
       })
       .catch(error => console.error(error))  

    //   return new Promise((resolve, reject) => {
       
    //    axios.get(coin_map_list_api)
    //          .then(res => {
    //            console.log("coin_map_list");
    //            //console.log(res);
    //            this.coin_info.push(res.data);
    //            console.log(JSON.stringify(this.coin_info));
    //            resolve("1")
    //          })
    //          .catch(error => {
    //            console.error(error)
    //            reject(error)
    //          })
    //  })     
          

    },
    exchangeLeftData: function(){
      console.log("exchangeLeftData");

      //exchange_cd 값만 가져오기
      for (const key in this.ex_list[0]) {
                ex_cd.push(key);
              }
        
        //console.log(JSON.stringify(this.ex_trade[0]));

    //console.log(JSON.stringify(this.ex_trade));

      //각 거래소의 max_vol24 coin_cd값만 가져오기
      for (const key in this.ex_trade[0]) {
                coinCd.push(this.ex_trade[0][key].exchange_max_vol24_coin_id);
              }

      console.log(coinCd);

      for (const key in this.ex_trade[0]) {
        console.log("exchange_total["+key+"] : " + this.ex_trade[0][key].exchange_total);
        console.log("exchange_max_vol24["+key+"] : " + this.ex_trade[0][key].exchange_max_vol24);
      }

      let valStr = "";
      let valStrLen = "";
      for (const key in this.ex_trade[0]) {
        let ex_total = this.ex_trade[0][key].exchange_total;
        
        valStr = Math.round(ex_total);
        valStr = String(valStr);
        valStrLen = String(valStr).length;  
        console.log("valStr : " + valStr);
        console.log("valStrLen : " + valStrLen);
      /* eslint-disable no-mixed-spaces-and-tabs */
        if(valStrLen >= 13){
          valStr = valStr.substring(0, valStrLen-12);
    			if(valStr.length==1){
            
            valStr = (Number(ex_total)/1000000000000).toFixed(1);
    			}
    			
    		}else if(valStrLen >= 10){
          valStr = valStr.substring(0, valStrLen-9);
    			
    			if(valStr.length==1){
            
            valStr = (Number(ex_total)/1000000000).toFixed(1);
    				console.log("valStr.length==1 : " + valStr);
    			}
    		}else if(valStrLen >= 7){
          valStr = valStr.substring(0, valStrLen-6);
    			
    			if(valStr.length==1){
            valStr = (Number(ex_total)/1000000).toFixed(1);
    			}
    		}else if(valStrLen >= 4){
          valStr = valStr.substring(0, valStrLen-3);
    			
    			if(valStr.length==1){
            valStr = (Number(ex_total)/1000).toFixed(1);
    			}
    		}else{
          // eslint-disable-next-line no-self-assign
    			valStr = valStr;
    			
    			if(valStr.length==1){
            valStr = Number(ex_total).toFixed(1);
    			}
    		}
        this.ex_trade[0][key].exchange_total = valStr;
  }

       for (const key in this.ex_trade[0]) {
        let max_coin_price = this.ex_trade[0][key].exchange_max_vol24;
        
        valStr = Math.round(max_coin_price);
        valStr = String(valStr);
        valStrLen = String(valStr).length;  
        console.log("valStr : " + valStr);
        console.log("valStrLen : " + valStrLen);
      /* eslint-disable no-mixed-spaces-and-tabs */
        if(valStrLen >= 13){
          valStr = valStr.substring(0, valStrLen-12);
    			if(valStr.length==1){
            
            valStr = (Number(max_coin_price)/1000000000000).toFixed(1);
    			}
    			
    		}else if(valStrLen >= 10){
          valStr = valStr.substring(0, valStrLen-9);
    			
    			if(valStr.length==1){
            
            valStr = (Number(max_coin_price)/1000000000).toFixed(1);
    				console.log("valStr.length==1 : " + valStr);
    			}
    		}else if(valStrLen >= 7){
          valStr = valStr.substring(0, valStrLen-6);
    			
    			if(valStr.length==1){
            valStr = (Number(max_coin_price)/1000000).toFixed(1);
    			}
    		}else if(valStrLen >= 4){
          valStr = valStr.substring(0, valStrLen-3);
    			
    			if(valStr.length==1){
            valStr = (Number(max_coin_price)/1000).toFixed(1);
    			}
    		}else{
          // eslint-disable-next-line no-self-assign
    			valStr = valStr;
    			
    			if(valStr.length==1){
            valStr = Number(max_coin_price).toFixed(1);
    			}
    		}
        this.ex_trade[0][key].exchange_max_vol24 = valStr;
  }
    
    for (const key in this.ex_trade[0]) {
        console.log("exchange_total["+key+"] : " + this.ex_trade[0][key].exchange_total);
        console.log("exchange_max_vol24["+key+"] : " + this.ex_trade[0][key].exchange_max_vol24);
      }
      
      
      //console.log(JSON.stringify(this.coin_info));
       let coin_symbol = [];
       let coin_icon_url = [];
       for (var j = 0; j < coinCd.length; j++) {
         if(coinCd[j] == 0){
           coin_symbol.push("-");
          coin_icon_url.push("N/A");
           continue;
         }
         coin_symbol.push(this.coin_info[0][coinCd[j]].symbol);
         coin_icon_url.push(this.coin_info[0][coinCd[j]].coin_icon_url);

       }

       for (var i = 0; i < ex_cd.length; i++) {
              let arr = {};
            arr["ex_code"] = this.ex_list[0][ex_cd[i]].exchange_cd;  
            arr["ex_img"] = this.ex_list[0][ex_cd[i]].reqHash;
            arr["ex_name"] = this.ex_list[0][ex_cd[i]].exchange_name_eng;
            arr["ex_country"] = this.ex_list[0][ex_cd[i]].country_nm;
            arr["ex_cnt"] = this.ex_coin[i].cnt;
            arr["exchange_total"] = this.ex_trade[0][ex_cd[i]].exchange_total;
            arr["coin_icon_url"] = coin_icon_url[i];
            arr["coin_symbol"] = coin_symbol[i];
            arr["ex_max_vol24"] = this.ex_trade[0][ex_cd[i]].exchange_max_vol24;
          
            //console.log(arr);
            this.exchangeLeft.push(arr);
            
          }
        //console.log(JSON.stringify(this.exchangeLeft));

    },
    
  },
  
    created() {
      console.log("created");
       this.exchange_list();
       this.coin_count();
       this.exchange_trade_data();
       this.coin_map_list();
      //  this.exchangeLeftData();
       setTimeout(this.exchangeLeftData, 5000);
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

/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
<template>
<table>
  <thead>
    <tr>
      <th>
        <span class="thSearch">
          <button v-on:click="bookmark" type="button" class="btnBookmark">
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
    <tr v-for="item in filterItems(exchangeLeft) " :key="item.ex_name">
      <td>
        <dl class="col3" @click="MobileDetailShow">
          <!-- <dt><img src="@/assets/img/ico_coin.png" alt=""></dt> -->
          <dt><img :src="item.ex_image" alt=""></dt>
          <dd>{{ item.ex_name }}</dd>
          <dd>{{ item.ex_country }}</dd>
        </dl>
      </td>
      <td>{{ item.ex_cnt }}</td> 
      <!-- <td><em>$</em>{{ item.exchange_total }}<i>K</i></td> -->
      <td v-html="item.exchange_total"></td>
      <td>
        <!-- <span><img src="@/assets/img/ico_coin.png" alt=""> {{ item.coin_symbol }} : </span> -->
        <span><img :src="item.coin_icon_url" alt="">{{ item.coin_symbol }}</span>
        <!-- <span><em>$</em>45 <i>K</i></span> -->
        <!-- <span><em>$</em>{{ item.ex_max_vol24 }}<i>K</i></span> -->
        <span v-html="item.ex_max_vol24"></span>
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
import numeral from 'numeral-es6'
//import mcoinp from '@/assets/js/mcoinp.js'
//import CmnUtil from '@/assets/js/CmnUtil.js'
const GlobalLocale = {
    qSymbol: '$',
    rate: 1,
    lang: 'en',
    decimal: 'a', //['a': 3.14], ['b':3,14]
    langList: {},
    currList: {},
    currency: '100001'
}
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
	bookmark: function(event){
		console.log("bookmark");
		console.log(event);

		
	},
	filterItems: function(exchangeLeft){
		
		var searchText = this.searchText.toLowerCase();

		if(searchText === ""){
			return exchangeLeft;
		}

		return exchangeLeft.filter(function(item){
			return item.ex_name.toLowerCase().indexOf(searchText) >= 0;
		})
	},
    async exchangeLeftData(){
        const res1 = await axios.get(exchange_list_api)
          console.log("exchange_list")
          //console.log(res1)
          this.ex_list.push(res1.data.exchange_list)
          //console.log(JSON.stringify(this.ex_list))
        
        const res2 = await axios.get(coin_count_api)
          console.log("coin_count")
          //console.log(res2)
          this.ex_coin = res2.data.exchangecntlist;
          //console.log(JSON.stringify(this.ex_coin))

        const res3 = await axios.get(exchange_trade_data_api)
          console.log("exchange_trade_data")
          //console.log(res3)
          this.ex_trade = res3.data.data;
          console.log(JSON.stringify(this.ex_trade))
        
        const res4 = await axios.get(coin_map_list_api)
          console.log("coin_map_list")
          //console.log(res4)
          this.coin_info = res4.data
          //console.log(JSON.stringify(this.coin_info))

        this.exchange();
    },
    bigNumber: function(val){
      /* eslint-disable no-mixed-spaces-and-tabs */
      console.log("************");
	  val = String(val);
    	// console.log("val : " + val);
    	// console.log("val.length : " + val.length);
    	// console.log("val.length - 1 : " + val.length - 1);
    	let tmp = val.charAt(val.length-1);
    	// console.log("tmp : " + tmp);
    	
    	if(val === 'N/A' || val === '∞'){
    		return val;
    	}
    	
    	val = numeral(val).value();
    	// console.log("numeral(val).value() : " +numeral(val).value());
    	
    	if(val === 0){
    		return 'N/A';
    	}
    	
		let valStr = "";
		let valStrLen = "";
		let tag = "";
    	
    	if(GlobalLocale.lang === 'ko'){
    		
    		if(tmp =='만'){
    			val += '0000';
    		}else if(tmp == '억'){
    			val += '00000000';
    		}else if(tmp == '조'){
    			val += '000000000000';
    		}else if(tmp == '경'){
    			val += '0000000000000000';
    		}
    		
    		valStr = Math.round(val)+"";
    		valStrLen = valStr.length;
    		tag = "";
    		
    		console.log("valStr : " + valStr);
    		console.log("valStrLen : " + valStrLen);
    		
    		if(valStrLen >= 17){
    			tag = " <span style='color:#ec9b2a'>경</span>"
    				valStr = valStr.substring(0, valStrLen-16);
    			if(valStr.length==1){
    				
    				valStr = (Number(val)/10000000000000000).toFixed(1);
    			}
    			
    		}else if(valStrLen >= 13){
    			tag = " <span style='color:#ec9b2a'>조</span>"
    				valStr = valStr.substring(0, valStrLen-12);
    			if(valStr.length==1){
    				valStr = (Number(val)/1000000000000).toFixed(1);
    			}
    		}else if(valStrLen >= 9){
    			tag = " <span style='color:#ec9b2a'>억</span>"
    				valStr = valStr.substring(0, valStrLen-8);
    			
    			if(valStr.length==1){
    				valStr = (Number(val)/100000000).toFixed(1);
    			}
    		}else if(valStrLen >= 5){
    			tag = " <span style='color:#ec9b2a'>만</span>"
    				valStr = valStr.substring(0, valStrLen-4);
    			
    			if(valStr.length==1){
    				valStr = (Number(val)/10000).toFixed(1);
    			}
    		}else{
    			// eslint-disable-next-line no-self-assign
    			valStr = valStr;
    			
    			if(valStr.length==1){
    				valStr = Number(val).toFixed(1);
    			}
    		}
//    		valStr = numeral(valStr).format('0,0');
    	} else if(GlobalLocale.lang === 'zh'){
    		
    		if(tmp =='万'){
    			val += '0000';
    		}else if(tmp == '亿'){
    			val += '00000000';
    		}else if(tmp == '万亿'){
    			val += '000000000000';
    		}else if(tmp == '亿亿'){
    			val += '0000000000000000';
    		}
    		
    		valStr = Math.round(val)+"";
    		valStrLen = valStr.length;
    		tag = "";
    		
    		if(valStrLen >= 17){
    			tag = " <span style='color:#ec9b2a'>亿亿</span>"
    				valStr = valStr.substring(0, valStrLen-16);
    			if(valStr.length==1){
    				
    				valStr = (Number(val)/10000000000000000).toFixed(1);
    			}
    			
    		}else if(valStrLen >= 13){
    			tag = " <span style='color:#ec9b2a'>万亿</span>"
    				valStr = valStr.substring(0, valStrLen-12);
    			if(valStr.length==1){
    				valStr = (Number(val)/1000000000000).toFixed(1);
    			}
    		}else if(valStrLen >= 9){
    			tag = " <span style='color:#ec9b2a'>亿</span>"
    				valStr = valStr.substring(0, valStrLen-8);
    			
    			if(valStr.length==1){
    				valStr = (Number(val)/100000000).toFixed(1);
    			}
    		}else if(valStrLen >= 5){
    			tag = " <span style='color:#ec9b2a'>万</span>"
    				valStr = valStr.substring(0, valStrLen-4);
    			
    			if(valStr.length==1){
    				valStr = (Number(val)/10000).toFixed(1);
    			}
    		}else{
    			// eslint-disable-next-line no-self-assign
    			valStr = valStr;
    			
    			if(valStr.length==1){
    				valStr = Number(val).toFixed(1);
    			}
    		}
//    		valStr = numeral(valStr).format('0,0');
    	} else if(GlobalLocale.lang === 'ja'){
    		
    		if(tmp =='万'){
    			val += '0000';
    		}else if(tmp == '億'){
    			val += '00000000';
    		}else if(tmp == '兆'){
    			val += '000000000000';
    		}else if(tmp == '京'){
    			val += '0000000000000000';
    		}
    		
    		valStr = Math.round(val)+"";
    		valStrLen = valStr.length;
    		tag = "";
    		
    		if(valStrLen >= 17){
    			tag = " <span style='color:#ec9b2a'>京</span>"
    				valStr = valStr.substring(0, valStrLen-16);
    			if(valStr.length==1){
    				
    				valStr = (Number(val)/10000000000000000).toFixed(1);
    			}
    			
    		}else if(valStrLen >= 13){
    			tag = " <span style='color:#ec9b2a'>兆</span>"
    				valStr = valStr.substring(0, valStrLen-12);
    			if(valStr.length==1){
    				valStr = (Number(val)/1000000000000).toFixed(1);
    			}
    		}else if(valStrLen >= 9){
    			tag = " <span style='color:#ec9b2a'>億</span>"
    				valStr = valStr.substring(0, valStrLen-8);
    			
    			if(valStr.length==1){
    				valStr = (Number(val)/100000000).toFixed(1);
    			}
    		}else if(valStrLen >= 5){
    			tag = " <span style='color:#ec9b2a'>万</span>"
    				valStr = valStr.substring(0, valStrLen-4);
    			
    			if(valStr.length==1){
    				valStr = (Number(val)/10000).toFixed(1);
    			}
    		}else{
    			// eslint-disable-next-line no-self-assign
    			valStr = valStr;
    			
    			if(valStr.length==1){
    				valStr = Number(val).toFixed(1);
    			}
    		}
//    		valStr = numeral(valStr).format('0,0');
    	} else  if (GlobalLocale.lang === 'de'){
    		
    		if(tmp =='Tsd'){
    			val += '000';
    		}else if(tmp == 'Mio'){
    			val += '000000';
    		}else if(tmp == 'Mrd'){
    			val += '000000000';
    		}else if(tmp == 'Brd'){
    			val += '000000000000';
    		}
    		
    		valStr = Math.round(val)+"";
    		valStrLen = valStr.length;
    		tag = "";
    		
    		if(valStrLen >= 13){
    			tag = " <span style='color:#ec9b2a'>Brd</span>"
    				valStr = valStr.substring(0, valStrLen-12);
    			if(valStr.length==1){
    				
    				valStr = (Number(val)/1000000000000).toFixed(1);
    			}
    			
    		}else if(valStrLen >= 10){
    			tag = " <span style='color:#ec9b2a'>Mrd</span>"
    				valStr = valStr.substring(0, valStrLen-9);
    			
    			if(valStr.length==1){
    				
    				valStr = (Number(val)/1000000000).toFixed(1);
    			}
    		}else if(valStrLen >= 7){
    			tag = " <span style='color:#ec9b2a'>Mio</span>"
    				valStr = valStr.substring(0, valStrLen-6);
    			
    			if(valStr.length==1){
    				valStr = (Number(val)/1000000).toFixed(1);
    			}
    		}else if(valStrLen >= 4){
    			tag = " <span style='color:#ec9b2a'>Tsd</span>"
    				valStr = valStr.substring(0, valStrLen-3);
    			
    			if(valStr.length==1){
    				valStr = (Number(val)/1000).toFixed(1);
    			}
    		}else{
    			// eslint-disable-next-line no-self-assign
    			valStr = valStr;
    			
    			if(valStr.length==1){
    				valStr = Number(val).toFixed(1);
    			}
    		}
    		
    	} else {
    		//console.log("$$$$ tmp : " + tmp);
    		if(tmp =='K'){
    			val += '000';
    		}else if(tmp == 'M'){
    			val += '000000';
    		}else if(tmp == 'B'){
    			val += '000000000';
    		}else if(tmp == 'T'){
    			val += '000000000000';
    		}
    		
    		valStr = Math.round(val)+"";
    		valStrLen = valStr.length;
    		tag = "";
    		
    		console.log("valStr : " + valStr);
    		console.log("valStrLen : " + valStrLen);
    		
    		if(valStrLen >= 13){
				// tag = " <span style='color:#ec9b2a'>T</span>"
				tag = "<i data-v-7e64d089>T</i>"
    				valStr = valStr.substring(0, valStrLen-12);
    			if(valStr.length==1){
					
					valStr = (Number(val)/1000000000000).toFixed(1);
    			}
    			
    		}else if(valStrLen >= 10){
				// tag = " <span style='color:#ec9b2a'>B</span>"
				tag = "<i data-v-7e64d089>B</i>"
    				valStr = valStr.substring(0, valStrLen-9);
    			
    			if(valStr.length==1){
					
					valStr = (Number(val)/1000000000).toFixed(1);
    				console.log("valStr.length==1 : " + valStr);
    			}
    		}else if(valStrLen >= 7){
				// tag = " <span style='color:#ec9b2a'>M</span>"
				tag = "<i data-v-7e64d089>M</i>"
    				valStr = valStr.substring(0, valStrLen-6);
    			
    			if(valStr.length==1){
					valStr = (Number(val)/1000000).toFixed(1);
    			}
    		}else if(valStrLen >= 4){
				// tag = " <span style='color:#ec9b2a'>K</span>"
				tag = "<i data-v-7e64d089>K</i>"
    				valStr = valStr.substring(0, valStrLen-3);
    			
    			if(valStr.length==1){
					valStr = (Number(val)/1000).toFixed(1);
    			}
    		}else{
				// eslint-disable-next-line no-self-assign
    			valStr = valStr;
    			
    			if(valStr.length==1){
					valStr = Number(val).toFixed(1);
    			}
    		}
    		
    	}
    	if ( valStr === '0.0' ) valStr = '<' + valStr;
    	
    	// if(GlobalLocale.decimal==='b'){
			// 	valStr = CmnUtil.changer(valStr);
        // }
		console.log("valStr : " + valStr);
    	
    	// return '<sup style="color:#808080;">'+GlobalLocale.qSymbol+'</sup>' + valStr + tag;
    	return '<em data-v-7e64d089>'+GlobalLocale.qSymbol+'</em>' + valStr + tag+'';
    
    },
    exchange: function(){
      console.log("exchangeLeftData");

      //exchange_cd 값만 가져오기
      for (const key in this.ex_list[0]) {
                ex_cd.push(key);
              }

      //각 거래소의 max_vol24 coin_cd값만 가져오기
      for (const key in this.ex_trade) {
                coinCd.push(this.ex_trade[key].exchange_max_vol24_coin_id);
              }

      console.log(coinCd);

      for (const key in this.ex_trade) {
         this.ex_trade[key].exchange_total = this.bigNumber(this.ex_trade[key].exchange_total);
         this.ex_trade[key].exchange_max_vol24 = this.bigNumber(this.ex_trade[key].exchange_max_vol24);

		 console.log("exchange_total : " + this.ex_trade[key].exchange_total);
		 console.log("exchange_max_vol24 : " + this.ex_trade[key].exchange_max_vol24);
      }


       let coin_symbol = [];
       let coin_icon_url = [];
       for (var j = 0; j < coinCd.length; j++) {
         if(coinCd[j] == 0){
           coin_symbol.push("-");
           coin_icon_url.push("");
           continue;
         }
         coin_symbol.push(this.coin_info[coinCd[j]].symbol + " : ");
         coin_icon_url.push(this.coin_info[coinCd[j]].coin_icon_url);

       }

       for (var i = 0; i < ex_cd.length; i++) {
              let arr = {};
            arr["ex_code"] = this.ex_list[0][ex_cd[i]].exchange_cd;  
            arr["ex_img"] = this.ex_list[0][ex_cd[i]].reqHash;
            arr["ex_name"] = this.ex_list[0][ex_cd[i]].exchange_name_eng;
            arr["ex_country"] = this.ex_list[0][ex_cd[i]].country_nm;
            arr["ex_cnt"] = this.ex_coin[i].cnt;
            arr["exchange_total"] = this.ex_trade[ex_cd[i]].exchange_total;
            arr["coin_icon_url"] = coin_icon_url[i];
            arr["coin_symbol"] = coin_symbol[i];
            arr["ex_max_vol24"] = this.ex_trade[ex_cd[i]].exchange_max_vol24;
          
            console.log(arr);
            this.exchangeLeft.push(arr);
            
          }

    },
    
  },
  
    created() {
      console.log("created");
      this.exchangeLeftData();
    },
    beforeMount() {
      console.log("beforeMount");
      
    },
    mounted(){
      console.log("mounted");
    },
	updated(){
	}
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "ExchangeList.scss";
</style>

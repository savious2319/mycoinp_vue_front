<template>
<div data-layerPopup="popupSelectCoinPair">
	<p class="tit">Select the coin name</p>
	<article>
		<div class="scarch">
			<button type="button" class="btnSearch">
				<i class="fas fa-search"/>
				<span>Search</span>
			</button>
			<input type="text" v-model="popupSearchText" placeholder="Search..."> 
			<button type="button" class="btnDel" v-if="popupSearchText.length > 0" @click="popupSearchText = ''">삭제</button>
		</div>
		<perfect-scrollbar>
			<div class="list">
			<!-- <div class="list" v-for="item in coin_list" :key="item"> -->
				<a href="#"><img src="@/assets/img/ico_coin.png" alt=""><span>Z</span>coin</a>
			</div>
		</perfect-scrollbar>
	</article>
	<button type="button" @click="cancel">Cancel</button>
</div>
</template>

<script>
import axios from 'axios'
export default {
	data () {
		return {
			popupSearchText: "",
			coin_list: []
		}
	},
	methods: {
		cancel: function(){
			this.$emit("cancel");
		},
		getCoins: function(){
			axios.get("http://192.168.1.115:18100/mpi/allcoin/coin-light")
				.then(res => {
					console.log("coin_list")
					console.log(res)

					for (const index in res.data) {
						if(res.data[index].coin_cd == "0" || res.data[index].coin_cd.startsWith("10")){
							console.log("#### : " + res.data[index].coin_cd);
							continue;
						}else{
							console.log("**** : " + res.data[index].coin_cd);
							this.coin_list.push(res.data);
						}
					}
					console.log(JSON.stringify(this.coin_list));
				})
				.catch(err => {
					console.log(err)
				})
		}
	},
	created(){
		this.getCoins();
	}
}
</script>

<style scoped lang="scss">
	@import "popupSelectCoinPair.scss";
</style>

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
				<a href="#"><img src="@/assets/img/ico_coin.png" alt=""><span>Z</span>coin</a>
				<a href="#"><img src="@/assets/img/ico_coin.png" alt=""><span>Z</span>coin</a>
				<a href="#"><img src="@/assets/img/ico_coin.png" alt=""><span>Z</span>coin</a>
				<a href="#"><img src="@/assets/img/ico_coin.png" alt=""><span>Z</span>coin</a>
				<a href="#"><img src="@/assets/img/ico_coin.png" alt=""><span>Z</span>coin</a>
				<a href="#"><img src="@/assets/img/ico_coin.png" alt=""><span>Z</span>coin</a>
				<a href="#"><img src="@/assets/img/ico_coin.png" alt=""><span>Z</span>coin</a>
				<a href="#"><img src="@/assets/img/ico_coin.png" alt=""><span>Z</span>coin</a>
				<a href="#"><img src="@/assets/img/ico_coin.png" alt=""><span>Z</span>coin</a>
				<a href="#"><img src="@/assets/img/ico_coin.png" alt=""><span>Z</span>coin</a>
				<a href="#"><img src="@/assets/img/ico_coin.png" alt=""><span>Z</span>coin</a>
				<a href="#"><img src="@/assets/img/ico_coin.png" alt=""><span>Z</span>coin</a>
				<a href="#"><img src="@/assets/img/ico_coin.png" alt=""><span>Z</span>coin</a>
				<a href="#"><img src="@/assets/img/ico_coin.png" alt=""><span>Z</span>coin</a>
				<a href="#"><img src="@/assets/img/ico_coin.png" alt=""><span>Z</span>coin</a>
				<a href="#"><img src="@/assets/img/ico_coin.png" alt=""><span>Z</span>coin</a>
				<a href="#"><img src="@/assets/img/ico_coin.png" alt=""><span>Z</span>coin</a>
				<a href="#"><img src="@/assets/img/ico_coin.png" alt=""><span>Z</span>coin</a>
				<a href="#"><img src="@/assets/img/ico_coin.png" alt=""><span>Z</span>coin</a>
				<a href="#"><img src="@/assets/img/ico_coin.png" alt=""><span>Z</span>coin</a>
				<a href="#"><img src="@/assets/img/ico_coin.png" alt=""><span>Z</span>coin</a>
				<a href="#"><img src="@/assets/img/ico_coin.png" alt=""><span>Z</span>coin</a>
				<a href="#"><img src="@/assets/img/ico_coin.png" alt=""><span>Z</span>coin</a>
				<a href="#"><img src="@/assets/img/ico_coin.png" alt=""><span>Z</span>coin</a>
				<a href="#"><img src="@/assets/img/ico_coin.png" alt=""><span>Z</span>coin</a>
				<a href="#"><img src="@/assets/img/ico_coin.png" alt=""><span>Z</span>coin</a>
				<a href="#"><img src="@/assets/img/ico_coin.png" alt=""><span>Z</span>coin</a>
			</div>
		</perfect-scrollbar>
	</article>
	<button type="button" @click="cancel">Cancel</button>
</div>
</template>

<script>
export default {
	data () {
		return {
			popupSearchText: "",
		}
	},
	methods: {
		cancel: function(){
			this.$emit("cancel");
		},
	}
}
</script>

<style scoped lang="scss">
	@import "popupSelectCoinPair.scss";
</style>

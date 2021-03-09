<template>
<div data-layerPopup="popupFiatType">
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
			<div class="currency">
				<button type="button" v-for="(lang, idx) in langs" :key="idx" :class="lang.symbol">{{lang.symbol}}</button>
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
			langs:[
				{symbol: "usd", coin_cd: "100001", mark: "$"},
				{symbol: "usd", coin_cd: "100001", mark: "$"},
				{symbol: "usd", coin_cd: "100001", mark: "$"},
				{symbol: "usd", coin_cd: "100001", mark: "$"},
				{symbol: "usd", coin_cd: "100001", mark: "$"},
				{symbol: "usd", coin_cd: "100001", mark: "$"},
				{symbol: "usd", coin_cd: "100001", mark: "$"},
				{symbol: "usd", coin_cd: "100001", mark: "$"},
				{symbol: "usd", coin_cd: "100001", mark: "$"},
				{symbol: "usd", coin_cd: "100001", mark: "$"},
				{symbol: "usd", coin_cd: "100001", mark: "$"},
				{symbol: "usd", coin_cd: "100001", mark: "$"},
				{symbol: "usd", coin_cd: "100001", mark: "$"},
				{symbol: "usd", coin_cd: "100001", mark: "$"},
				{symbol: "usd", coin_cd: "100001", mark: "$"},
				{symbol: "usd", coin_cd: "100001", mark: "$"},
				{symbol: "usd", coin_cd: "100001", mark: "$"},
				{symbol: "usd", coin_cd: "100001", mark: "$"},
				{symbol: "usd", coin_cd: "100001", mark: "$"},
				{symbol: "usd", coin_cd: "100001", mark: "$"},
				{symbol: "usd", coin_cd: "100001", mark: "$"},
				{symbol: "usd", coin_cd: "100001", mark: "$"},
				{symbol: "usd", coin_cd: "100001", mark: "$"},
				{symbol: "usd", coin_cd: "100001", mark: "$"},
				{symbol: "usd", coin_cd: "100001", mark: "$"},
				{symbol: "usd", coin_cd: "100001", mark: "$"},
				{symbol: "usd", coin_cd: "100001", mark: "$"},
				{symbol: "usd", coin_cd: "100001", mark: "$"},
				{symbol: "usd", coin_cd: "100001", mark: "$"},
				{symbol: "usd", coin_cd: "100001", mark: "$"},
				{symbol: "usd", coin_cd: "100001", mark: "$"},
				{symbol: "usd", coin_cd: "100001", mark: "$"},
				{symbol: "usd", coin_cd: "100001", mark: "$"},
				{symbol: "usd", coin_cd: "100001", mark: "$"},
				{symbol: "usd", coin_cd: "100001", mark: "$"},
				{symbol: "usd", coin_cd: "100001", mark: "$"},
			]
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
	@import "popupFiatType.scss";
</style>

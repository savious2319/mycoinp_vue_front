<template>
<div data-layerPopup="popupFiatType">
	<article>
		<div class="scarch">
			<button type="button" class="btnSearch">
				<i class="fas fa-search"/>
				<span>Search</span>
			</button>
			<input type="text" placeholder="Search..."> 
			<button type="button" class="btnDel">삭제</button>
		</div>
		<perfect-scrollbar>
			<div class="currency">
				<button type="button" v-for="(lang, idx) in langs" :key="idx" :class="lang.symbol">{{lang.symbol}}</button>
			</div>
		</perfect-scrollbar>
	</article>
	<button type="button">Cancel</button>
</div>
</template>

<script>
export default {
	data () {
		return {
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

}
</script>

<style scoped lang="scss">
	@import "popupFiatType.scss";
</style>

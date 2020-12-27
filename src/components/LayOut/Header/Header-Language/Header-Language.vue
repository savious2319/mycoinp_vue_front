<template>
<button type="button" class="btn krw" @click="btnLayerLang">KRW</button>
<div class="layerPopup" v-if="isLayerLang">
	<div class="tab_btn">
		<button type="button" :class="{'on': article.isCurrency}" @click="btnCurrency">Currency</button>
		<button type="button" :class="{'on': article.isLanguage}" @click="btnLanguage">Language</button>
		<button type="button" :class="{'on': article.isDataFormat}" @click="btnDataFormat">Data format</button>
	</div>
	<article v-if="article.isCurrency">
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

	<article v-if="article.isLanguage">
		<perfect-scrollbar>
			<div class="currency">
				<button type="button" v-for="(lang, idx) in langs" :key="idx" :class="lang.symbol">{{lang.symbol}}</button>
			</div>
		</perfect-scrollbar>
	</article>

	<article v-if="article.isDataFormat">
		<div class="dateFormat">
			<label>
				<input type="radio"> Type A (π = 3.14)
			</label>
			<label>
				<input type="radio"> Type B (π = 3,14)
			</label>
		</div>
	</article>
</div>
<div class="mask" v-if="isLayerLang" @click="btnLayerLang"></div>
</template>

<script>
export default {
	data () {
		return {
			isLayerLang: false,
			article:{
				isCurrency: true,
				isLanguage: false,
				isDataFormat: false
			},
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
		btnLayerLang: function(){
            if(this.isLayerLang == false){
                this.isLayerLang = true;
            } else{
                this.isLayerLang = false;
            }
        },
        btnCurrency: function(){
			this.article.isCurrency = true;
			this.article.isLanguage = false;
			this.article.isDataFormat = false;
        },
        btnLanguage: function(){
			this.article.isCurrency = false;
			this.article.isLanguage = true;
			this.article.isDataFormat = false;
        },
        btnDataFormat: function(){
			this.article.isCurrency = false;
			this.article.isLanguage = false;
			this.article.isDataFormat = true;
        }
    }
}
</script>

<style scoped lang="scss">
	@import "Header-Language.scss";
</style>

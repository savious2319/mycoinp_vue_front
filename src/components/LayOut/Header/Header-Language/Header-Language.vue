<template>
<span class="btn_language">
	<button type="button" class="krw" @click="btnLayerLang">KRW</button>
	<div class="layer_lang" v-if="isLayerLang">
		<div class="tab_btn">
			<button type="button" :class="{'on': article.isCurrency}" @click="btnCurrency">Currency</button>
			<button type="button" :class="{'on': article.isLanguage}" @click="btnLanguage">Language</button>
			<button type="button" :class="{'on': article.isDataFormat}" @click="btnDataFormat">Data format</button>
		</div>
		<article v-if="article.isCurrency">
			<div class="scarch">
				<input type="text" placeholder="Search..."> 
				<button type="button">삭제</button>
			</div>
			<vue-scroll class="vuescroll" :ops="ops">
				<div class="currency">
					<button type="button" v-for="(lang, idx) in langs" :key="idx" :class="lang.symbol">{{lang.symbol}}</button>
				</div>
			</vue-scroll>			
		</article>

		<article v-if="article.isLanguage">
			<vue-scroll class="vuescroll" :ops="ops">
				<div class="currency">
					<button type="button" v-for="(lang, idx) in langs" :key="idx" :class="lang.symbol">{{lang.symbol}}</button>
				</div>
			</vue-scroll>			
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
</span>
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
			ops:{
				scrollPanel: {
					scrollingX: false,
					scrollingY: true,
				},
				rail: {
					opacity: 1,
					background: '#f0f0f0',
					size: '4px',

				},
				bar: {
					background: '#cbcbcb',
					keepShow: true,
					opacity: 1,
					hover: false,
					size: '4px',
				}
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

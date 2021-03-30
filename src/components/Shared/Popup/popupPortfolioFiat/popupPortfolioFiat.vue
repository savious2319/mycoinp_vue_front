<template>
<div data-layerPopup="popupPortFolio">
	<button type="button" v-if="$windowWidth < 640">
		<span>Back</span>
		<i class="fas fa-arrow-left"/>
	</button>
	<p class="tit">Add Fiat</p>
	<article>
		<dl>
			<dt>Type</dt>
			<dd class="full">
				<input type="text">
				<button type="button" @click="btnFiatType">
					<i class="fas fa-search"/>
					<span>Search</span>
				</button>
			</dd>
			<dt>When</dt>
			<dd class="full"><input type="date"></dd>
			<dt>Where</dt>
			<dd class="full">
				<input type="text">
				<button type="button" @click="btnSelectCoinWhereWallet">
					<i class="fas fa-search"/>
					<span>Search</span>
				</button>
			</dd>
			<dt>How much</dt>
			<dd class="full">
				<input type="text" placeholder="1,000">
				<em>KRW</em>
			</dd>
		</dl>
		<dl>
			<dt>Total Buy Value</dt>
			<dd>
				<em>$</em>
				<span>2,399,000</span>
			</dd>
		</dl>
	</article>

	<div class="btnSet">
		<button type="button" @click="cancel">Cancel</button>
		<button type="button">Buy</button>
	</div>
</div>

<popupSelectCoinPair v-if="popups.isSelectCoinPair"/>
<div class="mask" v-if="popups.isSelectCoinPair"></div>

<popupSelectCoinWhereWallet v-if="popups.isSelectCoinWhereWallet"/>
<div class="mask" v-if="popups.isSelectCoinWhereWallet"></div>

</template>

<script>
export default {
	data () {
        return {
			popups:{
				isSelectCoinWhereWallet: false,
				isFiatType: false,
			},
        }
    },
	methods: {
		cancel: function(){
			this.$emit("cancel");
		},
		btnSelectCoinWhereWallet: function(){
			if(this.popups.isSelectCoinWhereWallet == false){
				this.popups.isSelectCoinWhereWallet = true;
			} else{
				this.popups.isSelectCoinWhereWallet = false;
			}
		},
		btnFiatType: function(){
			if(this.popups.isFiatType == false){
				this.popups.isFiatType = true;
			} else{
				this.popups.isFiatType = false;
			}
		},
	}
}
</script>

<style scoped lang="scss">
	@import "popupPortfolioFiat.scss";
</style>

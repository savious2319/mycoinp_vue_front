<template>
<div data-layerPopup="popupPortFolio">
	<button type="button" v-if="$windowWidth < 640">
		<span>Back</span>
		<i class="fas fa-arrow-left"/>
	</button>
	<p class="tit">Add Buy</p>
	<article>
		<dl>
			<dt>Coin</dt>
			<dd class="full">
				<input type="text">
				<button type="button" @click="btnSelectCoinPair">
					<i class="fas fa-search"/>
					<span>Search</span>
				</button>
			</dd>
			<dt>With(pair)</dt>
			<dd class="full">
				<input type="text">
				<button type="button">
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
			<dt>Holding Wallet</dt>
			<dd class="full">
				<input type="text" placeholder="Metamask">
				<button type="button">
					<i class="fas fa-search"/>
					<span>Search</span>
				</button>
			</dd>
			<dt>Buy Price</dt>
			<dd>
				<span>1 <em>BTC</em> =</span>
				<input type="text">
				<em>USDT</em>
			</dd>
			<dt>Buy Amount</dt>
			<dd class="full">
				<input type="text">
				<em>BTC</em>
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
		<button type="button">Cancel</button>
		<button type="button">Buy</button>
	</div>
</div>

<popupSelectCoinPair v-if="popups.isSelectCoinPair"/>
<div class="mask" v-if="popups.isSelectCoinPair" @click="btnSelectCoinPair"></div>

<popupSelectCoinWhereWallet v-if="popups.isSelectCoinWhereWallet"/>
<div class="mask" v-if="popups.isSelectCoinWhereWallet" @click="btnSelectCoinWhereWallet"></div>

</template>

<script>
export default {
	data () {
        return {
			popups:{
				isSelectCoinPair: false,
				isSelectCoinWhereWallet: false,
			},
        }
    },
	methods: {
		btnCoin: function(){
			this.tabs.isCoin = true;
			this.tabs.isFiat = false;
		},
		btnFiat: function(){
			this.tabs.isCoin = false;
			this.tabs.isFiat = true;
		},
		btnSelectCoinPair: function(){
			if(this.popups.isSelectCoinPair == false){
				this.popups.isSelectCoinPair = true;
			} else{
				this.popups.isSelectCoinPair = false;
			}
		},
		btnSelectCoinWhereWallet: function(){
			if(this.popups.isSelectCoinWhereWallet == false){
				this.popups.isSelectCoinWhereWallet = true;
			} else{
				this.popups.isSelectCoinWhereWallet = false;
			}
		},
	}
}
</script>

<style scoped lang="scss">
	@import "popupPortfolioCoin.scss";
</style>

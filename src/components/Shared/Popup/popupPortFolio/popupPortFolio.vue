<template>
<div data-layerPopup="popupPortFolio">
	<button type="button" v-if="$windowWidth < 640">
		<span>Back</span>
		<i class="fas fa-arrow-left"/>
		</button>
	<p class="tit">Add Buy</p>
	<div class="tabs">
		<button type="button" :class="{'active': tabs.isCoin}" @click="btnCoin">Coin Buy</button>
		<button type="button" :class="{'active': tabs.isFiat}" @click="btnFiat">Fiat Deposit</button>
	</div>
	<article v-if="tabs.isCoin">
		<dl>
			<dt>Coin</dt>
			<dd class="full" @click="btnSelectCoinPair">
				<input type="text" readonly>
				<button type="button">
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
			<dd class="full" @click="btnSelectCoinWhereWallet">
				<input type="text" readonly>
				<button type="button">
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

	<article v-if="tabs.isFiat">
		<dl>
			<dt>Type</dt>
			<dd class="full" @click="btnFiatType">
				<input type="text" readonly>
				<button type="button">
					<i class="fas fa-search"/>
					<span>Search</span>
				</button>
			</dd>
			<dt>When</dt>
			<dd class="full"><input type="date"></dd>
			<dt>Where</dt>
			<dd class="full" @click="btnSelectCoinWhereWallet">
				<input type="text" readonly>
				<button type="button">
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

<popupSelectCoinPair v-if="popups.isSelectCoinPair" @cancel="btnSelectCoinPair"/>
<div class="mask" v-if="popups.isSelectCoinPair"></div>

<popupSelectCoinWhereWallet v-if="popups.isSelectCoinWhereWallet" @cancel="btnSelectCoinWhereWallet"/>
<div class="mask" v-if="popups.isSelectCoinWhereWallet"></div>

<popupFiatType v-if="popups.isFiatType" @cancel="btnFiatType"/>
<div class="mask" v-if="popups.isFiatType"></div>
</template>

<script>
export default {
	data () {
        return {
			tabs:{
				isCoin: true,
				isFiat: false,
			},
			popups:{
				isSelectCoinPair: false,
				isSelectCoinWhereWallet: false,
				isFiatType: false,
			},
        }
    },
	methods: {
		cancel: function(){
			this.$emit("cancel");
		},
		btnCoin: function(){
			this.tabs.isCoin = true;
			this.tabs.isFiat = false;
		},
		btnFiat: function(){
			this.tabs.isCoin = false;
			this.tabs.isFiat = true;
		},
		btnSelectCoinPair: function(){
			this.popups.isSelectCoinPair = !this.popups.isSelectCoinPair;
		},
		btnSelectCoinWhereWallet: function(){
			this.popups.isSelectCoinWhereWallet = !this.popups.isSelectCoinWhereWallet;
		},
		btnFiatType: function(){
			this.popups.isFiatType = !this.popups.isFiatType;
		},
	}
}
</script>

<style scoped lang="scss">
	@import "popupPortFolio.scss";
</style>

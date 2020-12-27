<template>
<div class="layerPopup">
	<p class="tit">Add Buy</p>
	<div class="tabs">
		<button type="button" class="active">Coin Buy</button>
		<button type="button">Fiat Deposit</button>
	</div>
	<article>
		<dl>
			<dt>Coin</dt>
			<dd class="full">
				<input type="text">
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
			<dd class="full">
				<input type="text">
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
	<div class="btnSet">
		<button type="button">Cancel</button>
		<button type="button">Buy</button>
	</div>
</div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
	@import "popupPortFolio.scss";
</style>

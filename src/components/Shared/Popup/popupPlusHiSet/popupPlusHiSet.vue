<template>
<div data-layerPopup="popupPlusHiSet">
	<p class="alert">Choose a Price Premium</p>
	<article>
		<button type="button" class="active">≧ 5 <span>%</span></button>
		<button type="button">≧ 10 <span>%</span></button>
		<button type="button">≧ 15 <span>%</span></button>
		<button type="button">≧ 20 <span>%</span></button>
	</article>

	<p class="alert">Choose a 24h $Vol</p>
	<article>
		<button type="button">≧ <span>US$</span> 100</button>
		<button type="button">≧ <span>US$</span> 1000</button>
		<button type="button">≧ <span>US$</span> 10000</button>
	</article>
	<div class="btnSet">
		<button type="button" @click="cancel">Cancel</button>
		<button type="button">Choose</button>
	</div>
</div>
</template>

<script>
export default {
	methods: {
		cancel: function(){
			this.$emit("cancel");
		},
	}

}
</script>

<style scoped lang="scss">
	@import "popupPlusHiSet.scss";
</style>

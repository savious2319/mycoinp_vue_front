<template>
<div data-layerPopup="popupMemo">
	<p class="tit">
		<img src="@/assets/img/ico_coin.png" alt="">
		<strong>XZC</strong>
		<span>ZCoin</span>
	</p>
	<article>
		<i class="fas fa-edit"/>
		<p>Please take note if necessary.</p>
	</article>
	<div class="btnSet">
		<button type="button" @click="cancel">Cancel</button>
		<button type="button">Save</button>
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
	@import "popupMemo.scss";
</style>

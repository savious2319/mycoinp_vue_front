<template>
<div data-layerPopup="popupMemo">
	<p class="tit">
		<img src="@/assets/img/ico_coin.png" alt="">
		<strong>XZC</strong>
		<span>ZCoin</span>
	</p>
	<article>
		<i class="fas fa-edit"/>
		<textarea placeholder="Please take note if necessary."></textarea>
	</article>
	<div class="btnSet">
		<button type="button" @click="cancel">Cancel</button>
		<button type="button">Save</button>
	</div>
</div>
</template>

<script>
export default {
    data () {
        return {
            isMemo : false,
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
	@import "popupMemo.scss";
</style>

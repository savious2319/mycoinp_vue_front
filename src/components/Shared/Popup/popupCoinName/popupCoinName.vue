<template>
<div data-layerPopup="popupCoinName">
	<article>
		<div class="scarch">
			<button type="button" class="btnSearch">
				<i class="fas fa-search"/>
				<span>Search</span>
			</button>
			<input type="text" v-model="popupSearchText" placeholder="Input the coin name.. "> 
			<button type="button" class="btnDel" v-if="popupSearchText.length > 0" @click="popupSearchText = ''">삭제</button>
		</div>
		<perfect-scrollbar>
			<div class="list">
				<a href="#"><span>Z</span>coin</a>
				<a href="#"><span>Z</span>coin</a>
				<a href="#"><span>Z</span>coin</a>
				<a href="#"><span>Z</span>coin</a>
				<a href="#"><span>Z</span>coin</a>
				<a href="#"><span>Z</span>coin</a>
				<a href="#"><span>Z</span>coin</a>
				<a href="#"><span>Z</span>coin</a>
				<a href="#"><span>Z</span>coin</a>
				<a href="#"><span>Z</span>coin</a>
				<a href="#"><span>Z</span>coin</a>
				<a href="#"><span>Z</span>coin</a>
				<a href="#"><span>Z</span>coin</a>
				<a href="#"><span>Z</span>coin</a>
				<a href="#"><span>Z</span>coin</a>
				<a href="#"><span>Z</span>coin</a>
				<a href="#"><span>Z</span>coin</a>
				<a href="#"><span>Z</span>coin</a>
				<a href="#"><span>Z</span>coin</a>
				<a href="#"><span>Z</span>coin</a>
				<a href="#"><span>Z</span>coin</a>
				<a href="#"><span>Z</span>coin</a>
				<a href="#"><span>Z</span>coin</a>
				<a href="#"><span>Z</span>coin</a>
				<a href="#"><span>Z</span>coin</a>
				<a href="#"><span>Z</span>coin</a>
				<a href="#"><span>Z</span>coin</a>
			</div>
		</perfect-scrollbar>
	</article>
	<button type="button" @click="cancel">Cancel</button>
</div>
</template>

<script>
export default {
	data () {
		return {
			popupSearchText: "",
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
	@import "popupCoinName.scss";
</style>

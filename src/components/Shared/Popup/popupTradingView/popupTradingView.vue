<template>
<div data-layerPopup="popupTradingView">
	<p class="tit">Indicators</p>
	<article>
		<div class="scarch">
			<button type="button" class="btnSearch">
				<i class="fas fa-search"/>
				<span>Search</span>
			</button>
			<input type="text" placeholder="Search..."> 
			<button type="button" class="btnDel">삭제</button>
		</div>
		<perfect-scrollbar>
			<div class="list">
				<a href="#"><span>Ac</span>cumulation/Distribution</a>
				<a href="#"><span>Ac</span>cumulation/Distribution</a>
				<a href="#"><span>Ac</span>cumulation/Distribution</a>
				<a href="#"><span>Ac</span>cumulation/Distribution</a>
				<a href="#"><span>Ac</span>cumulation/Distribution</a>
				<a href="#"><span>Ac</span>cumulation/Distribution</a>
				<a href="#"><span>Ac</span>cumulation/Distribution</a>
				<a href="#"><span>Ac</span>cumulation/Distribution</a>
				<a href="#"><span>Ac</span>cumulation/Distribution</a>
				<a href="#"><span>Ac</span>cumulation/Distribution</a>
				<a href="#"><span>Ac</span>cumulation/Distribution</a>
				<a href="#"><span>Ac</span>cumulation/Distribution</a>
				<a href="#"><span>Ac</span>cumulation/Distribution</a>
				<a href="#"><span>Ac</span>cumulation/Distribution</a>
				<a href="#"><span>Ac</span>cumulation/Distribution</a>
				<a href="#"><span>Ac</span>cumulation/Distribution</a>
				<a href="#"><span>Ac</span>cumulation/Distribution</a>
				<a href="#"><span>Ac</span>cumulation/Distribution</a>
				<a href="#"><span>Ac</span>cumulation/Distribution</a>
				<a href="#"><span>Ac</span>cumulation/Distribution</a>
			</div>
		</perfect-scrollbar>
	</article>
	<button type="button" @click="cancel">Cancel</button>
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
	@import "popupTradingView.scss";
</style>

<template>
<div data-layerPopup="popupSelectCoinWhereWallet">
	<div class="tabs">
		<button type="button" :class="{'on': tabs.isSearchExchange}" @click="btnSearchExchange">Search Exchange</button>
		<button type="button" :class="{'on': tabs.isAddExchange}" @click="btnAddExchange">Add Exchage</button>
	</div>
	<article v-if="tabs.isSearchExchange">
		<div class="scarch">
			<button type="button" class="btnSearch">
				<i class="fas fa-search"/>
				<span>Search</span>
			</button>
			<input type="text" v-model="popupSearchText" placeholder="Search..."> 
			<button type="button" class="btnDel" v-if="popupSearchText.length > 0" @click="popupSearchText = ''">삭제</button>
		</div>
		<div class="noData">
			No data, need to add.
		</div>
		<!-- <perfect-scrollbar>
			<div class="list">
				<a href="#"><span>Ac</span>cumulation/Distribution</a>
			</div>
		</perfect-scrollbar> -->
	</article>
	<button v-if="tabs.isSearchExchange" type="button" @click="cancel">Cancel</button>

	<article v-if="tabs.isAddExchange">
		<div class="scarch">
			<input type="text" placeholder="Input the exchange name.."> 
		</div>
		<div class="noData">
			No data, need to add.
		</div>
		<!-- <perfect-scrollbar>
			<div class="list">
				<a href="#"><span>Ac</span>cumulation/Distribution</a>
			</div>
		</perfect-scrollbar> -->
	</article>
	<div class="btnSet" v-if="tabs.isAddExchange">
		<button type="button" @click="cancel">Cancel</button>
		<button type="button">Save</button>
	</div>
</div>
</template>

<script>
export default {
	data () {
        return {
			popupSearchText: "",
			tabs:{
				isSearchExchange: true,
				isAddExchange: false,
			},
        }
    },
	methods: {
		cancel: function(){
			this.$emit("cancel");
		},
		btnSearchExchange: function(){
			this.tabs.isSearchExchange = true;
			this.tabs.isAddExchange = false;
		},
		btnAddExchange: function(){
			this.tabs.isSearchExchange = false;
			this.tabs.isAddExchange = true;
		},
	}
}
</script>

<style scoped lang="scss">
	@import "popupSelectCoinWhereWallet.scss";
</style>

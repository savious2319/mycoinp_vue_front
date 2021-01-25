<template>
	<div class="navigation">
		<div>
			<router-link class-active="active" to="/portfolio/legaltender">
				<span v-if="$windowWidth > 1240"><i class="fas fa-user-friends"/></span>
				<span>Portfolio</span>
				<span>[25]</span>
			</router-link>
			<router-link class-active="active" to="/allcoin">
				<span v-if="$windowWidth > 1240"><i class="fas fa-coins"/></span>
				<span>All Coin</span>
				<span>[3122]</span>
			</router-link>
			<router-link class-active="active" to="/exchanges">
				<span v-if="$windowWidth > 1240"><i class="fas fa-exchange-alt"/></span>
				<span>Exchanges</span>
				<span>[41]</span>
			</router-link>
			<router-link class-active="active" to="/defi">
				<span v-if="$windowWidth > 1240"><i class="fas fa-landmark"/></span>
				<span>Defi</span>
				<span>[41]</span>
			</router-link>
			<router-link class-active="active" to="/plus">
				<span v-if="$windowWidth > 1240"><i class="fas fa-ellipsis-h"/></span>
				<span>++Plus</span>
				<i class="fas fa-angle-down"/>
			</router-link>
		</div>
		<NavigationGasPrice v-if="$windowWidth > 640"/>
	</div>
</template>

<script lang="ts">
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "Navigation.scss";
</style>

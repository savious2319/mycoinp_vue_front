<template>
	<div class="navigation">
		<div>
			<router-link class-active="active" to="/portfolio/legaltender">
				<i class="fas fa-user-friends" v-if="$windowWidth > 640"/>
				<span>Portfolio</span>
				<span>[25]</span>
			</router-link>
			<router-link class-active="active" to="/allcoin">
				<i class="fas fa-coins" v-if="$windowWidth > 640"/>
				<span>All Coin</span>
				<span>[3122]</span>
			</router-link>
			<router-link class-active="active" to="/exchanges">
				<i class="fas fa-exchange-alt" v-if="$windowWidth > 640"/>
				<span>Exchanges</span>
				<span>[41]</span>
			</router-link>
			<router-link class-active="active" to="/defi">
				<i class="fas fa-landmark" v-if="$windowWidth > 640"/>
				<span>Defi</span>
				<span>[41]</span>
			</router-link>
			<router-link class-active="active" to="/plus">
				<i class="fas fa-ellipsis-h" v-if="$windowWidth > 640"/>
				<span>++Plus</span>
				<i class="fas fa-angle-down" v-if="$windowWidth > 640"/>
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

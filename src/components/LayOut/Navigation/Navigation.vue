<template>
	<div class="navigation">
		<div>
			<router-link class-active="active" to="/">Portfolio <span>[25]</span></router-link>
			<router-link class-active="active" to="/all-coin">All Coin <span>[3122]</span></router-link>
			<router-link class-active="active" to="/exchange">Exchange <span>[41]</span></router-link>
			<router-link class-active="active" to="/finance">Finance <span>[41]</span></router-link>
			<router-link class-active="active" to="/plus">++Plus</router-link>
		</div>
		<NavigationGasPrice v-if="$screen.width > 639"/>
	</div>
</template>

<script lang="ts">
import NavigationGasPrice from '@/components/LayOut/Navigation/Navigation-GasPrice/Navigation-GasPrice.vue';

export default {
	components: {
		NavigationGasPrice,
	},

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "Navigation.scss";
</style>

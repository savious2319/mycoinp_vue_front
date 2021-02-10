<template>
	<div class="navigation">
		<div>
			<router-link to="/portfolio/legaltender">
				<span v-if="$windowWidth > 1240"><i class="fas fa-user-friends"/></span>
				<span>Portfolio</span>
				<span>[25]</span>
			</router-link>
			<router-link to="/allcoin">
				<span v-if="$windowWidth > 1240"><i class="fas fa-coins"/></span>
				<span>All Coin</span>
				<span>[3122]</span>
			</router-link>
			<router-link to="/exchanges">
				<span v-if="$windowWidth > 1240"><i class="fas fa-exchange-alt"/></span>
				<span>Exchanges</span>
				<span>[41]</span>
			</router-link>
			<router-link to="/defi">
				<span v-if="$windowWidth > 1240"><i class="fas fa-landmark"/></span>
				<span>Defi</span>
				<span>[41]</span>
			</router-link>
			<a href="#none" :class="{'router-link-exact-active': isPlus}" @click="isPlus = !isPlus">
				<span v-if="$windowWidth < 640"><i class="fas fa-ellipsis-v"/></span>
				<span v-if="$windowWidth > 640"><i class="fas fa-ellipsis-h"/></span>
				<span v-if="$windowWidth > 1240">++Plus</span>
				<span v-if="$windowWidth > 1240"><i class="fas fa-angle-down"/></span>
			</a>
			<div v-if="isPlus">
				<router-link to="/PlusHi">
					<i class="fas fa-exchange-alt"/>
					<span>Hi-Lo</span>
				</router-link>
				<router-link to="/Abnormal-Price">
					<i class="fas fa-asterisk"/>
					<span>Abnormal Price</span>
				</router-link>
				<router-link to="/World-Map">
					<i class="fas fa-map-marked-alt"/>
					<span>World Map</span>
				</router-link>
				<router-link to="/Expert">
					<i class="fas fa-user-tie"/>
					<span>Expert</span>
				</router-link>
				<router-link to="/Promotion">
					<span>Promotion</span>
				</router-link>
			</div>
		</div>
		<NavigationGasPrice v-if="$windowWidth > 640"/>
	</div>
</template>

<script>
export default {
	data () {
        return {
            isPlus: false,
        }
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "Navigation.scss";
</style>

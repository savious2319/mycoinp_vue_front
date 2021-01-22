<template>
  <section v-if="$windowWidth > 640">
    <perfect-scrollbar>
      <AllCoinLeft/>
    </perfect-scrollbar>
		<perfect-scrollbar>
      <AllCoinRight/>
    </perfect-scrollbar>
  </section>

	<!-- Mobile Only -->
    <section v-if="$windowWidth < 640">
      <AllCoinLeft v-bind:containerScroll="containerScroll"/>
      <!-- <AllCoinRight/> -->
    </section>
</template>

<script>
export default {
	props : ['containerScroll'],
    data () {
		return {
			ops:{
				scrollPanel: {
					scrollingX: false,
					scrollingY: true,
				},
				rail: {
					opacity: 1,
					background: '#13131f',
					size: '4px',

				},
				bar: {
					background: '#282d3a',
					keepShow: true,
					opacity: 1,
					hover: false,
					size: '4px',
				}
			},
		}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/assets/scss/section.scss";
</style>

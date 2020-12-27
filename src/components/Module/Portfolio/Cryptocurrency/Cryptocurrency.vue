<template>
    <section v-if="$windowWidth > 640">
        <perfect-scrollbar>
            <CryptocurrencyLeft/>
        </perfect-scrollbar>
		<perfect-scrollbar>
			<CryptocurrencyRight/>
        </perfect-scrollbar>
    </section>

	<!-- Mobile Only -->
    <section v-if="$windowWidth < 640">
		<CryptocurrencyLeft v-if="!isDetailView"/>
		<CryptocurrencyRight v-if="isDetailView"/>
    </section>
</template>

<script>
export default {
    data () {
		return {
			isDetailView: true,
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
  @import "Cryptocurrency.scss";
</style>

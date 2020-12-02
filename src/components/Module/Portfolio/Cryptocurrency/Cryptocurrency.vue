<template>
    <section>
        <vue-scroll class="left" :ops="ops">
            <CryptocurrencyLeft/>
        </vue-scroll>
        <vue-scroll class="right" :ops="ops">
			<CryptocurrencyRight/>
        </vue-scroll>
    </section>
</template>

<script>
export default {
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
  @import "Cryptocurrency.scss";
</style>

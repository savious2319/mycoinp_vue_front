<template>
    <section v-if="$windowWidth >= 640">
        <perfect-scrollbar class="sectionLeft" v-on:scroll.passive="handleScrollLeft">
            <CryptocurrencyLeft v-bind:container="sectionLeft"/>
        </perfect-scrollbar>
		<perfect-scrollbar class="sectionRight" v-on:scroll.passive="handleScrollRight">
			<CryptocurrencyRight v-bind:container="sectionRight"/>
        </perfect-scrollbar>
    </section>

	<!-- Mobile Only -->
    <section v-if="$windowWidth < 640">
		<CryptocurrencyLeft v-if="!isMobileDetail" v-bind:container="container"/>
    </section>
</template>

<script>
const OFFSET = 60;
export default {
    name: 'home',
	props : ['container'],
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
            sectionLeft : {
                scrollDown: true,
                lastScrollPosition: 0,
            },
            sectionRight : {
                scrollDown: true,
                lastScrollPosition: 0,
            },			
		}
	},
    methods: {
        handleScrollLeft: function(e) {
            if (e.target.scrollTop < 0) {
                return
            }
            if (Math.abs(e.target.scrollTop - this.sectionLeft.lastScrollPosition) < OFFSET) {
                return
            }
            this.sectionLeft.scrollDown = e.target.scrollTop < this.sectionLeft.lastScrollPosition
            this.sectionLeft.lastScrollPosition = e.target.scrollTop
        },
        handleScrollRight: function(e) {
            if (e.target.scrollTop < 0) {
                return
            }
            if (Math.abs(e.target.scrollTop - this.sectionRight.lastScrollPosition) < OFFSET) {
                return
            }
            this.sectionRight.scrollDown = e.target.scrollTop < this.sectionRight.lastScrollPosition
            this.sectionRight.lastScrollPosition = e.target.scrollTop
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/assets/scss/section.scss";
</style>

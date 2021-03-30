<template>
	<section v-if="$windowWidth >= 640">
        <perfect-scrollbar class="sectionLeft" v-on:scroll.passive="handleScrollLeft">
			<HiloLeft v-bind:container="sectionLeft"/>
		</perfect-scrollbar>
		<perfect-scrollbar class="sectionRight" v-on:scroll.passive="handleScrollRight">
			<HiloRight v-bind:container="sectionRight"/>
		</perfect-scrollbar>
	</section>

	<!-- Mobile Only -->
    <section v-if="$windowWidth < 640">
      <HiloLeft v-bind:container="container"/>
      <!-- <HiloRight/> -->
    </section>
</template>

<script>
const OFFSET = 60;
export default {
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
            this.sectionLeft.scrollDown = e.target.scrollTop < 500;
        },
        handleScrollRight: function(e) {
            if (e.target.scrollTop < 0) {
                return
            }
            if (Math.abs(e.target.scrollTop - this.sectionRight.lastScrollPosition) < OFFSET) {
                return
            }
            this.sectionRight.scrollDown = e.target.scrollTop < 500;
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/assets/scss/section.scss";
</style>

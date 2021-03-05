<template>
  <perfect-scrollbar id="contentsSection" v-on:scroll.passive="handleScrollFull" v-if="$windowWidth >= 640">
    <NoticeDetailsSection v-bind:container="fullSection"/>
  </perfect-scrollbar>
  <div class="contentsSection" v-if="$windowWidth < 640">
    <NoticeDetailsSection v-bind:container="container"/>
  </div>
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
      fullSection : {
          scrollDown: true,
          lastScrollPosition: 0,
      },			
		}
	},
    methods: {
      handleScrollFull: function(e) {
        if (e.target.scrollTop < 0) {
            return
        }
        if (Math.abs(e.target.scrollTop - this.fullSection.lastScrollPosition) < OFFSET) {
            return
        }
        this.fullSection.scrollDown = e.target.scrollTop < this.fullSection.lastScrollPosition
        this.fullSection.lastScrollPosition = e.target.scrollTop
      },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "Details.scss";
</style>

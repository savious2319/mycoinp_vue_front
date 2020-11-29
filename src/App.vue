<template>
	<div id="app">
		<header>
			<Header/>
			<Navigation v-if="$screen.width > 737"/>
			<div class="btnSet" v-if="$screen.width > 1199">
				<HeaderLanguage/>
				<i/>
				<HeaderBackUp/>
			</div>
		</header>
		<section>
			<router-view/>
			<Footer v-if="$screen.width > 737"/>
		</section>
		<footer v-if="$screen.width < 736" :class="{'hide': !showNavbar}">
			<Navigation/>
		</footer>
	</div>
</template>
<script>
const OFFSET = 60;
export default {
    name: 'App',
    data () {
        return {
            floor: false,
            showNavbar: true,
            lastScrollPosition: 0,
            scrollValue: 0
        }
    },
    mounted () {
        this.lastScrollPosition = window.pageYOffset
        window.addEventListener('scroll', this.onScroll)
        const viewportMeta = document.createElement('meta')
        viewportMeta.name = 'viewport'
        viewportMeta.content = 'width=device-width, initial-scale=1'
        document.head.appendChild(viewportMeta)
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
        onScroll () {
            if (window.pageYOffset < 0) {
                return
            }
            if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
                return
            }
            this.showNavbar = window.pageYOffset < this.lastScrollPosition
            this.lastScrollPosition = window.pageYOffset
        }
    }
}
</script>
<style scoped lang="scss">
    @import "App.scss";
</style>

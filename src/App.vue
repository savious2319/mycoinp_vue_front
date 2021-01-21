<template>
  <div id="mycoinp">
      <header>
        <Header/>
        <Navigation v-if="$windowWidth > 640"/>
        <div class="btnSet" v-if="$windowWidth > 1200">
          <HeaderLanguage/>
          <i/>
          <HeaderBackUp/>
        </div>
      </header>
      <div class="container" v-on:scroll.passive="handleScroll">
        <router-view />
        <Footer v-if="$windowWidth > 640"/>
      </div>
      <footer v-if="$windowWidth < 640" :class="{'hide': !showNavbar}">
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
            scrollValue: 0,
        }
    },
    methods: {
        handleScroll: function(e) {
            if (e.target.scrollTop < 0) {
                return
            }
            if (Math.abs(e.target.scrollTop - this.lastScrollPosition) < OFFSET) {
                return
            }
            this.showNavbar = e.target.scrollTop < this.lastScrollPosition
            this.lastScrollPosition = e.target.scrollTop
        },
    }
}
</script>
<style scoped lang="scss">
    @import "App.scss";
</style>

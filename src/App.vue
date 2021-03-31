<template>
  <div id="mycoinp" class="mode-dark">
      <header>
        <Header/>
        <Navigation v-if="$windowWidth >= 640"/>
        <div class="btnSet" v-if="$windowWidth > 1240">
          <HeaderLanguage/>
          <i/>
          <HeaderBackUp/>
        </div>
      </header>
      <div id="container" :class="{'sectionLeft': $windowWidth < 640}" v-on:scroll.passive="handleScroll">
        <router-view v-bind:container="container" />
        <Footer v-if="$windowWidth >= 640"/>
      </div>
      <footer v-if="$windowWidth < 640" :class="{'hide': !container.scrollTop}">
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
            container : {
                scrollTop: true,
                scrollDown: true,
                lastScrollPosition: 0,
            },
        }
    },
    methods: {
        handleScroll: function(e) {
            if (e.target.scrollTop < 0) {
                return;
            }
            if (Math.abs(e.target.scrollTop - this.container.lastScrollPosition) < OFFSET) {
                return;
            }
            this.container.scrollTop = e.target.scrollTop < this.container.lastScrollPosition;
            this.container.scrollDown = e.target.scrollTop < 500;
            this.container.lastScrollPosition = e.target.scrollTop;            
        },
    }
}
</script>
<style scoped lang="scss">
  @import "App.scss";
</style>

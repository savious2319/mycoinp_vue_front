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
        <router-view v-bind:containerScroll="containerScroll" />
        <Footer v-if="$windowWidth > 640"/>
      </div>
      <footer v-if="$windowWidth < 640" :class="{'hide': !containerScroll.scrollDown}">
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
            containerScroll : {
                scrollTop: 100,
                scrollDown: true,
                lastScrollPosition: 0,
            },
        }
    },
    methods: {
        handleScroll: function(e) {
            // console.log(`scrollTop : ${e.target.scrollTop}`);
            // if (e.target.scrollTop > 5120) {
            //     e.target.scrollTop = 0;
            // }
            if (e.target.scrollTop < 0) {
                return
            }
            if (Math.abs(e.target.scrollTop - this.containerScroll.lastScrollPosition) < OFFSET) {
                return
            }
            this.containerScroll.scrollDown = e.target.scrollTop < this.containerScroll.lastScrollPosition
            this.containerScroll.lastScrollPosition = e.target.scrollTop
        },
    }
}
</script>
<style scoped lang="scss">
    @import "App.scss";
</style>

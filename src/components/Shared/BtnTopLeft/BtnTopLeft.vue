<template>
  <a class="btnTop" href="#adLeft" v-if="$windowWidth < 640" v-smooth-scroll="{container: '#container'}">Top</a>
  <a class="btnTop" href="#adLeft" v-if="$windowWidth >= 640" v-smooth-scroll="{container: '#sectionLeft'}">Top</a>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "BtnTopLeft.scss";
</style>

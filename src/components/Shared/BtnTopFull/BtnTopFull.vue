<template>
  <a class="btnTop" href="#scrollTop" v-if="$windowWidth < 640" v-smooth-scroll="{container: '#container'}">Top</a>
  <a class="btnTop" href="#scrollTop" v-if="$windowWidth >= 640" v-smooth-scroll="{container: '#contentsSection'}">Top</a>

</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "BtnTopFull.scss";
</style>

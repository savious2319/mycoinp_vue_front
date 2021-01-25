<template>
  <a class="btnTop" href="#adRight" v-if="$windowWidth < 640" v-smooth-scroll="{container: '#contents'}">Top</a>
  <a class="btnTop" href="#adRight" v-if="$windowWidth > 640" v-smooth-scroll="{container: '#sectionRight'}">Top</a>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "BtnTopRight.scss";
</style>

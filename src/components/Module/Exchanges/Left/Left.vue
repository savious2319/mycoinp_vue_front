<template>
  <CryptocurrencyLeftAdvertisement/>
  <ExchangesLeftExchangeList/>
  <button type="button" class="btnTop" :class="{'show': !containerScroll.scrollDown}" @click="btnTop">Top</button>
</template>

<script>
export default {
  props : ['containerScroll'],
  methods: {
    btnTop: function(){
        this.$emit.containerScroll.scrollTop = 0;
    },
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/assets/scss/sectionLeft.scss";
</style>

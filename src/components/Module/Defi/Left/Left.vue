<template>
  <CryptocurrencyLeftAdvertisement/>
  <div class="tabs">
    <button type="button" :class="{'active': left.isbySingleAssets}" @click="btnBy('isbySingleAssets')">Single Assets</button>
    <button type="button" :class="{'active': left.isbyMultiAssets}" @click="btnBy('isbyMultiAssets')">Multi Assets</button>
  </div>
  <DefiLeftSingleAssets v-if="left.isbySingleAssets"/>
  <DefiLeftMultiAssets v-if="left.isbyMultiAssets"/>
  <BtnTopLeft v-if="!container.scrollDown"/>
</template>

<script>
export default {
  props : ['container'],
  data () {
		return {
      left:{
				isbySingleAssets: true,
				isbyMultiAssets: false,
			},
    }
  },
  methods: {
    btnBy: function(arg){
      Object.keys(this.left).forEach(key => {
        if(key == arg){
          this.left[key] = true;
        } else{
          this.left[key] = false;
        }
      });
    },
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/assets/scss/sectionLeft.scss";
</style>

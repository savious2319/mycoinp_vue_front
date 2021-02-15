<template>
  <CryptocurrencyLeftAdvertisement/>
  <div class="tabs btnSet">
    <button type="button" :class="{'active': left.isbyHigh}" @click="btnBy('isbyHigh')">High [118]</button>
    <button type="button" :class="{'active': left.isbyLow}" @click="btnBy('isbyLow')">Low</button>
    <a href="#none"><i class="fas fa-cog"></i><span>Set</span></a>
  </div>
  <PlusHiLeftHigh v-if="left.isbyHigh"/>
  <PlusHiLeftLow v-if="left.isbyLow"/>
  <BtnTopLeft v-if="!container.scrollDown"/>
</template>

<script>
export default {
  props : ['container'],
  data () {
		return {
      left:{
				isbyHigh: true,
				isbyLow: false,
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

<template>
<div class="header">
    <h1>MyCoinP</h1>
    <button type="button" class="btn_menu" @click="btnAside"><span>gnb</span></button>
    <div v-if="$screen.width < 1200">
        <HeaderLanguage/>
        <HeaderBackUp/>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        btnAside: function(){
            if(this.$parent.aside == false){
                this.$parent.aside = true;
            } else{
                this.$parent.aside = false;
            }
        }
    }
}
</script>

<style scoped lang="scss">
  @import "Header.scss";
</style>

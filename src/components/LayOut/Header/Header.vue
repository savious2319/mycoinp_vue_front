<template>
<div class="header">
    <h1>MyCoinP</h1>
    <button type="button" class="btn_menu" :class="{'active': aside}" @click="btnAside"><span>gnb</span></button>
    <Aside :class="{'hide': !aside}"/>

    <div v-if="$screen.width < 1200">
        <HeaderLanguage/>
        <HeaderBackUp/>
    </div>
</div>
</template>

<script>
export default {
    data () {
        return {
            aside: false,
        }
    },
    methods: {
        btnAside: function(){
            if(this.aside == false){
                this.aside = true;
            } else{
                this.aside = false;
            }
        }
    }
}
</script>

<style scoped lang="scss">
    @import "Header.scss";
</style>

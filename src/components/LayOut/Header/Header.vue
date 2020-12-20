<template>
<div class="header">
    <h1>MyCoinP</h1>
    <button type="button" class="btn_menu" :class="{'active': isAside}" @click="btnAside"><span>gnb</span></button>
    <Aside :class="{'hide': !isAside}"/>

    <div v-if="$windowWidth < 1200">
        <HeaderLanguage/>
        <HeaderBackUp/>
    </div>
</div>
<div class="mask" v-if="$windowWidth > 640 && isAside" @click="btnAside"></div>
</template>

<script>
export default {
    data () {
        return {
            isAside: false,
        }
    },
    methods: {
        btnAside: function(){
            if(this.isAside == false){
                this.isAside = true;
            } else{
                this.isAside = false;
            }
        }
    }
}
</script>

<style scoped lang="scss">
    @import "Header.scss";
</style>

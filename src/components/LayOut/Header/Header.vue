<template>
<div class="header">
    <h1>
        <a href="/">MyCoinP</a>
        <!-- <span>Portfolio Detail</span> -->
    </h1>
    <button type="button" @click="btnAside">
        <i class="fas fa-align-justify"/>
    </button>
    <!-- <button type="button">
        <i class="fas fa-arrow-left"/>
    </button> -->
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

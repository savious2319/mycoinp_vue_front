<template>
<div class="header">
    <h1>
        <a href="/" v-if="!isDetailView">MyCoinP</a>
        <span v-if="isDetailView">Portfolio Detail</span>
    </h1>
    <button type="button" v-if="!isDetailView" @click="btnAside">
        <i class="fas fa-align-justify"/>
    </button>
    <button type="button" v-if="isDetailView">
        <i class="fas fa-arrow-left"/>
    </button>
    <Aside v-if="!isDetailView" :class="{'hide': !isAside}"/>

    <div v-if="$windowWidth < 1200 && !isDetailView">
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
			isDetailView: false,
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

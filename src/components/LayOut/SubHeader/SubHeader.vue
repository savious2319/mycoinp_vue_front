<template>
<div class="header">
    <h1>{{title}}</h1>
    <button type="button" @click="MobileDetailHide">
        <i class="fas fa-arrow-left"/>
    </button>
</div>
</template>

<script>
export default {
    props: ['title'],
    data () {
        return {
        }
    },
    methods: {
        MobileDetailHide(){
            this.$emit('MobileDetailHide');
        }
    }
}
</script>

<style scoped lang="scss">
    @import "SubHeader.scss";
</style>

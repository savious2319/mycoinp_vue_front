<template>
    <aside>
        <div class="header" v-if="$screen.width < 736">
            <button type="button" @click="btnAside">닫기</button>
        </div>
        <div class="body">
            <router-link class="new" to="/">Notice</router-link>
            <router-link to="/">About Us</router-link>
            <router-link to="/">Terms of Use</router-link>
            <router-link to="/">Privacy Policy</router-link>
            <router-link to="/">Cookie Policy</router-link>
            <router-link to="/">Business proposal</router-link>
            <router-link to="/">Advertising</router-link>
            <router-link to="/">Changelog</router-link>
            <router-link to="/">기능 개선 요청</router-link>
            <router-link to="/">오류 수정 요청</router-link>
            <router-link to="/">API</router-link>
            <router-link to="/">Widget</router-link>
            <router-link to="/">FAQ</router-link>
            <router-link to="/" v-if="$screen.width < 736">PUSH_TEST</router-link>
        </div>
        <div class="footer" v-if="$screen.width < 736">
            Copyright ⓒ  MyCoinP. All Right Reserved.
        </div>
    </aside>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import "Aside.scss";
</style>

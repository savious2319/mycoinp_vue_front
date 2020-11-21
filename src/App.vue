<template>
<div id="app">
    <Header/>
    <Navigation/>
    <section>
      <router-view/>
    </section>
    <Footer v-if="$screen.width > 639" />
</div>
</template>
<script lang="ts">
import VueScreen from 'vue-screen';
Vue.use(VueScreen); 
import Vue from 'vue';
import Header from '@/components/LayOut/Header/Header.vue';
import Navigation from '@/components/LayOut/Navigation/Navigation.vue';
import Footer from '@/components/LayOut/Footer/Footer.vue';


export default {
  name: 'Home',
  components: {
    Header,
    Navigation,
    Footer
  },
}
</script>
<style scoped lang="scss">
  @import "App.scss";
</style>

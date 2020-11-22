<template>
	<div id="app">
		<header>
			<Header title="MyCoinP"/>
			<Navigation v-if="$screen.width > 639"/>
			<div class="btnSet" v-if="$screen.width > 1199">
				<HeaderLanguage/>
				<i/>
				<HeaderBackUp/>
			</div>
		</header>
		<Aside v-if="$screen.width < 639"/>
		<section>
			<router-view/>
			<Footer v-if="$screen.width > 639"/>
			<Navigation v-else/>
		</section>
	</div>
</template>
<script lang="ts">
import VueScreen from 'vue-screen';
Vue.use(VueScreen); 
import Vue from 'vue';
import Header from '@/components/LayOut/Header/Header.vue';
import HeaderLanguage from '@/components/LayOut/Header/Header-Language/Header-Language.vue';
import HeaderBackUp from '@/components/LayOut/Header/Header-BackUp/Header-BackUp.vue';
import Navigation from '@/components/LayOut/Navigation/Navigation.vue';
import Aside from '@/components/LayOut/Aside/Aside.vue';
import Footer from '@/components/LayOut/Footer/Footer.vue';


export default {
	name: 'Home',
	components: {
		Header,
		HeaderLanguage,
		HeaderBackUp,
		Navigation,
		Aside,
		Footer
	},
}
</script>
<style scoped lang="scss">
  @import "App.scss";
</style>

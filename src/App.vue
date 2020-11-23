<template>
	<div id="app">
		<header>
			<Header/>
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
export default {
}
</script>
<style scoped lang="scss">
  @import "App.scss";
</style>

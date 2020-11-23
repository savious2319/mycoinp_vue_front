<template>
  <div class="header">
    <h1>MyCoinP</h1>
    <button type="button" class="btn_menu"><span>gnb</span></button>
	<div v-if="$screen.width < 1199">
		<HeaderLanguage/>
		<HeaderBackUp/>
	</div>
  </div>
</template>

<script lang="ts">
export default {
}
</script>

<style scoped lang="scss">
  @import "Header.scss";
</style>

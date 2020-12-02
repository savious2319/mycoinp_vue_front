<template>
    <section>
        <div class="left" v-if="$screen.width > 641">
			<CryptocurrencyLeft/>
        </div>
        <div class="right" v-if="$screen.width > 641">
			<CryptocurrencyRight/>
        </div>
    </section>
</template>

<script lang="ts">
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "Cryptocurrency.scss";
</style>

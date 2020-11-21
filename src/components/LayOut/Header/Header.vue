<template>
  <header>
    <h1>MyCoinP</h1>
    <button type="button" class="btn_gnb">GNB</button>
    <button type="button" class="btn_language">language</button>
    <button type="button" class="btn_backup">backup</button>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "Header.scss";
</style>

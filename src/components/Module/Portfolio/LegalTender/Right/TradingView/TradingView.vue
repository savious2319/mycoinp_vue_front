<template>
  <div class="tradingview">
    <div class="btnSet">
      <strong>XZC/</strong>
      <label for=""><input type="radio">USD</label>
      <label for=""><input type="radio">BTC</label>
      <button class="active" type="button">D</button>
      <button type="button">W</button>
      <button type="button">M</button>
      <button class="add" type="button">add</button>
      <span>by TradingView</span>
      <button class="fullscrean" type="button">fullscrean</button>
    </div>
    <div class="chart">
      Chart
    </div>
  </div>
</template>

<script lang="ts">
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "TradingView.scss";
</style>

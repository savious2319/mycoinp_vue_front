<template>
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th><button type="button">All</button></th>
        <th>Coin</th>
        <th>Exchange</th>
        <th>Price</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2020-07-20</td>
        <td>Sell</td>
        <td>GUSD</td>
        <td>Upbit</td>
        <td><em>₫</em>123,456,78<span>K</span></td>
        <td>123,456,78<span>K</span></td>
      </tr>
      <tr>
        <td>2020-07-20</td>
        <td>Sell</td>
        <td>GUSD</td>
        <td>Upbit</td>
        <td><em>₫</em>123,456,78<span>K</span></td>
        <td>123,456,78<span>K</span></td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "byCoins.scss";
</style>

<template>
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>
          <button type="button" class="btnAll" :class="{'active': isAll}" @click="isAll = !isAll">All</button>
          <div v-if="isAll">
            <button type="button">All</button>
            <button type="button">Buy</button>
            <button type="button">Sell</button>
          </div>
        </th>
        <th>Coin</th>
        <th>Exchange</th>
        <th>Price</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr @click="MobileDetailShow">
        <td>2020-07-20</td>
        <td class="orange">Sell</td>
        <td>GUSD</td>
        <td>Upbit</td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td>123,456,78<i>K</i></td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>2020-07-20</td>
        <td class="orange">Buy</td>
        <td>GUSD</td>
        <td>Upbit</td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td>123,456,78<i>K</i></td>
      </tr>
      <tr class="not">
        <td colspan="6">
          <div class="sum">Add Your Portfolio ...</div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
export default {
  data () {
    return {
      isAll: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "byWallets.scss";
</style>

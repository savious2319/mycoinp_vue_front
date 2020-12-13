<template>
  <table>
    <thead>
      <tr>
        <th>
          <span>Date</span>
        </th>
        <th>
          <button type="button" :class="{'active': isAll}" @click="isAll = !isAll">All</button>
          <div v-if="isAll">
            <button type="button">All</button>
            <button type="button">Buy</button>
            <button type="button">Sell</button>
          </div>
        </th>
        <th>
          <p>
            <span>Coin</span>
            <span>Exchange</span>
            <span>Price</span>
            <span>Amount</span>
          </p>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <span>2020-07-20</span>
        </td>
        <td>
          <span class="rise">Sell</span>
        </td>
        <td>
          <p>
            <span>GUSD</span>
            <span>Upbit</span>
            <span><em>₫</em>123,456,78<i>K</i></span>
            <span>123,456,78<i>K</i></span>
          </p>
        </td>
      </tr>
      <tr>
        <td>
          <span>2020-07-20</span>
        </td>
        <td>
          <span class="fall">Buy</span>
        </td>
        <td>
          <p>
            <span>GUSD</span>
            <span>Upbit</span>
            <span><em>₫</em>123,456,78<i>K</i></span>
            <span>123,456,78<i>K</i></span>
          </p>
        </td>
      </tr>
      <tr>
        <td colspan="3" class="not">Add Your Portfolio ...</td>
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
  @import "@/assets/scss/byWallets.scss";
</style>

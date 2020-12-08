<template>
  <table>
    <thead>
      <tr>
        <th>
          <span>Date</span>
        </th>
        <th>
          <button type="button" class="active">All</button>
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
            <span><em>₫</em>123,456,78<abbr>K</abbr></span>
            <span>123,456,78<abbr>K</abbr></span>
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
            <span><em>₫</em>123,456,78<abbr>K</abbr></span>
            <span>123,456,78<abbr>K</abbr></span>
          </p>
        </td>
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
  @import "@/assets/scss/byDates.scss";
</style>

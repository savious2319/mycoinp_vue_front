<template>
  <article>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>
            <button type="button" class="btnAll" :class="{'active': isAll}" @click="isAll = !isAll">All</button>
            <div v-if="isAll">
              <button type="button">All</button>
              <button type="button">Deposit</button>
              <button type="button">Withdraw</button>
            </div>
          </th>
          <th>From</th>
          <th>To</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2020-07-20</td>
          <td class="flugrean">Withdraw</td>
          <td>Upbit</td>
          <td>Nonghyub</td>
          <td><em>$</em>1,456,78</td>
        </tr>
      </tbody>
    </table>
  </article>
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
  @import "History.scss";
</style>

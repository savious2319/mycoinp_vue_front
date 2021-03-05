<template>
<table>
  <thead>
    <tr>
      <th>
        <span class="thSearch">
          <button type="button" class="btnSearch">
            <i class="fas fa-search"/>
            <span>Search</span>
          </button>
          <input type="text" v-model="searchText" placeholder="Search...">
          <button type="button" class="btnClear" title="Clear" v-if="searchText.length > 0" @click="searchText = ''">
            <i class="fas fa-times"/>
            <span>Clear</span>
          </button>
        </span>
      </th>
      <th>Price</th>
      <th><em>$</em>Vol</th>
      <th><em>%</em>Share</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bookmark">
      <td>
        <dl class="col3">
          <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
          <dd>XZC</dd>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td><em>₫</em>123,456,78<i>K</i></td>
      <td><em>₫</em>123,456,78<i>K</i></td>
      <td class="fall realTime">-100<s>%</s> <button type="button" class="tdSort up">정렬</button></td>
    </tr>
    <tr>
      <td>
        <dl class="col3">
          <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
          <dd>XZC</dd>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td><em>₫</em>123,456,78<i>K</i></td>
      <td><em>₫</em>123,456,78<i>K</i></td>
      <td class="fall realTime">-100<s>%</s> <button type="button" class="tdSort up">정렬</button></td>
    </tr>
    <tr class="not">
      <td colspan="4">Add Your Portfolio ...</td>
    </tr>
  </tbody>
</table>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "ExchangeCoinList.scss";
</style>

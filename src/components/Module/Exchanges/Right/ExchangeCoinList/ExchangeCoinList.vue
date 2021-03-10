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
      <th><em>#</em>Coins</th>
      <th><em>$</em>Vol</th>
      <th>Top <em>%</em>Vol</th>
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
      <td>123</td>
      <td><em>₫</em>789K<i>K</i></td>
      <td><em>₫</em>6,789<i>K</i> <button type="button" class="tdSort" @click="isLower = !isLower" :class="{'up': isLower}">열기</button></td>
    </tr>
    <tr class="lower" v-if="isLower">
      <td></td>
      <td>123</td>
      <td><em>₫</em>789K<i>K</i></td>
      <td><em>₫</em>6,789<i>K</i> </td>
    </tr>
    <tr>
      <td>
        <dl class="col3">
          <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
          <dd>XZC</dd>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td>123</td>
      <td><em>₫</em>789K<i>K</i></td>
      <td><em>₫</em>6,789<i>K</i>  <button type="button" class="tdSort">열기</button></td>
    </tr>
  </tbody>
</table>
</template>

<script>
export default {
  data () {
		return {
      searchText: "",
      isLower: false,
		}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "ExchangeCoinList.scss";
</style>

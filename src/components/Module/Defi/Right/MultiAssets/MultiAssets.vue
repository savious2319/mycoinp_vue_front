<template>
<table>
  <thead>
    <tr>
      <th>
        <span class="thSearch">
          <button type="button" class="btnBookmark active">
            <i class="fas fa-star"></i>
            <span>bookmark</span>
          </button>
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
      <th><button type="button" class="thSort up"><em>%</em>Net</button></th>
      <th>+ APY</th>
      <th><button type="button" class="thSort up"><em>%</em>APR</button></th>
    </tr>
  </thead>
  <tbody>
    <tr class="bookmark">
      <td>
        <img src="@/assets/img/ico_coin.png" alt="">
        <strong>busd + ETH</strong>
      </td>
      <td>16.65<s>%</s></td>
      <td>+</td>
      <td>16.65<s>%</s></td>
    </tr>
    <tr>
      <td>
        <img src="@/assets/img/ico_coin.png" alt="">
        <strong>busd + ETH</strong>
      </td>
      <td>16.65<s>%</s></td>
      <td>+</td>
      <td>16.65<s>%</s></td>
    </tr>
    <tr class="bookmark">
      <td>
        <img src="@/assets/img/ico_coin.png" alt="">
        <strong>busd + ETH</strong>
      </td>
      <td>16.65<s>%</s></td>
      <td>+</td>
      <td>16.65<s>%</s></td>
    </tr>
    <tr class="bookmark">
      <td>
        <img src="@/assets/img/ico_coin.png" alt="">
        <strong>busd + ETH</strong>
      </td>
      <td>16.65<s>%</s></td>
      <td>+</td>
      <td>16.65<s>%</s></td>
    </tr>
  </tbody>
</table>
</template>

<script>
export default {
  data () {
		return {
      searchText: "",
		}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "MultiAssets.scss";
</style>

<template>
<table>
  <thead>
    <tr>
      <th>
        <span>
          <button type="button" class="btnBookmark active">
            <i class="fas fa-star"></i>
            <span>bookmark</span>
          </button>
        
          Exchange
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
        <img src="@/assets/img/ico_coin.png" alt="">
        <strong>Huobi Global</strong>
      </td>
      <td><em>₫</em>123,456,78<i>K</i></td>
      <td><em>₫</em>123,456,78<i>K</i> <span><i class="fas fa-asterisk on"></i><i class="fas fa-asterisk off"></i></span></td>
      <td class="orange realTime">-100<s>%</s> <button type="button" class="tdSort up">정렬</button></td>
    </tr>
    <tr>
      <td>
        <img src="@/assets/img/ico_coin.png" alt="">
        <strong>Huobi Global</strong>
      </td>
      <td><em>₫</em>123,456,78<i>K</i></td>
      <td><em>₫</em>123,456,78<i>K</i></td>
      <td class="orange realTime">-100<s>%</s> <button type="button" class="tdSort up">정렬</button></td>
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
  @import "BuyExchange.scss";
</style>

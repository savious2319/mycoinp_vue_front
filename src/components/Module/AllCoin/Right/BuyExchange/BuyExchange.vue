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
      <th><span>Price</span></th>
      <th>
        <span><em>%</em>Share</span>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="active">
      <td>
        <img src="@/assets/img/ico_coin.png" alt="">
        <strong>Huobi Global</strong>
      </td>
      <td><span><em>₫</em>123,456,78<i>K</i></span></td>
      <td>
        <p>
          <span><em>₫</em>1.23<i>K</i></span>
          <span class="fall realTime">-100<s>%</s></span>
          <span>
            <button type="button" class="up">정렬</button>
          </span>
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <img src="@/assets/img/ico_coin.png" alt="">
        <strong>Huobi Global</strong>
      </td>
      <td><span><em>₫</em>123,456,78<i>K</i></span></td>
      <td>
        <p>
          <span><em>₫</em>1.23<i>K</i></span>
          <span class="fall realTime">-100<s>%</s></span>
          <span>
            <button type="button" class="up">정렬</button>
          </span>
        </p>
      </td>
    </tr>
    <tr>
      <td colspan="2" class="not">Add Your Portfolio ...</td>
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

<template>
<table>
  <thead>
    <tr>
      <th>
        <span>
          <button type="button" class="btnBookmark active">
            <i class="fas fa-asterisk"></i>
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
        <strong class="grean">Hi</strong>
        <strong>Huobi Global</strong>
      </td>
      <td><em>₫</em>123,456,78<i>K</i> <span><i class="fas fa-asterisk on"></i><i class="fas fa-asterisk off"></i></span></td>
      <td><em>₫</em>123,456,78<i>K</i> <span><i class="fas fa-asterisk on"></i><i class="fas fa-asterisk off"></i></span></td>
      <td class="orange realTime">-100<s>%</s> <button type="button" class="tdSort up">정렬</button></td>
    </tr>
    <tr>
      <td>
        <strong class="orange">Lo</strong>
        <strong>Huobi Global</strong>
      </td>
      <td><em>₫</em>123,456,78<i>K</i></td>
      <td><em>₫</em>123,456,78<i>K</i></td>
      <td class="orange realTime">-100<s>%</s> <button type="button" class="tdSort up">정렬</button></td>
    </tr>
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
  <ul>
    <li><i class="fas fa-asterisk off"></i> Excluded</li>
    <li><i class="fas fa-asterisk on"></i> Excluded for abnormal price</li>
    <li><img src="@/assets/img/ico_info.png" alt=""> As BitMex is a Futures exchange, it is excluded from the MCP's Global Price calculation.</li>
    <li><img src="@/assets/img/ico_info.png" alt=""> The price shown, even if there have been no trades inthe last 24 hours, represents the most recently tradedprice 24 hours ago.</li>
  </ul>
</template>

<script>
export default {
  data () {
		return {
      isMarketcap: false,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "BuyExchange.scss";
</style>

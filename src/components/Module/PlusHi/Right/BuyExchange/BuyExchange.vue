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
        <strong class="rise">Hi</strong>
        <strong>Huobi Global</strong>
      </td>
      <td><em>₫</em>123,456,78<i>K</i> <i class="fas fa-star y"></i><i class="fas fa-star g"></i></td>
      <td>
        <span class="pointer" @click="isMarketcap = !isMarketcap">
          <em>₫</em>123,456,78<i>K</i>
        </span>
        <div class="marketcap" v-if="isMarketcap">
          <dl>
            <dt>Max:</dt>
            <dd>21,000,000</dd>
            <dt>Total:</dt>
            <dd>18,559,743</dd>
            <dt>Circulation:</dt>
            <dd>18,599,743</dd>
          </dl>
          <p>
            <span>Source</span>
            <a href="#none">https://blockchain.info</a>
          </p>
        </div>
      </td>
      <td class="fall realTime">-100<s>%</s> <button type="button" class="tdSort up">정렬</button></td>
    </tr>
    <tr>
      <td>
        <strong class="fall">Lo</strong>
        <strong>Huobi Global</strong>
      </td>
      <td><em>₫</em>123,456,78<i>K</i></td>
      <td><em>₫</em>123,456,78<i>K</i></td>
      <td class="fall realTime">-100<s>%</s> <button type="button" class="tdSort up">정렬</button></td>
    </tr>
    <tr class="bookmark">
      <td>
        <img src="@/assets/img/ico_coin.png" alt="">
        <strong>Huobi Global</strong>
      </td>
      <td><em>₫</em>123,456,78<i>K</i></td>
      <td>
        <span class="pointer" @click="isMarketcap = !isMarketcap">
          <em>₫</em>123,456,78<i>K</i>
        </span>
        <div class="marketcap" v-if="isMarketcap">
          <dl>
            <dt>Max:</dt>
            <dd>21,000,000</dd>
            <dt>Total:</dt>
            <dd>18,559,743</dd>
            <dt>Circulation:</dt>
            <dd>18,599,743</dd>
          </dl>
          <p>
            <span>Source</span>
            <a href="#none">https://blockchain.info</a>
          </p>
        </div>
      </td>
      <td class="fall realTime">-100<s>%</s> <button type="button" class="tdSort up">정렬</button></td>
    </tr>
    <tr>
      <td>
        <img src="@/assets/img/ico_coin.png" alt="">
        <strong>Huobi Global</strong>
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
  <ul>
    <li><i class="fas fa-star"></i> Excluded</li>
    <li><i class="fas fa-star"></i> Excluded for abnormal price</li>
    <li>As BitMex is a Futures exchange, it is excluded from the MCP's Global Price calculation.</li>
    <li>The price shown, even if there have been no trades inthe last 24 hours, represents the most recently tradedprice 24 hours ago.</li>
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

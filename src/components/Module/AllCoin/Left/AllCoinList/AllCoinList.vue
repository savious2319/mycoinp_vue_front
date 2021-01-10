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
          <button type="button" class="btnSearch">
            <i class="fas fa-search"/>
            <span>Search</span>
          </button>
          <input type="text" placeholder="Search...">
        </span>
      </th>
      <th>
        <p>
          <span>Price</span>
          <button type="button" class="up"><em>%</em>Chg</button>
          <button type="button" class="down">Vol</button>
          <button type="button">M.Cap</button>
        </p>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="active">
      <td>
        <dl>
          <dt>
            <button type="button" class="btnBookmark active">
              <i class="fas fa-star"></i>
              <span>bookmark</span>
            </button>
          </dt>
          <dd>XZC</dd>
          <dt>4</dt>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td>
        <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        <p>
          <span><em>₫</em>123,456,78<i>K</i></span>
          <span class="fall realTime">-10000<s>%</s></span>
          <span><em>₫</em>123,456,78<i>K</i></span>
          <span class="rise">+10000<s>%</s></span>
        </p>
        <button type="button" class="up" v-if="$windowWidth < 841">정렬</button>
      </td>
    </tr>
    <tr>
      <td>
        <dl>
          <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
          <dd>XZC</dd>
          <dt>4</dt>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td>
        <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        <p>
          <span><em>₫</em>123,456,78<i>K</i></span>
          <span class="fall realTime">-10000<s>%</s></span>
          <span><em>₫</em>123,456,78<i>K</i></span>
          <span class="rise">+10000<s>%</s></span>
        </p>
        <button type="button" v-if="$windowWidth < 841">정렬</button>
      </td>
    </tr>
    <tr>
      <td colspan="2" class="not">Add Your Portfolio ...</td>
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
  @import "AllCoinList.scss";
</style>

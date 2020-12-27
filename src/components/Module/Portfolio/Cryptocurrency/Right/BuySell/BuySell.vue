<template>
  <div class="buySell">
    <ul class="tabs">
      <li>
        <button type="button" class="active">Buy [ 3/15 ]</button>
        <button type="button" class="icoReg">Registration</button>
      </li>
      <li>
        <button type="button">Sell [ 3 ]</button>
      </li>
      <li>
        <button type="button">History</button>
      </li>
    </ul>
    <div>
      <span>2020-03-24</span>
      <span>Wallet name</span>
      <button type="button"><i class="fas fa-pencil-alt"/><span>Memo</span></button>
      <button type="button"><i class="fas fa-trash-alt"/><span>Delete</span></button>
    </div>
    <article>
      <dl>
          <dt>Buy Value</dt>
          <dd>
              <em>₫</em>
              <strong>123,456,789</strong>
              <span>K</span>
          </dd>
      </dl>
      <dl>
          <dt>Buy Price</dt>
          <dd>
              <em>₫</em>
              <strong class="fall">123,456,789</strong>
              <span>K</span>
          </dd>
      </dl>
      <dl>
          <dt>Amount</dt>
          <dd>
              <strong class="fall">-10000<em>%</em></strong>
          </dd>
      </dl>
      <dl>
          <dt>Est. Value</dt>
          <dd>
              <em>₫</em>
              <strong>123,456,789</strong>
              <span>K</span>
          </dd>
      </dl>
      <dl>
          <dt>Buy Exchange</dt>
          <dd>
              <em>₫</em>
              <strong class="fall">123,456,789</strong>
              <span>K</span>
          </dd>
      </dl>
      <dl>
          <dt>Hold Amount</dt>
          <dd>
              <strong class="fall">-10000<em>%</em></strong>
          </dd>
      </dl>
      <dl>
          <dt>Profit & Loss</dt>
          <dd>
              <em>₫</em>
              <strong>123,456,789</strong>
              <span>K</span>
          </dd>
      </dl>
      <dl>
          <dt><em>%</em>Profit</dt>
          <dd>
              <em>₫</em>
              <strong class="fall">123,456,789</strong>
              <span>K</span>
          </dd>
      </dl>
      <span>
        <button type="button">Sell [ 0 ] +</button>
      </span>
    </article>
  </div>
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
  @import "BuySell.scss";
</style>

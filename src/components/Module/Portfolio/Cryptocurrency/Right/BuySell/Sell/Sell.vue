<template>
    <p>
      <span>2020-03-24</span>
      <button type="button"><i class="fas fa-pencil-alt"/><span>Memo</span></button>
      <button type="button"><i class="fas fa-trash-alt"/><span>Delete</span></button>
    </p>

    <article>
        <dl>
            <dt>Sell Value</dt>
            <dd>
                <em>₫</em>
                <strong>123,456,789</strong>
                <span>K</span>
            </dd>
        </dl>
        <dl>
            <dt>Sell Price</dt>
            <dd>
                <em>₫</em>
                <strong class="fall">123,456,789</strong>
                <span>K</span>
            </dd>
        </dl>
        <dl>
            <dt>Sell Amount</dt>
            <dd>
                <strong class="fall">-10000</strong>
                <span>K</span>
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
            <dt><em>%</em> Profit</dt>
            <dd>
                <strong class="fall">123,456,789<em>%</em></strong>
            </dd>
        </dl>
        <dl>
            <dt>Sell Exchange</dt>
            <dd>
                <strong class="fall">-10000</strong>
                <span>K</span>
            </dd>
        </dl>
    </article>

</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "Sell.scss";
</style>

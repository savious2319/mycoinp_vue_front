<template>
    <div class="PortfolioDetail">
        <div class="coinName">
            <dl class="col3">
                <dt>
                    <button type="button" class="btnBookmark">
                        <i class="fas fa-star"></i>
                        <span>bookmark</span>
                    </button>           
                    <img src="@/assets/img/ico_coin.png" alt="">
                </dt>
                <dd>XZC</dd>
                <dd>ZCoin</dd>
            </dl>
        </div>
        <ul>
            <li><a href="https://bitcoin.org" target="_blank">https://bitcoin.org</a></li>
            <li>
                <span><em>₫</em>123,456,78</span>
                <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
            </li>
            <li>
                <span>+0.12</span>
                <em>%</em>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "CoinDetail.scss";
</style>

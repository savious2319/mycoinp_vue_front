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
                    <img src="@/assets/img/ico_coin.png" alt="">
                </dt>
                <dd>XZC</dd>
                <dd>ZCoin</dd>
            </dl>
        </div>
        <p><a href="https://bitcoin.org" target="_blank">https://bitcoin.org</a></p>
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

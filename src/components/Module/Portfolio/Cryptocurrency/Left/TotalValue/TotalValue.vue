<template>
    <div class="TotalValue">
        <div>
            <h2>Total Value</h2>
            <p>
                <em>₫</em>
                <strong class="rise">175,580,000,000</strong>
                <span>₿0.00000000.72</span>
            </p>
        </div>
        <article>
            <button type="button" :class="{'on': isMore}" @click="btnMore">More</button>
            <dl>
                <dt>Buy Value</dt>
                <dd>
                    <em>₫</em>
                    <strong>123,456,789</strong>
                    <span>K</span>
                </dd>
            </dl>
            <dl>
                <dt>Profit & Loss</dt>
                <dd>
                    <em>₫</em>
                    <strong class="fall">123,456,789</strong>
                    <span>K</span>
                </dd>
            </dl>
            <dl>
                <dt><em>%</em>Profit </dt>
                <dd>
                    <strong class="fall">-10000<em>%</em></strong>
                </dd>
            </dl>
            <dl v-if="isMore">
                <dt>Net Invest</dt>
                <dd>
                    <em>₫</em>
                    <strong>123,456,789</strong>
                    <span>K</span>
                </dd>
            </dl>
            <dl v-if="isMore">
                <dt>Cumulative Gain</dt>
                <dd>
                    <em>₫</em>
                    <strong class="fall">123,456,789</strong>
                    <span>K</span>
                </dd>
            </dl>
            <dl v-if="isMore">
                <dt>Realized Gain</dt>
                <dd>
                    <strong class="fall">-10000<em>%</em></strong>
                </dd>
            </dl>
        </article>
    </div>
</template>

<script>
export default {
    data () {
		return {
            isMore: false
        }
    },
    methods: {
		btnMore: function(){
            if(this.isMore == false){
                this.isMore = true;
            } else{
                this.isMore = false;
            }
        },

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import "TotalValue.scss";
</style>

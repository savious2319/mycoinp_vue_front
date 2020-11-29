<template>
    <span class="btn_gasprice">
        <button type="button" @click="btnLayerGas">ETH Gas <span>155</span> Gwei</button>
        <div class="layer_gas" v-if="isLayerGas">
            <p class="tit">Eth Das Price Alerts Setting</p>
            <p class="alert">Alert me when ETH Gas Price crosses</p>
            <ol class="body">
                <li>
                    <strong>Up Price</strong>
                    <div>
                        <p>
                            <span>2<em>nd</em> level</span>
                            <input type="text" placeholder="Setting gas price">
                            <span>Gwei</span>
                        </p>
                        <p>
                            <span>1<em>st</em> level</span>
                            <input type="text" placeholder="Setting gas price">
                            <span>Gwei</span>
                        </p>
                    </div>
                </li>
                <li>
                    <strong>Current Price </strong>
                    <p>
                        <strong>40</strong>
                        <span>Gwei</span>
                    </p>
                </li>
                <li>
                    <strong>Down Price</strong>
                    <div>
                        <p>
                            <span>2<em>nd</em> level</span>
                            <input type="text" placeholder="Setting gas price">
                            <span>Gwei</span>
                        </p>
                        <p>
                            <span>1<em>st</em> level</span>
                            <input type="text" placeholder="Setting gas price">
                            <span>Gwei</span>
                        </p>
                    </div>
                </li>
            </ol>
            <div class="btnSet">
                <button type="button">Cancel</button>
                <button type="button">Save Alert</button>
            </div>
        </div>
        <div class="mask" v-if="isLayerGas" @click="btnLayerGas"></div>
    </span>
</template>

<script>
export default {
	data () {
		return {
			isLayerGas: false,
		}
	},
	methods: {
		btnLayerGas: function(){
            if(this.isLayerGas == false){
                this.isLayerGas = true;
            } else{
                this.isLayerGas = false;
            }
        }
    }

}
</script>

<style scoped lang="scss">
	@import "Navigation-GasPrice.scss";
</style>

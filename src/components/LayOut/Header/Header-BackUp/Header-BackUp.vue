<template>
<button type="button" class="btn" @click="btnLayerBackup">Backup</button>
<div class="layerPopup" v-if="isLayerBackup">
    <div class="tab_btn">
        <button type="button" :class="{'on': article.isMyCom}" @click="btnMyCom">Import</button>
        <button type="button" :class="{'on': article.isGoogle}" @click="btnGoogle">Backup</button>
    </div>
    <article v-if="article.isMyCom">
        <p>Choose the location of the portfolio file data.</p>
        <div>
            <button type="button">Current device</button>
            <button type="button">Current device</button>
        </div>
    </article>
    <article v-if="article.isGoogle">
        <p>Choose the location <span>to send</span><br>the portfolio file data.</p>
        <div>
            <button type="button">Current device</button>
            <button type="button">Current device</button>
        </div>
    </article>
</div>
<div class="mask" v-if="isLayerBackup" @click="btnLayerBackup"></div>
</template>

<script>
export default {
    data () {
		return {
            isLayerBackup: false,
			article:{
				isMyCom: true,
				isGoogle: false,
			},
        }
    },
    methods: {
        btnLayerBackup: function(){
            if(this.isLayerBackup == false){
                this.isLayerBackup = true;
            } else{
                this.isLayerBackup = false;
            }
        },
		btnMyCom: function(){
			this.article.isMyCom = true;
			this.article.isGoogle = false;
        },
        btnGoogle: function(){
			this.article.isMyCom = false;
			this.article.isGoogle = true;
        },
    }

}
</script>

<style scoped lang="scss">
	@import "Header-BackUp.scss";
</style>

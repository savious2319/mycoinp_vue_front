<template>
	<div class="navigation">
		<div>
			<a v-for="(isLink, idx) in isLinks" :key="idx" @click="btnRouter(isLink.path)" :class="{'active': isLink.active}">
				<span v-if="$windowWidth < 640 && isLink.path === 'plus'"><i class="fas fa-ellipsis-v"/></span>
				<span v-if="$windowWidth >= 640 && isLink.path === 'plus'"><i class="fas fa-ellipsis-h"/></span>
				<span v-if="$windowWidth > 1240 && isLink.path !== 'plus'"><i class="fas" :class="isLink.icon"/></span>
				<span v-if="isLink.path !== 'plus'">{{isLink.name}}</span>
				<span v-if="isLink.path === 'plus' && $windowWidth > 640">{{isLink.name}}</span>
				<span v-if="isLink.path !== 'plus'">[25]</span>
				<span v-if="$windowWidth > 1240 && isLink.path === 'plus'"><i class="fas fa-angle-down"/></span>
			</a>
			<div v-if="isPlus">
				<router-link to="/plus/hilo">
					<i class="fas fa-exchange-alt"/>
					<span>Hi-Lo</span>
				</router-link>
				<router-link to="/plus/Abnormal-Price">
					<i class="fas fa-asterisk"/>
					<span>Abnormal Price</span>
				</router-link>
				<router-link to="/plus/World-Map">
					<i class="fas fa-map-marked-alt"/>
					<span>World Map</span>
				</router-link>
				<router-link to="/plus/Expert">
					<i class="fas fa-user-tie"/>
					<span>Expert</span>
				</router-link>
				<router-link to="/plus/Promotion">
					<span>Promotion</span>
				</router-link>
			</div>
		</div>
		<NavigationGasPrice v-if="$windowWidth >= 640"/>
	</div>
</template>

<script>
export default {
	data () {
        return {
            isPlus: false,
			isLinks: [
				{
					name : 'Portfolio',
					path : '/portfolio/legaltender',
					icon : 'fa-user-friends',
					active : false,
				},
				{
					name : 'All Coin',
					path : '/allcoin',
					icon : 'fa-coins',
					active : false,
				},
				{
					name : 'Exchanges',
					path : '/exchanges',
					icon : 'fa-exchange-alt',
					active : false,
				},
				{
					name : 'Defi',
					path : '/defi',
					icon : 'fa-landmark',
					active : false,
				},
				{
					name : '++Plus',
					path : 'plus',
					icon : 'fa-user-friends',
					active : false,
				},
			]
        }
    },
	mounted(){
		const arg = location.pathname;
		Object.keys(this.isLinks).forEach(index => {
			const target = this.isLinks[index];
			if(arg === target.path){
				target.active = true;
			} else{
				target.active = false;
			}
		});			
	},
	methods: {
		btnRouter: function(arg){
			Object.keys(this.isLinks).forEach(index => {
				const target = this.isLinks[index];
				const plus = 'plus';
				if(arg === target.path && arg === plus){
					target.active = !target.active;
					this.isPlus = target.active;
				} 
				else if(arg !== plus && arg === target.path){
					target.active = true;
					this.$router.push({ path: arg });
					this.isPlus = false;
				} 
				else if(arg !== target.path){
					target.active = false;
					this.isPlus = false;
				}
			});			
		},
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "Navigation.scss";
</style>

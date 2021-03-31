<template>
    <aside>
        <div class="header" v-if="$windowWidth < 640">
            <button type="button" @click="btnAside">닫기</button>
        </div>
        <div class="body">
            <a v-for="(isLink, idx) in isLinks" :key="idx" @click="btnRouter(isLink.path)">
                {{isLink.name}}
            </a>
            <router-link to="/" v-if="$windowWidth < 640">PUSH_TEST</router-link>
        </div>
        <div class="footer" v-if="$windowWidth < 640">
            Copyright ⓒ  MyCoinP. All Right Reserved.
        </div>
    </aside>
</template>

<script>
export default {
	data () {
        return {
			isLinks: [
				{
					name : 'Notice',
					path : '/notice/list',
				},
				{
					name : 'About Us',
					path : '',
				},
				{
					name : 'Terms of Use',
					path : '',
				},
				{
					name : 'Privacy Policy',
					path : '',
				},
				{
					name : 'Cookie Policy',
					path : '',
				},
				{
					name : 'Business proposal',
					path : '',
				},
				{
					name : 'Advertising',
					path : '',
				},
				{
					name : 'Changelog',
					path : '',
				},
				{
					name : '기능 개선 요청',
					path : '',
				},
				{
					name : '오류 수정 요청',
					path : '',
				},
				{
					name : 'API',
					path : '',
				},
				{
					name : 'Widget',
					path : '',
				},
				{
					name : 'FAQ',
					path : 'faq',
				},
				// {
				// 	name : 'PUSH_TEST',
				// 	path : '',
				// 	active : false,
				// },
			]
        }
    },
	methods: {
		btnRouter: function(arg){
            this.$router.push({ path: arg });
            this.$parent.isAside = false;
		},
        btnAside: function(){
            if(this.$parent.isAside == false){
                this.$parent.isAside = true;
            } else{
                this.$parent.isAside = false;
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import "Aside.scss";
</style>

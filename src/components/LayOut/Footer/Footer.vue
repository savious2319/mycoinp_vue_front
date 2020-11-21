<template>
  <footer>
    <ul>
		<li><a href="#">About us</a></li>
		<li><a href="#">Terms of Use</a></li>
		<li><a href="#">Privacy Policy</a></li>
		<li><a href="#">Disclaimer</a></li>
		<li><a href="#">Bussiness Alliance</a></li>
		<li><a href="#">Advertising</a></li>
	</ul>
    <p>Copyright ⓒMyCoinP. All Right Reserved.</p>
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Footer extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "Footer.scss";
</style>

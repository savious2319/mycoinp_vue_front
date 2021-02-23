<template>
  <section id="scrollTop">
    <ul class="location">
      <li>MyCoinP</li>
      <li>FAQ</li>
    </ul>
    <h2>FAQ</h2>

    <ol class="list">
      <li>
        <h3 :class="{'active': faqList.item1}" @click="btnBy('item1')">
          <s>Q</s>
          <span>회원가입이 필요없나요?</span> 
          <i class="fas fa-angle-down"/>
        </h3>
        <article v-if="faqList.item1">
          <s>A</s>
          <div>
            7개 거래소의 시세중에서 최고가와 최저가를 제외한 5개 거래소의 평균가격을 대표가격으로 산정합니다.
            7개 거래소 미만인 경우에는 당일 거래가 발생한 거래소의 시세들의 모두 반영하여 대표가격을 산출합니다. 
          </div>
        </article>
      </li>
      <li>
        <h3 :class="{'active': faqList.item2}" @click="btnBy('item2')">
          <s>Q</s>
          <span>회원가입이 필요없나요?</span> 
          <i class="fas fa-angle-down"/>
        </h3>
        <article v-if="faqList.item2">
          <s>A</s>
          <div>
            7개 거래소의 시세중에서 최고가와 최저가를 제외한 5개 거래소의 평균가격을 대표가격으로 산정합니다.
            7개 거래소 미만인 경우에는 당일 거래가 발생한 거래소의 시세들의 모두 반영하여 대표가격을 산출합니다. 
          </div>
        </article>
      </li>
      <li>
        <h3 :class="{'active': faqList.item3}" @click="btnBy('item3')">
          <s>Q</s>
          <span>회원가입이 필요없나요?</span> 
          <i class="fas fa-angle-down"/>
        </h3>
        <article v-if="faqList.item3">
          <s>A</s>
          <div>
            7개 거래소의 시세중에서 최고가와 최저가를 제외한 5개 거래소의 평균가격을 대표가격으로 산정합니다.
            7개 거래소 미만인 경우에는 당일 거래가 발생한 거래소의 시세들의 모두 반영하여 대표가격을 산출합니다. 
          </div>
        </article>
      </li>
    </ol>

    <Pagenation/>
  </section>
  <BtnTopFull v-if="!container.scrollDown"/>
</template>

<script>
export default {
  props : ['container'],
  data () {
		return {
      faqList:{
				item1: true,
				item2: false,
				item3: false
			},
    }
  },
  methods: {
    btnBy: function(arg){
      Object.keys(this.faqList).forEach(key => {
        if(key == arg){
          this.faqList[key] = true;
        } else{
          this.faqList[key] = false;
        }
      });
    },
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "Section.scss";
</style>

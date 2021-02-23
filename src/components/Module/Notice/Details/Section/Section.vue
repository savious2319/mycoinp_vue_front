<template>
  <section id="scrollTop">
    <ul class="location">
      <li>MyCoinP</li>
      <li>Notice</li>
    </ul>
    <div class="searchSet">
      <span>
        <button type="button" class="btnSearch" title="Search">Search</button>
        <input type="text" placeholder="Search...">
        <button type="button" class="btnClear" title="Search">Clear</button>
      </span>
    </div>

    <div class="titSet">
      <h2>Hotbit’s Announcement Regarding The Maintenance Of Its Official Website At 06:00 UTC, November 11th, 2020</h2>
      <span>2021-01-12 15:44 (UTC)</span>
    </div>

    <article>
        Dear users,<br>
        On October 28th 2020 we opened our MyCoinP officially.<br><br>

        Thank you ;)<br>
        MCP Team
    </article>
    <router-link to="/notice/list" class="btnReturn">
      <i class="fas fa-angle-left"/>
      <span>Return</span>
    </router-link>
  </section>
  <BtnTopFull v-if="!container.scrollDown"/>
</template>

<script>
export default {
    props : ['container'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "Section.scss";
</style>

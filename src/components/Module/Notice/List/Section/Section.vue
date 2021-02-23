<template>
  <section id="scrollTop">
    <ul class="location">
      <li>MyCoinP</li>
      <li>Notice</li>
    </ul>
    <div class="titSet">
      <h2>Notice</h2>
      <span>
        <button type="button" class="btnSearch" title="Search">Search</button>
        <input type="text" placeholder="Search...">
        <button type="button" class="btnClear" title="Search">Clear</button>
      </span>
    </div>

    <ol class="list">
      <li>
        <a href="#none">
          <p><strong>Announcement</strong> on new listing coins </p>
          <span>2021-01-12 15:44 (UTC)</span>
        </a>
      </li>
      <li>
        <a href="#none">
          <p>Announcement  how to Conduct Mainnet DOT to Hotbit by Using Math Wallet</p>
          <span>2021-01-12 15:44 (UTC)</span>
        </a>
      </li>
      <li>
        <a href="#none">
          <p><i>New</i> Announcement on new listing coins </p>
          <span>2021-01-12 15:44 (UTC)</span>
        </a>
      </li>
      <li>
        <a href="#none">
          <p>Announcement on new listing coins </p>
          <span>2021-01-12 15:44 (UTC)</span>
        </a>
      </li>
      <li>
        <a href="#none">
          <p>Announcement on new listing coins </p>
          <span>2021-01-12 15:44 (UTC)</span>
        </a>
      </li>
      <li>
        <a href="#none">
          <p>Announcement on new listing coins </p>
          <span>2021-01-12 15:44 (UTC)</span>
        </a>
      </li>
      <li>
        <a href="#none">
          <p>Announcement on new listing coins </p>
          <span>2021-01-12 15:44 (UTC)</span>
        </a>
      </li>
      <li>
        <a href="#none">
          <p>Announcement on new listing coins </p>
          <span>2021-01-12 15:44 (UTC)</span>
        </a>
      </li>
      <li>
        <a href="#none">
          <p>Announcement on new listing coins </p>
          <span>2021-01-12 15:44 (UTC)</span>
        </a>
      </li>
      <li>
        <a href="#none">
          <p>Announcement on new listing coins </p>
          <span>2021-01-12 15:44 (UTC)</span>
        </a>
      </li>
      <li>
        <a href="#none">
          <p>Announcement on new listing coins </p>
          <span>2021-01-12 15:44 (UTC)</span>
        </a>
      </li>
      <li>
        <a href="#none">
          <p>Announcement on new listing coins </p>
          <span>2021-01-12 15:44 (UTC)</span>
        </a>
      </li>
      <li>
        <a href="#none">
          <p>Announcement on new listing coins </p>
          <span>2021-01-12 15:44 (UTC)</span>
        </a>
      </li>
      <li>
        <a href="#none">
          <p>Announcement on new listing coins </p>
          <span>2021-01-12 15:44 (UTC)</span>
        </a>
      </li>
      <li>
        <a href="#none">
          <p>Announcement on new listing coins </p>
          <span>2021-01-12 15:44 (UTC)</span>
        </a>
      </li>
      <li>
        <a href="#none">
          <p>Announcement on new listing coins </p>
          <span>2021-01-12 15:44 (UTC)</span>
        </a>
      </li>
      <li>
        <a href="#none">
          <p>Announcement on new listing coins </p>
          <span>2021-01-12 15:44 (UTC)</span>
        </a>
      </li>
      <li>
        <a href="#none">
          <p>Announcement on new listing coins </p>
          <span>2021-01-12 15:44 (UTC)</span>
        </a>
      </li>
      <li>
        <a href="#none">
          <p>Announcement on new listing coins </p>
          <span>2021-01-12 15:44 (UTC)</span>
        </a>
      </li>
      <li>
        <a href="#none">
          <p>Announcement on new listing coins </p>
          <span>2021-01-12 15:44 (UTC)</span>
        </a>
      </li>
      <li>
        <a href="#none">
          <p>Announcement on new listing coins </p>
          <span>2021-01-12 15:44 (UTC)</span>
        </a>
      </li>
    </ol>

    <Pagenation/>
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

<template>
<table>
  <thead>
    <tr>
      <th>
        <span class="thSearch">
          <button type="button" class="btnBookmark active">
            <i class="fas fa-star"></i>
            <span>bookmark</span>
          </button>
          <button type="button" class="btnSearch">
            <i class="fas fa-search"/>
            <span>Search</span>
          </button>
          <input type="text" v-model="searchText" placeholder="Search...">
          <button type="button" class="btnClear" title="Clear" v-if="searchText.length > 0" @click="searchText = ''">
            <i class="fas fa-times"/>
            <span>Clear</span>
          </button>
        </span>
      </th>
      <th><button type="button" class="thSort up"><em>%</em>APY</button></th>
      <th><button type="button" class="thSort up"><em>%</em>APR</button></th>
    </tr>
  </thead>
  <tbody>
    <tr class="hi">
      <td>
        <dl class="col3">
          <dt><b class="grean">Hi</b></dt>
          <dd>XZC</dd>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
    </tr>
    <tr class="lo">
      <td>
        <dl class="col3">
          <dt><b class="orange">Lo</b></dt>
          <dd>XZC</dd>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
    </tr>
    <tr class="bookmark">
      <td>
        <dl class="col3">
          <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
          <dd>XZC</dd>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <dl class="col3">
          <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
          <dd>XZC</dd>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
    </tr>
    <tr class="bookmark">
      <td>
        <dl class="col3">
          <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
          <dd>XZC</dd>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <dl class="col3">
          <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
          <dd>XZC</dd>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
    </tr>
    <tr class="bookmark">
      <td>
        <dl class="col3">
          <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
          <dd>XZC</dd>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <dl class="col3">
          <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
          <dd>XZC</dd>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
    </tr>
    <tr class="bookmark">
      <td>
        <dl class="col3">
          <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
          <dd>XZC</dd>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <dl class="col3">
          <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
          <dd>XZC</dd>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
    </tr>
    <tr class="bookmark">
      <td>
        <dl class="col3">
          <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
          <dd>XZC</dd>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <dl class="col3">
          <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
          <dd>XZC</dd>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
    </tr>
    <tr class="bookmark">
      <td>
        <dl class="col3">
          <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
          <dd>XZC</dd>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <dl class="col3">
          <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
          <dd>XZC</dd>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
    </tr>
    <tr class="bookmark">
      <td>
        <dl class="col3">
          <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
          <dd>XZC</dd>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <dl class="col3">
          <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
          <dd>XZC</dd>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
    </tr>
    <tr class="bookmark">
      <td>
        <dl class="col3">
          <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
          <dd>XZC</dd>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <dl class="col3">
          <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
          <dd>XZC</dd>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
    </tr>
    <tr class="bookmark">
      <td>
        <dl class="col3">
          <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
          <dd>XZC</dd>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <dl class="col3">
          <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
          <dd>XZC</dd>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
    </tr>
    <tr class="bookmark">
      <td>
        <dl class="col3">
          <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
          <dd>XZC</dd>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <dl class="col3">
          <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
          <dd>XZC</dd>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
    </tr>
    <tr class="bookmark">
      <td>
        <dl class="col3">
          <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
          <dd>XZC</dd>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <dl class="col3">
          <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
          <dd>XZC</dd>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
    </tr>
    <tr class="bookmark">
      <td>
        <dl class="col3">
          <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
          <dd>XZC</dd>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <dl class="col3">
          <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
          <dd>XZC</dd>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
    </tr>
    <tr class="bookmark">
      <td>
        <dl class="col3">
          <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
          <dd>XZC</dd>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <dl class="col3">
          <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
          <dd>XZC</dd>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
    </tr>
    <tr class="bookmark">
      <td>
        <dl class="col3">
          <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
          <dd>XZC</dd>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <dl class="col3">
          <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
          <dd>XZC</dd>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
    </tr>
    <tr class="bookmark">
      <td>
        <dl class="col3">
          <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
          <dd>XZC</dd>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <dl class="col3">
          <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
          <dd>XZC</dd>
          <dd>ZCoin</dd>
        </dl>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
      <td>
        <div>
          <img src="@/assets/img/ico_coin.png" alt="">
          456<s>%</s>
        </div>
        <div>
          + <img src="@/assets/img/ico_coin.png" alt=""> 456<s>%</s>
        </div>
      </td>
    </tr>
  </tbody>
</table>
</template>

<script>
export default {
  data () {
		return {
      searchText: "",
		}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "SingleAssets.scss";
</style>

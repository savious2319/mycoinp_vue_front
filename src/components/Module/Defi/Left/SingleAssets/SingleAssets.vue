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
          <input type="text" placeholder="Search...">
        </span>
      </th>
      <th><button type="button" class="thSort up"><em>%</em>APY</button></th>
      <th><button type="button" class="thSort up"><em>%</em>APR</button></th>
    </tr>
  </thead>
  <tbody>
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
    <tr @click="MobileDetailShow">
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
    <tr @click="MobileDetailShow">
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
    <tr @click="MobileDetailShow">
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
    <tr @click="MobileDetailShow">
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
    <tr @click="MobileDetailShow">
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
    <tr @click="MobileDetailShow">
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
    <tr @click="MobileDetailShow">
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
    <tr @click="MobileDetailShow">
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
    <tr @click="MobileDetailShow">
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
    <tr @click="MobileDetailShow">
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
    <tr @click="MobileDetailShow">
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
    <tr @click="MobileDetailShow">
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
    <tr @click="MobileDetailShow">
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
    <tr @click="MobileDetailShow">
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
    <tr @click="MobileDetailShow">
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
    <tr @click="MobileDetailShow">
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
    <tr class="not">
      <td colspan="3">Add Your Portfolio ...</td>
    </tr>
  </tbody>
</table>

  <!-- 모바일 상세 페이지 Start -->
  <div class="mobileDetail" v-if="isMobile.wrap">
      <SubHeader title="Defi Detail" @MobileDetailHide="MobileDetailHide"/>
      <div id="contents" v-on:scroll.passive="handleScrollMobile">
          <DefiRightSingleAssets v-bind:container="isMobile"/>
      </div>
  </div>
  <!-- 모바일 상세 페이지 End -->

</template>

<script>
const OFFSET = 60;
export default {
  data () {
		return {
      isMobile : {
          wrap: false,
          scrollDown: true,
          lastScrollPosition: 0,
      },
		}
	},
  methods: {
    MobileDetailShow: function(){
      if(this.$windowWidth < 640){
        this.isMobile.wrap = !this.isMobile.wrap;
      }
    },
    MobileDetailHide: function() {
        this.isMobile.wrap = !this.isMobile.wrap;
    },
    handleScrollMobile: function(e) {
        if (e.target.scrollTop < 0) {
            return
        }
        if (Math.abs(e.target.scrollTop - this.isMobile.lastScrollPosition) < OFFSET) {
            return
        }
        this.isMobile.scrollDown = e.target.scrollTop < this.isMobile.lastScrollPosition
        this.isMobile.lastScrollPosition = e.target.scrollTop
    },
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "SingleAssets.scss";
</style>

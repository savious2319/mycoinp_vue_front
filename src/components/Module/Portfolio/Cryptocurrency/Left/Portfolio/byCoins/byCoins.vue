<template>
  <table>
    <thead>
      <tr>
        <th>
          <span class="thSearch">
            <button type="button" class="btnSearch" title="Search">
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
        <th>Price</th>
        <th><button type="button" class="thSort up"><em>%</em>Chg</button></th>
        <th><button type="button" class="thSort down">Est.Value</button></th>
        <th><button type="button" class="thSort"><em>%</em>Profit</button></th>
      </tr>
    </thead>
    <tbody>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr @click="MobileDetailShow">
        <td>
          <dl>
            <dt><img src="@/assets/img/ico_coin.png" alt=""></dt>
            <dd>XZC</dd>
            <dt>4</dt>
            <dd>ZCoin</dd>
          </dl>
        </td>
        <td>
          <em>₫</em>123,456,78<i>K</i>
          <mark><i style="height: 20.1505%; top: 22.9562%;"></i></mark>
        </td>
        <td class="fall realTime">-10000<s>%</s></td>
        <td><em>₫</em>123,456,78<i>K</i></td>
        <td class="rise">
          +10000<s>%</s>
          <button type="button" class="tdSort up" v-if="$windowWidth < 841">정렬</button>
        </td>
      </tr>
      <tr class="not">
        <td colspan="5">Add Your Portfolio ...</td>
      </tr>
    </tbody>
  </table>

  <!-- 모바일 상세 페이지 Start -->
  <div class="mobileDetail" v-if="isMobile.wrap">
      <SubHeader title="PortFolio Detail" @MobileDetailHide="MobileDetailHide"/>
      <div id="contents" v-on:scroll.passive="handleScrollMobile">
          <CryptocurrencyRight v-bind:container="isMobile"/>
      </div>
  </div>
  <!-- 모바일 상세 페이지 End -->

</template>

<script>
const OFFSET = 60;
export default {
  data () {
		return {
      searchText: "",
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
  @import "byCoins.scss";
</style>

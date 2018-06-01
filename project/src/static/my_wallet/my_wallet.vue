<template>
<div>
    <div v-wechat-title="$route.meta.title"></div>
    <div  class="month_bill_up">
        <div class="bill_up_left">
            <div class="check_time" @click="openPicker()">
                <p>2018年5月</p>
                <img src="./img/down.png" alt="">
            </div>
            <!-- <p>2018年5月</p>
            <img src="./img/down.png" alt=""> -->
            <div class="money_title">
                <span>支出</span>
                <span>￥235.00</span>
                <span>收入</span>
                <span>￥35.70</span>
            </div>
        </div>
        <div class="bill_up_right">
            <p>筛选</p>
            <p>月账单</p>
        </div>
    </div>

    <!-- 零钱明细 -->
    <ul class="wallet_list">
        <li>
            <div class="wallet_list_left">
                <img src="./img/wallet_wechat.png" alt="">
                <p>红包提现红包提现红包提现红包提现</p>
                <p>5月3日  08:55</p>
            </div>
            <div class="wallet_list_right">
                <p>-222.00</p>
                <img src="./img/wallet_right.png" alt="">
            </div>
        </li>
        <li>
            <div class="wallet_list_left">
                <img src="./img/wallet_zu.png" alt="">
                <p>红包提现红包提现红包提现红包提现</p>
                <p>5月3日  08:55</p>
            </div>
            <div class="wallet_list_right">
                <p style="color: #F4B779;">+222.00</p>
                <img src="./img/wallet_right.png" alt="">
            </div>
        </li>
        <li>
            <div class="wallet_list_left">
                <img src="./img/wallet_yong.png" alt="">
                <p>红包提现红包提现红包提现红包提现</p>
                <p>5月3日  08:55</p>
            </div>
            <div class="wallet_list_right">
                <p>-222.00</p>
                <img src="./img/wallet_right.png" alt="">
            </div>
        </li>
    </ul>

    <mt-datetime-picker
  v-model="pickerVisible"
  type="date"
  ref="picker"
  year-format="{value}"
  month-format="{value}">
</mt-datetime-picker>

<!-- <mt-datetime-picker
    ref="picker"
    type="time"
    v-model="pickerValue">
  </mt-datetime-picker> -->

</div>
</template>

<script>
import { MessageBox, DatetimePicker } from 'mint-ui'
export default {
  components: {
    DatetimePicker,
    MessageBox
  },
  data () {
    return {
      pickerVisible: ''
    }
  },
  methods: {
    openPicker () {
    //   console.log(this.$refs)
      this.$refs.picker.open()
    }

  }
}
</script>

<style>
@import './css/my_wallet.css';
</style>

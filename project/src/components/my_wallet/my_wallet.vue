<template>
<div>
    <div v-wechat-title="$route.meta.title"></div>
    <div  class="month_bill_up">
        <div class="bill_up_left">
            <div class="check_time" @click="openPicker()">
                <p>{{ timeText }}</p>
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

    <!-- 零钱明细   v-for="(item,index) in moneyList" -->
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
    @confirm="handleConfirm"
  v-model="pickerValue"
  type="date"
  ref="picker"
  :startDate="startDate"
  :endDate="endDate"
  year-format="{value}"
  month-format="{value}">
</mt-datetime-picker>

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
      timeText: this.formatDate(new Date()),
      pickerVisible: '',
      pickerValue: '',
      startDate: new Date('2018-1-1'),
      endDate: new Date(),
      moneyList: ''
    }
  },
  methods: {
    openPicker () { // 显示选择时间日期
      this.$refs.picker.open()
    },
    handleConfirm: function () { // 日期确认之后
      let timeTag = this.pickerValue
      console.log(this.formatDate(timeTag, 1))
      this.timeText = this.formatDate(timeTag, 1)
    },
    formatDate: function (date, type) { // 标准日期转  type为0: '2018-1-1'  1 年月日
      date = new Date(date)
      let y = date.getFullYear()
      let m = date.getMonth() + 1
      //   let d = date.getDate()
      //   let h = date.getHours()
      //   let m1 = date.getMinutes()
      //   let s = date.getSeconds()
      m = m < 10 ? ('0' + m) : m
      //   d = d < 10 ? ('0' + d) : d
      if (type === 0) {
        return y + '-' + m
      } else {
        return y + '年' + m + '月'
      }
    },
    timeMoney: function (type, time) {
      this.$axios.get('/api/wxpub/user_wallet/adverExtensionRecord.html?type=' + type + '&start_time=' + time)
        .then((res) => {
          console.log(res)
          if (res.data.code === 200) {
            let obj = [{
              'money': '224.00',
              'create_time': '2018-05-30 06:18:17',
              'f_io_type': 0,
              'timeAxis': {
                'current_time': '2018年05月',
                'pay_money': 10796,
                'recharge': 3001
              }
            }, {
              'money': '1238.00',
              'create_time': '2018-05-29 05:40:13',
              'f_io_type': 0,
              'timeAxis': []
            }, {
              'money': '1308.00',
              'create_time': '2018-05-28 00:08:23',
              'f_io_type': 0,
              'timeAxis': []
            }, {
              'money': '1160.00',
              'create_time': '2018-05-27 06:12:35',
              'f_io_type': 0,
              'timeAxis': []
            }]

            this.moneyList = obj
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }

  },
  beforeCreate: function () {
  },
  created: function () {
    // this.imgUrl =
    // console.log(time)
    // console.log(this.formatDate(new Date(), 0))
    let intiTime = this.formatDate(new Date(), 0)
    this.timeMoney('', intiTime)
  },
  beforeMount: function () {

  },
  mounted: function () {
    // this.timeDown()
  }
}
</script>

<style scoped>
@import './css/my_wallet.css';
</style>

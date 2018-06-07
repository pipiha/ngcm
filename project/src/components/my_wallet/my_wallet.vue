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
                <span>￥{{zhichu}}</span>
                <span>收入</span>
                <span>￥{{shouru}}</span>
            </div>
        </div>
        <div class="bill_up_right">
            <p @click="filter()">筛选</p>
            <p @click="checkMonth()">月账单</p>
        </div>
    </div>

    <!-- 零钱明细   v-for="(item,index) in moneyList" -->
    <ul class="wallet_list">
        <p v-show="isKong" style="font-size: 0.4rem;margin-top: 30%;color: #999999;">暂无记录了</p>
        <li v-for="(item,index) in moneyList" @click="consumptionDetails()">   <!-- 推广费用明细 -->
            <div class="wallet_list_left">
                <img v-if="item.f_io_type == 0" src="./img/wallet_chong.png" alt="">
                <img v-else src="./img/wallet_xiao.png" alt="">
                <p  v-if="item.f_io_type == 0">充值金额</p>
                <p  v-else>消费金额</p>
                <p>{{ item.create_time }}</p>
            </div>
            <div class="wallet_list_right">
                <p  v-if="item.f_io_type == 0" style="color: #F4B779;">+{{ item.money }}</p>
                <p  v-else>-{{ item.money }}</p>
                <img src="./img/wallet_right.png" alt="">
            </div>
        </li>
        <!-- <li>
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
        </li> -->
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
    <div v-show="zheZhao" class="zhe_zhao"></div>

    <mt-picker v-show="show_check_type" :slots="slots" style="width:100%;background-color:#fff;position:fixed;bottom: 1rem;"></mt-picker>
    <div v-show="show_check_type"  class="submit_btn sure_btn" @click="sureType()">
        确定
    </div>
</div>
</template>

<script>
import { MessageBox, DatetimePicker, Picker, Indicator } from 'mint-ui'
import axios from 'axios'
export default {
  components: {
    DatetimePicker,
    MessageBox,
    Picker,
    Indicator
  },
  data () {
    return {
      zheZhao: false,
      timeText: this.formatDate(new Date('2018-1-1')),
      pickerVisible: null,
      pickerValue: null,
      startDate: new Date('2018-1-1'),
      endDate: new Date(),
      moneyList: '',
      show_check_type: false,
      zhichu:0,
      shouru:0,
      slots: [
        {
          // flex: 1,
          values: ['', '全部', '红包', '提现', '充值', '分佣', '广告费支出'],
          // className: 'slot1',
          textAlign: 'center'
        }
      ],
      isKong: false
    }
  },
   mounted: function () {
    this.setzhichu()
  },
  methods: {
    setzhichu(){
      console.log(0)
      axios.get('api/wxpub/user_wallet/adverExtensionRecord.html')  // 问号后面是要传送的参数
      .then( reponse => {   //  请求成功后的函数
                console.log(reponse.data.data)
                this.zhichu = reponse.data.data.last_page
                this.shouru = reponse.data.data.per_page
            })
            .catch( error=> {	  //  请求失败后的函数
                console.log(error)
            })
    },
    openPicker () { // 显示选择时间日期
      this.$refs.picker.open()
    },
    handleConfirm: function () { // 日期确认之后
    console.log(this.pickerValue)
      let timeTag = this.pickerValue
      console.log(this.formatDate(timeTag))
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
            // if(res.data.data.length === 0){
            this.isKong = true
            // }else{
            //   let obj = res.data.data.data
            // }
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
            Indicator.close()
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    checkMonth: function () { // 月账单
      this.$router.push({
        path: '/mouthBill'
      })
    },
    filter: function () { // 筛选
      this.show_check_type = true
      this.zheZhao = true
    },
    sureType: function () {
      this.show_check_type = false
      this.zheZhao = false
    },
    onValuesChange: function () {

    },
    consumptionDetails: function () {
      this.$router.push({
        path: '/payDetail'
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
    Indicator.open()
    this.timeMoney('', intiTime)
  },
  beforeMount: function () {

  }
}
</script>

<style scoped>
@import './css/my_wallet.css';
.submit_btn{
    width: 100%;
    height: 1.07rem;
    background-color: #5286EC;
    line-height: 1.07rem;
    text-align: center;
    color: #fff;
    font-size: 0.4rem;
    position: fixed;
    bottom: 0;
    cursor: pointer;
    z-index: 10;
}
.sure_btn{
    background-color:#fff!important;
    color:#5186EB!important;
    font-size: 0.45rem;
}
.zhe_zhao{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0,0,0,.4)
}
</style>

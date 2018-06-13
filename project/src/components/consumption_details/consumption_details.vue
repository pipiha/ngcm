<template>
<div>
    <div v-wechat-title="$route.meta.title"></div>
    <!-- <p>支付详情</p> -->
    <div class="consumption_up">
        <img v-if="isChong" src="./img/chong.png" alt="">
        <img v-else src="./img/xiaofei.png" alt="">
        <p>到账金额</p>
        <span>￥</span>
        <p v-if="moneyList.total_money == ''">{{ moneyList.total_money }}</p>
        <p v-else>0</p>
    </div>
    <!-- 列表数据 -->
    <ul class="ad_money_wrap">
        <p v-if="moneyList.data.data == ''" style="font-size: 0.45rem;color: rgb(153, 153, 153);width: 92%;margin: 0 auto;padding-top: 0.55rem;opacity: 0.5;">暂无详情</p>
        <li v-else v-for="(item,inex) in moneyList.data.data">
           <div class="adv_title">
                <span>{{ item.f_tips }}</span>
                <span v-if="isChong">+{{ item.money }}</span>
                <span v-else>-{{ item.money }}</span>
                <p>{{ item.create_time }}</p>
            </div>
       </li>
    </ul>
    <!-- 展示数据 -->
    <ul class="pay_center_box" v-show="show_ul">
       <li>
           <span>当前状态</span>
           <span>已到微信零钱</span>
       </li>
       <li>
           <span>商      品</span>
           <span>扫码红包</span>
       </li>
       <li>
           <span>充值时间</span>
           <span>2018-01-01 00:00:00</span>
       </li>
       <li>
           <span>到账时间</span>
           <span>2018-01-01 00:00:00</span>
       </li>
       <li>
           <span>商户名称</span>
           <span>北京农广传媒有限公司</span>
       </li>
       <li>
           <span>充值方式</span>
           <span>微信支付</span>
       </li>
       <li>
           <span>收款时间</span>
           <span>2018-01-01 00:00:00</span>
       </li>
       <li>
           <span>交易单号</span>
           <span>222222222222222222</span>
       </li>
       <li>
           <span>商户单号</span>
           <span>222222222222222222</span>
       </li>
   </ul>
</div>
</template>

<script>
import { Indicator, MessageBox } from 'mint-ui'
export default {
  components: {
    Indicator,
    MessageBox
  },
  data () {
    return {
      show_ul: false,
      moneyList: '',
      isChong: true,
      detailData: ''
    }
  },
  methods: {
    getMoneyMsg: function (time, type) {
      this.$axios.get('api/wxpub/user_wallet/showDetailByDay.html?time=' + time + '&io=' + type)
        .then((res) => {
          Indicator.close()
          this.moneyList = res.data.data
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  beforeCreate: function () {

  },
  created: function () {
    let time = this.$route.query.code
    let type = this.$route.query.f_io
    console.log(type)
    if (type == 0) { // chong
      console.log('if')
      this.isChong = false
    } else {
      console.log('else')
    }
    Indicator.open()
    this.getMoneyMsg(time, type)
  },
  beforeMount: function () {

  },
  mounted: function () {

  },
  destroyed: function () {

  }
}
</script>

<style scoped>
@import './css/consumption_details.css';
</style>

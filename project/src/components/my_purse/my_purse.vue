<template>
<div>
    <div v-wechat-title="$route.meta.title"></div>
    <div class="purse_wrap">
        <img src="./img/purse_bj.png" alt="">
    </div>
    <!-- 内容 -->
    <div class="purse_conent_wrap">
        <div class="conent_up">
            <p>我的总资产(元)</p>
            <img @click="goJiaoYi" src="./img/721009638153387289.png" alt="">
        </div>

        <div class="conent_center">
            <p>{{ moneyText.total_assets }}</p>
            <p>农广传媒累计为您创造收益（元）：<span>{{ moneyText.cumulative_income }}</span></p>
        </div>
        <div class="conent_center_borer"></div>

        <ul class="purse_ul">
            <li>
                <p style="">我的零钱(元)</p>
                <p>{{ moneyText.total_pocket_money }}</p>
            </li>
            <li>
                <p  style="">推广费余额<i @click="wallet1()">?</i></p>
                <p>{{ moneyText.promotion_fee }}</p>
            </li>
        </ul>
    </div>

    <!-- 提现 -->
    <div class="tx_wrap">
        <div class="tx_up">
            <i @click="wallet2()">?</i>
        </div>
        <p>{{ moneyText.total_pocket_money }}</p>
        <p>可提现金额(元)</p>
        <p>我要提现</p>
    </div>

</div>
</template>

<script>
import { MessageBox, DatetimePicker } from 'mint-ui'
export default {
  components: {
    // Popup
    DatetimePicker
  },
  data () {
    return {
      moneyText: '',
      popupVisible: true
    }
  },
  methods: {
    getMoney: function () {
      this.$axios.get('api/wxpub/user_wallet/index.html')
        .then((res) => {
          if (res.data.code === 200) {
            this.moneyText = res.data.data
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    wallet1: function () {
      MessageBox.alert('充值金额将不可用于提现，只可消费支出')
    },
    wallet2: function () {
      MessageBox.alert('注：除充值金额外，所有金额都可用以提现，且每次提现金额需大于或等于￥1.00的整数倍')
    },
    goJiaoYi: function () {
      this.$router.push({
        path: '/myWallet'
      })
    }

  },
  beforeCreate: function () {

  },
  created: function () {
    console.log('-----------------组件创建了-----------------')
    this.getMoney()
  },
  beforeMount: function () {

  },
  mounted: function () {
    // this.timeDown()
  }
}
</script>

<style>
@import './css/my_purse.css';
</style>

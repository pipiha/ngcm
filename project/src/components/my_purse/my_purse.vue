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

</div>
</template>

<script>
import { MessageBox, DatetimePicker, Indicator } from 'mint-ui'
export default {
  components: {
    DatetimePicker,
    Indicator
  },
  data () {
    return {
      moneyText: '',
      popupVisible: true
    //   isTixian: false // 默认隐藏
    }
  },
  methods: {
    getMoney: function () {
      this.$axios.get('api/wxpub/user_wallet/index.html')
        .then((res) => {
          if (res.data.code === 200) {
            this.moneyText = res.data.data
            Indicator.close()
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
    },
    userTixian: function (money) {
    //   this.isTixian = true
      console.log(money)
      this.$router.push({
        path: '/tixian',
        query: {
          text: money
        }
      })
    }

  },
  beforeCreate: function () {

  },
  created: function () {
    Indicator.open()
    this.getMoney()
  },
  beforeMount: function () {

  },
  mounted: function () {
    // this.timeDown()
  }
}
</script>

<style scoped>
@import './css/my_purse.css';
.tixian_page{
  position: fixed;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    background-color: #fff;
}
    .header{
        width: 100%;
        height: 1.25rem;
        line-height: 1.25rem;
        font-size: 16px;
        color: #333;
        font-weight: bold;
        border-bottom: 1px solid #EAEAEA;
    }
    .img{
        width: 100%;
        height: 2rem;
    }
    .img img{
        width: 0.5rem;
        float: right;
        margin-right: 0.5rem;
        margin-top: 0.6rem;
    }
    .qianbao{
        width: 100%;
        height: 4rem;
        text-align: center;
    }
    .qianbao img{
        width: 2.75rem;
        margin: 0 auto;
        margin-top: 1rem;
    }
    .qianbao h1{
        font-size: 16px;
        font-weight: bold;
        color: #4285F4;
        margin-top: 0.2rem;
    }
    input{
        width: 80%;
        height:1.81rem;
        margin: 0 auto;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1px solid #E2E2E2;
        text-align: center;
        line-height: 1.81rem;
        font-size: 20px;
        font-weight: bold;
        background: url(./img/￥.png)no-repeat left;
        background-size:0.3rem 0.31rem;
        background-position: 38% ;

    }
    .keti{
        width: 80%;
        height: 0.3rem;
        margin: 0 auto;
        margin-top: 1%;
    }
    .jine{
        float: left;
        color: #999;
        font-size: 15px;
    }
    .quanbu{
        float: right;
        color: #5286EC;
        font-size: 15px;
    }
    .queding{
        width: 90%;
        height: 1.3rem;
        background: #4189D0;
        text-align: center;
        line-height: 1.3rem;
        margin: 0 auto;
        margin-top: 1rem;
        color: #fff;
        font-size: 16px;
        border-radius: 20px 20px 20px 20px;
    }

</style>

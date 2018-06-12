<template>
<div>
    <div class="img">
        <img src="./img/text.png" alt="" @click="goJiaoYi()"></img>
    </div>
    <div class="qianbao">
        <img src="./img/qianbao.png" alt="">
        <h1>提现到微信钱包</h1>
    </div>
    <input v-model="tixianMoney" type="" placeholder="0.00">
    <div class="keti">
        <div class="jine">可提现金额￥{{ this.money }}.00</div>
        <div class="quanbu" @click="allMoney()">全部提现</div>
    </div>
    <div class="queding" @click="tixian()">确定</div>
</div>
</template>

<script>
import { MessageBox } from 'mint-ui'
export default {
  componnts: {
    MessageBox
  },
  data () {
    return {
      tixianMoney: 0, // 用户手动输入
      money: 0 // 全部提现数额
    }
  },
  methods: {
    allMoney: function () { // 全部提现
      this.tixianMoney = this.money
    },
    tixian: function () { // 确定提现
      if (this.tixianMoney === '') {
        MessageBox.alert('请输入提现金额')
      } else if (this.tixianMoney != parseInt(this.tixianMoney)) {
        MessageBox.alert('只能提现整数金额')
      } else {
        this.$axios.get('api/wxpub/user_wallet/transferWallet.html?amount=' + this.tixianMoney)
          .then((res) => {
            console.log(res)
            if (res.data.code === 200) {
              MessageBox.alert('提现成功')
              this.$router.push({
                path: '/ConsumptionDetails'
              })
            }
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    goJiaoYi: function () { // 去交易记录页面
      this.$router.push({
        path: '/myWallet'
      })
    }
  },
  beforeCreate: function () {

  },
  created: function () {
    this.money = this.$route.query.text
  },
  beforeMount: function () {

  },
  mounted: function () {
    // this.timeDown()
  }
}
</script>

<style scoped>
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

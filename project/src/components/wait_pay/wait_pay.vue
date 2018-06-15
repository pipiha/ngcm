<template>
<div class="wait_type_wrap">
    <!-- 展示型广告 -->
   <div v-if="type == 0" class="wait_pay_up">
       <p v-if="status == 0">等待用户付款</p>
       <p v-else-if="status == 2">已上刊订单</p>
       <p v-else-if="status == 4">待审核订单</p>
       <img v-if="status == 0" style="width:1.5rem;" src="./img/wait.png" alt="">
       <img v-else-if="status == 2" style="width:1.5rem;" src="./img/cancel.png" alt="">
       <img v-else-if="status == 4" src="./img/finish.png" alt="">
   </div>
   <!-- 数字传单-->
   <div v-else class="wait_pay_up">
       <p v-if="status == 0">等待用户付款</p>
       <p v-else-if="status == 3">已完成订单</p>
       <img v-if="status == 0" style="width:1.5rem;" src="./img/wait.png" alt="">
       <img v-else-if="status == 3" src="./img/finish.png" alt="">
   </div>
   <!-- 展示型 -->
   <ul  v-if="type == 0"  class="pay_center_box">
       <li>
           <span>广告名称</span>
           <span>{{ zhanData.adv_title }}</span>
       </li>
       <li>
           <span>预计播放日期</span>
           <span>{{ this.timestmptotime(zhanData.or_play_start_time) }}</span>
       </li>
       <li>
           <span>广告持续时长(月)</span>
           <span>{{ zhanData.month }}</span>
       </li>
       <li>
           <span>视频时长</span>
           <span>{{ zhanData.or_video_length }}</span>
       </li>
       <li>
           <span>播放点位</span>
           <span>{{ zhanData.countSite }}</span>
       </li>
   </ul>
    <!-- 数字 -->
   <ul  v-else class="pay_center_box">
       <li>
           <span>广告主姓名</span>
           <span>{{ shuData.o_adver_name }}</span>
       </li>
       <li>
           <span>广告名称</span>
           <span>{{ shuData.h5_src_title }}</span>
       </li>
       <li>
           <span>播放点位</span>
           <span>{{ shuData.countSite }}</span>
       </li>
   </ul>
    <!-- 展示型 -->
   <ul v-if="type == 0" class="pay_center_box">
       <li>
           <span>订单编号</span>
           <span>{{ zhanData.or_number }}</span>
       </li>
       <li>
           <span>订单金额</span>
           <span style="color: #5286EC;">￥{{ zhanData.or_total_money }}</span>
       </li>
       <li>
           <span>活动优惠</span>
           <span v-if="zhanData.value == 0">暂无优惠</span>
           <span v-else>{{ zhanData.value }}</span>
       </li>
       <li>
           <span>提交时间</span>
           <span>{{ zhanData.create_time }}</span>
       </li>
       <li>
           <span>支付方式</span>
           <span v-if="zhanData.or_pay_method == 1">微信</span>
           <span v-else-if="zhanData.or_pay_method == 2">支付宝</span>
           <span v-else-if="zhanData.or_pay_method == 3">现金</span>
       </li>
       <li>
           <span>支付金额</span>
           <span style="color: #5286EC;">￥{{ zhanData.or_total_money }}</span>
       </li>
   </ul>

    <!-- 数字型 -->
   <ul  v-else class="pay_center_box">
       <li>
           <span>订单编号</span>
           <span>{{ shuData.o_number }}</span>
       </li>
       <li>
           <span>活动优惠</span>
           <span>{{ shuData.value }}</span>
       </li>
       <li>
           <span>提交时间</span>
           <span>{{ shuData.create_time }}</span>
       </li>
       <li>
           <span>支付方式</span>
           <span>{{ shuData.pay_method }}</span>
       </li>
       <li>
           <span>支付金额</span>
           <span v-if="shuData.money != null" style="color: #5286EC;">￥{{ shuData.money }}.00</span>
           <span v-else style="color: #5286EC;">￥0.00</span>
       </li>
   </ul>

   <div v-if="status == 0" class="goPay">
       <p v-if="type == 0">前往支付</p>
       <p v-else>前往充值</p>
    </div>
    <div v-else class="goPay" style="width:92;border-radius: 0.5rem;">
       <p @click="lookAdv()">查看广告</p>
    </div>
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
      type: 0,
      status: 0,
      id: 0,
      shuData: '',
      zhanData: ''
    }
  },
  methods: {
    shuDetail: function (oid) {
      this.$axios.get(this.utils.api + '/wxpub/orders_controller/mathOrderDetail?o_id=' + oid)
        .then((res) => {
          console.log(res)
          if (res.data.code === 200) {
            this.shuData = res.data.data
            Indicator.close()
            console.log(this.shuData)
          } else {
            MessageBox.alert(res.data.msg)
            this.$router.go(-1)
          }
        })
        .catch((err) => {
          MessageBox.alert(err.msg)
          Indicator.close()
        })
    },
    zhanDetail: function (oid, status) {
      this.$axios.get(this.utils.api + '/wxpub/orders_controller/showOrderDetail?or_id=' + oid + '&or_status=' + status)
        .then((res) => {
          console.log(res)
          Indicator.close()
          if (res.data.code == 200) {
            this.zhanData = res.data.data
            console.log(this.zhanData)
          } else {
            MessageBox.alert(res.data.msg)
            this.$router.go(-1)
          }
        })
        .catch((err) => {
          MessageBox.alert(err.msg)
          Indicator.close()
        })
    },
    lookAdv: function () {
      this.$router.push({
        path: '/landingPage',
        query: {
          type: 0,
          code: this.id
        }
      })
    },
    timestmptotime: function (temp) {
      let date = new Date(temp * 1000)
      let Y = date.getFullYear() + '年'
      let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '月'
      let D = date.getDate() + '日'
      //   let h = date.getHours() + ':'
      //   m = date.getMinutes() + ':'
      //   s = date.getSeconds()
      //   console.log(Y + M + D + h + m + s)
      return Y + M + D
    }
  },
  beforeCreate: function () {

  },
  created: function () {
    this.type = this.$route.query.type
    this.status = this.$route.query.status
    this.id = this.$route.query.id
    Indicator.open()
    if (this.type == 0) {
      console.log('展示')
      this.zhanDetail(this.id, this.status)
    } else {
      console.log('数字')
      this.shuDetail(this.id)
    }
  },
  beforeMount: function () {

  },
  mounted: function () {

  },
  deactivated () {
    Indicator.close()
    this.$destroy()
  }
}
</script>

<style scoped>
@import './css/wait_pay.css';
.wait_type_wrap{
    position: absolute;
    width: 100%;
    /* height: 100%; */
    background-color: #F3F6F5;
}
.goPay{
    width: 100%;
    height: 1.07rem;
    margin: 0 auto;
    background: -webkit-gradient(linear, right top, left top, from(#4189D0), color-stop(68%, #5286EC));
    background: linear-gradient(-90deg, #4189D0 0%, #5286EC 68%);
    /* border-radius: 0.7rem; */
    text-align: center;
    line-height: 1.07rem;
    color: #fff;
    font-size: 0.38rem;
    margin-top: 0.7rem;
    cursor: pointer;
}
</style>

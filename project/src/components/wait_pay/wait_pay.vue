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
           <span>{{ zhanData.h5_src_title }}</span>
       </li>
       <li>
           <span>预计播放日期</span>
           <span>{{ zhanData.h5_src_title }}</span>
       </li>
       <li>
           <span>广告持续时长(月)</span>
           <span>{{ zhanData.h5_src_title }}</span>
       </li>
       <li>
           <span>视频时长</span>
           <span>{{ zhanData.h5_src_title }}</span>
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
           <span>{{ zhanData.o_number }}</span>
       </li>
       <li>
           <span>订单金额</span>
           <span style="color: #5286EC;">￥{{ zhanData.money }}</span>
       </li>
       <li>
           <span>活动优惠</span>
           <span>{{ zhanData.countSite }}</span>
       </li>
       <li>
           <span>提交时间</span>
           <!-- <span>{{ zhanData.create_time.substring(0,10) }}</span> -->
       </li>
       <li>
           <span>支付方式</span>
           <span>{{ zhanData.pay_method}}</span>
       </li>
       <li>
           <span>支付金额</span>
           <span style="color: #5286EC;">￥31.00</span>
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
    shuDetail: function (oid, status) {
      this.$axios.get('api/wxpub/orders_controller/mathOrderDetail?o_id=' + oid + '&o_status=' + status)
        .then((res) => {
        //   console.log(res)
          if (res.data.code === 200) {
            this.shuData = res.data.data
            Indicator.close()
            console.log(this.shuData)
          } else {

          }
        })
        .catch((err) => {
          MessageBox.alert(err.msg)
          Indicator.close()
        })
    },
    zhanDetail: function (oid, status) {
      this.$axios.get('api/wxpub/orders_controller/showOrderDetail?or_id=' + oid + '&or_status=' + status)
        .then((res) => {
          console.log(res)
          this.zhanData = res.data.data
          Indicator.close()
        })
        .catch((err) => {
          MessageBox.alert(err.msg)
          Indicator.close()
        })
    },
    lookAdv: function () {
      this.$route.push({
        path: '/landingPage',
        query: {
          type: 0,
          code: this.id
        }
      })
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
      this.shuDetail(this.id, this.status)
    }
  },
  beforeMount: function () {

  },
  mounted: function () {

  },
  deactivated () {
    Indicator.close()
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

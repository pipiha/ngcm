<template>
<div class="wait_type_wrap">
   <div class="wait_pay_up">
       <p>已完成订单</p>
       <!-- <img style="width:1.5rem;" src="./img/cancel.png" alt=""> -->
       <!-- <img src="./img/finish.png" alt=""> -->
       <img style="width:1.5rem;" src="./img/wait.png" alt="">
   </div>
   <ul class="pay_center_box">
       <li>
           <span>广告名称</span>
           <span>{{ shuData.h5_src_title }}</span>
       </li>
       <li>
           <span>预计播放日期</span>
           <span>{{ shuData.h5_src_title }}</span>
       </li>
       <li>
           <span>广告持续时长(月)</span>
           <span>{{ shuData.h5_src_title }}</span>
       </li>
       <li>
           <span>视频时长</span>
           <span>{{ shuData.h5_src_title }}</span>
       </li>
       <li>
           <span>播放点位</span>
           <span>{{ shuData.countSite }}</span>
       </li>
   </ul>

   <ul class="pay_center_box">
       <li>
           <span>订单编号</span>
           <span>{{ shuData.o_number }}</span>
       </li>
       <li>
           <span>订单金额</span>
           <span style="color: #5286EC;">￥{{ shuData.money }}</span>
       </li>
       <li>
           <span>活动优惠</span>
           <span>{{ shuData.countSite }}</span>
       </li>
       <li>
           <span>提交时间</span>
           <span>{{ shuData.create_time.substring(0,10) }}</span>
       </li>
       <li>
           <span>支付方式</span>
           <span>{{ shuData.pay_method}}</span>
       </li>
       <li>
           <span>支付金额</span>
           <span style="color: #5286EC;">￥31.00</span>
       </li>
   </ul>

   <div class="goPay">
       前往支付
   </div>
</div>
</template>

<script>
export default {
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
            console.log(this.shuData)
          } else {

          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    zhanDetail: function (oid, status) {
      this.$axios.get('api/wxpub/orders_controller/showOrderDetail?o_id=' + oid + '&o_status=' + status)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  beforeCreate: function () {

  },
  created: function () {
    this.type = this.$route.query.type
    this.status = this.$route.query.status
    this.id = this.$route.query.id
    if (this.type === 0) {
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

  }
}
</script>

<style scoped>
@import './css/wait_pay.css';
.wait_type_wrap{
    position: absolute;
    width: 100%;
    height: 100%;
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

<template>
<div>
   <div class="wait_pay_up">
       <p>已完成订单</p>
       <!-- <img style="width:1.5rem;" src="./img/cancel.png" alt=""> -->
       <!-- <img src="./img/finish.png" alt=""> -->
       <img style="width:1.5rem;" src="./img/wait.png" alt="">
   </div>
   <ul class="pay_center_box">
       <!-- <li v-for="item in dataObj ">
           <span>{{ item.dataTitle}}</span>
           <span>{{ item.dataMsg}}</span>
       </li> -->
       <li>
           <span>广告名称</span>
           <span>老庙黄金</span>
       </li>
       <li>
           <span>预计播放日期</span>
           <span>2017-06-03</span>
       </li>
       <li>
           <span>广告持续时长(月)</span>
           <span>4</span>
       </li>
       <li>
           <span>视频时长</span>
           <span>15秒</span>
       </li>
       <li>
           <span>播放点位</span>
           <span>32个</span>
       </li>
   </ul>

   <ul class="pay_center_box">
       <li>
           <span>订单编号</span>
           <span>1232509386038</span>
       </li>
       <li>
           <span>订单金额</span>
           <span style="color: #5286EC;">￥31.00</span>
       </li>
       <li>
           <span>活动优惠</span>
           <span>暂无优惠</span>
       </li>
       <li>
           <span>提交时间</span>
           <span>2018-05-09</span>
       </li>
       <li>
           <span>支付方式</span>
           <span>微信支付</span>
       </li>
       <li>
           <span>支付金额</span>
           <span  style="color: #5286EC;">￥31.00</span>
       </li>
   </ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      dataObj: [
        {
          dataTitle: '广告名称',
          dataMsg: '老庙黄金'
        },
        {
          dataTitle: '预计播放日期',
          dataMsg: '2017-06-03'
        },
        {
          dataTitle: '广告持续时长(月)',
          dataMsg: '4'
        },
        {
          dataTitle: '视频时长',
          dataMsg: '15秒'
        },
        {
          dataTitle: '播放点位',
          dataMsg: '32个'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import './css/wait_pay.css';
</style>

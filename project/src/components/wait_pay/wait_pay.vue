<template>
<div class="wait_type_wrap">
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
           <span>{}</span>
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
        f_id:0,
        huangjin:{},
        
    }
  },
  mounted () {
      this.getMoney( this.$route.query.f_id )
      this.f_id = this.$route.query.f_id
  },
  methods: {
        getMoney: function ( id ) {
        this.$axios.get('api//wxpub/show_adv_detail/showAdv?adv_id='+id)
            .then((res) => {
                console.log(res.data.data)
            if (res.data.code === 200) {
                this.huangjin = res.data.data
                console.log(this.huangjin)
            }
            })
            .catch((err) => {
            console.log(err)
            })
    },
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

<template>
<div>
    <div v-wechat-title="$route.meta.title"></div>
    <!-- <p>支付详情</p> -->
    <div class="consumption_up">
        <img v-if="isChong" src="./img/chong.png" alt="">
        <img v-else src="./img/xiaofei.png" alt="">
        <p>到账金额</p>
        <span>￥</span>
        <p>{{ moneyList.total_money }}</p>
    </div>

    <ul class="ad_money_wrap">
        <li v-for="(item,inex) in moneyList.data.data">
           <div class="adv_title">
                <span>{{ item.f_tips }}</span>
                <span v-if="isChong">+{{ item.money }}</span>
                <span v-else>-{{ item.money }}</span>
                <p>{{ item.create_time }}</p>
            </div>
       </li>
    </ul>

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
export default {
  data () {
    return {
      show_ul: false,
      moneyList: '',
      isChong: true
    }
  },
  methods: {
      getMoneyMsg: function(time,type){
          this.$axios.get('api/wxpub/user_wallet/showDetailByDay.html?time=' + time + '&io=' + type)
          .then((res) => {
            //   console.log(res.data.data)
            //   this.moneyList = res.data.data
            this.moneyList = {
		        "total_money": 78,
		        "data": {
			        "total": 39,
			        "per_page": 10,
			        "current_page": 1,
			        "last_page": 4,
			        "data": [{
				        "money": "2.00",
				        "create_time": "2018-05-12 18:35:31",
                        "f_io_type": 0,
                        "f_tips": '哈哈哈'
                    },
                    {
				        "money": "2.00",
				        "create_time": "2018-05-12 17:31:24",
                        "f_io_type": 0,
                        "f_tips": '哈哈哈'
                    },
                    {
				        "money": "2.00",
				        "create_time": "2018-05-12 17:17:56",
                        "f_io_type": 0,
                        "f_tips": '哈哈哈'
                    },
                    {
				        "money": "2.00",
				        "create_time": "2018-05-12 15:30:23",
                        "f_io_type": 0,
                        "f_tips": '哈哈哈'
                    }
                    ]
		        }
	        }
          })
          .catch((err) => {
              console.log(err)
          })
      }
  },
  beforeCreate: function(){

  },
  created: function(){
      let time = this.$route.query.code
      let type = this.$route.query.f_io
      if(type === '0'){
          console.log('if')
      }else{
          console.log('else')
          this.isChong = false
      }
      this.getMoneyMsg(time,type)
  },
  beforeMount: function(){

  },
  mounted: function(){

  },
  destroyed: function(){

  }
}
</script>

<style scoped>
@import './css/consumption_details.css';
</style>

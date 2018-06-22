<template>
<div class="my_order_box">
    <div v-wechat-title="$route.meta.title"></div>
    <div class="order_wrap_title">
        <ul>
            <li v-for="(item,index) in typeList">
                <p style="width: 33%;margin: 0 auto;" :class="{order_title_on:index==current}" @click="selectStyle(item,index)">{{ item }}</p>
            </li>
        </ul>
    </div>
    <ul class="order_wrap" v-if="showType === 1">
        <!-- 展示型 style="color:#333333;" 完成字体 -->
        <li  style="height:6.12rem;" v-for="(item,index) in orderList" :code="item.or_id">
            <div class="order_up">
                <p v-if="item.or_status === 0" style="color:#333333;">待支付</p>
                <p v-else-if="item.or_status === 2">已上刊</p>
                <p v-else style="color:#333333;">待审核</p>
                <img  @click="cancalAdv(item.or_id,1)" src="./img/delete.png" alt="">
            </div>
            <div class="order_center">
                <div class="order_title">
                    <span>订单编号:</span>
                    <span>{{ item.or_number }}</span>
                </div>
                <div class="order_title">
                    <span>广告名称:</span>
                    <span>{{ item.adv_title }}</span>
                </div>
                <div class="order_title">
                    <span>订单金额:</span>
                    <span>￥{{ item.or_total_money}}.00</span>
                </div>
                <div class="order_title">
                    <span>持续时长:</span>
                    <span>{{ item.month}}个月</span>
                </div>
            </div>
            <div class="order_down">
                <p class="order_check_detail" @click="advDetail(item.or_status,item.or_id,0)">查看详情</p>
            </div>
        </li>
        <!-- 数字传单 v-for="(item,index) in orderList1"  ="showType === 2"-->
    </ul>

    <ul class="order_wrap" v-else>
         <li style="height: 4.2rem;" v-for="(item,index) in orderList1" :code="item.o_id">
            <div class="order_up">
                <p v-if="item.o_status === 3">待付款</p>
                <p v-else>已上刊</p>
                <img  @click="cancalAdv(item.o_id,2)" src="./img/delete.png" alt="">
            </div>
            <div class="order_center" style="height:48%;">
                <div class="order_title">
                    <span>订单编号:</span>
                    <span>{{ item.o_number }}</span>
                </div>
                <div class="order_title">
                    <span>广告主姓名:</span>
                    <span>{{ item.h5_src_title }}</span>
                </div>

            </div>
            <div class="order_down">
                <p  @click="advDetail(item.o_status,item.o_id,1)" class="order_check_detail">查看详情</p>
            </div>
        </li>
    </ul>

    <!-- 删除弹窗 -->
        <div class="alert_collect_wrap" v-show="show_cancel">
            <div class="alert_box">
                <img src="./img/cancel.png" alt="">
                <p>确定删除？</p>
                <div class="alert_bottom">
                    <p @click="sureCancel()" class="sureCancel">确定</p>
                    <p @click="cancelCancel()" class="cancelCancel">取消</p>
                </div>
            </div>
        </div>
</div>
</template>

<script>
import { MessageBox, Indicator } from 'mint-ui'
export default {
  components: {
    MessageBox,
    Indicator
  },
  data () {
    return {
      show_cancel: false,
      current: 0,
      typeList: ['展示广告', '数字传单'],
      orderList: [], // 所有数据的数组
      showType: 1, // 默认是展示型广告
      orderList1: [],
      cancelIdZ: -1, // 删除的订单id 展示型
      cancelIdS: -1, // 数字型
      cancelType: -1 // 判断删除的是数字型 还是展示型
    }
  },
  methods: {
    advDetail: function (status, id, type) {
      this.$router.push({
        path: '/waitPay',
        query: {
          status: status,
          id: id,
          type: type
        }
      })
    },
    advList: function (typevalue) { //获取全部订单列表
      this.$axios.get(this.utils.api + '/wxpub/orders_controller/orderIndex')
        .then((res) => {
        //   console.log(res.data.data)
          Indicator.close()
          //   if(res.data.data.length === 0){
          //       console.log('为空')
          //   }else {
          //       this.orderList = res.data.data
          //   }
          let obj = [
            [
              {//展示广告
                'or_id': 34,
                'or_number': '152490726317937',
                'adv_title': '自然堂助听器（藁城）',
                'or_total_money': 30,
                'or_status': 2,
                'adv_type': 1,
                'month': 1
              },
              {
                'or_id': 68,
                'or_number': '152698891761742',
                'adv_title': '寒蝉凄切',
                'or_total_money': 744,
                'or_status': 0,
                'adv_type': 1,
                'month': 6
              }
            ],
            [//数字传单
              {
                'h5_src_title': '来买地',
                'o_number': '152186214750676',
                'o_status': 3,
                'o_id': 12,
                'adv_type': 2
              },
              {
                'h5_src_title': '来买地2',
                'o_number': '152186214750676',
                'o_status': 3,
                'o_id': 15,
                'adv_type': 2
              }
            ]
          ]
          if (typevalue === 1) {
            // 展示型
            this.orderList = obj[0]
          } else {
            // 数字传单列表
            this.orderList1 = obj[1]
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    cancalAdv: function (orderId, type) {
      this.show_cancel = true
      if (type === 1) {
        this.cancelIdZ = orderId
        this.cancelType = 1
      } else {
        this.cancelIdS = orderId
        this.cancelType = 2
      }
    },
    cancelCancel: function () { // 取消 取消
      this.show_cancel = false
    },
    sureCancel: function () { // 确认取消
      this.show_cancel = false
      this.dianji = false
      if (this.cancelType === 1) { // 展示型
        this.orderList.splice(this.orderList.findIndex(item => item.or_id === this.cancelIdZ), 1)
      } else {
        this.orderList1.splice(this.orderList1.findIndex(item => item.o_id === this.cancelIdS), 1)
      }
      this.show_cancel = false
    },
    selectStyle (item, index) {
      this.current = index
      Indicator.open()
      if (index === 0) {
        this.showType = 1
        this.advList(1)
      } else {
        this.showType = 2
        this.advList(2)
      }
    }
  },
  beforeCreate: function () {

  },
  created: function () {
    // console.log('-----------------组件创建了-----------------')
    Indicator.open()
    this.advList(this.showType) // 默认 展示 展示型广告 1  数字传单 2
  },
  beforeMount: function () {
    // console.log(this.$route.query.type)
  },
  mounted: function () {
    // this.timeDown()
    // console.log(this.$route.query.type)/
  },
  deactivated () {
    Indicator.close()
  }
}
</script>

<style lang="css" scoped>
@import './css/my_order.css';
.my_order_box{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #F3F6F5;
}
/* 弹窗 */
.alert_collect_wrap {
    width: 100%;
    height: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,.3);
}
.alert_box {
    width: 60%;
    height: 4.5rem;
    background-color: #fff;
    border-radius: 0.3rem;
    margin-left: 20%;
    margin-top: 57%;
    text-align: center;
}
.alert_box img {
    width: 3rem;
    height: 2rem;
    margin-top: 0.6rem;
}
.alert_box p {
    font-size: 0.4rem;
    color: #666666;
}
.alert_bottom {
    width: 100%;
    height: 1rem;
    
  /* 兼容微信弹性盒写法---vue不进行旧版本flex兼容 */
  display: -webkit-box; 
  display: -moz-box; 
  display: -ms-flexbox; 
  display: -webkit-flex;
  display: flex;
  
    align-items: center;
    justify-content: space-around;
    text-align: center;
    margin-top: 0.2rem;
}
.alert_bottom p:nth-of-type(1) {
    background-color: #fff;
    border: 0.02rem solid #3e87f3;
    color: #3e87f3;
}
.alert_bottom p {
    width: 2rem;
    height: 0.7rem;
    background-color: #3e87f3;
    border-radius: 0.5rem;
    line-height: 0.7rem;
    color: #fff;
    font-size: 0.35rem;
}
.order_wrap_title{
    width: 100%;
    height: 1.13rem;
    line-height: 1.13rem;
    text-align: center;
    background-color: #fff;
}
.order_wrap_title li{
    width: 49%;
    height: 100%;
    float: left;
    font-size: 0.4rem;
    color: #666666;
}
.order_wrap li:first-child{
    height:4.2rem;
}
.order_title_on{
    color: #5286EC;
    border-bottom: 0.08rem solid #5286EC;
}
.order_title_on ul li p{
    display: block;
    width: 33%;
    margin: 0 auto;
}
</style>

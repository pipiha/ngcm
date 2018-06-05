<template>
<div class="my_order_box">
    <div v-wechat-title="$route.meta.title"></div>
    <ul class="order_wrap">
        <!-- <li>
            <div class="order_up">
                <p>已付款</p>
                <img  @click="cancalAdv()" src="./img/delete.png" alt="">
            </div>
            <div class="order_center">
                <div class="order_title">
                    <span>订单编号:</span>
                    <span>1232509386038</span>
                </div>
                <div class="order_title">
                    <span>广告主姓名:</span>
                    <span>张三三</span>
                </div>
                <div class="order_title">
                    <span>合计金额:</span>
                    <span>￥9000.00</span>
                </div>

            </div>
            <div class="order_down">
                <p class="order_check_detail">查看详情</p>
            </div>
        </li> -->
        <li>
            <div class="order_up">
                <p style="color:#333333;">已完成</p>
                <img  @click="cancalAdv()" src="./img/delete.png" alt="">
            </div>
            <div class="order_center">
                <div class="order_title">
                    <span>订单编号:</span>
                    <span>1232509386038</span>
                </div>
                <div class="order_title">
                    <span>广告主姓名:</span>
                    <span>张三三</span>
                </div>
                <div class="order_title">
                    <span>合计金额:</span>
                    <span>￥9000.00</span>
                </div>

            </div>
            <div class="order_down">
                <p class="order_check_detail" @click="advDetail()">查看详情</p>
            </div>
        </li>

    </ul>

    <!-- 删除弹窗 -->
        <div class="alert_collect_wrap" v-show="show_cancel">
            <div class="alert_box">
                <img src="./img/cancel.png" alt="">
                <p>确定删除？</p>
                <div class="alert_bottom">
                    <p @click="sureCancel(advType)" class="sureCancel">确定</p>
                    <p @click="cancelCancel()" class="cancelCancel">取消</p>
                </div>
            </div>
        </div>

</div>
</template>

<script>
import { MessageBox } from 'mint-ui'
export default {
  components: {
    MessageBox
  },
  data () {
    return {
      show_cancel: false
    }
  },
  methods: {
    advDetail: function () {
      this.$router.push({
        path: '/waitPay',
        query: {
          type: 0
        }
      })
    },
    advList: function () {
      let postData = this.$qs.stringify({

      })
      this.$axios({
        methods: 'post',
        url: 'api/',
        data: postData
      })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    cancalAdv: function () {
      this.show_cancel = true
    },
    cancelCancel: function () { // 取消 取消
      this.show_cancel = false
    },
    sureCancel: function () { // 确认取消
      console.log('确认取消')
    }
  },
  beforeCreate: function () {

  },
  created: function () {
    // console.log('-----------------组件创建了-----------------')
  },
  beforeMount: function () {
    // console.log(this.$route.query.type)
  },
  mounted: function () {
    // this.timeDown()
    // console.log(this.$route.query.type)/
  }
}
</script>

<style lang="css" scoped>
@import './css/my_order.css';
.my_order_box{
    position: fixed;
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
</style>

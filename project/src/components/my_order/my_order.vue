<template>
<div>
    <div v-wechat-title="$route.meta.title"></div>
    <ul class="order_wrap">
        <li>
            <div class="order_up">
                <p>已付款</p>
                <img src="./img/delete.png" alt="">
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
        </li>
        <li>
            <div class="order_up">
                <p style="color:#333333;">已完成</p>
                <img src="./img/delete.png" alt="">
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
        </li>

    </ul>
</div>
</template>

<script>
export default {
  data () {
    return {
    //   advType: ''
    }
  },
  methods: {

  },
  beforeCreate: function () {

  },
  created: function () {
    console.log('-----------------组件创建了-----------------')
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
</style>

<template>
<div>
    <div v-wechat-title="$route.meta.title"></div>
    <!-- 支付成功详情 -->
    <div class="success_wrap" style="display: none;">
        <img src="./img/success.png" alt="">
        <p class="pay_des" style="margin-left: -0.3rem;">充值成功</p>
        <!-- 支付成功 -->
        <ul>
            <li>
                <p>充值方式</p>
                <div class="wechat_img">
                    <p style="float: right;">微信支付</p>
                    <img src="./img/wechat.png" alt="">
                </div>
            </li>
            <li>
                <p>充值金额</p>
                <div>
                    <p  style="float: right;">￥3000.00</p>
                </div>
            </li>
        </ul>
        <div class="sure_pay">查看广告</div>
    </div>

    <!-- 支付失败详情 -->
    <div class="fail_wrap">
        <img src="./img/fail.png" alt="">
        <p class="pay_des">充值失败</p>
        <div class="fail_money_box">
            <span>￥</span><p style="width: 0rem;">3000.00</p>
            <p>申请充值失败，请稍后重试</p>
        </div>
        <div class="sure_pay">确定</div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import './css/pay_detail.css';
</style>

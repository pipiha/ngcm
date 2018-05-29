<template>
    <div class="pay_wrap">
        <div v-wechat-title="$route.meta.title"></div>
        <div class="pay_money_box">
            <p>充值金额</p>
            <p>￥3000.00</p>
        </div>
        <p class="pay_title">充值方式</p>
        <div class="pay_money_box">
            <img src="./img/wechat.png" alt="">
            <p style="color :#333333;">微信支付</p>
        </div>
        <div class="sure_pay">确认支付</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
@import './css/pay_type.css';

</style>



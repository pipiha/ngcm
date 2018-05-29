<template>
<div>
    <div v-wechat-title="$route.meta.title"></div>
    <!-- <p>支付详情</p> -->
    <div class="consumption_up">
        <img src="./img/chong.png" alt="">
        <p>到账金额</p>
        <span>￥</span>
        <p>1.00</p>
    </div>

    <ul class="ad_money_wrap">
        <li>
           <div class="adv_title">
                <span>xxx查看了您老庙黄金广告</span>
                <span>-2.00</span>
                <p>5月3日  08:55</p>
            </div>
       </li>
       <li>
           <div class="adv_title">
                <span>xxx查看了您老庙黄金广告</span>
                <span>-2.00</span>
                <p>5月3日  08:55</p>
            </div>
       </li>
       <li>
           <div class="adv_title">
                <span>xxx查看了您老庙黄金广告</span>
                <span>-2.00</span>
                <p>5月3日  08:55</p>
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
    data(){
        return {
            show_ul:false
        }
    }
}
</script>

<style>
@import './css/consumption_details.css';
</style>



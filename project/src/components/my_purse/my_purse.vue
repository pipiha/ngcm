<template>
<div>
    <div v-wechat-title="$route.meta.title"></div>
    <div class="purse_wrap">
        <img src="./img/purse_bj.png" alt="">
    </div>
    <!-- 内容 -->
    <div class="purse_conent_wrap">
        <div class="conent_up">
            <p>我的总资产(元)</p>
            <img src="./img/721009638153387289.png" alt="">
        </div>

        <div class="conent_center">
            <p>3150.50</p>
            <p>农广传媒累计为您创造收益（元）：<span>1620.42</span></p>
        </div>
        <div class="conent_center_borer"></div>

        <ul class="purse_ul">
            <li>
                <p>我的零钱(元)</p>
                <p>150.50</p>
            </li>
            <li>
                <p>推广费余额<i>?</i></p>
                <p>3000.00</p>
            </li>
        </ul>
    </div>

    <!-- 提现 -->
    <div class="tx_wrap">
        <div class="tx_up">
            <i>?</i>
        </div>
        <p>150.00</p>
        <p>可提现金额(元)</p>
        <p>我要提现</p>
    </div>
     
</div>
</template>

<script>
export default {
    
}
</script>

<style>
@import './css/my_purse.css';
</style>



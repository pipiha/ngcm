<template>
<div>
    <div v-wechat-title="$route.meta.title"></div>
    <div  class="month_bill_up">
        <div class="bill_up_left">
            <div class="check_time">
                <p>2018年5月</p>
                <img src="./img/down.png" alt="">
            </div>
            <!-- <p>2018年5月</p>
            <img src="./img/down.png" alt=""> -->
            <div class="money_title">
                <span>支出</span>
                <span>￥235.00</span>
                <span>收入</span>
                <span>￥35.70</span>
            </div>
        </div>
        <div class="bill_up_right">
            <p>筛选</p>
            <p>月账单</p>
        </div>
    </div>

    <!-- 零钱明细 -->
    <ul class="wallet_list">
        <li>
            <div class="wallet_list_left">
                <img src="./img/wallet_wechat.png" alt="">
                <p>红包提现红包提现红包提现红包提现</p>
                <p>5月3日  08:55</p>
            </div>
            <div class="wallet_list_right">
                <p>-222.00</p>
                <img src="./img/wallet_right.png" alt="">
            </div>
        </li>
        <li>
            <div class="wallet_list_left">
                <img src="./img/wallet_zu.png" alt="">
                <p>红包提现红包提现红包提现红包提现</p>
                <p>5月3日  08:55</p>
            </div>
            <div class="wallet_list_right">
                <p style="color: #F4B779;">+222.00</p>
                <img src="./img/wallet_right.png" alt="">
            </div>
        </li>
        <li>
            <div class="wallet_list_left">
                <img src="./img/wallet_yong.png" alt="">
                <p>红包提现红包提现红包提现红包提现</p>
                <p>5月3日  08:55</p>
            </div>
            <div class="wallet_list_right">
                <p>-222.00</p>
                <img src="./img/wallet_right.png" alt="">
            </div>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    
}
</script>

<style>
@import './css/my_wallet.css';
</style>



<template>
    <div class="red_bj">
        <div v-wechat-title="$route.meta.title"></div>

        <!-- 拆红包 -->
        <!-- <div>
            <img style="margin-top: 1rem;" src="./img/open_red.png" alt="">
            <div class="logo_wrap">
                <img style="margin-top: 1rem;" src="./img/logo.png" alt="">
                <p>农广传媒</p>
                <p>送您一个红包</p>
                <p>拆红包</p>
                <p>分享链接 赚更多</p>
            </div>
        </div> -->

        <!-- 领取红包 -->
        <!-- <div>
            <img src="./img/send_red.png" alt="">
            <div style="margin-top: 4rem;height:auto;" class="get_red_wrap">
                <span>0.45</span><span>元</span>
                <p>已放入您的零钱，快来提现吧！</p>
                <p>关注我们</p>
                <p>分享链接 赚更多</p>
                <p>亲，关注我们,</p>
                <p>可以在“用户中心-我的钱包”来提取现金哦！</p> -->
                <!-- <p>立即前往</p>
                <p>亲，可以在“用户中心-我的钱包”</p>
                <p>来提取现金哦！</p> -->
            <!-- </div>
            <div class="share_bj">
                <img src="./img/jiantou.png" alt="">
                <p>点击右上角菜单</p>
                <p>【分享给朋友、朋友圈】</p>
                <p>帮您继续拆红包</p>
            </div>
        </div> -->

        <!-- 奖励金 -->
        <div>
            <img src="./img/send_red.png" alt="">
            <div style="margin-top: 4rem;height:auto;" class="get_jiangli_wrap">
                <span>拆到</span><span style="margin-left: 0.2rem;">0.45</span><span>元</span>
                <p>已放入您的零钱，快来提现吧！</p>
                <p style="margin-top: 1.5rem;">立即前往</p>
                <p>亲，可以在“用户中心-我的钱包”</p>
                <p>来提取现金哦！</p>
                <!-- <p>立即前往</p>
                <p>亲，可以在“用户中心-我的钱包”</p>
                <p>来提取现金哦！</p> -->
            </div>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>
@import './css/red_packets.css';
</style>

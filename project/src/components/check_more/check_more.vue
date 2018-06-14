<template>
<div>
    <div v-wechat-title="$route.meta.title"></div>
    <div>
        <div class="banner_wrap">
            <img src="./img/bj-tx.png" alt="">
            <p class="site_name">我的广告</p>
            <span v-show="show_people" style="color: #FFFFFF;display: inline-block;margin-top: -1.6rem;margin-left: -0.7rem;position: absolute;">扫码次数</span>
        </div>

        <!-- 点位查看更多 -->
        <ul class="site_msg_wrap" v-show="show_site">
            <li class="check_site">
                <p style="width:85%;">辖小辛庄</p>
                <img style="margin-top: 0.6rem;margin-right: 0.2rem;" src="./img/left2.png" alt="">
            </li>
            <li class="check_site">
                <p style="width:85%;">辖小辛庄</p>
                <img style="margin-top: 0.6rem;margin-right: 0.2rem;" src="./img/left2.png" alt="">
            </li>
        </ul>

        <!-- 互动人数 -->
        <ul class="people_wrap" style="display: none;" v-show="show_people">
            <li>
                <div class="people_left">
                    <img src="./img/head.jpg" alt="">
                    <p>飞跃**</p>
                    <p>2018-01-18 10:35:20</p>
                </div>
                <img src="./img/girl.png" alt="">
            </li>
            <li>
                <div class="people_left">
                    <img src="./img/head.jpg" alt="">
                    <p>飞跃**</p>
                    <p>2018-01-18 10:35:20</p>
                </div>
                <img src="./img/boy.png" alt="">
            </li>
        </ul>

        <!-- 数据为空时的显示 -->
        <!-- <div class="no_msg">
            <p>暂无广告</p>
        </div>  -->
    </div>

</div>
</template>

<script>
export default {
  data () {
    return {
      show_people: false,
      show_site: true
    }
  }
}
</script>

<style scoped>
@import './css/check_more.css';
</style>

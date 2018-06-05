<template>
        <div class="tab">
            <div class="time_check">
                <span class="time_check_on">昨天</span>
                <span>近7天</span>
                <span>根据日期搜索</span>
            </div>

            <div class="site_num_box">
                <div class="site_num_title">
                    <p>投放点位</p>
                    <img src="./img/house.png" alt="">
                </div>
                <p class="site_num_tag">53</p>
                <img src="./img/time_bj.png" alt="">
            </div>

            <ul class="site_bili_ul">
                <li>
                    <div class="site_bili_left">
                        <p>田村</p>
                        <p>小焦镇</p>
                    </div>
                    <div class="site_bili_center">
                        <p></p>
                        <p></p>
                    </div>
                    <div class="site_bili_right">
                        <p>699</p>
                        <img src="./img/num_play.png" alt="">
                  </div>
                </li>
                <li>
                    <div class="site_bili_left">
                        <p>田村</p>
                        <p>小焦镇</p>
                    </div>
                    <div class="site_bili_center">
                        <p></p>
                        <p style="width: 90%;"></p>
                    </div>
                    <div class="site_bili_right">
                        <p>699</p>
                        <img src="./img/num_play.png" alt="">
                    </div>
                </li>
                <li>
                    <div class="site_bili_left">
                        <p>田村</p>
                        <p>小焦镇</p>
                    </div>
                    <div class="site_bili_center">
                        <p></p>
                        <p style="width: 70%;"></p>
                    </div>
                    <div class="site_bili_right">
                        <p>699</p>
                        <img src="./img/num_play.png" alt="">
                    </div>
                </li>
            </ul>

        </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import './css/num_detail.css';
@import '../play_time/css/play_time.css';
.site_bili_left{
    text-align: left;
}
</style>

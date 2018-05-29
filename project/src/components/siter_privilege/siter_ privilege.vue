<template>
<div>
    <div v-wechat-title="$route.meta.title"></div>
        <!-- 个人信息 -->
    <div class="siter_wrap">
        <div class="siter_per_left">
            <img src="./img/62bc3e09c08fb850066fa7a3196a7cb0_1.jpg" alt="">
            <div class="siter_name_wrap">
                <p>小心心</p>
                <img src="./img/queen.png" alt="">
                <span>1111-1111-1111</span>
                <p class="jue_se">点位主</p>
            </div>
        </div>
        <div class="siter_people">
            <span>1888</span>
            <span>/顾客</span>
        </div>
    </div>

    <!-- 选择列表 -->
    <ul class="siter_ul">
        <li>
            <img src="./img/my_buser.png" alt="">
            <p>我的顾客</p>
            <img src="./img/left.png" alt="">
        </li>
        <li>
            <img src="./img/my_active.png" alt="">
            <p>我发布的活动</p>
            <img src="./img/left.png" alt="">
        </li>
    </ul>

    <!-- 活动展示 -->
    <ul class="siter_active">
        <li>
            <img src="./img/317630780744939915.png" alt="">
        </li>
    </ul>
    <!-- 查看更多 -->
    <div class="check_more">
        查看更多
    </div>
    
</div>
</template>

<script>
export default {
    
}
</script>

<style>
@import './css/siter_privilege.css';
</style>



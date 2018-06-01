<template>
    <div>
        <div v-wechat-title="$route.meta.title"></div>
        <div class="make_adv_title">
            <p>开始创作</p>
            <p>开启您的广告之旅</p>
        </div>
        <div class="make_adv_center">
            <div class="make_adv_left">
                <div>
                    <img src="./img/clip.png" alt="">
                </div>
                <input type="text" placeholder="请输入广告名称">
                <input type="text" placeholder="请输入联系电话">
            </div>
            <div class="make_adv_right">
                <div>
                    <img src="./img/add.png" alt="">
                </div>
                <p>添加广告机背景照片</p>
            </div>
        </div>
        <div class="sure_btn">下一步</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
@import './css/make_adv.css'
</style>



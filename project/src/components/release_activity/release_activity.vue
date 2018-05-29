<template>
<div>
    <div v-wechat-title="$route.meta.title"></div>
    <div class="release_up">
        <!-- 上传图片 -->
        <div class="uploadImg" style="position: relative;">
            <input style="z-index:10;" class="upload_file" id='uploadCompress' type="file" name="picture" accept="image/*">
            <div class="up_text_wrap">
                <img src="./img/upload.png" alt="">
            </div>
            <p>添加活动照片</p>
            <img style="cursor:pointer;" class="upload_ctn_img" src="./img/111.png">
        </div>

        <!-- 活动描述 -->
        <div class="act_describe_wrap">
            <p>活动描述</p>
            <!-- <input type="text" placeholder="请输入活动描述"> -->
            <textarea name="" id="" cols="30" rows="10" placeholder="请输入活动描述"></textarea>
        </div>
    </div>

    <div class="release_down">
        <!-- 活动描述 -->
        <div class="act_describe_wrap" @click="showMore()">
            <p style="line-height: 1.5rem;height:1.5rem;">更多</p>
            <img class="more_img" src="./img/up.png" alt="">
        </div>
        <ul v-show="show_more">
            <li>
                <p>活动地址</p>
                <div class="li_right">
                    <p style="width:86%;letter-spacing: 0.02rem;text-overflow:ellipsis;white-space: nowrap;overflow: hidden;">石家庄晋州市马宇镇人人乐超市</p>
                    <img src="./img/address.png" alt="">
                </div>
            </li>
            <li>
                <p>活动时间</p>
                <div class="li_right">
                    <div class="on">1天</div>
                    <div>3天</div>
                    <div>5天</div>
                    <div>7天</div>
                </div>
            </li>
            <li>
                <p>联系方式</p>
                <div class="li_right">
                    <input type="text" placeholder="请输入您的联系方式">
                </div>
            </li>
        </ul>
    </div>

    <div class="finish_btn">提交活动</div>

    <!-- <Input v-model="value8" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input> -->

    <!-- 提交成功弹窗 -->
    <div class="alert_collect_wrap" v-show="isSuccess">
        <div class="alert_box">
            <div>
                <img src="./img/close.png" alt="">
            </div>
            <img src="./img/tj_success.png" alt="">   
        </div>
    </div>



    
</div>
</template>

<script>

export default {
    data(){
        return {
            isSuccess: false,
            show_more: true
        }
    },
    beforeCreate: function () {
        
    },
    created: function () {
        document.title='发布活动';
    },
    beforeMount: function () {

    },
    mounted:function(){

    },
    methods: {
        showMore: function(){ //展示更多
            this.show_more = !this.show_more;
        }
    }
}
</script>;

<style>
@import './css/release_activity.css';
</style>



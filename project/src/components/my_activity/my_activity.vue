<template>
    <div>
        <div v-wechat-title="$route.meta.title"></div>
        <ul class="my_act_tab">
            <li v-for="(item,index) in list_type" :class="{act_on:index == isClick}" @click="clickLi(item,index)">{{ item }}</li>
            <!-- <li>往期活动</li> -->
        </ul>

        <ul class="my_act_msg">
            <li>
                <img src="./img/Group 2.png" alt="">
                <p>品牌厨具，买4送一</p>
                <span>2018-09-09 10:00:00</span>
                <span>晋州市马于镇人人乐超市</span>
                <div class="time_out_show">
                    <img src="./img/timeout.png" alt="">
                </div>
            </li>
            <li>
                <img src="./img/Group 3.png" alt="">
                <p>品牌厨具，买4送一</p>
                <span>2018-09-09 10:00:00</span>
                <span>晋州市马于镇人人乐超市</span>
            </li>
            <li>
                <img src="./img/Group 4.png" alt="">
                <p>品牌厨具，买4送一</p>
                <span>2018-09-09 10:00:00</span>
                <span>晋州市马于镇人人乐超市</span>
            </li>
        </ul>
    </div> 
</template>

<script>
export default {
    data(){
        return {
            isClick: 0,
            list_type: ['活动进行中', '往期活动']
        }
    },
    methods: {
        clickLi(item,index){
            this.isClick = index;
        }
    }
}
</script>

<style>
@import './css/my_activity.css'
</style>



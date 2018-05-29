<template>
<div>
    <div v-wechat-title="$route.meta.title"></div>
    <div class="question_wrap">
        <div class="qs_bj">
            <img src="./img/qs_bj.png" alt="">
        </div>
        <p>申请历史</p>
        <!-- <Input v-model="value" placeholder="Enter something..." style="width: 300px"></Input> -->
        <div class="qs_input_box">
            <!-- <Input icon="chevron-down" placeholder="请选择您的反馈类型"></Input> -->
            <input type="text" placeholder="请选择您的反馈类型" readonly="readonly">
            <input type="text" placeholder="请填写您的姓名">
            <input type="text" placeholder="请填写您的手机号">
            <textarea type="textarea" placeholder="请填写您的留言。"></textarea>
        </div>

        <div class="submit_btn">
            提交申请
        </div>

        <div v-show="show_check_type"  class="submit_btn sure_btn">
            确定
        </div>

        <!-- <div style="width:100%;height:1rem;">
            <p>选择反馈类型</p>
            <img src="./img/" alt="">
        </div> -->

        <!-- type选择 -->
        <mt-picker v-show="show_check_type" :slots="slots" @change="onValuesChange" style="background-color:#fff;"></mt-picker>

    </div>
</div>
</template>

<script>
import { Picker } from 'mint-ui';
// import { Popup } from 'mint-ui';
// import { DatetimePicker } from 'mint-ui';

export default {
    components:{
        Picker
    },
    data() {
        return {
            show_check_type: false,
            slots: [
                {
                    // flex: 1,
                    values: ['投诉', '建议', '表扬', '咨询'],
                    // className: 'slot1',
                    textAlign: 'center'
                }, 
            ]
        }
    },
    methods: {
        onValuesChange(picker, values) {
            console.log(values[0]);
            // if (values[0] > values[1]) {
            //     picker.setSlotValue(1, values[0]);
            //     console.log(getSlotValue(index));
            // }
        }
    },
}
</script>

<style>
@import './css/question_result.css';
</style>



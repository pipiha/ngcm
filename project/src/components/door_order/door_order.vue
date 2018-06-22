<template>
<div>

    <div class="ccc_box" style="">
      <!-- 优惠券显示 -->
      <div class="couppon_wrap" id="couppon_wrap">

      </div>
      <div class="order_continue">返回</div>

      <!-- 订单为空时，显示 -->
      <div class="wrap_clear" id="coupon_close">
        <!-- <p class="closeCoupon" style="">关闭</p> -->
        <img class="kong" src="./img/hh.png" alt="">
        <p>暂无可用优惠券</p>
        <div class="closeCoupon">关闭</div>
      </div>
    </div>

    <div class="order_wrap">
      <!-- 下单banner -->
      <div class="orderBanner"></div>
      <!-- 广告主姓名 -->
      <div class="user_wrap">
        <p>广告主姓名</p>
        <input class="userName" type="text" name="" value="" placeholder="请填写广告主姓名">
      </div>
      <!-- 广告主电话 -->
      <div class="user_wrap">
        <p>广告主电话</p>
        <input class="userTel" type="number" name="" value="" placeholder="请填写广告主电话">
      </div>
      <!-- 选择开始和结束日期 -->
      <div class="user_wrap">
        <p>播放日期</p>
        <div class="check_time">
          <span id="beginTime" data-index="1" class="userStart" style="cursor: pointer;">请选择开始日期</span>
          <span>—</span>
          <span id="endTime" data-index="2" class="userClose" style="cursor: pointer;">请选择结束日期</span>
        </div>
      </div>
      <!-- 视频时长 -->
      <div class="user_wrap">
        <p>视频时长</p>
        <div class="check_time check_time_tabindex" id="change_langth" style="cursor: pointer;">
          <span class="time_num">请选择播放视频时长</span>
          <img id="check_play" src="./img/coin.png" alt="">
        </div>
      </div>
      <!-- 播放点位 -->
      <div class="user_wrap" style="height:auto;">
        <p>播放点位</p>
        <div class="check_time" id="or_id_check">
            <!-- data-id =""   {:session('user_info.member_work_location')} -->
          <span class="userPointer" data-id =""  style="color:black;">石家庄市</span>
          <img id="check_time" src="./img/coin.png" alt="">
        </div>
        <!-- 点位选择结果 -->
        <div class="area_result">
          <div class="area_result_up">
            <p class="up_title">全选整镇</p>
            <!-- <div class="area_result_every">
              <p>1111</p>
              <span>20</span>
              <i class="removeTownBtn">×</i>
            </div>
            <div class="area_result_every">
              <p>2222</p>
              <span>20</span>
              <i class="removeTownBtn">×</i>
            </div>
            <div class="area_result_every">
              <p>3333</p>
              <span>20</span>
              <i class="removeTownBtn">x</i>
            </div> -->
          </div>
          <div class="area_result_down_ctn">
           <!-- <div class="area_result_down">
              <p class="up_title">小焦镇</p>
               <div class="area_result_v">
                <p>哈哈哈</p>
                <i class="removeVillageBtn">×</i>
              </div>
            </div> -->
          </div>

          <div class="area_result_num">
            <p>点位总计：</p><span class="siteAll">0</span>
          </div>

        </div>
      </div>
      <!-- 活动优惠 -->
      <div id="coupon" class="user_wrap" style="margin-bottom:0.6rem;">
        <p>活动优惠</p>
        <span class="activeTime" style="color:black;text-algin:left;">无可选优惠券</span>
      </div>

      <!-- 提交订单 -->
      <div class="submit_btn" >提交订单</div>

      <!-- 选择乡镇 村 -->
      <!-- <div class="check_area">
        <div class="check_area_up">
          <ul>
            <li id="town_title" class="color_style">镇/乡</li>
            <li id="village_title" style="display:none;">村</li>
          </ul>
        </div>
        <div id="town_msg" class="check_area_center"></div>
        <div id="village_msg" class="check_area_center"></div>
        <div class="check_area_down">
          <p class="allCheck">全选</p>
          <p class="allCancel">取消</p>
          <p class="addArea">添加</p>
        </div>
      </div>
    </div> -->

    <!-- 时长选择 -->
<div class="areaSelect_cover" style="display:none;"></div>
<div class="areaSelect_ctn" style="display:none;">
    <div class="clear areaSelect_ctn_head">
        <div class="f_l areaSelect_ctn_left">取消</div>
        <div class="f_r areaSelect_ctn_right">确认</div>
    </div>
    <div class="areaSelect_body" id="banner-box">
        <ul class="areaSelect_body_ul banner-show">
            <li class="areaSelect_body_li on">15秒</li>
            <li class="areaSelect_body_li ">30秒</li>
            <li class="areaSelect_body_li ">45秒</li>
            <li class="areaSelect_body_li ">60秒</li>
        </ul>
        <div class="areaSelected_on"></div>
    </div>

</div>

  <!-- 时间选择 -->
  <div id="datePlugin"></div>

  <!-- 弹框 -->
  <div class="alert_wrap"></div>
  <!--loading-->
  <div class="loading" style="display: none"><div class="loading-cover"></div> <div class="loader circle-spin small"> <div class="loader-placeholder"></div> </div> </div>
  <!-- <input type="hidden" id="csrf_token" name="csrf_token" value="{:session('csrf_token')}"> -->
</div>

</div>
</template>

<script>
import Vue from 'vue'
import { init } from './order.js' // 注意路径
// import { init } from './order.js'
// Vue.use(init)
export default {
  data () {
    return {

    }
  },
  methods: {

  },
  beforeCreate: function () {

  },
  created: function () {
    // init()
    // this.__startTime
  }

}
</script>

<style scoped>
@import './css/order.css';
@import './css/date.css';
@import './css/coupon.css';
@import './css/time.css';
 .order_continue{
        width: 57%;
        height: 1rem;
        margin: 0 auto;
        margin-top: 1.2rem;
        line-height: 1rem;
        text-align: center;
        border-radius: 0.7rem;
        background-color: #2993f1;
        font-size: 0.45rem;
        color: #fff;
        cursor: pointer;
      }
</style>

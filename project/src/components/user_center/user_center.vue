<template>
<div>
    <div v-wechat-title="$route.meta.title"></div>
        <div class="user_center_box">
      <div class="user_up_box">
        <img :src="userInfo.user_thumbnail" alt="">
        <p>{{ userInfo.user_nickname}}</p>
        <p v-if="userInfo.bindPhone != ''" >{{ userInfo.bindPhone}}</p>
        <p v-else class="bind_phone" @click="bindPhone()">立即绑定手机号</p>
      </div>
    </div>

    <ul class="user_cen_box">
      <li>
        <router-link to="/MyParse">
          <img src="./img/Rectangle 54.png" alt="">
          <p>我的钱包</p>
        </router-link>
      </li>
      <li>
        <router-link :to="{ path:'/myAdv', query: { type:  0} }">
          <img src="./img/my_love.png" alt="">
          <p>我感兴趣</p>
        </router-link>
      </li>
      <li>
        <router-link to="/myAdv?type=1">
          <img style="width: 0.5rem;" src="./img/foot.png" alt="">
          <p>我的足迹</p>
        </router-link>
      </li>
      <li>
        <router-link to="/myAdv?type=2">
          <img src="./img/my_adv.png" alt="">
          <p>我的广告</p>
        </router-link>
      </li>
      <li>
        <router-link to="/myOrder">
          <img src="./img/my_order.png" alt="">
          <p>我的订单</p>
        </router-link>
      </li>
      <li>
        <router-link to="/siterPrivilege">
          <img src="./img/siter_t.png" alt="">
          <p>点位主特权</p>
        </router-link>
      </li>
    </ul>

    <div class="tab_line"></div>

    <div class="user_active">
      <div class="active_title">
        <img src="./img/siter_t.png" alt="">
        <p>附近活动</p>
      </div>
      <ul class="siter_active">
        <template>
          <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide>I'm Slide 1</swiper-slide>
            <swiper-slide>I'm Slide 2</swiper-slide>
            <swiper-slide>I'm Slide 3</swiper-slide>
            <swiper-slide>I'm Slide 4</swiper-slide>
            <swiper-slide>I'm Slide 5</swiper-slide>
            <swiper-slide>I'm Slide 6</swiper-slide>
            <swiper-slide>I'm Slide 7</swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-scrollbar"   slot="scrollbar"></div>
          </swiper>
        </template>
      </ul>
      <!-- <imgsrc="./img/show.png" alt=""> -->
      <p class="check_more_submit" @click="toMore()">查看更多</p>
    </div>
</div>
</template>

<script>
import slider from 'vue-concise-slider'// 引入slider组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'carrousel',
   components: {
    swiper,
    swiperSlide
  },
  data () {
    
    return {
      userInfo: '',
      promotion: '',
         swiperOption: {//swiper官网看api，链接http://www.swiper.com.cn/api/
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          autoplay: 3000,
          direction : 'horizontal',
          grabCursor : true,
          setWrapperSize :true,
          autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          autoplay: true,
          speed: 900,
          loop:true,
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,          
          prevButton:'.swiper-button-prev',//上一张
          nextButton:'.swiper-button-next',//下一张
          scrollbar:'.swiper-scrollbar',//滚动条
          mousewheelControl : true,
          observeParents:true,
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true,
         }
    }
  },
  methods: {
    getuserInfo: function () {
      this.$axios.get('api/wxpub/user/getuserinfo')
        .then((res) => {
          // console.log(res.data)
          //   res为axios包装后的数据体 自己请求的数据 在res。data 里面
          if (res.data.code === 200) {
            // 在这里不要比对code值 有些接口报错 但code值还是200
            // console.log(res.data.data.userInfo)
            this.userInfo = res.data.data.userInfo
            this.promotion = res.data.data.promotion.data
          }
        })
        .catch((err) => {
          console.error(err, '请求用户信息报错')
        })
    },
    // 绑定手机号
    bindPhone: function (){
      this.$router.push({
        path: '/phone'
      })
    },
    // myActivity 更多
    toMore: function () {
      this.$router.push({
        path: '/myActivity'
      })
    },
    // 获取附近的活动
    nearlyActive: function () {
      // this.$axios.get('api')
    }
  },
  beforeCreate: function () {

  },
  created: function () {
    this.getuserInfo()
  },
  beforeMount: function () {

  },
  mounted: function () {
    // this.timeDown()
  }
}
</script>

<style scoped>
@import './css/user_center.css';
.siter_active{
    width: 100%;
    height: 4rem;
    overflow: hidden;
}
.siter_active li{
    height: 4rem;
    cursor: pointer;
}
.siter_active li img{
    width:100%;
    height: 100%;
}
.swiper-slide{
  float: left;
  width: 100%;
  height:4rem;
}
</style>

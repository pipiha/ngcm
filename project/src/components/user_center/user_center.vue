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
          <img src="./img/my_love.png" alt="">
          <p>我的足迹</p>
        </router-link>
      </li>
      <li>
        <router-link to="/myAdv">
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
      <img v-for="(item,index) in promotion" src="./img/show.png" alt="">
      <p class="check_more_submit" @click="toMore()">查看更多</p>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      userInfo: '',
      promotion: ''
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
    bindPhone: function () {
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
    console.log('-----------------组件创建了-----------------')
    this.getuserInfo()
  },
  beforeMount: function () {

  },
  mounted: function () {
    // this.timeDown()
  }
}
</script>

<style>
@import './css/user_center.css';
</style>

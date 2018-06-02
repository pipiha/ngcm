<template>
  <div id="app">

    <!-- <router-link to="/actDetail">广告详情</router-link>
    <router-link to="/createPhoneadv">创建手机页面</router-link>
    <router-link to="/landingPage">落地页</router-link>
    <router-link to="/makeAdv">制作广告</router-link>
    <router-link to="/myActivity">我的活动</router-link>
    <router-link to="/myAdv">我的广告</router-link>
    <router-link to="/payType">支付方式</router-link>
    <router-link to="/payDetail">支付详情</router-link>
    <router-link to="/zhanDetail">展示广告详情</router-link> -->
    <!-- <router-link to="/numDetail">数字传单</router-link> -->
    <!-- <router-link to="">发布广告</router-link>
    <router-link to="">点位主特权</router-link>
    <router-link to="">点位详情</router-link>
    <router-link to="/playTime">播放总次数</router-link>
    <router-link to="">我的订单</router-link>
    <router-link to="">查看更多/查看人数</router-link>
    <router-link to="/phone">注册手机号</router-link>
    <router-link to="/red">领取红包</router-link> -->
    <!-- <keep-alive>
      <router-view v-if="$route.meta.keepAlive">
      </router-view>
    </keep-alive> -->
     <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* a{
  display: block;
  width: 100%;
  font-size: 0.4rem;
} */
html,body{
  background-color: #fff;
}
.kong_adv{
  width: 100%;
  height: 5rem;
  margin-top: 40%;
  text-align: center;
  font-size: 0.4rem;
  color: #999999;
}

</style>

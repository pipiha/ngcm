<template>
<div>
    <div v-wechat-title="$route.meta.title"></div>
        <!-- 个人信息 -->
    <div class="siter_wrap">
        <div class="siter_per_left">
            <img :src="siteInfoText.user_thumbnail" alt="">
            <div class="siter_name_wrap">
                <p>{{ siteInfoText.user_nickname}}</p>
                <img src="../../../static/siter_privilege/img/queen.png" alt="">
                <span>{{ siteInfoText.owner_phone }}</span>
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
        <li  @click="toNextPage(0)">
            <img src="../../../static/siter_privilege/img/my_buser.png" alt="">
            <p>我的顾客</p>
            <img src="../../../static/siter_privilege/img/left.png" alt="">
        </li>
        <li @click="toNextPage(1)">
            <img src="../../../static/siter_privilege/img/my_active.png" alt="">
            <p>我发布的活动</p>
            <img src="../../../static/siter_privilege/img/left.png" alt="">
        </li>
    </ul>

    <!-- 活动展示 -->
    <ul class="siter_active">
        <li>
            <img src="../../../static/siter_privilege/img/317630780744939915.png" alt="">
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
  data () {
    return {
      siteInfoText: ''
    }
  },
  methods: {
    toNextPage: function (index) {
      if (index === 0) { // 我的顾客
        this.$router.push({
          path: '/myCustomer'
        })
      } else { // 我的活动
        this.$router.push({
          path: '/myActivity'
        })
      }
    },
    getuserInfo: function () {
      this.$axios.get('api/wxpub/user/getuserinfo')
        .then((res) => {
          // console.log(res.data)
          //   res为axios包装后的数据体 自己请求的数据 在res。data 里面
          if (res.data.code === 200) {
            // 在这里不要比对code值 有些接口报错 但code值还是200
            // console.log(res.data)
          }
        })
        .catch((err) => {
          console.error(err, '请求用户信息报错')
        })
    },
    getSiterInfo: function () {
      this.$axios.get('api/wxpub/siter/getSiterInfo.html')
        .then((res) => {
        //   console.log(res.data)
          if (res.data.code === 200) {
            console.log(res.data.data.siterInfo)
            this.siteInfoText = res.data.data.siterInfo
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }

  },
  beforeCreate: function () {

  },
  created: function () {
    // this.imgUrl =
    this.getuserInfo()
    this.getSiterInfo()
  },
  beforeMount: function () {

  },
  mounted: function () {
    // this.timeDown()
    // this.getSiterInfo()
  }

}
</script>

<style scoped>
@import '../../../static/siter_privilege/css/siter_privilege.css';
</style>

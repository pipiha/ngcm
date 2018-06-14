<template>
<div class="siter_big_wrap">
    <div v-wechat-title="$route.meta.title"></div>
        <!-- 个人信息 -->
    <div class="siter_wrap">
        <div class="siter_per_left">
            <img :src="siteInfoText.user_thumbnail" alt="">
            <div class="siter_name_wrap">
                <p>{{ siteInfoText.user_nickname}}</p>
                <img src="./img/queen.png" alt="">
                <span>{{ siteInfoText.owner_phone }}</span>
                <p class="jue_se">点位主</p>
            </div>
        </div>
        <div class="siter_people">
            <span>{{ customerNum }}</span>
            <span>/顾客</span>
        </div>
    </div>

    <!-- 选择列表 -->
    <ul class="siter_ul">
        <li  @click="toNextPage(0)">
            <img src="./img/my_buser.png" alt="">
            <p>我的顾客</p>
            <img src="./img/left.png" alt="">
        </li>
        <li @click="toNextPage(1)">
            <img src="./img/my_active.png" alt="">
            <p>我发布的活动</p>
            <img src="./img/left.png" alt="">
        </li>
    </ul>

    <!-- 活动展示 -->
    <ul v-show="kongAct" class="siter_active" style="height: 4rem;overflow: hidden;">
        <li v-for="(item,index) in advList" @click="advDetails()">
            <img src="./img/317630780744939915.png" alt="">
        </li>
        <li>
            <img src="./img/317630780744939915.png" alt="">
        </li>
        <li>
            <img src="./img/317630780744939915.png" alt="">
        </li>
    </ul>
    <!-- 查看更多 -->
    <div v-show="kongAct" class="check_more" @click="goMore()">
        查看更多
    </div>

    <div v-show="!kongAct" class="check_more">
        暂无更多活动
    </div>

</div>
</template>

<script>
export default {
  data () {
    return {
      siteInfoText: '',
      customerNum: 0,
      advList: '',
      kongAct: true
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
    // 获取点位主信息
    getSiterInfo: function () {
      this.$axios.get('api/wxpub/siter/getSiterInfo.html')
        .then((res) => {
          if (res.data.code === 200) {
            this.siteInfoText = res.data.data.siterInfo // 点位主信息
            this.advList = res.data.data.siterPromotion // 发布的活动列表
            // console.log(this.advList)
            if (this.advList.data.length == 0) {
              this.kongAct = false
            } else {
              this.advList = res.data.data.siterPromotion.data // 活动信息
            }
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 获取顾客总数
    customerList: function () {
      this.$axios.get('api/wxpub/siter/getUserList.html')
        .then((res) => {
          if (res.data.code === 200) {
            this.customerNum = res.data.data.total
            // Indicator.close()
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 跳转更多
    goMore: function () {
      this.$router.push({
        path: '/myActivity'
      })
    },
    // 单个活动点击
    advDetails: function () {
      this.$router.push({
        path: '/actDetail',
        query: {
          code: '1'
        }
      })
    }

  },
  beforeCreate: function () {

  },
  created: function () {
    // this.imgUrl =
    // this.getuserInfo()
    this.getSiterInfo()
    this.customerList()
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
@import './css/siter_privilege.css';
.siter_big_wrap{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #F3F6F5;
}
</style>

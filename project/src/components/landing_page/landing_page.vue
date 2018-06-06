<template>
<div>
        <div v-wechat-title="$route.meta.title"></div>
        <div class="page_wrap">
        <h3>{{ dataTag.s_title }}</h3>
        <ul>
            <li>
                <img :src="dataTag.s_thumb" alt="">
                <p>{{ dataTag.s_content }}</p>
            </li>
            <!-- <li>
                <img src="./img/49476653903732260.png" alt="">
                <p>老庙黄金的每件首饰都是福瑞，蕴含着百年的祥瑞与好运。老庙黄金的每件首饰都是福瑞，蕴含着百年的祥瑞与好运。</p>
            </li> -->
        </ul>
        <div class="page_address">
            <div class="page_address_text">
                <div style="width: 100%;height: 0.7rem;">
                    <img src="./img/address.png" alt="">
                    <p>{{ dataTag.s_address }}</p>
                </div>
                <div style="width: 100%;height: 0.7rem;">
                    <img style="width: 0.4rem;height: 0.4rem;" src="./img/tel.png" alt="">
                    <p>{{ dataTag.s_phone}}</p>
                </div>
                <div class="page_like">
                    <img src="./img/Fill 1.png" alt="" v-show="show_like">
                    <p v-show="show_like">感兴趣</p>
                    <img src="./img/share.png" alt="" v-show="show_share">
                    <p v-show="show_share">分享</p>
                </div>
            </div>
        </div>
    </div>
    <div class="page_btn">
        <div @click="goLianxi()">一键咨询</div>
        <div>{{ textTag }}</div>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      show_share: true,
      show_like: false,
      type: '',
      advID: '',
      textTag: '我已阅读',
      dataTag: ''
    }
  },
  methods: {
    getAdvDetail: function (advId) { // 获取附近的活动详情
      this.$axios.get('api/wxpub/user/getDetail.html?s_id=' + this.advID)
        .then((res) => {
          // console.log(res)
          if (res.data.code === 200) {
            // console.log(res.data.data)
            this.dataTag = res.data.data
            console.log(this.dataTag)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    goLianxi: function () {
      this.$router.push({
        path: '/siteDetails'
      })
    }
  },
  beforeCreate: function () {
    // window.location.reload()
  },
  created: function () {
    this.advID = this.$route.query.code
    this.type = this.$route.query.type
    console.log(this.type)
    if (this.type === 0) { // 感兴趣详情
      this.show_like = true
      this.show_share = false
      this.$route.meta.title = '我感兴趣'
      this.getAdvDetail(this.advId)
    } else {
      console.log(this.$route.query.conent)
      this.dataTag = this.$route.query.conent
    }
    //  else {
    //   console.log('else')
    //   this.$on('advData', function (data) {
    //     console.log(data)
    //   })
    // }
  },
  beforeMount: function () {
    // this.getAdvDetail(this.advId)
  },
  mounted: function () {
    // console.log('ddd')
    // this.$bus.on('advData', function (data) {
    //   console.log(data)
    // })
  },
  deactivated () {
    // this.$destroy()
  }
}
</script>

<style scoped>
@import './css/landing_page.css';
</style>

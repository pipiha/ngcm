<template>
<div>
      <div v-wechat-title="$route.meta.title"></div>
      <div v-if="type == 0" class="page_wrap">
          <h3>{{ dataTag.s_title }}</h3>
          <ul>
            <li>
                <img :src="dataTag.s_thumb" alt="">
                <p style="text-algin:left;">{{ dataTag.s_content }}</p>
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
    <div v-else class="page_wrap">
          <h3>{{ lookData[1].h5_title }}</h3>
          <ul>
            <li v-for="(item,index) in lookData[2].h5_content">
                <img :src="item.advImg" alt="">
                <p style="text-algin:left;">{{ item.advConent }}</p>
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
                    <p>{{ lookData[5].h5_address }}</p>
                </div>
                <div style="width: 100%;height: 0.7rem;">
                    <img style="width: 0.4rem;height: 0.4rem;" src="./img/tel.png" alt="">
                    <p>{{ lookData[3].h5_phone}}</p>
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
        <div v-if="isRead" style="color:#999999!important;border:0.02rem solid #999999!important;">{{ textTag + count + 's' }}</div>
        <div v-else @click="goRed()">{{ textTag }}</div>
    </div>
</div>
</template>

<script>
import { Indicator, MessageBox } from 'mint-ui'
import { mapState } from 'vuex'
const TIME_COUNT = 5
export default {
  data () {
    return {
      show_share: true,
      show_like: false,
      type: '',
      advID: '',
      textTag: '我已阅读',
      dataTag: '',
      lookData: '',
      count: 5,
      isRead: true
    }
  },
  methods: {
    getAdvDetail: function (advId) { // 获取附近的活动详情
      this.$axios.get(this.utils.api + '/wxpub/user/getDetail.html?s_id=' + this.advID)
        .then((res) => {
          Indicator.close()
          if (res.data.code === 200) {
            // console.log(res.data.data)
            this.dataTag = res.data.data
            this.getCode() // 阅读倒计时5s
          } else {

          }
        })
        .catch((err) => {
          MessageBox.alert('请稍后再试')
        })
    },
    goLianxi: function () {
      this.$router.push({
        path: '/siteDetails'
      })
    },
    getCode: function () {
      this.count = TIME_COUNT
      this.timer = setInterval(() => {
        if (this.count > 0 && this.count <= TIME_COUNT) {
          this.count--
        } else {
          this.isRead = false
        }
      }, 1000)
      return this.count
    },
    goRed: function () {
      // console.log('可以领取红包')
      this.$router.push({
        path: '/red'
      })
    }
  },
  beforeCreate: function () {
    // window.location.reload()
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo
    })
  },
  created: function () {
    // Indicator.open()
    this.advID = this.$route.query.code
    this.type = this.$route.query.type
    console.log(this.type)
    if (this.type == 0) { // 感兴趣详情
      console.log('if')
      this.show_like = true
      this.show_share = false
      this.$route.meta.title = '我感兴趣'
      this.getAdvDetail(this.advId)
    } else if (this.type === '1') { // 我的足迹

    } else {
      this.lookData = this.userInfo // 创建好广告预览的数
      // Indicator.close()
    }
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
    Indicator.close()
  }
}
</script>

<style scoped>
@import './css/landing_page.css';
</style>

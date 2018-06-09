<template>
    <div class="detail_wrap">
        <div v-wechat-title="$route.meta.title"></div>
        <div class="detail_img">
            <img v-if="showVideo" src="./img/advimg.png" alt="">
            <img @click="lookVideo()" v-if="showVideo" src="./img/play.png" alt="">
            <video id="myvideo" v-else src="http://img.agrimedia.cn/09ef3694b670904efe5b0a8e01c56586.mp4" style="width:92%;position: absolute;top: 0;left: 0;"></video>
        </div>

        <ul class="detail_time">
            <li>
                <img src="./img/time_bj.png" alt="">
                <p>累计播放时长</p>
            </li>
            <li>
                <p>112235245秒</p>
            </li>
        </ul>

        <div class="detail_bili">
            <div class="site_numer_box">
                <p>播放点位总计</p>
                <p>152</p>
                <p @click="checkSiteAll()">查看详情</p>
            </div>
        </div>

        <ul class="detail_list">
            <li>
                <span>开始时间</span>
                <span style="margin-left: -1.5rem;">2017-12-15</span>
            </li>
            <li>
                <span>到期时间</span>
                <span  style="margin-left: -1.5rem;">2017-12-15</span>
            </li>
            <li>
                <span>剩余时间</span>
                <span>195天</span>
                <span style="color: #5286EC;">我要续期</span>
            </li>
        </ul>

        <!-- video展示 -->
        <!-- <div class="video_wrap" v-show="showVideo">
            <video src="http://img.agrimedia.cn/09ef3694b670904efe5b0a8e01c56586.mp4"></video>
        </div> -->

    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 152,
      showVideo: true,
      circleData: 80
    }
  },
  methods: {
    // 创建canvas
    creatCanvas: function () {
      var c1 = document.createElement('canvas')
      document.querySelector('.detail_bili').appendChild(c1)
      // document.body.appendChild(c1);
      var ctx1 = c1.getContext('2d')
      c1.setAttribute('style', 'position: absolute;top: 7.7rem;width: 9rem;height: 4.5rem;left: 0;')
      ctx1.beginPath()
      ctx1.lineWidth = 5
      ctx1.strokeStyle = '#EBEFF3'
      ctx1.arc(170, 100, 60, -90 * Math.PI / 180, (100 * 3.6 - 90) * Math.PI / 180)
      ctx1.stroke()

      var c = document.createElement('canvas')
      document.querySelector('.detail_bili').appendChild(c)
      // document.body.appendChild(c);
      var ctx = c.getContext('2d')
      c.setAttribute('style', 'position: absolute;top: 7.7rem;width: 9rem;height: 4.5rem;left: 0;')
      var x = this.circleData // x为百分比值(0-100)
      ctx.beginPath()
      ctx.lineCap = 'round'
      ctx.lineWidth = 5
      ctx.strokeStyle = '#5E99E3'
      var grad = ctx.createLinearGradient(0, 0, 0, 140)
      grad.addColorStop(0, 'rgb(128, 100, 162)')
      grad.addColorStop(0.5, '#816AC6')
      grad.addColorStop(1, '#5E99E3')
      ctx.strokeStyle = grad
      ctx.arc(170, 100, 60, -90 * Math.PI / 180, (x * 3.6 - 90) * Math.PI / 180)
      ctx.stroke()
    },
    checkSiteAll: function(){
        this.$router.push({
            path: '/PlayTime'
        })
    },
    // 获取详情数据
    getSiteData: function(advId){
        this.$axios.get ('api/wxpub/show_adv_detail/allAdv?adv_id=' + advId)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    },
    // 点击播放视频
    lookVideo: function(){
        this.showVideo = false
        this._dom = document.getElementById('myvideo')
        this._dom.play()
    }
  },
  beforeCreate: function () {

  },
  created: function () {
      let advId = this.$route.query.advID
      this.getSiteData(advId)
  },
  beforeMount: function () {

  },
  mounted: function () {
    this.creatCanvas() // 创建canvas
  }
}
</script>

<style scoped>
@import './css/zhan_detail.css';
.video_wrap{
    width: 100%;
    height: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,.5);
    z-index:10;
}
/* .detail_img video{
    width: 92%;
    margin-top: 20%;
} */
</style>

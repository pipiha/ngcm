<template>
    <div class="detail_wrap">
        <div v-wechat-title="$route.meta.title"></div>
        <div class="detail_img">
            <img src="./img/advimg.png" alt="">
            <img src="./img/play.png" alt="">
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
                <p>查看详情</p>
            </div>
        </div>

        <ul class="detail_list">
            <li>
                <span>开始时间</span>
                <span>2017-12-15</span>
            </li>
            <li>
                <span>到期时间</span>
                <span>2017-12-15</span>
            </li>
            <li>
                <span>剩余时间</span>
                <span>195天</span>
                <span style="color: #5286EC;">我要续期</span>
            </li>
        </ul>

    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 152
    }
  },
  beforeCreate: function () {

  },
  created: function () {

  },
  beforeMount: function () {

  },
  mounted: function () {
    this.creatCanvas() // 创建canvas
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
      var x = 70 // x为百分比值(0-100)
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
    }
  }
}
</script>

<style>
@import './css/zhan_detail.css';
</style>

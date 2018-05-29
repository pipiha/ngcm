<template>
<div>
    <div v-wechat-title="$route.meta.title"></div>
    <div id="map"></div>
    <div class="site_details_wrap" v-show="show_map_msg">
        <p>共有5个镇，126个村</p>
        <ul>
            <li>
                <p style="line-height: 0.2rem;font-size: 0.55rem;color: #5286EC;">153</p>
                <span style="display: block;margin-top: -0.4rem;padding-left: 0.3rem;color: #999999;font-size: 0.3rem;">播放总次数（次）</span>
            </li>
            <li>
                <p style="line-height: 0.2rem;font-size: 0.55rem;color: #5286EC;">62</p>
                <span style="display: block;margin-top: -0.4rem;padding-left: 0.3rem;color: #999999;font-size: 0.3rem;">点位总数（个）</span>
            </li>
        </ul>
    </div>

    <div class="call_us_wrap" v-show="call_us">
        <div class="call_us_up">
            <p>农广传媒科技有限公司</p>
            <span>AGRI MEDIA</span>
        </div>
        <ul class="call_ul">
            <li>
                <p>北京-农广传媒</p>
                <img src="./img/hotel.png" alt="">
            </li>
            <li>
                <p>133 3333 3333</p>
                <img src="./img/tel.png" alt="">
            </li>
            <li>
                <p>北京市朝阳区京辰大厦A座1层</p>
                <img src="./img/address.png" alt="">
            </li>
        </ul>
    </div>

</div>
</template>

<script>
// import BMap from 'BMap'
export default {
  data () {
    return {
      show_map_msg: false,
      call_us: true
    }
  },
  methods: {
    creatMap: function () {

    },
    getSite: function () {
    //   console.log(this.utils.BaseURL)
    //   this.$axios.get(this.utils.BaseURL + '/wxpub/contact_us/index')
    //     .then(function (res) {
    //       console.log(res)
    //     })
    //     .catch(function (err) {
    //       console.log(err)
    //     })

      this.$axios.get(this.utils.BaseURL + '/wxpub/user/index.html')
        .then(function (res) {
          console.log(res)
        })
        .catch(function (err) {
          console.log(err)
        })
    }
  },
  beforeCreate: function () {

  },
  created: function () {
    this.getSite()
  },
  beforeMount: function () {

  },
  mounted: function () {

  }
}
</script>

<style>
@import './css/site_details.css';
</style>

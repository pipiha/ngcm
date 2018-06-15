<template style="background-color:#fff;">
    <div class="act_detail_wrap">
        <div v-wechat-title="$route.meta.title"></div>
        <div class="act_detail_top">
            <!-- <img class="act_img" src="./img/Group 2.png" alt=""> -->
            <img class="act_img" :src="actData.s_thumb" alt="">
            <p style="font-size:0.45rem;">{{ actData.s_title }}</p>
        </div>

        <div class="act_detail_center">
            <p>{{ actData.s_content }}</p>
            <ul>
                <li>
                    <img src="./img/tiem.png" alt="">
                    <span>活动时间：{{ timestampToTime(actData.s_start_time) + '-' + timestampToTime2(actData.s_end_time) }}</span>
                </li>
                <li>
                    <img src="./img/address.png" alt="">
                    <span>活动地点：{{ actData.s_address }}</span>
                </li>
            </ul>
        </div>
        <div class="line"></div>

        <div class="act_detail_down">
            <div class="act_from_wrap">
                <p>发布人</p>
            </div>
            <div class="act_head_wrap">
                <img src="./img/head.png" alt="">
                <!-- <p>张三</p>
                <p>186-0066-8910</p> -->
                <ul class="adv_detail_user_msg">
                    <li>
                        <img style="height: 0.4rem;" src="./img/name.png" alt="">
                        <p>{{ actData.site_title}}</p>
                    </li>
                     <li>
                         <img src="./img/tel.png" alt="">
                        <p>{{ actData.s_phone}}</p>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  data () {
    return {
      actData: ''
    }
  },
  methods: {
    getActDetailData: function (code) {
    //   let api = ''
      this.$axios.get(this.utils.api + '/wxpub/wxpub/user/getDetail.html?s_id=' + code)
        .then((res) => {
          console.log(res)
          if (res.data.code === 200) {
            this.actData = res.data.data
            console.log(this.actData)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    timestampToTime: function (timestamp) {
      let date = new Date(timestamp * 1000)// 时间戳为10位需*1000，时间戳为13位的话不需乘1000
      let Y = date.getFullYear() + '年'
      let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '月'
      let D = date.getDate() + '日'
      //   h = date.getHours() + ':'
      //   m = date.getMinutes() + ':'
      //   s = date.getSeconds()
      return Y + M + D
    },
    timestampToTime2: function (timestamp) {
      let date = new Date(timestamp * 1000)// 时间戳为10位需*1000，时间戳为13位的话不需乘1000
      //   let Y = date.getFullYear() + '年'
      let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '月'
      let D = date.getDate() + '日'
      //   h = date.getHours() + ':'
      //   m = date.getMinutes() + ':'
      //   s = date.getSeconds()
      return M + D
    }
  },
  beforeCreate: function () {

  },
  created: function () {
    let s_id = this.$route.query.code
    this.getActDetailData(s_id)
  },
  beforeMount: function () {

  },
  mounted: function () {

  },
  deactivated: function () {

  }

}
</script>

<style scope>
@import './css/act_detail.css';
.adv_detail_user_msg{
    width: 70%;
    float: right;
    text-align: left;
    font-size: 0.4rem;
    color: #666666;
    margin-right: 0.5rem;
}
.adv_detail_user_msg li{
    width: 90%;
    height: 0.9rem;
    border-bottom: 0.02rem solid #EBEBEB;;
    float: right;
    line-height: 0.8rem;
}
.adv_detail_user_msg li:nth-of-type(2){
    border: none;
}
.adv_detail_user_msg li img{
    width: 0.34rem;
    height: 0.34rem;
    float: left;
    margin: 0.2rem 0.3rem 0 0;
}
.adv_detail_user_msg li p{
    margin: 0 0 0 0.4rem;
}
</style>

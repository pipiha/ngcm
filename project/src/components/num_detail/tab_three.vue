<template>
        <div class="tab">
            <div class="time_check">
                <span :class="{time_check_on:index==current}" v-for="(item,index) in timeCheck"  @click="selectStyle(item,index)">{{ item}}</span>
                <!-- <span>近7天</span>
                <span>根据日期搜索</span> -->
            </div>

            <div class="site_num_box">
                <div class="site_num_title">
                    <p>投放点位</p>
                    <img src="./img/house.png" alt="">
                </div>
                <p class="site_num_tag">{{ aresData.countSite }}</p>
                <img src="./img/time_bj.png" alt="">
            </div>

            <ul class="site_bili_ul">
                <li v-for="(item,index) in aresData.data">
                    <div class="site_bili_left">
                        <p>{{ item.siteTown }}</p>
                        <p>{{ item.siteVillage }}</p>
                    </div>
                    <div class="site_bili_center">
                        <p></p>
                        <p :style="'width: 10%;'"></p>
                    </div>
                    <div class="site_bili_right">
                        <p>{{ item.count }}</p>
                        <img src="./img/num_play.png" alt="">
                  </div>
                </li>
                <!-- <li>
                    <div class="site_bili_left">
                        <p>田村</p>
                        <p>小焦镇</p>
                    </div>
                    <div class="site_bili_center">
                        <p></p>
                        <p style="width: 90%;"></p>
                    </div>
                    <div class="site_bili_right">
                        <p>699</p>
                        <img src="./img/num_play.png" alt="">
                    </div>
                </li>
                <li>
                    <div class="site_bili_left">
                        <p>田村</p>
                        <p>小焦镇</p>
                    </div>
                    <div class="site_bili_center">
                        <p></p>
                        <p style="width: 70%;"></p>
                    </div>
                    <div class="site_bili_right">
                        <p>699</p>
                        <img src="./img/num_play.png" alt="">
                    </div>
                </li> -->
            </ul>

        </div>
</template>

<script>
export default {
  data () {
    return {
      timeCheck: ['昨天', '近7天', '根据日期搜索'],
      current: 0,
      sevenTime: 0,
      yesterdayTime: 0,
      todayTime: 0,
      oid: 0,
      aresData: ''
    }
  },
  methods: {
    selectStyle (item, index) {
      this.current = index
    },
    getAreaData: function (id, startTime, endTime) {
      this.$axios.get('api/wxpub/show_adv_detail/getCountFromSites?o_id=' + id + '&period_start=' + startTime + '&period_end=' + endTime)
        .then((res) => {
          if (res.data.code === 200) {
            this.aresData = res.data.data
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getBeforeTime1: function (type) {
      let curDate = new Date()
      let preDate
      if (type === 0) {
        preDate = new Date(curDate.getTime() - 24 * 60 * 60 * 1000) // 昨天
      } else if (type === 1) {
        preDate = new Date(curDate.getTime() - 24 * 60 * 60 * 6000) // 前七天
      } else {
        preDate = new Date(curDate.getTime() - 24 * 60 * 60) // 今天
      }
      let d = new Date(preDate)
      let time = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
      return time
    },
    getTadyTime: function (time) { // 时间转时间戳
      let timestamp2 = Date.parse(time)
      timestamp2 = timestamp2 / 1000
      return timestamp2
    }

  },
  beforeCreate: function () {

  },
  created: function () {
    this.oid = this.$route.query.num // 订单id
    this.yesterdayTime = this.getTadyTime(this.getBeforeTime1(0)) // 昨天的时间戳
    this.sevenTime = this.getTadyTime(this.getBeforeTime1(1)) // 前7天的时间戳
    this.todayTime = this.getTadyTime(this.getBeforeTime1(2)) // 今天的时间戳 + 8640 就是下一天
    this.getAreaData(this.oid, this.todayTime, this.todayTime + 86400)
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
@import './css/num_detail.css';
@import '../play_time/css/play_time.css';
.site_bili_left{
    text-align: left;
}
</style>

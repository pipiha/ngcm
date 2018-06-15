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
            </ul>

            <!-- 根据时间选择 -->
            <div class="check_time_wrap" v-show="startAndEnd">
              <ul>
                <li style="height:25%;">
                  <p>根据日期搜索</p>
                  <img @click="closeTimecheck()" src="./img/icon_jia.png" alt="">
                </li>
                <li>
                  <p>开始日期</p>
                  <p @click="openPicker(0)">{{ startTime }}</p>
                </li>
                <li>
                  <p>结束日期</p>
                  <p  @click="openPicker(1)">{{ endTime }}</p>
                </li>
              </ul>
              <div @click="searchTime()"> 确定</div>
            </div>

             <mt-datetime-picker
      @confirm="handleConfirm"
      v-model="pickerValue"
      type="date"
      ref="picker"
      :startDate="startDate"
      :endDate="endDate"
      year-format="{value}"
      month-format="{value}">
    </mt-datetime-picker>

        </div>
</template>

<script>
import { MessageBox, Indicator, DatetimePicker } from 'mint-ui'
export default {
  components: {
    MessageBox,
    Indicator,
    DatetimePicker
  },
  data () {
    return {
      timeCheck: ['昨天', '近7天', '根据日期搜索'],
      current: 0,
      sevenTime: 0,
      yesterdayTime: 0,
      todayTime: 0,
      oid: 0,
      aresData: '',
      startAndEnd: false,
      startTime: '请选择开始时间',
      endTime: '请选择结束时间',
      // picker
      pickerVisible: '',
      pickerValue: '',
      startDate: new Date('2018-1-1'),
      endDate: new Date(),
      timeType: -1,
      startTemp: 0,
      endTemp: 0
    }
  },
  methods: {
    selectStyle (item, index) {
      this.current = index
      // Indicator.open()
      if (index === 0) { // 昨天
        Indicator.open()
        this.getAreaData(this.oid, this.yesterdayTime, this.todayTime)
      } else if (index === 1) { // 近7天
        Indicator.open()
        this.getAreaData(this.oid, this.sevenTime, this.todayTime)
      } else { // 根据日期搜索
        Indicator.close()
        this.startAndEnd = true
      }
    },
    getAreaData: function (id, startTime, endTime) {
      this.$axios.get(this.utils.api + '/wxpub/show_adv_detail/getCountFromSites?o_id=' + id + '&period_start=' + startTime + '&period_end=' + endTime)
        .then((res) => {
          Indicator.close()
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
    },
    closeTimecheck: function () {
      this.startAndEnd = false
    },
    openPicker (num) { // 显示选择时间日期
      this.timeType = num
      this.$refs.picker.open()
    },
    handleConfirm: function (num) { // 日期确认之后
      if (this.timeType === 0) {
        this.startTime = this.formatDate(num, 1)
        this.startTemp = this.formatDate(num, 0)
      } else {
        this.endTime = this.formatDate(num, 1)
        this.endTemp = this.formatDate(num, 0)
      }
    },
    searchTime: function () {
      if (this.startTime === '请选择开始时间') {
        MessageBox.alert('请选择开始时间')
      } else if (this.endTime === '请选择结束时间') {
        MessageBox.alert('请选择结束时间')
      } else {
        // console.log(this.endTemp)
        // console.log(this.getTadyTime(this.startTemp))
        // console.log(this.getTadyTime(this.endTemp))
        this.startAndEnd = false
        Indicator.open()
        this.getAreaData(this.oid, this.getTadyTime(this.startTemp), this.getTadyTime(this.endTemp))
      }
    },
    formatDate: function (date, type) { // 标准日期转  type为0: '2018-1-1'  1 年月日
      date = new Date(date)
      let y = date.getFullYear()
      let m = date.getMonth() + 1
      let d = date.getDate()
      //   let h = date.getHours()
      //   let m1 = date.getMinutes()
      //   let s = date.getSeconds()
      m = m < 10 ? ('0' + m) : m
      //   d = d < 10 ? ('0' + d) : d
      if (type === 0) {
        return y + '-' + m + '-' + d
      } else {
        return y + '年' + m + '月' + d + '日'
      }
    }

  },
  beforeCreate: function () {

  },
  created: function () {
    this.oid = this.$route.query.oid // 订单id
    this.yesterdayTime = this.getTadyTime(this.getBeforeTime1(0)) // 昨天的时间戳
    this.sevenTime = this.getTadyTime(this.getBeforeTime1(1)) // 前7天的时间戳
    this.todayTime = this.getTadyTime(this.getBeforeTime1(2)) // 今天的时间戳 + 8640 就是下一天
    Indicator.open()
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

<style scoped>
@import './css/num_detail.css';
@import '../play_time/css/play_time.css';
.site_bili_left{
    text-align: left;
}
</style>

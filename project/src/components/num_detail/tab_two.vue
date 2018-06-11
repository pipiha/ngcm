<template>
<div class="tab liulan_wrap">
    <div class="time_check">
        <span class="time_check_on">昨天</span>
        <span>近7天</span>
        <span>根据日期搜索</span>
    </div>
    <ul class="num_msg_tongji">
        <li>
            <p>678</p>
            <span>播放总次数</span>
        </li>
        <li>
            <p>2000</p>
            <span>扫码人数</span>
        </li>
        <li>
            <p>3467</p>
            <span>浏览次数</span>
        </li>
    </ul>
    <div class="play_up_wrap" style="width: 97%;box-shadow: 0 0.01rem 0.1rem 0.1rem rgba(234,234,234,0.50);">
        <div class="site_numer_box" style="margin-left: 31%;margin-top: 11%;">
            <p>播放点位总计</p>
            <p>152</p>
        </div>
    </div>
    <img class="num_img" src="../play_time//img/times.png" alt="">
    <div class="play_down_wrap">
        <div class="play_title">
            <img style="margin-left: -0.5rem;" src="../play_time/img/plY_icon.png" alt="">
            <p style="float: left;">浏览分析</p>
            <span style="color: #6666;margin-left: 0.2rem;font-size: 0.3rem;float: left;">人/h</span>
        </div>
        <div :id="id" :style="{height:height,width:width}" style="margin-top:-1rem;" ref="myEchart1"></div>
    </div>

    <!-- <canvas id="canvas1" style="position: absolute;top:4.5rem;width: 9rem;height: 4.5rem;"></canvas>
    <canvas id="canvas2" style="position: absolute;top:4.5rem;width: 9rem;height: 4.5rem;"></canvas> -->

    <!-- <i-circle :percent="80" style="position: absolute;top:4.5rem;width: 9rem;height: 4.5rem;">
       <span class="demo-Circle-inner" style="font-size:24px">80%</span>
    <i-circle> -->

    <!-- <Icon type="checkmark" /> -->
    <!-- <Circle
        :size="250"
        :trail-width="4"
        :stroke-width="5"
        :percent="75"
        stroke-linecap="square"
        stroke-color="#43a3fb">
        <div class="demo-Circle-custom">
            <h1>42,001,776</h1>
            <p>消费人群规模</p>
            <span>
                总占人数
                <i>75%</i>
            </span>
        </div>
    </Circle> -->

</div>
</template>

<script>
import echarts from 'echarts'
// import {Circle} from 'iview';
// console.log(Circle);
export default {
  component: {
    // Circle
  },
  props: {
    id: {
      type: String,
      default: 'main1'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '7.5rem'
    }
  },
  data () {
    return {
      msg: 152,
      show_canvas: false,
      time_echart: false,
      hid: 0,
      status: 0,
      oid: 0,
      yesterdayTime: 0,
      sevenTime: 0,
      todayTime: 0
    }
  },
  beforeCreate: function () {

  },
  created: function () {
    this.hid = this.$route.query.o_id // list id
    this.status = this.$route.query.o_status
    this.oid = this.$route.query.oid
    this.yesterdayTime = this.getTadyTime(this.getBeforeTime1(0)) // 昨天的时间戳
    this.sevenTime = this.getTadyTime(this.getBeforeTime1(1)) // 前7天的时间戳
    this.todayTime = this.getTadyTime(this.getBeforeTime1(2)) // 今天的时间戳 + 8640 就是下一天
    // console.log(this.todayTime + 86400)
    this.getSearchData(this.todayTime, this.todayTime + 86400) // 默认展示今天0点 - 24点
  },
  beforeMount: function () {

  },
  mounted: function () {
    this.creatCanvas() // 创建canvas
    this.creatEchart() // 图表统计
  },
  methods: {
    getSearchData: function (starTime, endTime) {
      this.$axios.get('api/wxpub/count_controller/getBrowseTimes.html?o_id=' + this.oid + '&period_start=' + starTime + '&period_end=' + endTime)
        .then((res) => {
          console.log(res)
        })
        .cathc((err) => {
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
    // 创建canvas
    creatCanvas: function () {
      let c1 = document.createElement('canvas')
      // document.body.appendChild(c1);
      document.querySelector('.play_up_wrap').appendChild(c1)
      let ctx1 = c1.getContext('2d')
      c1.setAttribute('style', 'position: absolute;top:4.5rem;width: 9rem;height: 4.5rem;left: 0rem;')
      ctx1.beginPath()
      ctx1.lineWidth = 5
      ctx1.strokeStyle = '#EBEFF3'
      ctx1.arc(170, 100, 60, -90 * Math.PI / 180, (100 * 3.6 - 90) * Math.PI / 180)
      ctx1.stroke()

      let c = document.createElement('canvas')
      document.querySelector('.play_up_wrap').appendChild(c)
      // document.body.appendChild(c);
      let ctx = c.getContext('2d')
      c.setAttribute('style', 'position: absolute;top:4.5rem;width: 9rem;height: 4.5rem;left: 0rem;')
      const x = 70 // x为百分比值(0-100)
      ctx.beginPath()
      ctx.lineCap = 'round'
      ctx.lineWidth = 5
      ctx.strokeStyle = '#5E99E3'
      const grad = ctx.createLinearGradient(0, 0, 0, 140)
      grad.addColorStop(0, 'rgb(128, 100, 162)')
      grad.addColorStop(0.5, '#816AC6')
      grad.addColorStop(1, '#5E99E3')
      ctx.strokeStyle = grad
      ctx.arc(170, 100, 60, -90 * Math.PI / 180, (x * 3.6 - 90) * Math.PI / 180)
      ctx.stroke()
    },
    // 创建图表
    creatEchart: function () {
      this.chart = echarts.init(this.$refs.myEchart1)

      // var myChart = echarts.init(document.getElementById('main'));
      let dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '点', '击', '柱', '子', '或', '者', '两']
      let data = [220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330, 310]
      let yMax = 400
      let dataShadow = []

      for (var i = 0; i < data.length; i++) {
        dataShadow.push(yMax)
      }

      this.chart.setOption({
        // title: {
        //     text: '特性示例：渐变色 阴影 点击缩放',
        //     subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
        // },
        xAxis: {
          data: dataAxis,
          axisLabel: {
            // inside: true,
            color: '#999999',
            textStyle: {
              color: '#999999'
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {show: false}, // 去除网格线
          z: 10
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#999999',
            textStyle: {
              color: '#999999'
            }
          },
          splitLine: {show: false} // 去除网格线

        },
        dataZoom: [
          {
            type: 'inside'
          }
        ],
        series: [
          // { // For shadow
          //     type: 'line',
          //     itemStyle: {
          //         normal: {color: 'rgba(0,0,0,0.05)'}
          //     },
          //     barGap:'-100%',
          //     barCategoryGap:'40%',
          //     data: dataShadow,
          //     animation: false
          // },
          {
            type: 'line',
            smooth: true,
            symbol: 'none',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    // {offset: 0, color: '#83bff6'},
                    {offset: 0.5, color: '#816AC6'},
                    {offset: 0.8, color: '#5F99E3'}
                  ]
                )
              },
              emphasis: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: '#2378f7'},
                    {offset: 0.7, color: '#2378f7'},
                    {offset: 1, color: '#83bff6'}
                  ]
                )
              }
            },
            data: data
          }
        ]
      })

      // myChart.setOption(option);
    }

  }
}
</script>

<style lang="less" scope>
@import './css/num_detail.css';
@import '../play_time/css/play_time.css';
   .demo-Circle-custom{
        & h1{
            color: #3f414d;
            font-size: 28px;
            font-weight: normal;
        }
        & p{
            color: #657180;
            font-size: 14px;
            margin: 10px 0 15px;
        }
        & span{
            display: block;
            padding-top: 15px;
            color: #657180;
            font-size: 14px;
            &:before{
                content: '';
                display: block;
                width: 50px;
                height: 1px;
                margin: 0 auto;
                background: #e0e3e6;
                position: relative;
                top: -15px;
            };
        }
        & span i{
            font-style: normal;
            color: #3f414d;
        }
    }
</style>

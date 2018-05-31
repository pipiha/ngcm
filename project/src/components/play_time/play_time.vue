<template>
<div>
    <div v-wechat-title="$route.meta.title"></div>
    <div class="play_up_wrap">
        <div class="site_numer_box">
            <p>播放总次数</p>
            <p>{{ msg }}</p>
        </div>
    </div>
    <img class="times_up_img" src="./img/times.png" alt="">

    <div class="play_down_wrap">
        <div class="play_title">
            <img src="./img/plY_icon.png" alt="">
            <p>播放次数分析</p>
        </div>
        <div v-show="time_echart" style="margin-top:-1rem;" :id="id" :style="{height:height,width:width}" ref="myEchart"></div>
    </div>
</div>
</template>

<script>
import echarts from 'echarts'
export default {
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
      time_echart: true
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
    this.creatEchart() // 图表统计
  },
  methods: {
    // 创建canvas
    creatCanvas: function () {
      let c1 = document.createElement('canvas')
      document.querySelector('.play_up_wrap').appendChild(c1)
      // document.body.appendChild(c1);
      let ctx1 = c1.getContext('2d')
      c1.setAttribute('style', 'position: absolute;top:-0.3rem;width: 9rem;height: 4.5rem;left: 0;')
      ctx1.beginPath()
      ctx1.lineWidth = 5
      ctx1.strokeStyle = '#EBEFF3'
      ctx1.arc(170, 100, 60, -90 * Math.PI / 180, (100 * 3.6 - 90) * Math.PI / 180)
      ctx1.stroke()

      let c = document.createElement('canvas')
      document.querySelector('.play_up_wrap').appendChild(c)
      // document.body.appendChild(c);
      let ctx = c.getContext('2d')
      c.setAttribute('style', 'position: absolute;top: -0.3rem;width: 9rem;height: 4.5rem;left: 0;')
      let x = 70 // x为百分比值(0-100)
      ctx.beginPath()
      ctx.lineCap = 'round'
      ctx.lineWidth = 5
      ctx.strokeStyle = '#5E99E3'
      let grad = ctx.createLinearGradient(0, 0, 0, 140)
      grad.addColorStop(0, 'rgb(128, 100, 162)')
      grad.addColorStop(0.5, '#816AC6')
      grad.addColorStop(1, '#5E99E3')
      ctx.strokeStyle = grad
      ctx.arc(170, 100, 60, -90 * Math.PI / 180, (x * 3.6 - 90) * Math.PI / 180)
      ctx.stroke()
    },
    // 创建图表
    creatEchart: function () {
      this.chart = echarts.init(this.$refs.myEchart)

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
          { // For shadow
            type: 'bar',
            itemStyle: {
              normal: {color: 'rgba(0,0,0,0.05)'}
            },
            barGap: '-100%',
            barCategoryGap: '40%',
            data: dataShadow,
            animation: false
          },
          {
            type: 'bar',
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

<style>
@import './css/play_time.css';
</style>

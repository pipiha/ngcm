<template>
<div>
    <!-- <canvas style="width: 9rem;height: 4.5rem;"></canvas> -->
    <div class="num_tab4_up">
      <div class="up_title_box">
        <img src="./img/tab4.png" alt="">
        <p>每日消费设置</p>
      </div>
      <div class="up_center_box">
          <span>设置单屏每日消费金额</span>
          <img src="./img/icon_jian.png" alt="">
          <input type="text" placeholder="" value="￥300.00">
          <img src="./img/icon_jia.png" alt="">
      </div>
      <ul class="up_ul">
        <li>
          <p>4000</p>
          <p>推广费总金额(元）</p>
        </li>
        <li>
          <p>3467</p>
          <p>推广费余额(元）</p>
        </li>
      </ul>
    </div>

    <div class="num_tab4_center">
      <div class="center_left">
        <div class="shalou">
          <img src="./img/Oval.png" alt="">
        </div>
        <div class="shalou">
          <img src="./img/Combined Shape.png" alt="">
        </div>
      </div>
      <div class="center_center">
        <p>3000</p>
        <p>剩余金额</p>
        <p>3000</p>
        <p>消费金额</p>
      </div>
      <div class="center_right">
        <p>176</p>
        <p>预计可播放时长</p>
        <p>我要续期</p>
      </div>
    </div>

    <div class="bottom_up">
      <div class="up_title_box">
        <img src="./img/tab4.png" alt="">
        <p>消费明细</p>
        <p style="color: #999999;font-size；0.3rem;margin-left:0.2rem;">5月</p>
      </div>
       <div :id="id" :style="{height:height,width:width}" style="margin-top:-1rem;" ref="myEchart_tab4"></div>
    </div>

</div>

</template>

<script>
import echarts from 'echarts'
export default {
  props: {
    id: {
      type: String,
      default: 'tab4Echart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '7rem'
    }
  },
  data () {
    return {

    }
  },
  beforeCreate: function () {

  },
  created: function () {

  },
  beforeMount: function () {

  },
  mounted: function () {
    // this.creatCanvas(); //创建canvas
    this.creatEchart() // 图表统计
  },
  methods: {
    // 创建图表
    creatEchart: function () {
      this.chart = echarts.init(this.$refs.myEchart_tab4)

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

<style>
@import './css/num_detail.css';
</style>

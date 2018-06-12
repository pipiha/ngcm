<template>
<div>
    <div v-wechat-title="$route.meta.title"></div>
    <div class="month_bill_up">
        <div class="bill_up_left" @click="openPicker()">
            <p>{{timeText}}</p>
            <img src="./img/down.png" alt="">
        </div>
        <div class="bill_up_right">
            <p class="bill_on">收入</p>
            <p @click="bill_up">支出</p>
        </div>
    </div>

    <div class="bill_title">
        <p style="margin-bottom: 0.3rem;">共收入<span>{{text}}</span>笔，合计</p>
        <span>￥</span>
        <span>{{money}}</span>
    </div>
    <div class="bill_title">
        <p  style="margin-top: 0.8rem;margin-bottom: 0.3rem;">收入对比</p>
        <div style="margin-top:-1rem;" :id="id" :style="{height:height,width:width}" ref="myEchart"></div>
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
import echarts from 'echarts'
import { DatetimePicker } from 'mint-ui'
import axios from 'axios'
export default {
  components: {
    DatetimePicker
  },
  props: {
    id: {
      type: String,
      default: 'month_echart'
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
      timeText: this.formatDate(new Date()),
      pickerVisible: '',
      pickerValue: '',
      startDate: new Date('2018-1-1'),
      endDate: new Date(),
      text: 0,
      money: 0
    }
  },
  beforeCreate: function () {
  },
  created: function () {
  },
  beforeMount: function () {
  },
  mounted: function () {
    this.creatEchart() // 图表统计
    this.setMoney()
  },
  methods: {
    setMoney () {
      console.log(0)
      axios.get('api/wxpub/user_wallet/adverExtensionRecord.html') // 问号后面是要传送的参数
        .then(reponse => { //  请求成功后的函数
          console.log(reponse.data.data.last_page)
          this.text = reponse.data.data.last_page
          this.money = reponse.data.data.per_page
        })
        .catch(error => { //  请求失败后的函数
          console.log(error)
        })
    },
    bill_up(){
      axios.get('api/wxpub/user_wallet/adverExtensionRecord.html?io=1')  // 这里是支出的接口  要接口  要图表的接口  QQ
      .then( reponse => {   //  请求成功后的函数
                console.log(reponse.data.data.last_page)
                // this.text = reponse.data.data.last_page
                // this.money = reponse.data.data.per_page
            })
            .catch( error=> {	  //  请求失败后的函数
                console.log(error)
            })
    },
    openPicker () { // 显示选择时间日期
      this.$refs.picker.open()
    },
    handleConfirm: function () { // 日期确认之后
      let timeTag = this.pickerValue
      console.log(this.formatDate(timeTag, 1))
      this.timeText = this.formatDate(timeTag, 1)
    },
    // 创建图表
    creatEchart: function () {
      this.chart = echarts.init(this.$refs.myEchart)
      // var myChart = echarts.init(document.getElementById('main'));
      let dataAxis = ['点', '击', '柱', '子', '或']
      let data = [220, 182, 191, 234, 290]
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
          splitLine: {
            show: false
          }, // 去除网格线
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
          splitLine: { // 去除网格线
            show: true,
            lineStyle: {
              color: '#F6F6F6'
            }
          }

        },
        dataZoom: [
          {
            type: 'inside'
          }
        ],
        series: [
          // { // For shadow
          //     type: 'bar',
          //     itemStyle: {
          //         normal: {color: 'rgba(0,0,0,0.05)'}
          //     },
          //     barGap:'-100%',
          //     barCategoryGap:'40%',
          //     data: dataShadow,
          //     animation: false
          // },
          {
            type: 'bar',
            barWidth: '20px',
            itemStyle: {
              normal: {
                // color: new echarts.graphic.LinearGradient(
                // 0, 0, 0, 1,
                // [
                //     // {offset: 0, color: '#83bff6'},
                //     {offset: 0.5, color: '#816AC6'},
                //     {offset: 0.8, color: '#5F99E3'}
                // ]
                // )
                color: '#BACCED'
              }
              // emphasis: {
              //     color: new echarts.graphic.LinearGradient(
              //     0, 0, 0, 1,
              //     [
              //         {offset: 0, color: '#2378f7'},
              //         {offset: 0.7, color: '#2378f7'},
              //         {offset: 1, color: '#83bff6'}
              //     ]
              // )
              // }
            },
            label: {
              normal: {
                position: 'top',
                show: true,
                color: '#BACCED',
                rotate: 45
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

<style scoped>
@import './css/month_bill.css';
</style>

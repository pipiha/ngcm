<template>
<div>
    <div v-wechat-title="$route.meta.title"></div>
    <div class="month_bill_up">
        <div class="bill_up_left" @click="openPicker()">
            <p>{{timeText}}</p>
            <img src="./img/down.png" alt="">
        </div>
        <div class="bill_up_right">
            <p v-for="(item,index) in titleLi" :class="{bill_on:index == isClick}" @click="selectStyle(item,index)">{{ item }}</p>
            <!-- <p>支出</p> -->
        </div>
    </div>

    <div class="bill_title">
        <p style="margin-bottom: 0.3rem;">共收入<span>{{monthBillData.total}}</span>笔，合计</p>
        <span>￥</span>
        <span>1</span>
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
import { DatetimePicker, Indicator, MessageBox } from 'mint-ui'
import axios from 'axios'
export default {
  components: {
    DatetimePicker,
    Indicator,
    MessageBox
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
      money: 0,
      titleLi: ['收入', '支出'],
      isClick: 0,
      monthBillData: [],
      xData: [],
      yData: []
    }
  },
  beforeCreate: function () {
  },
  created: function () {
    // this.creatEchart() // 图表统计
    this.timeText = this.$route.query.time

    Indicator.open()
    this.setMoney(this.timeText, 0)
  },
  beforeMount: function () {
  },
  mounted: function () {
    // this.creatEchart() // 图表统计
  },
  methods: {
    selectStyle (item, index) {
      this.isClick = index
      Indicator.open()
      if (index == 0) { // 收入
        this.setMoney(this.timeText, 0)
      } else { // 支出
        this.setMoney(this.timeText, 1)
      }
    },
    setMoney (startTime, io) {
      this.$axios.get('api/wxpub/user_wallet/getSumByMonth.html?start_time=' + startTime + '&io=' + io) // 问号后面是要传送的参数
        .then(res => { //  请求成功后的函数
          console.log(res)
          Indicator.close()
          if (res.data.code === 200) {
            // let a = {
            //   'total': 58,
            //   'per_page': 5,
            //   'current_page': 1,
            //   'last_page': 12,
            //   'data': [{
            //     'money': '2.50'
            //   }, {
            //     'money': '0.50'
            //   }, {
            //     'money': '13.50'
            //   }, {
            //     'money': '1.00'
            //   }, {
            //     'money': '0.50'
            //   }]
            // }
            this.monthBillData = res.data.data
            if (this.monthBillData.data.length == 0) {
              this.xData = [0, 0, 0, 0, 0]
              this.yData = [1, 2, 3, 4, 5]
            } else {
              this.monthBillData.data.forEach((item) => {
                this.xData.push(item.key)
                this.yData.push(item.money)
              })
            }
            this.creatEchart()
            console.log(this.xData)
            console.log(this.yData)
          } else {
            MessageBox.alert(res.data.data.msg)
          }
        })
        .catch(error => { //  请求失败后的函数
          console.log(error)
          MessageBox.alert('请稍后重试')
          Indicator.close()
        })
    },
    formatDate: function (date, type) { // 标准日期转  type为0: '2018-1-1'  1 年月日
      date = new Date(date)
      let y = date.getFullYear()
      let m = date.getMonth() + 1
      //   let d = date.getDate()
      //   let h = date.getHours()
      //   let m1 = date.getMinutes()
      //   let s = date.getSeconds()
      m = m < 10 ? ('0' + m) : m
      //   d = d < 10 ? ('0' + d) : d
      if (type === 0) {
        return y + '-' + m
      } else {
        return y + '年' + m + '月'
      }
    },
    openPicker () { // 显示选择时间日期
      this.$refs.picker.open()
    },
    handleConfirm: function () { // 日期确认之后
      let timeTag = this.pickerValue
      this.timeText = this.formatDate(timeTag, 1)
      Indicator.open()
      this.setMoney(this.timeText, this.isClick)
    },
    // 创建图表
    creatEchart: function () {
      this.chart = echarts.init(this.$refs.myEchart)
      // var myChart = echarts.init(document.getElementById('main'));
      let dataAxis = ['06-10', '06-11', '06-12', '06-13', '06-14']
      // let data = [2.50, 1.50, 1.0, 0.50, 2.50, 2.50, 1.50, 1.0, 0.50, 2.50]
      let data = this.yData

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

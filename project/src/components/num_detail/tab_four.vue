<template>
<div>
    <!-- <canvas style="width: 9rem;height: 4.5rem;"></canvas> -->
    <div class="num_tab4_up">
      <div class="up_title_box">
        <img src="./img/tab4.png" alt="">
        <p>每日消费设置</p>
      </div>
      <!-- <div class="up_center_box">
          <span>设置单屏每日消费金额</span>
          <img src="./img/icon_jian.png" alt="">
          <input type="text" placeholder="" value="￥300.00">
          <img src="./img/icon_jia.png" alt="">
      </div> -->
      <ul class="up_ul">
        <li>
          <p>{{ moneyShow.totalMoney }}</p>
          <p>推广费总金额(元）</p>
        </li>
        <li>
          <p>{{ moneyShow.lastMoney }}</p>
          <p>推广费余额(元）</p>
        </li>
      </ul>
    </div>

    <div class="num_set_dayMoney">
      <p>设置单屏每日消费金额</p>
      <div class="num_set_input_box">
        <p>金额</p>
        <input v-model="dayMoney" type="number" placeholder="请输入每日消费金额">
        <p @click="sureDayMoney()" class="setMoneyBtn">确定</p>
      </div>
    </div>

    <div class="num_tab4_center">
      <div class="center_left">
        <div class="shalou">
          <img src="./img/Oval.gif" alt="">
        </div>
        <div class="shalou">
          <img src="./img/Oval.gif" alt="">
        </div>
      </div>
      <div class="center_center">
        <p>{{ moneyShow.lastMoney }}</p>
        <p>剩余金额</p>
        <p>{{ moneyShow.spendMoney }}</p>
        <p>消费金额</p>
      </div>
      <div class="center_right">
        <p>{{ parseInt(moneyShow.resDay)}}天</p>
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
import { Indicator, MessageBox } from 'mint-ui'
import echarts from 'echarts'
export default {
  components: {
    Indicator,
    MessageBox
  },
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
      o_id: 0,
      o_status: 0,
      moneyShow: '',
      xData: [],
      yData: [],
      dayMoney: '' // 每日限额消费
    }
  },
  methods: {
    // 创建图表
    creatEchart: function () {
      this.chart = echarts.init(this.$refs.myEchart_tab4)
      // let dataAxis = ['点efienfiuehuf', '击rgrgrg', 'rgfrgfre柱', '子', '或', '者', '两', '点', '击', '柱', '子', '或', '者', '两22222']
      // let data = [220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330, 310]
      let data, dataAxis
      if (this.xData.length === 0) {
        dataAxis = ['1日', '2日', '3日', '4日', '5日', '6日', '7日']
      } else {
        dataAxis = this.xData.map(item=>{
          return item.slice(5)
        }).slice(0,7)
      }

      if (this.yData.length === 0) {
        data = [0, 0, 0, 0, 0, 0, 0]
      } else {
        data = this.yData.slice(0,7)
      }

      // let data = this.xData
      // let data = this.yData
      // let yMax = 1400
      // let dataShadow = []

      // for (var i = 0; i < data.length; i++) {
      //   dataShadow.push(yMax)
      // }

      this.chart.setOption({
        grid:{
          left:'1%',
          right:'0',
          bottom:'1%',
          containLabel:true
        },
        xAxis: {
          data: dataAxis,
          axisLabel: {
            // inside: true,
            color: '#999999',
            textStyle: {
              color: '#999999'
            },
            interval:0
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
    },
    // 获取金额明细数据
    getMoneyList: function (o_id, o_status, money) {
      this.$axios.get(this.utils.api + '/wxpub/show_adv_detail/mathAdvMoneyDetail?o_id=' + o_id + '&o_status=' + o_status + '&oneSrcMoney=' + money)
        .then((res) => {
          Indicator.close()
          if (res.data.code === 200) {
            this.moneyShow = res.data.result
            this.moneyShow.listMoney.forEach((item) => {
              this.xData.push(item.create_time.substring(0, 10))
              this.yData.push(parseInt(item.daySum))
            })
            this.dayMoney=this.moneyShow.oneSrcMoney
            // console.log(this.xData)
            // console.log(this.yData)
          }
          this.creatEchart() // 图表统计
        })
        .catch((err) => {
          console.log(err)
        })
    },
    sureDayMoney: function () {
      this.getMoneyList(this.o_id, this.o_status, this.dayMoney)
      Indicator.open()
    }
  },
  beforeCreate: function () {

  },
  created: function () {
    this.o_id = this.$route.query.o_id
    this.o_status = this.$route.query.o_status
    this.getMoneyList(this.o_id, this.o_status, 0)
  },
  beforeMount: function () {

  },
  mounted: function () {
    // this.creatCanvas(); //创建canvas
    this.creatEchart() // 图表统计
    Indicator.open()
  },
  deactivated: function () {
    Indicator.close()
  }

}
</script>

<style scoped>
@import './css/num_detail.css';
</style>

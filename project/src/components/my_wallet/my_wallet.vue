<template>
<div>
    <div v-wechat-title="$route.meta.title"></div>
    <!-- <div  class="month_bill_up" style="position: fixed;top:0;z-index: 10;">
        <div class="bill_up_left">
            <div class="check_time" @click="openPicker()">
                <p>{{ timeText }}</p>
                <img src="./img/down.png" alt="">
            </div>
            <div class="money_title">
                <span>支出</span>
                <span>￥{{zhichu}}</span>
                <span>收入</span>
                <span>￥{{shouru}}</span>
            </div>
        </div>
        <div class="bill_up_right">
            <p @click="filter()">筛选</p>
            <p @click="checkMonth()">月账单</p>
        </div>
    </div> -->
    <!-- <mt-spinner v-show="list<1 && InitialLoading" color="#26a2ff"></mt-spinner> -->

    <!-- 零钱明细   v-for="(item,index) in moneyList" -->
    <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px'}">
    <mt-loadmore :top-method="loadTop" @translate-change="translateChange" @top-status-change="handleTopChange"
        :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded"
        :auto-fill="false" ref="loadmore">
    <ul class="wallet_list" style="width:100%;">
        <p v-show="isKong" style="font-size: 0.4rem;margin-top: 30%;color: #999999;">暂无记录了</p>
        <li v-for="(item,index) in moneyList" :code="item.f_id">   <!-- 推广费用明细 -->
          <div v-show="item.showHead"  class="month_bill_up">
              <div class="bill_up_left">
                  <div class="check_time" @click="openPicker(item,index)">
                      <p>{{ item.timeAxis.current_time }}</p>
                      <img src="./img/down.png" alt="">
                  </div>
                  <div class="money_title">
                      <span>支出</span>
                      <span v-if="item.timeAxis.pay_money != null">￥{{item.timeAxis.pay_money}}</span>
                      <span v-else>￥0.00</span>
                      <span>收入</span>
                      <span v-if="item.timeAxis.recharge != null">￥{{item.timeAxis.recharge}}</span>
                      <span v-else>￥0.00</span>
                  </div>
              </div>
              <div class="bill_up_right">
                  <p @click="filter()">筛选</p>
                  <p @click="checkMonth()" style="float: right;margin-right: 13%;">月账单</p>
              </div>
          </div>
          <div style="width:92%;margin:0 auto;height: 2rem;border-bottom: 0.02rem solid #ECECEC;"  @click="consumptionDetails()">
            <div class="wallet_list_left">
                <img v-if="item.f_io_type == 1" src="./img/wallet_chong.png" alt="">
                <img v-else src="./img/wallet_xiao.png" alt="">
                <p  v-if="item.f_io_type == 1">充值金额</p>
                <p  v-else>消费金额</p>
                <p>{{ item.create_time }}</p>
            </div>
            <div class="wallet_list_right">
                <p  v-if="item.f_io_type == 1" style="color: #F4B779;">+{{ item.money }}</p>
                <p  v-else>-{{ item.money }}</p>
                <img src="./img/wallet_right.png" alt="">
            </div>
          </div>
      </li>
      <div slot="top" class="mint-loadmore-top" style="text-align:center">
          <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }"></span>
          <!-- <mt-spinner v-show="topStatus == 'loading'" color="#26a2ff"></mt-spinner> -->
        </div>
        <div v-if="allLoaded" style="width:100%;height:100%;text-align:center;">没有更多数据了</div>
        <div slot="bottom" class="mint-loadmore-bottom">
          <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }"></span>
          <span v-show="bottomStatus === 'loading'">
            <!-- <mt-spinner v-show="bottomStatus == 'loading'" color="#26a2ff"></mt-spinner> -->
          </span>
        </div>
    </ul>
    </mt-loadmore>
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
    <div v-show="zheZhao" class="zhe_zhao"></div>

    <mt-picker @change="onValuesChange" v-show="show_check_type" :slots="slots" style="width:100%;background-color:#fff;position:fixed;bottom: 1rem;"></mt-picker>
    <div v-show="show_check_type"  class="submit_btn sure_btn" @click="sureType()">
        确定
    </div>
</div>
</template>

<script>
import { MessageBox, DatetimePicker, Picker, Indicator, Loadmore, Spinner } from 'mint-ui'
import axios from 'axios'
export default {
  components: {
    DatetimePicker,
    MessageBox,
    Picker,
    Indicator,
    Loadmore,
    Spinner
  },
  data () {
    return {
      zheZhao: false,
      timeText: this.formatDate(new Date('2018-1-1')),
      pickerVisible: null,
      pickerValue: null,
      startDate: new Date('2018-1-1'),
      endDate: new Date(),
      moneyList: [],
      show_check_type: false,
      zhichu: 0,
      shouru: 0,
      slots: [
        {
          // flex: 1,
          values: ['', '全部', '红包', '提现', '充值', '分佣', '广告费支出'],
          // className: 'slot1',
          textAlign: 'center'
        }
      ],
      isKong: false,
      shaiXuan: '',
      monthArr: [], // 保存当前展示支出收入头的值
      // 上拉加载
      pageNum: 1, // 页码
      InitialLoading: true, // 初始加载
      list: 0, // 数据
      allLoaded: false, // 数据是否加载完毕
      bottomStatus: '', // 底部上拉加载状态
      wrapperHeight: 0, // 容器高度
      topStatus: '', // 顶部下拉加载状态
      translate: 0, //
      moveTranslate: 0,
      itemItem: '' // 保存要选择时间的item数据
    }
  },
  methods: {
    setzhichu (type, time, io, page) {
      this.$axios.get('api/wxpub/user_wallet/adverExtensionRecord.html?type=' + type + '&start_time=' + time + '&io=' + io + '&page=' + page) // 问号后面是要传送的参数
        .then(res => { //  请求成功后的函数
          if (this.pageNum === res.data.data.last_page) {
            this.allLoaded = true// 模拟数据加载完毕 禁用上拉加载
            this.handleBottomChange('loadingEnd')// 数据加载完毕 修改状态码
            this.$refs.loadmore.onBottomLoaded()
          }

          console.log(this.pageNum + '页')
          if (this.pageNum === 1) { // 第一页直接展示
            if (res.data.data.length === 0) { // 如果为空
              this.isKong = true
            } else { // 有数据
              let obj = res.data.data.data
              obj.forEach((item) => {
                // 如果不等于选择的月 不展示月账单那栏
                if (item.timeAxis.length !== 0) { // 判断是否展示月份支出收入部分
                  // this.monthArr.push(item.timeAxis.current_time)
                  // console.log(this.monthArr)
                  // let a = this.monthArr.find((value, index, arr) => {
                  //   if (item.timeAxis !== value) {
                  //     return false
                  //   }
                  //   return true
                  // })
                  let a = this.monthArr.indexOf(item.timeAxis.current_time)
                  this.monthArr.push(item.timeAxis.current_time)
                  if (a === -1) {
                    item.showHead = true
                  } else {
                    item.showHead = false
                  }

                  // if (!a) {
                  //   item.showHead = true
                  // }
                } else { // 为空直接不展示
                  item.showHead = false
                }
              })
              this.moneyList = obj
              Indicator.close()
              this.handleBottomChange('loadingEnd')// 数据加载完毕 修改状态码
              this.$refs.loadmore.onTopLoaded()
            }
          } else { // 其余的拼接到后面
            let obj = res.data.data.data
            obj.forEach((item) => {
              if (item.timeAxis.length !== 0) {
                let b = this.monthArr.indexOf(item.timeAxis.current_time)
                console.log(b)
                this.monthArr.push(item.timeAxis.current_time)
                if (b === -1) {
                  item.showHead = true
                } else {
                  item.showHead = false
                }
              } else {
                item.showHead = false
              }
            })
            obj.forEach((item) => {
              this.moneyList.push(item) // 直接拼接到当前现有的数据里
            })
            Indicator.close()
            this.handleBottomChange('loadingEnd')// 数据加载完毕 修改状态码
            this.$refs.loadmore.onBottomLoaded()
          }
        })
        .catch(err => { //  请求失败后的函数
          this.handleBottomChange('loadingEnd')
          Indicator.close()
          MessageBox.alert('请稍后重试')
        })
    },
    openPicker (item, index) { // 显示选择时间日期
      // console.log(item)
      this.itemItem = item
      this.$refs.picker.open()
    },
    handleConfirm: function () { // 日期确认之后
      // console.log(this.pickerValue)
      // console.log(this.itemItem.timeAxis.)
      let timeTag = this.pickerValue
      this.timeText = this.formatDate(timeTag, 1)
      let time = this.formatDate(timeTag, 0)
      Indicator.open()
      this.setzhichu(3, time, '', 1)
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
    checkMonth: function () { // 月账单
      this.$router.push({
        path: '/mouthBill'
      })
    },
    filter: function () { // 筛选
      this.show_check_type = true
      this.zheZhao = true
    },
    sureType: function () { // 确认筛选按钮
      this.show_check_type = false
      this.zheZhao = false
      // let timeTag = this.pickerValue
      // console.log(this.pickerValue)
      let startTime = this.formatDate(this.pickerValue, 0)
      console.log(startTime)
      // type:1,io:0 广告费支出
      // type:1,io:1 充值
      // type:4,io:1 提现
      // type:4,io:0 红包
      // type:5,io:0 分佣
      // type:3,io:false 全部
      if (this.shaiXuan === '') {

      } else if (this.shaiXuan === '全部') {
        this.setzhichu(3, startTime, '', 1)
      } else if (this.shaiXuan === '红包') {
        this.setzhichu(4, startTime, 0, 1)
      } else if (this.shaiXuan === '提现') {
        this.setzhichu(4, startTime, 1, 1)
      } else if (this.shaiXuan === '充值') {
        this.setzhichu(1, startTime, 1, 1)
      } else if (this.shaiXuan === '分佣') {
        this.setzhichu(5, startTime, 0, 1)
      } else if (this.shaiXuan === '广告费支出') {
        this.setzhichu(1, startTime, 0, 1)
      }
    },
    onValuesChange: function (picker, values) {
      this.shaiXuan = values[0]
      // console.log(this.shaiXuan)
    },
    consumptionDetails: function () {
      this.$router.push({
        path: '/payDetail'
      })
    },
    // 上拉加载
    handleBottomChange (status) {
      this.moveTranslate = 1
      this.bottomStatus = status
    },
    loadBottom () {
      this.handleBottomChange('loading')// 上拉时 改变状态码
      this.pageNum += 1
      let startTime = this.formatDate(this.pickerValue, 0)
      console.log(startTime + '开始时间')
      this.setzhichu(3, startTime, '', this.pageNum)
      // setTimeout(() => { // 上拉加载更多 模拟数据请求这里为了方便使用一次性定时器
      //   if (this.pageNum <= 3) { // 最多下拉三次
      //     this.list += 12// 上拉加载 每次数值加12
      //   } else {
      //     this.allLoaded = true// 模拟数据加载完毕 禁用上拉加载
      //   }
      //   this.handleBottomChange('loadingEnd')// 数据加载完毕 修改状态码
      //   this.$refs.loadmore.onBottomLoaded()
      // }, 1500)
    },
    handleTopChange (status) {
      this.moveTranslate = 1
      this.topStatus = status
    },
    translateChange (translate) {
      const translateNum = +translate
      this.translate = translateNum.toFixed(2)
      this.moveTranslate = (1 + translateNum / 70).toFixed(2)
    },
    loadTop () { // 下拉刷新 模拟数据请求这里为了方便使用一次性定时器
      this.handleTopChange('loading')// 下拉时 改变状态码
      this.pageNum = 1
      this.allLoaded = false// 下拉刷新时解除上拉加载的禁用
      let startTime = this.formatDate(this.pickerValue, 0)
      this.setzhichu(3, startTime, '', 1)
      // setTimeout(() => {
      //   this.list = 12// 下拉刷新 数据初始化
      //   this.handleTopChange('loadingEnd')// 数据加载完毕 修改状态码
      //   this.$refs.loadmore.onTopLoaded()
      // }, 1500)
    }

  },
  beforeCreate: function () {
  },
  created: function () {
    // this.imgUrl =
    // console.log(time)
    // console.log(this.formatDate(new Date(), 0))
    // let intiTime = this.formatDate(new Date(), 0)
    // let initTimeText = this.formatDate(new Date(), 1)
    // this.timeText = initTimeText
    // Indicator.open()
    // this.setzhichu(3, intiTime, '', 1)
  },
  beforeMount: function () {

  },
  mounted () {
    let windowWidth = document.documentElement.clientWidth// 获取屏幕高度
    // console.log(windowWidth) ==375   代码之前设置的是768
    if (windowWidth > 768) { // 这里根据自己的实际情况设置容器的高度
      this.wrapperHeight = document.documentElement.clientHeight - 130
    } else {
      this.wrapperHeight = document.documentElement.clientHeight - 10
    }
    let intiTime = this.formatDate(new Date(), 0)
    let initTimeText = this.formatDate(new Date(), 1)
    this.timeText = initTimeText
    this.pickerValue = intiTime
    Indicator.open()
    this.setzhichu(3, intiTime, '', 1)
    // setTimeout(() => { // 页面挂载完毕 模拟数据请求 这里为了方便使用一次性定时器
    //   this.list = 12
    // }, 1500)
  },
  destroyed: function () {
    Indicator.close()
  }
}
</script>

<style scoped>
@import './css/my_wallet.css';
.submit_btn{
    width: 100%;
    height: 1.07rem;
    background-color: #5286EC;
    line-height: 1.07rem;
    text-align: center;
    color: #fff;
    font-size: 0.4rem;
    position: fixed;
    bottom: 0;
    cursor: pointer;
    z-index: 10;
}
.sure_btn{
    background-color:#fff!important;
    color:#5186EB!important;
    font-size: 0.45rem;
}
.zhe_zhao{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0,0,0,.4)
}
/**
  分页加载
**/
  .page-title,
.page-footer {
  text-align: center;
  position: absolute;
}
.page-title {
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
}
.page-footer {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.page-title+* {
  margin-top: 50px;
}
@media (min-width: 768px){
  .page-title {
    height: 90px;
    line-height: 90px;
  }
  .page-title+* {
    margin-top: 90px;
  }
}
.page-loadmore-listitem {
    height: 50px;
    line-height: 50px;
    text-align: center
}

.page-loadmore-listitem {
    border-top: 1px solid #eee
}

.page-loadmore-wrapper {
    overflow: scroll
}
.page-loadmore-list {
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;

}
.mint-loadmore-text{
  display: inline-block!important;
}
</style>

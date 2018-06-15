<template>
<div>
    <div v-wechat-title="$route.meta.title"></div>
    <div class="customer_up_box">
        <ul class="purse_ul">
            <li>
                <p style="font-size:0.8rem!important;margin-top:0;">1888</p>
                <p>总互动人数</p>
            </li>
            <li>
                <p style="font-size:0.8rem!important;margin-top:0;">1888</p>
                <p>总扫码人数</p>
            </li>
        </ul>
    </div>

    <div  class="month_bill_up">
        <div class="bill_up_left">
            <div class="check_time" @click="openPicker()">
                <p>{{ timeData }}</p>
                <img src="./img/down.png" alt="">
            </div>
            <div class="money_title">
                <span style="margin-left: 0.2rem;">互动人数</span>
                <span>￥235.00</span>
                <span>扫码人数</span>
                <span>￥35.70</span>
            </div>
        </div>
    </div>

        <!--  -->
    <!-- <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore"> -->
    <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px'}">
    <mt-loadmore :top-method="loadTop" @translate-change="translateChange" @top-status-change="handleTopChange"
        :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded"
        :auto-fill="false" ref="loadmore">
    <ul class="wallet_list">
        <li v-for="(item,index) in customerData">
            <div class="wallet_list_left">
                <img :src="item.user_thumbnail" alt="">
                <p>{{ item.user_nickname }}</p>
                <p>{{ item.update_time }}</p>
            </div>
            <div class="wallet_list_right">
                <img v-if="item.update_time === 1" src="./img/girl.png" alt="">
                <img v-else src="./img/boy.png" alt="">
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
    <!-- </mt-loadmore> -->

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
<!-- <mt-datetime-picker
    ref="picker"
    type="time"
    v-model="pickerValue">
  </mt-datetime-picker> -->

</div>
</template>

<script>
import { MessageBox, DatetimePicker, Picker, Indicator, Loadmore, Spinner } from 'mint-ui'
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
      startDate: new Date('2018-1-1'),
      endDate: new Date(),
      pageConfig: { // 分页属性
        page: 1
      },
      pickerVisible: '',
      customerData: [],
      timeData: '2018年6月',
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
    customerList: function (pageNum) {
      this.$axios.get(this.utils.api + '/wxpub/siter/getUserList.html?page=' + pageNum)
        .then((res) => {
          if (res.data.code === 200) {
            if (this.pageNum === res.data.data.last_page) {
              this.allLoaded = true// 模拟数据加载完毕 禁用上拉加载
              this.handleBottomChange('loadingEnd')// 数据加载完毕 修改状态码
              this.$refs.loadmore.onBottomLoaded()
            }
            console.log(this.pageNum + '页')
            // console.log(res.data.data.data)
            this.customerData = res.data.data.data
            Indicator.close()
            this.handleBottomChange('loadingEnd')// 数据加载完毕 修改状态码
            this.$refs.loadmore.onBottomLoaded()
          }
        })
        .catch((err) => {
          console.log(err)
          this.handleBottomChange('loadingEnd')
          Indicator.close()
          MessageBox.alert('请稍后重试')
        })
    },
    loadBottom () {
      this.pageConfig.page += 1
      console.log(this.pageConfig.page)
      this.$axios.get('/api/wxpub/siter/getUserList.html?page=' + this.pageConfig.page)
        .then((res) => {
          if (res.data.code === 200) {
            // console.log(res.data.data.data)
            this.customerData = res.data.data.data
            if (parseInt(this.pageConfig.page) === res.data.data.last_page) {
              this.allLoaded = true// 若数据已全部获取完毕
            }
          }
        })
        .catch((err) => {
          console.log(err)
        })
      this.$refs.loadmore.onBottomLoaded()
    },
    openPicker () {
      this.$refs.picker.open()
    },
    handleConfirm: function () {
      console.log(this.pickerValue)
      this.timeData = this.formatDate(this.pickerValue, 1)
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
    // 上拉加载
    handleBottomChange (status) {
      this.moveTranslate = 1
      this.bottomStatus = status
    },
    loadBottom () {
      this.handleBottomChange('loading')// 上拉时 改变状态码
      this.pageNum += 1
      this.customerList(this.pageNum)
    },
    handleTopChange (status) {
      console.log(3)
      this.moveTranslate = 1
      this.topStatus = status
    },
    translateChange (translate) {
      const translateNum = +translate
      this.translate = translateNum.toFixed(2)
      this.moveTranslate = (1 + translateNum / 70).toFixed(2)
    //   console.log(this.translateNum)
    },
    loadTop () { // 下拉刷新 模拟数据请求这里为了方便使用一次性定时器
      this.handleTopChange('loading')// 下拉时 改变状态码
      this.pageNum = 1
      this.allLoaded = false// 下拉刷新时解除上拉加载的禁用
      this.customerList(1)
    }

  },

  beforeCreate: function () {
  },
  created: function () {
    // this.imgUrl =
    // Indicator.open()
    // this.customerList(1)
  },
  beforeMount: function () {

  },
  mounted: function () {
    // this.timeDown()
    let windowWidth = document.documentElement.clientWidth// 获取屏幕高度
    console.log(windowWidth)
    // console.log(windowWidth) ==375   代码之前设置的是768
    if (windowWidth > 768) { // 这里根据自己的实际情况设置容器的高度
      this.wrapperHeight = document.documentElement.clientHeight - 130
    } else {
      this.wrapperHeight = document.documentElement.clientHeight - 10
    }
    // let intiTime = this.formatDate(new Date(), 0)
    // let initTimeText = this.formatDate(new Date(), 1)
    // this.timeText = initTimeText
    // this.pickerValue = intiTime
    Indicator.open()
    this.customerList(1)
  }

}
</script>

<style scoped>
.customer_up_box{
    width: 100%;
    height: 4rem;
    background: url('./img/bj.png') 100% 100%;
    background-size: cover;
    padding: 0.1px;
}
.month_bill_up{
    width: 100%;
    height: 2rem;
    background-color:#F3F6F5;;
}
.check_time{
    cursor: pointer;
}
.bill_up_left{
    width: 55%;
    float: left;
}
.bill_up_left p{
    float: left;
    font-size: 0.4rem;
    font-weight: 700;
    color: #333333;
    /* line-height: 1.5rem; */
    margin-top: 0.4rem;
    margin-left: 0.5rem;
}
.bill_up_left img{
    width: 0.5rem;
    margin-top: 10%;
    margin-left: -41%;
}

.money_title{
    width: 100%;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 0.25rem;
}
.money_title span{
    color: #999999;
}

.wallet_list{
    width: 92%;
    margin: 0 auto;
}
.wallet_list li{
    width: 100%;
    height: 2rem;
    border-bottom: 0.02rem solid #D8D8D8;
    cursor: pointer;
}
.wallet_list_left{
    width: 60%;
    height: 100%;
    /* background-color: aliceblue; */
    float: left;
}
.wallet_list_right{
    height: 100%;
    /* background-color: antiquewhite; */

}
.wallet_list_left img{
    width: 1.07rem;
    height: 1.07rem;
    float: left;
    margin-right: 0.25rem;
    margin-top: 0.5rem;
    border-radius: 0.5rem;
}
.wallet_list_left p{
    width: 70%;
    text-align: left;
    margin-top: 0.5rem;
    color: #333333;
    font-weight: bold;
    font-size: 0.4rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.wallet_list_left p:nth-of-type(2){
    margin-top: 0.15rem;
    color: #999999;
    font-size: 0.3rem;
    font-weight: normal;
}
.wallet_list_right img{
        float: right;
    width: 0.5rem;
    height: 0.7rem;
    margin-top: 0.6rem;
}
.wallet_list_right p{
    font-size: 0.5rem;
    color: #333333;
    line-height: 2rem;
    width: 32%;
    float: left;
    text-align: right;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.purse_ul{
    width: 100%;
    margin-top: 11%;
}
.purse_ul li{
    width: 40%;
    height: 1rem;
    text-align: center;
    float: left;
    margin-left: 0.7rem;
}
.purse_ul li p:nth-of-type(1){
    color: #fff;
    font-size: 0.8rem;
    margin: 0.2rem 0 0.1rem 0;
}
.purse_ul p:nth-of-type(2){
    font-size: 0.3rem;
    color: #fff;
    opacity: 0.9;
}
.purse_ul li p i{
    display: inline-block;
    width: 0.45rem;
    height: 0.45rem;
    border-radius: 50%;
    font-style: normal;
    border: 0.02rem solid #fff;
    font-size: 0.3rem;
    margin-left: 0.2rem;
    line-height: 0.45rem;
    cursor: pointer;
}
</style>

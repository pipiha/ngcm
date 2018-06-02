<template>
<div>
    <div v-wechat-title="$route.meta.title"></div>
    <div class="customer_up_box">
        <ul class="purse_ul">
            <li>
                <p>1888</p>
                <p>总互动人数</p>
            </li>
            <li>
                <p>1888</p>
                <p>总扫码人数</p>
            </li>
        </ul>
    </div>

    <div  class="month_bill_up">
        <div class="bill_up_left">
            <div class="check_time" @click="openPicker()">
                <p>2018年5月</p>
                <img src="./img/down.png" alt="">
            </div>
            <!-- <p>2018年5月</p>
            <img src="./img/down.png" alt=""> -->
            <div class="money_title">
                <span style="margin-left: 0.2rem;">互动人数</span>
                <span>￥235.00</span>
                <span>扫码人数</span>
                <span>￥35.70</span>
            </div>
        </div>
        <!-- <div class="bill_up_right">
            <p>筛选</p>
            <p>月账单</p>
        </div> -->
    </div>

        <!--  -->
    <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
    <ul class="wallet_list">
        <li v-for="(item,index) in customerData">
            <div class="wallet_list_left">
                <img :src="item.user_thumbnail" alt="">
                <p>{{ item.user_nickname }}</p>
                <p>{{ item.update_time }}</p>
            </div>
            <div class="wallet_list_right">
                <!-- <p>-222.00</p> -->
                <img v-if="item.update_time === 1" src="./img/girl.png" alt="">
                <img v-else src="./img/boy.png" alt="">
            </div>
        </li>

    </ul>
    </mt-loadmore>

</div>
</template>

<script>
import { Indicator, Loadmore } from 'mint-ui'
export default {
  components: {
    Indicator,
    Loadmore
  },
  data () {
    return {
      pageConfig: { // 分页属性
        page: 1
      },
      customerData: [],
      allLoaded: false, // 是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
      scrollMode: 'auto' // 移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
    }
  },
  methods: {
    customerList: function () {
      this.$axios.get('api/wxpub/siter/getUserList.html')
        .then((res) => {
          if (res.data.code === 200) {
            // console.log(res.data.data.data)
            this.customerData = res.data.data.data
            Indicator.close()
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    loadBottom () {
      this.pageConfig.page += 1
      console.log(this.pageConfig.page)
      //   this.$axios.get('api/wxpub/siter/getUserList.html?page=' + this.pageConfig.page)
      //     .then((res) => {
      //       if (res.data.code === 200) {
      //       // console.log(res.data.data.data)
      //         this.customerData = res.data.data.data
      //         if (parseInt(this.pageConfig.page) === res.data.data.last_page) {
      //           this.allLoaded = true// 若数据已全部获取完毕
      //         }
      //       }
      //     })
      //     .catch((err) => {
      //       console.log(err)
      //     })
      this.$refs.loadmore.onBottomLoaded()
    }

  },

  beforeCreate: function () {
  },
  created: function () {
    // this.imgUrl =
    Indicator.open()
    this.customerList()
  },
  beforeMount: function () {

  },
  mounted: function () {
    // this.timeDown()
  }

}
</script>

<style>
.customer_up_box{
    width: 100%;
    height: 4rem;
    background: url('./img/bj.png') 100% 100%;
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
    /* font-size: 0.8rem; */
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

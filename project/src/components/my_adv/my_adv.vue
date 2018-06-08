<template>
    <div class="adv_wrap" >
        <div v-wechat-title="$route.meta.title"></div>
        <ul>
            <!-- 我感兴趣部分 -->
            <li v-if="advType === 0"  v-for="(item,index) in footData"  :code="item.h5_id" >
                <img @click="getAdvDetail(0,item.h5_id)"  :src="'http://img.agrimedia.cn/' + item.h5_thumbnail" alt="">
                <div class="adv_title">
                    <span>{{ item.create_time }}</span>
                    <span  @click="cancalFoot(1,1)" style="color: #999999;">删除</span>
                    <p>{{ item.h5_title}}</p>
                </div>
            </li>
           <!-- 我的足迹部分 -->
           <li @click="getAdvDetail(1,item.h5_id)" v-else-if="advType == 1"  v-for="(item,index) in footData"  :code="item.h5_id">
                <img :src="'http://img.agrimedia.cn/' + item.h5_thumbnail" alt="">
                <div class="adv_title">
                    <span>{{ item.create_time }}</span>
                    <span @click="cancalFoot(item.h5_id,index)" style="color: #999999;">取消足迹</span>
                    <p>{{ item.h5_title}}</p>
                </div>
            </li>
            <!-- 我的广告 -->
            <li v-else-if="advType == '2'"  :code="item.adv_id">
                <img :src="item.video_myself + '?vframe/jpg/offset/0/imageView2/1/w/690/h/390/q/75|imageslim'" alt="">
                <div class="adv_title">
                    <span v-if="item.o_status == '2'">剩余{{ item.resTime }}天</span>
                    <span v-else>剩余0天</span>
                    <span v-if="item.o_status === 1">已下刊</span>
                    <span v-else-if="item.o_status === 2">已上刊</span>
                    <span v-else-if="item.o_status === 3"  style="color: #F1965A;">等待付款</span>
                    <span v-else="item.o_status === 4" style="color: #F1965A;">等待编辑</span>
                    <p>{{ item.adv_title }}</p>
                </div>
                <img v-if="item.adv_type == 0" src="./img/icon1.png" alt="">
                <img v-else="item.adv_type == 1" src="./img/icon2.png" alt="">
            </li>
            <!-- <li>
                <img src="./img/bj.png" alt="">
                <div class="adv_title">
                    <span>已有1688人浏览</span>
                    <span>已下刊</span>
                    <p>自然堂促销广告</p>
                </div>
                <img src="./img/icon2.png" alt="">
                <div class="adv_down"></div>
            </li>
            <li>
                <img src="./img/bj.png" alt="">
                <div class="adv_title">
                    <span></span>
                    <span style="color: #F1965A;">等待充值</span>
                    <p>自然堂促销广告</p>
                </div>
                <img src="./img/icon1.png" alt="">
            </li>
            <li>
                <img src="./img/bj.png" alt="">
                <div class="adv_title">
                    <span></span>
                    <span style="color: #F1965A;">等待编辑</span>
                    <p>自然堂促销广告</p>
                </div>
                <img src="./img/icon2.png" alt="">
            </li> -->

        </ul>

        <div class="kong_adv" v-show="isKong" style="margin-top: 45%;">
          <p>暂无记录，赶快去看看吧~</p>
        </div>

        <!-- 删除弹窗 -->
        <div class="alert_collect_wrap" v-show="show_cancel">
            <div class="alert_box">
                <img src="./img/cancel.png" alt="">
                <p v-if="advType === 0">确定删除？</p>
                <p v-else-if="advType === 1">确定要取消足迹？</p>
                <p v-else >确定要取消收藏？</p>
                <div class="alert_bottom">
                    <p @click="sureCancel(advType)" class="sureCancel">确定</p>
                    <p @click="cancelCancel()" class="cancelCancel">取消</p>
                </div>
            </div>
        </div>

        <img @click="addAdvFn()"  class="add_adv_btn add_rotate" v-show="addBtn" src="./img/add.png" alt="">

        <!-- 添加广告 -->
        <div class="add_adv_wrap" v-show="isShowAdd">
            <div>
                <img @click="tocreatAdv(0)" src="./img/add_shu.png" alt="">
                <img @click="tocreatAdv(1)" src="./img/add_zhan.png" alt="">
                <img @click="cancelAdd()" style="transform: rotate(90deg);" src="./img/add.png" alt="">
            </div>
        </div>

        </ul>
    </div>
</template>

<script>
import { Indicator, MessageBox } from 'mint-ui'
import { mapState } from 'Vuex'
export default {
  components: {
    Indicator,
    MessageBox
  },
  data () {
    return {
      show_cancel: false,
      advType: '',
      footData: '',
      isKong: false,
      cancelID: '',
      cancelIndex: '',
      addBtn: false,
      isShowAdd: false
    }
  },
  methods: {
    lovdData: function () {

    },
    addAdvFn: function () {
      this.isShowAdd = true
      this.addBtn = false
      // this.isRotate = false
    },
    cancelAdd: function () {
      this.isShowAdd = false
      this.addBtn = true
    },
    tocreatAdv: function (type) {
      this.isShowAdd = false
      this.addBtn = true
      if (type === 0) { // 数字
        this.$router.push({
          path: '/makeAdv'
        })
      } else { // 展示
        this.$router.push({
          path: '/doorOrder'
        })
      }
    },
    myFoot: function (url) { // 我的足迹数据 我的收藏数据
      this.$axios.get('api' + url)
        .then((res) => {
        //   console.log(res)
          if (res.data.code === 200) {
            console.log(res.data.data.data)
            let obj = res.data.data.data
            // let obj = [{
            //   'h5_id': 13,
            //   'h5_title': '来买地（最新）',
            //   'h5_desc': '',
            //   'h5_thumbnail': 'o_1capq2jls142ifk67c15h41o8sa.jpg',
            //   'h5_app_pic': 'o_1capq2jls142ifk67c15h41o8sa.jpg',
            //   'h5_content': '{"page1":{"page1_desc1_ctn":"盘活农村资产","page1_desc1_size":"56px","page1_desc2_ctn":"服务资本下乡","page1_desc2_size":"56px"},"page2":{"page2_head_ctn":"来买地网诚邀加盟","page2_head_size":"80px","page2_ctn_ctn":"来买地网（www.laimaidi.com）是国内最大的农村不动产大数据、交易与金融服务平台，致力于盘活农村资产，服务资本下乡、助力乡村振兴。现面向全国诚邀区域加盟，国家级平台支持，共享农村土地改革红利。加盟热线：133-0129-3921 秦经理","page2_ctn_size":"26px"},"page3":{"page3_img1":"http:\/\/oxk4ui39b.bkt.clouddn.com\/o_1caprk7dpuirm7osli1npr1kaba.png","page3_img2":"http:\/\/oxk4ui39b.bkt.clouddn.com\/o_1caprkecse2v1hhd1vbh6855ksf.png","page3_img3":"http:\/\/oxk4ui39b.bkt.clouddn.com\/o_1caprkjb71ibl7r3skc18st2lik.png"},"page4":{"page4_img1":"http:\/\/oxk4ui39b.bkt.clouddn.com\/o_1caprkuun65a9p061c1c4o11n0p.png","page4_img2":"http:\/\/oxk4ui39b.bkt.clouddn.com\/o_1caprl47319ts1itnoni14pk5oiu.png","page4_img3":"http:\/\/oxk4ui39b.bkt.clouddn.com\/o_1caprl8rj1toh7cfon9j73rvc13.png","page4_img4":"http:\/\/oxk4ui39b.bkt.clouddn.com\/o_1caprlf8v19nbvo41d2517r312it18.png","page4_img5":"http:\/\/oxk4ui39b.bkt.clouddn.com\/o_1caprll051o3674i1fvfkqb18jm1d.png","page4_img6":"http:\/\/oxk4ui39b.bkt.clouddn.com\/o_1caprlq8i12v511uus5sjo21ggc1i.png"},"page6":{"page6_desc1_ctn":"联系电话：400-089-8802","page6_desc1_size":"38px","page6_desc2_ctn":"地址:北京朝阳区京辰大厦A座1层","page6_desc2_size":"38px","page6_erweima":"http:\/\/oxk4ui39b.bkt.clouddn.com\/o_1caprmnkfibd1da61oi6s1k1she1n.png"},"music_desc":"video1.mp4","template_arr":[1,1,1,1,0,1]}',
            //   'h5_status': 0,
            //   'h5_type': 0,
            //   'create_time': '2018-04-11 16:05:31',
            //   'update_time': '2018-04-11 18:32:23',
            //   'delete_time': null
            // },
            // {
            //   'h5_id': 14,
            //   'h5_title': '11111',
            //   'h5_desc': '',
            //   'h5_thumbnail': 'o_1capq2jls142ifk67c15h41o8sa.jpg',
            //   'h5_app_pic': 'o_1capq2jls142ifk67c15h41o8sa.jpg',
            //   'h5_content': '{"page1":{"page1_desc1_ctn":"盘活农村资产","page1_desc1_size":"56px","page1_desc2_ctn":"服务资本下乡","page1_desc2_size":"56px"},"page2":{"page2_head_ctn":"来买地网诚邀加盟","page2_head_size":"80px","page2_ctn_ctn":"来买地网（www.laimaidi.com）是国内最大的农村不动产大数据、交易与金融服务平台，致力于盘活农村资产，服务资本下乡、助力乡村振兴。现面向全国诚邀区域加盟，国家级平台支持，共享农村土地改革红利。加盟热线：133-0129-3921 秦经理","page2_ctn_size":"26px"},"page3":{"page3_img1":"http:\/\/oxk4ui39b.bkt.clouddn.com\/o_1caprk7dpuirm7osli1npr1kaba.png","page3_img2":"http:\/\/oxk4ui39b.bkt.clouddn.com\/o_1caprkecse2v1hhd1vbh6855ksf.png","page3_img3":"http:\/\/oxk4ui39b.bkt.clouddn.com\/o_1caprkjb71ibl7r3skc18st2lik.png"},"page4":{"page4_img1":"http:\/\/oxk4ui39b.bkt.clouddn.com\/o_1caprkuun65a9p061c1c4o11n0p.png","page4_img2":"http:\/\/oxk4ui39b.bkt.clouddn.com\/o_1caprl47319ts1itnoni14pk5oiu.png","page4_img3":"http:\/\/oxk4ui39b.bkt.clouddn.com\/o_1caprl8rj1toh7cfon9j73rvc13.png","page4_img4":"http:\/\/oxk4ui39b.bkt.clouddn.com\/o_1caprlf8v19nbvo41d2517r312it18.png","page4_img5":"http:\/\/oxk4ui39b.bkt.clouddn.com\/o_1caprll051o3674i1fvfkqb18jm1d.png","page4_img6":"http:\/\/oxk4ui39b.bkt.clouddn.com\/o_1caprlq8i12v511uus5sjo21ggc1i.png"},"page6":{"page6_desc1_ctn":"联系电话：400-089-8802","page6_desc1_size":"38px","page6_desc2_ctn":"地址:北京朝阳区京辰大厦A座1层","page6_desc2_size":"38px","page6_erweima":"http:\/\/oxk4ui39b.bkt.clouddn.com\/o_1caprmnkfibd1da61oi6s1k1she1n.png"},"music_desc":"video1.mp4","template_arr":[1,1,1,1,0,1]}',
            //   'h5_status': 0,
            //   'h5_type': 0,
            //   'create_time': '2018-04-11 16:05:31',
            //   'update_time': '2018-04-11 18:32:23',
            //   'delete_time': null
            // }
            // ]
            Indicator.close()
            if (obj.length === 0) {
              this.isKong = true
            } else {
              obj.forEach((item) => {
                item.show = true // 自定义属性 为了方便之后删除足迹时候的修改
              })
              this.footData = obj
            }
          }
        })
        .catch((err) => {
          console.err(err)
        })
    },
    // 取消足迹
    cancalFoot: function (id, index) { // 取消足迹的时候给自定义的的 key值 show 改为false 即可隐藏
      this.show_cancel = true
      this.cancelID = id
    },
    cancelCancel: function () { // 取消 取消
      this.show_cancel = false
    },
    sureCancel: function (type) { // 确认取消
      let url = ''
      if (type === 0) {
        url = '/wxpub/user/cancelCollection.html?c_id=' + this.cancelID
      } else if (type === '1') {
        url = '/wxpub/user/delmyfoot.html?pids=' + this.cancelID
      } else {

      }
      this.$axios.get('api' + url)
        .then((res) => {
          // console.log(res)
          if (res.data.code === 200) {
            this.show_cancel = false
            // 找到是删除的足迹id 删除
            this.footData.splice(this.footData.findIndex(item => item.h5_id === this.cancelID), 1)
            if (this.footData.length === 0) {
              this.isKong = true
            }
            // console.log(this.footData)
            // window.location.reload()
          } else {
            MessageBox.alert(res.data.msg)
            this.show_cancel = false
          }
        })
        .catch((err) => {
          console.err(err)
        })
    },
    getAdvDetail: function (type, code) { // 跳转详情
      this.$router.push({
        path: '/landingPage',
        query: {
          type: type, // 0表示 我感兴趣
          code: code
        }
      })
    },
    getActList: function () { // 我的广告列表
      Indicator.close()
      this.$axios.get('api/wxpub/show_adv_detail/allAdv')
        .then((res) => {
          // Indicator.close()
          if (res.data.code === 200) {
            Indicator.close()
            if (res.data.data.length === 0) {
              this.isKong = true
            } else {
              this.footData = res.data.data
              // this.footData = [
              //   [
              //     {
              //       'adv_title': '龙华驾校',
              //       'adv_id': 'a_527',
              //       'video_myself': 'http://oxk4ui39b.bkt.clouddn.com/bf0477bd9effa73d4ef61960667e7680.mp4',
              //       'adv_type': 1,
              //       'or_status': 1
              //     },
              //     {
              //       'adv_title': '龙华驾校（藁城）',
              //       'adv_id': 'a_121',
              //       'video_myself': 'http://oxk4ui39b.bkt.clouddn.com/d2135857f87f725a57e2754a5946c163.mp4',
              //       'adv_type': 1,
              //       'or_status': 2,
              //       'resTime': 52
              //     }
              //   ]
              // ]
            }
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  beforeCreate: function () {
    // window.location.reload()
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo
    })
  },
  created: function () {
    console.log(this.userInfo) // 这里降会输出小姐姐真漂亮
    // console.log('-----------------组件创建了-----------------')

    // console.log(this.$route.query.type)
  },
  beforeMount: function () {
    // console.log(this.$route.query.type)  0 我感兴趣 1 我的足迹
    this.advType = this.$route.query.type
    if (this.advType === 0) {
      console.log('我感兴趣')
      this.$route.meta.title = '我感兴趣'
      Indicator.open()
      this.myFoot('/wxpub/user/myCollection.html')
    } else if (this.advType === '1') {
      console.log('我的足迹')
      this.$route.meta.title = '我的足迹'
      Indicator.open()
      this.myFoot('/wxpub/user/mytrace.html')
    } else if (this.advType === '2') {
      console.log('我的广告')
      this.$route.meta.title = '我的广告'
      // Indicator.open()
      this.addBtn = true
      Indicator.open()
      this.getActList()
    } else {
      console.log('else')
    }
  },
  mounted: function () {

  },
  deactivated () {
    this.$destroy()
  }
}
</script>

<style scoped>
@import './css/my_adv.css';
.adv_wrap{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #F3F6F5;
}
/* 遮罩 */
.add_adv_wrap{
    width: 100%;
    height: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color:rgba(51,51,51,0.50);
}
.add_adv_wrap img{
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    position: absolute;
}
.add_adv_wrap img:nth-of-type(1){
    bottom: 2.5rem;
    right: 1.7rem;
}
.add_adv_wrap img:nth-of-type(2){
    bottom: 0.8rem;
    right: 2.8rem;
}
.add_adv_wrap img:nth-of-type(3){
    bottom: 0.8rem;
    right: 0.6rem;
    transform:rotate(45deg);
}
.add_adv_btn{
    width: 2rem;
    height: 2rem;
    /* position: relative;
    bottom: 0.6rem;
    right: -3.5rem; */
    position: fixed;
    bottom: 0.6rem;
    right: 0.5rem;
}
.add_rotate{
    transform:rotate(45deg);
}
</style>

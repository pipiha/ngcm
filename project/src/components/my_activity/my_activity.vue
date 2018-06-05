<template>
    <div>
        <div v-wechat-title="$route.meta.title"></div>
        <ul class="my_act_tab">
            <li v-for="(item,index) in list_type" :class="{act_on:index == isClick}" @click="clickLi(item,index)">{{ item }}</li>
            <!-- <li>往期活动</li> -->
        </ul>

        <ul class="my_act_msg">
          <!-- 已过期 -->
            <li v-if="actData.type == 0" v-for="(item,index) in actData">
                <img :src="item.s_thumb" alt="">
                <p>{{ item.s_title }}</p>
                <span>{{ item.create_time }}</span>
                <span>{{ item.s_address }}</span>
                <div class="time_out_show">
                    <img src="./img/timeout.png" alt="">
                </div>
            </li>
            <!-- 进行中 -->
            <li v-else  v-for="(item,index) in actData">
                <img :src="item.s_thumb" alt="">
                <p>{{ item.s_title }}</p>
                <span>{{ item.create_time }}</span>
                <span>{{ item.s_address }}</span>
            </li>
            <li>
                <img src="./img/Group 2.png" alt="">
                <p>品牌厨具，买4送一</p>
                <span>2018-09-09 10:00:00</span>
                <span>晋州市马于镇人人乐超市</span>
            </li>
            <li>
                <img src="./img/Group 3.png" alt="">
                <p>品牌厨具，买4送一</p>
                <span>2018-09-09 10:00:00</span>
                <span>晋州市马于镇人人乐超市</span>
                <div class="time_out_show">
                    <img src="./img/timeout.png" alt="">
                </div>
            </li>
        </ul>
        <img @click="addAdvFn()"  class="add_adv_btn add_rotate" v-show="addBtn" src="./img/add.png" alt="">

        <div class="kong_adv" v-show="isKong">
          <p>暂无广告 ，点击下方添加</p>
        </div>
        <!-- 添加广告 -->
        <div class="add_adv_wrap" v-show="isShowAdd">
            <div>
                <img @click="tocreatAdv(0)" src="./img/add_shu.png" alt="">
                <img @click="tocreatAdv(1)" src="./img/add_zhan.png" alt="">
                <img @click="cancelAdd()" style="transform: rotate(90deg);" src="./img/add.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import { Indicator } from 'mint-ui'
export default {
  components: {
    Indicator
  },
  data () {
    return {
      isClick: 0,
      list_type: ['活动进行中', '往期活动'],
      isRotate: true,
      isShowAdd: false,
      addBtn: true,
      actData: '',
      isKong: false,
      actType: ''
    }
  },
  methods: {
    clickLi (item, index) {
      this.isClick = index
      this.isKong = false
      Indicator.open()
      if (index === 0) {
        this.getAdvData(0)
      } else {
        this.getAdvData(1)
      }
    },
    addAdvFn: function () {
      // this.isShowAdd = true
      // this.addBtn = false
      // this.isRotate = false
      this.$router.push({
        path: '/releaseActivity'
      })
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
          path: '/releaseActivity'
        })
      }
    },
    // 获取活动数据
    getAdvData: function (type) { // 1 进行中 0 过期
      let getData = 'api/wxpub/siter/getMySendList.html?is_show=' + type
      this.$axios.get(getData)
        .then((res) => {
          if (res.data.code === 200) {
            Indicator.close()
            let dataObj = res.data.data.data
            if (dataObj.length === 0) {
              this.isKong = true
            } else {
              dataObj.forEach((item) => {
                item.type = type
              })
              this.actData = res.data.data.data
            }
          } else {

          }
        })
        .catch((err) => {
          console.err(err)
        })
    },
    // 获取我的广告列表
    getMyAdv: function () {
      this.$axios.get('api/wxpub/show_adv_detail/allAdv')
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  beforeCreate: function () {

  },
  created: function () {
    this.actType = this.$route.query.type
    console.log(this.actType)
    // if (this.actType === '0') { // 我的广告列表
    //   console.log('if')
    //   this.getMyAdv()
    // } else { // 我的活动列表
    //   console.log('else')
    this.getAdvData(1)
    // }
    // this.getAdvData(1)
  },
  beforeMount: function () {

  },
  mounted: function () {

  }

}
</script>

<style scoped>
@import './css/my_activity.css';
.kong_adv{
  width: 100%;
  height: 5rem;
  margin-top: 40%;
  text-align: center;
  font-size: 0.4rem;
  color: #999999;
}
</style>

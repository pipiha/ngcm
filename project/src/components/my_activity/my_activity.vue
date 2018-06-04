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
            <!-- <li>
                <img src="./img/Group 4.png" alt="">
                <p>品牌厨具，买4送一</p>
                <span>2018-09-09 10:00:00</span>
                <span>晋州市马于镇人人乐超市</span>
            </li> -->
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
      isKong: false
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
          path: '/releaseActivity',
          query: {
            type: 0
          }
        })
      } else { // 展示
        this.$router.push({
          path: '/releaseActivity',
          query: {
            type: 1
          }
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
              console.log('数据为空')
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
    }
  },
  beforeCreate: function () {

  },
  created: function () {
    this.getAdvData(1)
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

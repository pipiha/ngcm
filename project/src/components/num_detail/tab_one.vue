<template>
<div class="tab mine">
            <div class="ad_img_show">
                <img :src="'http://img.agrimedia.cn/' + mineData.h5_app_pic" alt="">
                <div v-if="result === 0" class="tuiguang_box_start" :class="{'tuiguang_box_end':isClick}" @click="statrOrEnd()">
                    <img src="./img/start.png" class="click_btn_img">点击开始推广
                </div>
                <div v-else class="tuiguang_box_start">
                    <img src="./img/start.png" class="click_btn_img">点击开始推广
                </div>
                <p>请谨慎选择，每天只有一次暂停机会</p>
            </div>
            <ul>
                <li>
                   <p>广告名称</p>
                   <p>{{ mineData.h5_src_title }}</p>
                </li>
                <li>
                    <p>活动编号</p>
                    <p>{{ mineData.o_number }}</p>
                </li>
                <li>
                    <p>创建时间</p>
                    <p>{{ mineData.create_time.substring(0,10) }}</p>
                </li>
                <li>
                    <p>投放点位</p>
                    <p>{{ mineData.o_sites_id.split(',').length }}个</p>
                    <p>编辑点位</p>
                </li>
                <li>
                    <p>状态</p>
                    <p v-if="mineData.o_status === '1'">已下刊</p>
                    <p v-else-if="mineData.o_status === '2'">已上刊</p>
                     <p v-else-if="mineData.o_status === '3'">等待付款</p>
                    <p v-else>等待编辑</p>
                </li>
            </ul>
        </div>
</template>

<script>
export default {
  data () {
    return {
      mineData: '', //  我的展示数据
      id: 0,
      status: 0,
      oid: 0,
      result: 0,
      isClick: false
    }
  },
  methods: {
    getMineData: function (id, status, oid) {
      this.$axios.get('api/wxpub/show_adv_detail/mathAdvOneDetail?list_id=' + id + '&o_status=' + status + '&o_id=' + oid)
        .then((res) => {
          console.log(res)
          if (res.data.code === 200) {
            this.mineData = res.data.data
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    statrOrEnd: function () {
      this.$axios.get('api/wxpub/adver_controller/orderStopOrStart.html?o_id=' + this.oid + '&o_status=' + this.status)
        .then((res) => {
          console.log(res)
          if (res.data.code === 200) {
            this.result = 1
            this.isClick = true
          } else {

          }
        })
        .catch((err) => {
          console.log(err)
        })
    //   return result
    }
  },
  beforeCreate: function () {

  },
  created: function () {
    this.id = this.$route.query.o_id // list id
    this.status = this.$route.query.o_status
    this.oid = this.$route.query.oid
    this.getMineData(this.id, this.status, this.oid)
  },
  beforeMount: function () {

  },
  mounted: function () {

  },
  deactivated: function () {

  }
}
</script>

<style scoped>
@import './css/num_detail.css';
</style>

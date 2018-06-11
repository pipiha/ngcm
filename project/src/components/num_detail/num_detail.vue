<template>
<div style="margin-top: -1.2rem;">
    <div v-wechat-title="$route.meta.title"></div>
    <ul class="ul">
        <li :class="{on:index==current}" v-for="(item,index) in titleLi" @click="selectStyle(item,index)">{{ item.title }}</li>
    </ul>

    <div class="tab_box">
        <router-view/>

    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      current: 0,
      titleLi: [
        {
          title: '我的',
          url: '/numDetail/tab1'
        },
        {
          title: '浏览统计',
          url: '/numDetail/tab2'
        },
        {
          title: '区域统计',
          url: '/numDetail/tab3'
        },
        {
          title: '金额明细',
          url: '/numDetail/tab4'
        }
      ],
      o_id: -1,
      o_status: 0
    }
  },
  methods: {
    // 子路由切换、li样式添加
    selectStyle (item, index) {
      this.current = index
      this.$router.push({
        path: item.url,
        query: {
          o_id: this.o_id,
          o_status: this.o_status
        }
      })
    },
    // 获取我的 页面 的数据
    getMine: function () {

    }

  },
  beforeCreate: function () {

  },
  created: function () {
    this.o_id = this.$route.query.o_id
    this.o_status = this.$route.query.o_status
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

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
      o_status: 0,
      oid: 0,
      urlChange: ''
      // num: 0
    }
  },
  methods: {
    // 子路由切换、li样式添加
    selectStyle (item, index, num) {
      console.log(this.oid)
      this.current = index
      this.$router.push({
        path: item.url,
        query: {
          o_id: this.o_id,
          o_status: this.o_status,
          oid: this.oid
        }
      })
    }
  },
  beforeCreate: function () {

  },
  created: function () {
    this.o_id = this.$route.query.o_id
    this.o_status = this.$route.query.o_status
    // this.h_id = this.$route.query.oid
    this.oid = this.$route.query.oid
    // this.urlChange = this.$route.path
    // console.log(this.$route.path)
    if (this.$route.path === '/numDetail') {
      // this.h_id = this.$route.query.oid
    } else if (this.$route.path === '/numDetail/tab1') {
      this.current = 0
    } else if (this.$route.path === '/numDetail/tab2') {
      this.current = 1
    } else if (this.$route.path === '/numDetail/tab3') {
      this.current = 2
    } else if (this.$route.path === '/numDetail/tab4') {
      this.current = 3
    }
  },
  beforeMount: function () {

  },
  mounted: function () {
    console.log(this.$route.path)
  },
  deactivated: function () {
    console.log(this.$route.path)
  }
}
</script>

<style scoped>
@import './css/num_detail.css';
</style>

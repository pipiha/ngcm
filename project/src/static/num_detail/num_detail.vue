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
      ]
    }
  },
  methods: {
    // 子路由切换、li样式添加
    selectStyle (item, index) {
      this.current = index
      this.$router.push({
        path: item.url
      })
    }

  }
}
</script>

<style>
@import './css/num_detail.css';
</style>

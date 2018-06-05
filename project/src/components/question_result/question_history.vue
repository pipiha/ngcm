<template>
<div class="question_history_box">
    <div v-wechat-title="$route.meta.title"></div>
    <div class="question_wrap">
        <div class="qs_bj">
            <img src="./img/qs_history.jpg" alt="">
        </div>
        <ul class="qs_history_ul">
            <!-- <li>
                <div class="qs_history_up">
                    <p>2018-04-26 13:17</p>
                    <p class="history_on">处理中</p>
                </div>
                <div class="qs_history_center">
                    <ul>
                        <li>
                            <span>反馈类型</span>
                            <span>咨询</span>
                        </li>
                        <li>
                            <span>姓   名</span>
                            <span>张三</span>
                        </li>
                        <li>
                            <span>手机号</span>
                            <span>123-1234-1234</span>
                        </li>
                        <li>
                            <p>留   言</p>
                            <div>恩恩哈哈哈哈IE菲欧if噢IE就发热赴日让国人贵妇人规范人工湖日该如何古人个人给人让人家给恩恩哈哈哈哈IE菲欧if噢IE就发热赴日让国人贵妇人规范人工湖日该如何古人个人给人让人家给</div>
                        </li>
                    </ul>

                </div>
            </li> -->

            <li v-for="(item,index) in historyData">
                <div class="qs_history_up">
                    <p>{{ item.create_time }}</p>
                    <p v-if="item.bstatus == 0" class="history_on">处理中</p>
                    <p v-else>已处理</p>
                </div>
                <div class="qs_history_center">
                    <ul>
                        <li>
                            <span>反馈类型</span>
                            <span>咨询</span>
                        </li>
                        <li>
                            <span>姓   名</span>
                            <span>{{ item.bname }}</span>
                        </li>
                        <li>
                            <span>手机号</span>
                            <span>{{ item.bphone }}</span>
                        </li>
                        <li>
                            <p>留   言</p>
                            <div>{{ item.bmessage }}</div>
                        </li>
                        <li v-show="item.breply != null">
                            <p v-show="item.zhan">回   复</p>
                            <span v-show="item.zhan" @click="isShowAnswerFn(item)" class="shou_huifu">收起回复</span>
                            <div  v-show="item.zhan">恩恩哈哈哈哈IE菲欧if噢IE就发热赴日让国人贵妇人规范人工湖日该如何古人个人给人让人家给恩恩哈哈哈哈IE菲欧if噢IE就发热赴日让国人贵妇人规范人工湖日该如何古人个人给人让人家给</div>
                            <span v-show="item.shou" class="zhan_huifu" @click="isShowAnswerFn(item)" >展开回复</span>
                        </li>
                    </ul>

                </div>
            </li>

        </ul>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      zhan: true,
      shou: false,
      historyData: ''
    }
  },
  methods: {
    isShowAnswerFn: function (item) {
      item.zhan = !item.zhan
      item.shou = !item.shou
    },
    getHistory: function () {
      this.$axios.get('api/wxpub/ask_back/history')
        .then((res) => {
          if (res.data.code === 200) {
            let history = res.data.data.data
            history.forEach((obj) => {
              obj.zhan = true
              obj.shou = false
            })
            this.historyData = history
          }
        })
        .catch((err) => {
          console.err(err)
        })
    }
  },
  beforeCreate () {
    // console.log(this.$route.query.id)
  },
  create () {

  },
  beforeMount: function () {
    this.getHistory()
  },
  mounted: function () {
    // this.getHistory()
  }
}
</script>

<style scoped>
@import './css/question_history.css';
.question_history_box{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #F3F6F5;
}
</style>

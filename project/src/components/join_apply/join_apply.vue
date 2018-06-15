<template>
<div>
    <div v-wechat-title="$route.meta.title"></div>
    <div class="join_apply_wrap">
        <ul>
            <li>
                <p>您的姓名</p>
                <input type="text" placeholder="请填写您的姓名" v-model="join_name">
            </li>
            <li>
                <p>手机号</p>
                <input type="text" placeholder="请填写您的手机号" v-model="join_tel">
            </li>
            <li>
                <p>从哪里了解农广？</p>
                <!-- <input type="text" placeholder="请填写您的姓名"> -->
                <div class="join_check_box">
                    <span v-for="(item,index) in whereData" :type='item.type' @click="checkTag1(item,index)" :class='{join_on:index == whereCheck}'>{{ item.msg }}</span>
                </div>
            </li>
            <li>
                <p>意向加盟区域(可多填)</p>
                <input type="text" placeholder="请填写意向填写区域" v-model="join_area">
            </li>
            <li>
                <p>您选择加盟农广的原因？</p>
                <!-- <input type="text" placeholder="请填写您的姓名"> -->
                <div class="join_check_box">
                    <span style="width: 30%;" v-for="(item,index) in whyData" :type='item.type' @click="checkTag2(item,index)" :class='{join_on:index == whyCheck}'>{{ item.msg }}</span>
                </div>
            </li>
            <li>
                <p>是否有创业经验？</p>
                <div class="join_check_box">
                    <span v-for="(item,index) in isStart" :type='item.type' @click="checkTag3(item,index)" :class='{join_on:index == isStartCheck}'>{{ item.msg }}</span>
                </div>
            </li>
            <li>
                <p>是否有管理经验？</p>
                <div class="join_check_box">
                    <span v-for="(item,index) in isManage" :type='item.type' @click="checkTag4(item,index)" :class='{join_on:index == isManageCheck}'>{{ item.msg }}</span>
                </div>
            </li>
            <li>
                <p>是否从事过广告服务行业？</p>
                <div class="join_check_box">
                    <span v-for="(item,index) in isService" :type='item.type' @click="checkTag5(item,index)" :class='{join_on:index == isServiceCheck}'>{{ item.msg }}</span>
                </div>
            </li>
        </ul>
    </div>
    <div class="read_url_box">
        <img v-if="isRead == true" src="./img/icon_xz.png" alt="" @click="readJoin()">
        <img v-else src="./img/icon_xz2_.png" alt="" @click="readJoin()">
        <!-- <img v-else-if="isRead === false" src="./img/icon_xz2.png" alt="" @click="readJoin()"> -->
        <p @click="goRead()">我已阅读加盟须知</p>
    </div>
    <!-- <mt-checklist v-model="value" :options="['我已阅读加盟须知']" style="text-align: left;" to="/readJoin"></mt-checklist> -->
    <div class="join_submit_btn" @click="joinSubmit()">
        提交
    </div>
</div>
</template>

<script>
import { MessageBox, Checklist } from 'mint-ui'
// import { Checklist } from 'mint-ui'
export default {
  components: {
    Checklist
  },
  data () {
    return {
    //   value: false,
      isRead: true,
      whereCheck: 10,
      whyCheck: 10,
      isStartCheck: 10,
      isManageCheck: 10,
      isServiceCheck: 10,
      whereData: [
        {type: '0', msg: '朋友'},
        {type: '1', msg: '门店'},
        {type: '2', msg: '网上'},
        {type: '3', msg: '初次了解'}
      ],
      whyData: [
        {type: '0', msg: '投资回报'},
        {type: '1', msg: '完整的教学培训'}
      ],
      isStart: [
        {type: '0', msg: '是'},
        {type: '1', msg: '否'}
      ],
      isManage: [
        {type: '0', msg: '是'},
        {type: '1', msg: '否'}
      ],
      isService: [
        {type: '0', msg: '是'},
        {type: '1', msg: '否'}
      ],
      join_name: '',
      join_tel: '',
      join_area: ''
    }
  },
  methods: {
    checkTag1: function (item, index) {
      this.whereCheck = index
    },
    checkTag2: function (item, index) {
      this.whyCheck = index
    },
    checkTag3: function (item, index) {
      this.isStartCheck = index
    },
    checkTag4: function (item, index) {
      this.isManageCheck = index
    },
    checkTag5: function (item, index) {
      this.isServiceCheck = index
    },
    // 是否阅读加盟须知
    readJoin: function () {
      this.isRead = !this.isRead
    },
    // 跳转到加盟须知
    goRead: function () {
      this.$router.push({
        path: '/readJoin'
      })
    },
    // 提交判断
    joinSubmit: function () {
      let name = /[^\u4E00-\u9FA5]/g // 验证只能是汉字
      let myreg = /^[1][3,4,5,7,8][0-9]{9}$/ // 验证手机号
      if (this.join_name === '') {
        MessageBox.alert('请填写您的姓名')
      } else if (name.test(this.join_name)) {
        MessageBox.alert('姓名只能是汉字哦')
      } else if (this.join_tel === '') {
        MessageBox.alert('请填写您的手机号')
      } else if (!myreg.test(this.join_tel)) {
        MessageBox.alert('请填写正确的手机号')
      } else if (this.join_area === '') {
        MessageBox.alert('请填写意向加盟区域')
      } else if (this.whereCheck === 10) {
        MessageBox.alert('您从哪里了解农广呢？')
      } else if (this.whyCheck === 10) {
        MessageBox.alert('您的加盟原因是什么呢？')
      } else if (this.isStartCheck === 10) {
        MessageBox.alert('您是否有创业经验呢？')
      } else if (this.isManageCheck === 10) {
        MessageBox.alert('您是否有管理经验呢？')
      } else if (this.isServiceCheck === 10) {
        MessageBox.alert('您是否从事广告服务行业呢？')
      } else if (this.isRead === true) {
        MessageBox.alert('请您先阅读加盟须知~')
      } else {
        this.joinAxios()
      }
    },
    // 提交请求
    joinAxios: function () {
      let postData = this.$qs.stringify({
        jname: this.join_name,
        jphone: this.join_tel,
        about: this.whereCheck,
        area: this.join_area,
        reason: this.whyCheck,
        start_exp: this.isStartCheck,
        manage_exp: this.isManageCheck,
        service_exp: this.isServiceCheck
      })
      this.$axios.post(this.utils.api + '/wxpub/consult/saveJoinInfo', postData)
        .then((res) => {
          // console.log(res)
          if (res.data.code === 200) {
            MessageBox.alert('感谢您对我们的支持和信任，我们会对您的资格进行审核，请保持电话电话畅通，我们会与您及时联系!')
          } else {
            MessageBox.alert(res.data.msg)
          }
        })
        .catch((err) => {
          console.error(err, '请求用户信息报错')
        })
    }
  },
  beforeCreate: function () {

  },
  created: function () {
    // this.imgUrl =

  },
  beforeMount: function () {

  },
  mounted: function () {
    // this.timeDown()
  }
}
</script>

<style scoped>
@import './css/join_apply.css';
html,body{
  background-color: #fff;
}
a{
    text-decoration: none;
    font-size: 0.3rem;
}
a:hover,a:visited{
    text-decoration: none;
}
.mint-checkbox-label{
    font-size: 0.3rem!important;
    color: #999999;
}
.read_url_box{
    width: 90%;
    height: 1rem;
    margin:0 auto;
}
.read_url_box img{
    width: 0.5rem;
    height: 0.5rem;
    float: left;
    margin-top: 0.25rem;
}
.read_url_box p{
    font-size: 0.3rem;
    color: #999999;
    line-height: 1rem;
    text-align: left;
    margin-left: 0.8rem;
}
</style>

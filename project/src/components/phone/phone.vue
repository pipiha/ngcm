<template>
    <div>
        <div v-wechat-title="$route.meta.title"></div>
        <div class="login-input-box">
            <div class="login_msg">
                <img src="./img/phone.png" alt="">
                <!-- style="margin-left: -2.3rem;"  -->
                <input v-model="phone_num" style="margin-left: -2.3rem;" class="telInput" type="text" name="" value="" placeholder="请输入手机号">
            </div>
            <div class="login_msg">
                <img style="margin-top:0.6rem;width: 0.4rem;" src="./img/picture.png" alt="">
                <input v-model="img_num" class="imgInput passWord" type="text" name="" value="" placeholder="图片验证码">
                <div @click="getImg()" class="yanzheng"><img :src="imgUrl" alt="captcha"/></div>
            </div>
            <div class="login_msg">
                <img style="margin-top:0.59rem;width: 0.4rem;" src="./img/msg.png" alt="">
                <input v-model="msg_num" class="msgInput" type="text" name="" value="" placeholder="请输入验证码">
                <p :class="{'time_text': isTimer, 'disable': disable}" class="msg_btn" @click="sendMsg()">{{ msg_text }}</p>
            </div>
        </div>

        <div id="sure_btn" @click="submitData()">确认</div>
    </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
export default {
  data () {
    return {
      imgUrl: '',
      phone_num: '',
      img_num: '',
      msg_num: '',
      msg_text: '获取验证码',
      isTimer: false,
      disable: false
    }
  },
  methods: {
    getuserInfo: function () {
      this.$axios.get(this.utils.BaseURL + '/wxpub/user/getuserinfo')
        .then((res) => {
          // console.log(res.data)
          //   res为axios包装后的数据体 自己请求的数据 在res。data 里面
          if (res.data.code === 200) {
            // 在这里不要比对code值 有些接口报错 但code值还是200
            // console.log(res.data)
          }
        })
        .catch((err) => {
          console.error(err, '请求用户信息报错')
        })
    },
    // 获取图形验证码
    getImg: function () {
      // let imgUrl = this.utils.BaseURL + '/captcha.html'
      let random = Math.random()
      this.imgUrl = this.utils.BaseURL + '/captcha.html?' + random
    },
    // 提交数据
    submitData: function () {
      console.log(this.phone_num)
      if (this.phone_num === '') {
        MessageBox.alert('请填写手机号')
      } else if (this.img_num === '') {
        MessageBox.alert('请填写图形验证码')
      } else if (this.msg_num === '') {
        MessageBox.alert('请填写短信验证码')
      } else {
        MessageBox.alert('绑定成功')
      }
    },
    // 发送短信
    sendMsg: function () {
      let postData = this.$qs.stringify({
        tel_num: this.phone_num,
        captcha: this.img_num
      })
      this.$axios({
        method: 'post',
        url: this.utils.BaseURL + '/admin/base/sendcode.html',
        data: postData
      })
        .then(function (res) {
          if (res.data.code === 200) {
            MessageBox.alert('短信已发送')
            this.timeDown()
          } else {
            MessageBox.alert(res.data.msg)
          }
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    // 倒计时60s
    timeDown: function () {
      let timer = 60
      console.log(timer + 'timeDown')
      this.Countdown(timer)
    },
    Countdown: function (timer) {
      console.log(timer + 'Countdown')
      if (timer >= 1) {
        timer -= 1
        setTimeout(function () {
          if (timer === 0) {
            this.msg_text = '获取验证码'
            this.isTimer = false
            this.disable = false
          } else {
            this.msg_text = timer + 's后重发'
            this.isTimer = true
            this.disable = true
          }
        }, 900)
      }
      this.Countdown(timer)
    }

  },
  beforeCreate: function () {

  },
  created: function () {
    console.log('-----------------组件创建了-----------------')
    this.getuserInfo()
    this.imgUrl = this.utils.BaseURL + '/captcha.html'
  },
  beforeMount: function () {

  },
  mounted: function () {
    // this.timeDown()
  }
}
</script>

<style scope>
@import './css/phone.css';
</style>

<template>
    <div>
        <div v-wechat-title="$route.meta.title"></div>
        <div class="login-input-box">
            <div class="login_msg">
                <img src="./img/phone.png" alt="">
                <!-- style="margin-left: -2.3rem;"  -->
                <input style="margin-left: -2.3rem;" class="telInput" type="text" name="" :value="phone_num" placeholder="请输入手机号">
            </div>
            <div class="login_msg">
                <img style="margin-top:0.6rem;width: 0.4rem;" src="./img/picture.png" alt="">
                <input class="imgInput passWord" type="text" name="" :value="img_num" placeholder="图片验证码">
                <div @click="getImg()" class="yanzheng"><img :src="imgUrl" alt="captcha"/></div>
            </div>
            <div class="login_msg">
                <img style="margin-top:0.59rem;width: 0.4rem;" src="./img/msg.png" alt="">
                <input class="msgInput" type="text" name="" :value="msg_num" placeholder="请输入验证码">
                <p class="msg_btn">获取验证码</p>
            </div>
        </div>

        <div id="sure_btn">完成</div>
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
      msg_num: ''
    }
  },
  methods: {
    getuserInfo: function () {
      this.$axios.get(this.utils.BaseURL + '/wxpub/user/getuserinfo')
        .then((res) => {
          // console.log(res.data)
          //   res为axios包装后的数据体 自己请求的数据 在res。data 里面
          if (res.data.code == 200) {
            // 在这里不要比对code值 有些接口报错 但code值还是200
            // console.log(res.data)
          }
        })
        .catch((err) => {
          console.error(err, '请求用户信息报错')
        })
    },
    getImg: function () {
      // let imgUrl = this.utils.BaseURL + '/captcha.html'
      this.imgUrl = this.utils.BaseURL + '/captcha.html'
      console.log(this.imgUrl + '旧')
      console.log(this.utils.BaseURL + '/captcha.html' + '新')
    },
    submitData: function () {
      // if (phone_num == '') {
      //   MessageBox.alert('请填写手机号')
      // }
    }

  },
  beforeCreate: function () {

  },
  created: function () {
    this.getuserInfo()
  },
  beforeMount: function () {

  },
  mounted: function () {

  }
}
</script>

<style scope>
@import './css/phone.css';
</style>

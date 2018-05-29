<template>
    <div>
        <div v-wechat-title="$route.meta.title"></div>
        <div class="login-input-box">
            <div class="login_msg">
                <img src="./img/phone.png" alt="">
                <input style="margin-left: -2.3rem;" class="telInput" type="text" name="" value="" placeholder="请输入手机号">
            </div>
            <div class="login_msg">
                <img style="margin-top:0.6rem;width: 0.4rem;" src="./img/picture.png" alt="">
                <input class="imgInput passWord" type="text" name="" value="" placeholder="图片验证码">
                <div class="yanzheng"><img src="{:captcha_src()}" alt="captcha"/></div>
            </div>
            <div class="login_msg">
                <img style="margin-top:0.59rem;width: 0.4rem;" src="./img/msg.png" alt="">
                <input class="msgInput" type="text" name="" value="" placeholder="请输入验证码">
                <p class="msg_btn">获取验证码</p>
            </div>
        </div>

        <div id="sure_btn">完成</div>
    </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    getuserInfo: function () {
      this.$axios.get(this.utils.BaseURL + '/wxpub/user/getuserinfo.html')
        .then(function (res) {
          console.log(res, '这是axios请求回来的')
          //   res为axios包装后的数据体 自己请求的数据 在res。data 里面
          if (res.data.success) {
            // 在这里不要比对code值 有些接口报错 但code值还是200
            console.log(res.data, '这是请求回来的信息')
          }
        })
        .catch(function (err) {
          console.error(err, '请求用户信息报错')
        })
    },
    getImg: function () {

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

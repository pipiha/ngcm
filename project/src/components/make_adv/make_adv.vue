<template>
    <div>
        <div v-wechat-title="$route.meta.title"></div>
        <div class="make_adv_title">
            <p>开始创作</p>
            <p>开启您的广告之旅</p>
        </div>
        <!-- <div class="make_adv_center" :style="imageUrl">
          <img :src="imageUrl" alt="" class="upload_img">
            <div class="make_adv_left">
                <div>
                    <img src="./img/clip.png" alt="">
                </div>
                <input v-model="advTitle" type="text" placeholder="请输入广告名称">
                <input v-model="advTel" type="text" placeholder="请输入联系电话">
            </div>
            <div class="make_adv_right">
                <div>
                    <img src="./img/add.png" alt="">
                </div>
                <input  @change="upLoading($event)" style="float: right;width: 31%;height: 49%;margin-top: -2.5rem;margin-right: 1rem;" class="upload_file" id='uploadCompress' type="file" name="picture" accept="image/*">
                <p>添加广告机背景照片</p>
            </div>
        </div> -->

        <div class="make_adv_wrap">
            <img class="upload_img" :src="imageUrl" alt="">
            <img class="adv_bottom" src="./img/bottom.png" alt="">
            <img class="saoma" src="./img/saoma.png" alt="">
            <div class="make_adv_left">
                <div>
                    <img src="./img/clip.png" alt="">
                    <p style="font-size:0.3rem;color:#999999;">二维码区域</p>
                </div>
            </div>
            <p class="tishi_text">点击修改背景图片</p>
            <div class="bottom_text_wrap">
                <p>广告地址</p>
                <p>联系电话</p>
            </div>
            <input  @change="upLoading($event)" class="upload_file" id='uploadCompress' type="file" name="picture" accept="image/*">
        </div>
        <input class="input_bottom" v-model="advTitle" type="text" placeholder="请输入广告名称">
        <input class="input_bottom" v-model="advTel" type="text" placeholder="请输入联系电话">

        <div class="sure_btn" @click="nextClick()">下一步</div>
    </div>
</template>

<script>
import { Indicator, MessageBox } from 'mint-ui'
const qiniu = require('./qiniu.js')
export default {
  components: {
    Indicator,
    MessageBox
  },
  data () {
    return {
      imgToken: '', // 上传七牛token
      imageUrl: require('./img/791287872032788714.png'),
      uploadImg: {
        'background-image': ''
      },
      advTitle: '',
      advTel: ''
    }
  },
  beforeCreate: function () {

  },
  created: function () {
    this.getToken()
  },
  beforeMount: function () {

  },
  mounted: function () {

  },
  methods: {
    // 获取七牛云uptoken
    getToken: function () {
      // this.imgToken = '8RR89PskwpRkNF9qDp9n_mLkkQtrDa148VhwqKlr:yjX89mCrRrTttbMgTAXq3eJHAmw=:eyJzY29wZSI6Im5nY20iLCJkZWFkbGluZSI6MTUyODM4MzU2OX0='
      this.$axios.get('api/service/adv_api/getuptoken')
        .then((res) => {
        //   console.log(res)
          this.imgToken = res.data.uptoken
        //   if (res.data === 200) {
        //     this.imgToken = res.data.uptoken
        //   } else {

        //   }
        })
        .catch((err) => {
          MessageBox.alert('请稍后重试')
        })
    },
    // 上传图片
    upLoading: function (e) {
      Indicator.open()
      let token = this.imgToken
      let file = e.target.files[0]
      let param = new FormData() // 创建form对象
      param.append('file', file, file.name)// 通过append向form对象添加数据
      param.append('token', this.imgToken)
      param.append('chunk', '0')// 添加form表单中其他数据
      console.log(param.get('file')) // FormData私有类对象，访问不到，可以通过get判断值是否传进去
      let config = {
        headers: {'Content-Type': 'multipart/form-data'}
      } // 添加请求头 http://up-z1.qiniu.com  http://upload.qiniu.com/
      this.$axios.post('http://upload-z1.qiniu.com/', param, config)
        .then(response => {
          console.log(response.data)
          Indicator.close()
          this.imageUrl = 'http://img.agrimedia.cn/' + response.data.key
          console.log(this.imageUrl)
        })
        .catch((err) => {
          upLoading(e)
          MessageBox.alert('请稍后再试')
          Indicator.close()
        })
    },
    nextClick: function () {
      let myreg = /^[1][3,4,5,7,8][0-9]{9}$/ // 验证手机号
      if (this.imageUrl.substring(0, 4) !== 'http') {
        MessageBox.alert('请上传广告机背景图')
      } else if (this.advTitle === '') {
        MessageBox.alert('请输入广告名称')
      } else if (this.advTel === '') {
        MessageBox.alert('请输入联系电话')
      } else if (!myreg.test(this.advTel)) {
        MessageBox.alert('请填写正确的手机号')
      } else {
        this.$router.push({
          path: '/createPhoneadv',
          query: {
            title: this.advTitle,
            tel: this.advTel,
            imgUrl: this.imageUrl
          }
        })
      }
    }

  }
}
</script>;

<style scoped>
@import './css/make_adv.css';
.upload_img{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.make_adv_center{
    position: relative;
    background-size: cover;
    overflow: hidden;
}
</style>

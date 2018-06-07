<template>
    <div>
        <div v-wechat-title="$route.meta.title"></div>
        <div class="make_adv_title">
            <p>开始创作</p>
            <p>开启您的广告之旅</p>
        </div>
        <div class="make_adv_center" :style="imageUrl">
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
            <!-- <img :src="imageUrl" alt="" class="upload_img"> -->
        </div>
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
      imageUrl: require('../../static/release_activity/img/111.png'),
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
      this.imgToken = '8RR89PskwpRkNF9qDp9n_mLkkQtrDa148VhwqKlr:Ka4Ak0XdxJTBrU1-sey-Jf6k4aE=:eyJzY29wZSI6Im5nY20iLCJkZWFkbGluZSI6MTUyODM3NzUxNn0='
      this.$axios.get('http://www.agrimedia.cn/service/adv_api/getuptoken')
        .then((res) => {
          console.log(res)
          if (res.data === 200) {
            this.imgToken = res.data.data.uptoken
          } else {

          }
        })
        .catch((err) => {
          console.log(err)
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
          MessageBox.alert('请稍后再试')
          Indicator.close()
        })
    },
    nextClick: function () {
      if (this.imageUrl.substring(0, 4) !== 'http') {
        MessageBox.alert('请上传广告机背景图')
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

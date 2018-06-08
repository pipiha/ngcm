<template>
    <div class="create_phone_wrap">
        <div v-wechat-title="$route.meta.title"></div>
        <input v-model="advConentTitle" type="text" placeholder="点击设置内容标题（必填）">
        <ul>
           <li v-for="(item,index) in advData">
               <div class="adv_up">
                   <img @click="deleteConent(item.advIndex)" src="./img/close.png" alt="">
                   <img @click="moveConentDown(item,index)" src="./img/down.png" alt="">
                   <img @click="moveConentUp(item,index)" src="./img/up2.png" alt="">
               </div>
               <!-- 上传图片 -->
                <div class="uploadImg" style="position: relative;">
                    <input @change="upLoading($event,item)" style="z-index:10;" class="upload_file" id='uploadCompress' type="file" name="picture" accept="image/*">
                    <div class="up_text_wrap">
                        <img src="./img/add.png" alt="">
                    </div>
                    <p>添加广告图片（必选）</p>
                    <img style="cursor:pointer;" class="upload_ctn_img" :src="item.advImg">
                </div>
                <!-- 添加文字 -->
                <div class="adv_add_text">
                    <textarea v-model="item.advConent" name="" id="" cols="30" rows="10" placeholder="点击添加文字"></textarea>
                </div>
           </li>
        </ul>
        <!-- 创建新的内容 -->
        <div class="create_new_content" @click="addNew()">
            <img src="./img/addadv.png" alt="">
        </div>
        <input v-model="srcTitle" type="text" placeholder="请输入广告名称（必填）">
        <input v-model="advAdress" type="text" placeholder="请输入您的地址（必填）">
        <input v-model="advTel" type="text" placeholder="请输入您的电话（必填）">

        <div class="page_btn">
            <div @click="lookAdv($event)">预览</div>
            <div @click="advSubmit()">提交</div>
        </div>
    </div>
</template>

<script>
import { Indicator, MessageBox } from 'mint-ui'
export default {
  data () {
    return {
    //   imageUrl: require('./img/111.png'),
      appPic: '',
      advData: [
        {
          advIndex: 0,
          advImg: require('./img/111.png'),
          advConent: ''
        }
      ],
      cancelId: '',
      advConentTitle: '',
      srcTitle: '',
      advAdress: '',
      advTel: '',
      lookData: []
    }
  },
  methods: {
    // 获取七牛云uptoken
    getToken: function () {
      // this.imgToken = '8RR89PskwpRkNF9qDp9n_mLkkQtrDa148VhwqKlr:5gmDRQjMbqVD4bD7_ERYiQbDIF8=:eyJzY29wZSI6Im5nY20iLCJkZWFkbGluZSI6MTUyODI2OTA3OH0='
      this.$axios.get('api/service/adv_api/getuptoken')
        .then((res) => {
          this.imgToken = res.data.uptoken
          // if (res.data === 200) {
          //   this.imgToken = res.data.data.uptoken
          //   console.log(this.imgToken)
          // } else {

          // }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 上传图片
    upLoading: function (e, item) {
      Indicator.open()
      let token = this.imgToken
      let file = e.target.files[0]
      let param = new FormData() // 创建form对象
      param.append('file', file, file.name)// 通过append向form对象添加数据
      param.append('token', this.imgToken)
      param.append('chunk', '0')// 添加form表单中其他数据
      // console.log(param.get('file')) // FormData私有类对象，访问不到，可以通过get判断值是否传进去
      let config = {
        headers: {'Content-Type': 'multipart/form-data'}
      } // 添加请求头 http://up-z1.qiniu.com  http://upload.qiniu.com/
      this.$axios.post('http://upload-z1.qiniu.com/', param, config)
        .then(response => {
          console.log(response.data)
          Indicator.close()
          item.advImg = 'http://img.agrimedia.cn/' + response.data.key
          //   console.log(this.imageUrl)
          console.log(item.advImg)
        })
        .catch((err) => {
          MessageBox.alert('请稍后再试')
          Indicator.close()
        })
    },
    // 添加新的内容
    addNew: function () {
      this.advData.push(
        {
          advIndex: this.advData.length,
          advImg: require('./img/111.png'),
          advConent: ''
        }
      )
    },
    // 删除内容
    deleteConent: function (id) {
      this.cancelId = id
      this.advData.splice(this.advData.findIndex(item => item.advIndex === this.cancelId), 1)
    },
    //  向上移动
    moveConentUp: function (item, index) {
      // 拼接函数(索引位置, 要删除元素的数量, 元素)
      // array.splice(2, 0, "three");
      // console.log(index + '当前')

      // console.log(this.advData)
      if (index === 0) {
        console.log('已经是第一项了')
      } else {
        // console.log('else')
        this.advData.splice(index - 1, 0, (this.advData[index])) // 在上一项插入
        this.advData.splice(index + 1, 1) // 删除后一项
      }

      // console.log(this.advData)
    },
    // 向下移动
    moveConentDown: function (item, index) {
      // this.advData.splice(this.advData.findIndex(item => item.advIndex === this.index), 1)
      // this.advData.splice(index, 0, item)
      console.log(index)
      if (index === this.advData.length - 1) {
        console.log('最后一项了')
      } else {
        this.advData.splice(index + 2, 0, this.advData[index]) // 在下一项插入
        this.advData.splice(index, 1) // 删除前一项
      }
    },
    advSubmit: function () {
      let myreg = /^[1][3,4,5,7,8][0-9]{9}$/ // 验证手机号
      if (this.advConentTitle === '') {
        MessageBox.alert('请填写广告内容标题')
      } else if (this.srcTitle === '') {
        MessageBox.alert('请填写广告名称')
      } else if (this.advAdress === '') {
        MessageBox.alert('请填写您的地址')
      } else if (this.advTel === '') {
        MessageBox.alert('请填写您的电话')
      } else if (!myreg.test(this.advTel)) {
        MessageBox.alert('请填写正确的手机号')
      } else if (this.advData[0].advImg.substring(0, 4) !== 'http') {
        MessageBox.alert('请上传至少一张广告图片')
      } else if (this.advData[0].advConent === '') {
        MessageBox.alert('请填写至少一个广告内容')
      } else {
        // MessageBox.alert('填写完毕')
        this.advAxios()
      }
    },
    advAxios: function () {
      let postData = this.$qs.stringify({
        h5_title: this.advConentTitle,
        h5_content: this.advData,
        h5_phone: this.advTel,
        h5_src_title: this.srcTitle,
        h5_address: this.advAdress,
        h5_app_pic: this.appPic
      })
      this.$axios({
        method: 'post',
        url: 'api/wxpub/create_adv/saveSecond',
        data: postData
      })
        .then((res) => {
          console.log(res)
          if (res.data.code === 200) {
            MessageBox.alert('提交成功')
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    lookAdv: function (e) {
      this.lookData.push(
        {
          type: 1
        },
        {
          h5_title: this.advConentTitle
        },
        {
          h5_content: this.advData
        },
        {
          h5_phone: this.advTel
        },
        {
          h5_src_title: this.srcTitle
        },
        {
          h5_address: this.advAdress
        }
      )
      //   console.log(this.lookData)
      //   console.log(this.$bus)
      //   this.$bus.emit('advData', this.lookData)
      bus.$emit('LOOKDATA', this.lookData)
      console.log(this.lookData)
      this.$router.push({
        path: '/landingPage',
        query: {
          type: 1
        }
      })
    }

  },
  beforeCreate: function () {
    // window.location.reload()
  },
  created: function () {
    // console.log(this.$route.query.imgUrl)
    this.appPic = this.$route.query.imgUrl // 广告机背景图 上一页传过来的
    this.advAdress = this.$route.query.title // 广告名称 改成地址了
    this.advTel = this.$route.query.tel // 电话
    this.getToken()
  },
  mounted: function () {

  }

}
</script>

<style soped>
@import './css/create_phone_adv.css';
</style>

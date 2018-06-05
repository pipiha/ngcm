<template>
<div>
    <div v-wechat-title="$route.meta.title"></div>
    <div class="question_wrap">
        <div class="qs_bj">
            <img src="./img/qs_bj.png" alt="">
        </div>
        <p @click="readHistory()">申请历史</p>
        <!-- <Input v-model="value" placeholder="Enter something..." style="width: 300px"></Input> -->
        <div class="qs_input_box">
            <!-- <Input icon="chevron-down" placeholder="请选择您的反馈类型"></Input> -->
            <input v-model="user_type" type="text" placeholder="请选择您的反馈类型" readonly="readonly" @click="showType()">
            <input v-model="user_name" type="text" placeholder="请填写您的姓名">
            <input v-model="user_tel" type="text" placeholder="请填写您的手机号">
            <textarea v-model="user_message" type="textarea" placeholder="请填写您的留言。"></textarea>
        </div>

        <div class="submit_btn" @click="questionSumbit()">
            提交申请
        </div>

        <div v-show="show_check_type"  class="submit_btn sure_btn" @click="sureType()">
            确定
        </div>

        <!-- <div style="width:100%;height:1rem;">
            <p>选择反馈类型</p>
            <img src="./img/" alt="">
        </div> -->

        <!-- type选择 -->
        <mt-picker v-show="show_check_type" :slots="slots" @change="onValuesChange" style="width:100%;background-color:#fff;position:fixed;"></mt-picker>

    </div>
</div>
</template>

<script>
import { Picker, MessageBox } from 'mint-ui'
export default {
  components: {
    Picker
  },
  data () {
    return {
      type: '',
      user_type: '',
      user_name: '',
      user_tel: '',
      user_message: '',
      show_check_type: false,
      slots: [
        {
          // flex: 1,
          values: ['', '投诉', '建议', '表扬', '咨询'],
          // className: 'slot1',
          textAlign: 'center'
        }
      ]
    }
  },
  methods: {
    onValuesChange (picker, values) {
      switch (values[0]) {
        case '投诉': this.type = 0; this.user_type = '投诉'; break
        case '建议': this.type = 1; this.user_type = '建议'; break
        case '表扬': this.type = 2; this.user_type = '表扬'; break
        case '咨询': this.type = 3; this.user_type = '咨询'; break
        default:
          break
      }
    },
    readHistory: function () {
      this.$router.push({
        path: '/questionHistory',
        query: {
          // id: '111'
        }
      })
    },
    showType: function () {
      this.show_check_type = true
    },
    sureType: function () {
      this.show_check_type = false
    },
    questionSumbit: function () {
    //   console.log(this.type)
      let name = /[^\u4E00-\u9FA5]/g // 验证只能是汉字
      let myreg = /^[1][3,4,5,7,8][0-9]{9}$/ // 验证手机号
      if (this.type === '') {
        MessageBox.alert('请选择反馈类型')
      } else if (this.user_name === '') {
        MessageBox.alert('请填写您的姓名')
      } else if (name.test(this.user_name)) {
        MessageBox.alert('姓名只能是汉字哦')
      } else if (this.user_tel === '') {
        MessageBox.alert('请填写您的手机号')
      } else if (!myreg.test(this.user_tel)) {
        MessageBox.alert('请填写正确的手机号')
      } else if (this.user_message === '') {
        MessageBox.alert('请选择您的反馈信息')
      } else {
        // MessageBox.alert('成功')
        this.questionAxios()
      }
    },
    questionAxios: function () {
      let postData = this.$qs.stringify({
        bname: this.user_name,
        bphone: this.user_tel,
        bmessage: this.user_message,
        bstatus: 0,
        btype: this.type
      })
      this.$axios.post('api/wxpub/ask_back/saveAskBack', postData)
        .then((res) => {
          console.log(res)
          if (res.data.code === 200) {
            MessageBox.alert('提交成功')
          } else {
            MessageBox.alert(res.data.msg)
          }
        })
        .catch((err) => {
          MessageBox.alert(res.data.msg)
        })
    }

  }

}
</script>

<style scoped>
@import './css/question_result.css';

</style>

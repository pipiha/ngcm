<template>
<div>
    <div v-wechat-title="$route.meta.title"></div>
    <div class="release_up">
        <!-- 上传图片 -->
        <div class="uploadImg" style="position: relative;">
            <input style="z-index:10;" class="upload_file" id='uploadCompress' type="file" name="picture" accept="image/*">
            <div class="up_text_wrap">
                <img src="../../static/release_activity/img/upload.png" alt="">
            </div>
            <p>添加活动照片</p>
            <img style="cursor:pointer;" class="upload_ctn_img" src="../../static/release_activity/img/111.png">
        </div>

        <!-- 活动描述 -->
        <div class="act_describe_wrap">
            <p>活动描述</p>
            <!-- <input type="text" placeholder="请输入活动描述"> -->
            <textarea name="" id="" cols="30" rows="10" placeholder="请输入活动描述"></textarea>
        </div>
    </div>

    <div class="release_down">
        <!-- 活动描述 -->
        <div class="act_describe_wrap" @click="showMore()">
            <p style="line-height: 1.5rem;height:1.5rem;">更多</p>
            <img :class="{'release_rotate': isRotate}" class="more_img" src="../../static/release_activity/img/up.png" alt="">
        </div>
        <ul v-show="show_more">
            <li>
                <p>活动地址</p>
                <div class="li_right">
                    <p style="width:86%;letter-spacing: 0.02rem;text-overflow:ellipsis;white-space: nowrap;overflow: hidden;">石家庄晋州市马宇镇人人乐超市</p>
                    <img src="../../static/release_activity/img/address.png" alt="">
                </div>
            </li>
            <li>
                <p>活动时间</p>
                <div class="li_right">
                    <div @click="checkDay(index)" :class="{release_on:index == isDayOn}" v-for="(item,index) in dayTag">{{ item }}</div>
                </div>
            </li>
            <li>
                <p>联系方式</p>
                <div class="li_right">
                    <input type="text" placeholder="请输入您的联系方式">
                </div>
            </li>
        </ul>
    </div>

    <div class="finish_btn">提交活动</div>

    <!-- <Input v-model="value8" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input> -->

    <!-- 提交成功弹窗 -->
    <div class="alert_collect_wrap" v-show="isSuccess">
        <div class="alert_box">
            <div>
                <img src="../../static/release_activity/img/close.png" alt="">
            </div>
            <img src="../../static/release_activity/img/tj_success.png" alt="">
        </div>
    </div>

    <!--start七牛html-->
<!--不让他出现 只是用了值-->
<div class="tab-content" style="display: none!important;">
    <div role="tabpanel" class="tab-pane fade in active" id="demo" aria-labelledby="demo-tab">
        <div class="row" style="margin-top: 20px;">
            <!--这个是上传到七牛的服务器地址-->
            <input type="hidden" id="domain" value="http://{:config('qiniu')['domain']}/">
            <input type="hidden" id="uptoken_url" value="{:url('admin/Adv/getUptoken')}">
            <input type="hidden" id="uptoken_val">

            <div class="col-md-12">
                <div id="container">
                    <!-- <a class="btn btn-default btn-lg " id="pickfiles" href="#" >
                         <i class="glyphicon glyphicon-plus"></i>
                         <span>选择文件</span>
                     </a>-->
                    <!-- <a class="btn btn-default btn-lg " id="up_load"  href="#" >
                         <span>确认上传</span>
                     </a>
                     <a class="btn btn-default btn-lg " id="stop_load"  href="#" >
                         <span>暂停上传</span>
                     </a>
                     <a class="btn btn-default btn-lg " id="retry"  href="#" >
                         <span>重试</span>
                     </a>-->
                </div>
            </div>

            <!--这是批量上传的-->
            <!--<div style="display:none" id="success" class="col-md-12">
                <div class="alert-success">
                    队列全部文件处理完毕
                </div>
            </div>-->
            <div class="col-md-12 ">
                <table class="table table-striped table-hover text-left" style="margin-top:40px;display:none">
                    <thead>
                    <tr>
                        <th class="col-md-4">Filename</th>
                        <th class="col-md-2">Size</th>
                        <th class="col-md-6">Detail</th>
                    </tr>
                    </thead>
                    <tbody id="fsUploadProgress">
                    </tbody>
                </table>
            </div>
        </div>

    </div>

</div>
<!--end七牛html-->

</div>
</template>

<script>

export default {
  data () {
    return {
      isRotate: false,
      isDayOn: 0,
      isSuccess: false,
      show_more: true,
      dayTag: ['1天', '3天', '5天', '7天']
    }
  },
  beforeCreate: function () {

  },
  created: function () {
    document.title = '发布活动'
  },
  beforeMount: function () {

  },
  mounted: function () {

  },
  methods: {
    showMore: function () { // 展示更多
      this.show_more = !this.show_more
      this.isRotate = !this.isRotate
    },
    checkDay: function (index) {
      this.isDayOn = index
    }
  }
}
</script>;

<style>
@import './css/release_activity.css';
</style>

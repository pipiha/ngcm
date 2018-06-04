// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import utils from './assets/common/js/common.js' // 公共js 例如:主域名等）
import BaiduMap from 'vue-baidu-map'
// import iView from 'iview';
// import 'iview/dist/styles/iview.css';
import VueWechatTitle from 'vue-wechat-title'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import qs from 'qs'

Vue.use(Mint)
Vue.use(VueWechatTitle)
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'V22GZGIsf9gR6G7d3L1KoZq4OVDAbsx2'
})

Vue.prototype.$axios = axios
Vue.prototype.$qs = qs
Vue.prototype.utils = utils // 公共信息（例如:主域名等）
Vue.prototype.HOST = '/api'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

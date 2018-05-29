// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import iView from 'iview';
// import 'iview/dist/styles/iview.css';
import VueWechatTitle from 'vue-wechat-title';  
import Mint from 'mint-ui';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios' 

Vue.use(Mint);
Vue.use(VueWechatTitle);

Vue.prototype.$axios = axios;
// Vue.prototype.HOST = 'http://argri.laimaidi.com/index.php';
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

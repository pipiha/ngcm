<template>
<div>
    <div v-wechat-title="$route.meta.title"></div>
    <div id="map">
    <!-- <baidu-map class="bm-view" :center="center" @ready="handler" ak="V22GZGIsf9gR6G7d3L1KoZq4OVDAbsx2">
    </baidu-map> -->
    </div>
    <div class="site_details_wrap" v-show="show_map_msg">
        <p>共有{{ siteData.num_town }}个镇，{{ siteData.num_village }}个村</p>
        <ul>
            <li>
                <p style="line-height: 0.2rem;font-size: 0.55rem;color: #5286EC;">{{ siteData.num_play }}</p>
                <span style="display: block;margin-top: -0.4rem;padding-left: 0.3rem;color: #999999;font-size: 0.3rem;">播放总次数（次）</span>
            </li>
            <li>
                <p style="line-height: 0.2rem;font-size: 0.55rem;color: #5286EC;">{{ siteData.num_play }}</p>
                <span style="display: block;margin-top: -0.4rem;padding-left: 0.3rem;color: #999999;font-size: 0.3rem;">点位总数（个）</span>
            </li>
        </ul>
    </div>

    <!-- <div class="call_us_wrap" v-show="call_us">
        <div class="call_us_up">
            <p>农广传媒科技有限公司</p>
            <span>AGRI MEDIA</span>
        </div>
        <ul class="call_ul">
            <li>
                <p>{{ showComMsg.title }}</p>
                <img src="./img/hotel.png" alt="">
            </li>
            <li>
                <p>{{ showComMsg.tel }}</p>
                <img src="./img/tel.png" alt="">
            </li>
            <li>
                <p>{{ showComMsg.detail_area }}</p>
                <img src="./img/address.png" alt="">
            </li>
        </ul>
    </div> -->

</div>
</template>

<script>
// import BMap from 'BMap'
export default {
  props: { // 里面存放的也是数据，与data里面的数据不同的是，这里的数据是从其他地方得到的数据
    height: {
      type: Number,
      default: 300
    },
    longitude: 114.486491, // 定义经度
    latitude: 38.043232 // 定义纬度
  },
  data () {
    return {
      siteData: '',
      show_map_msg: true,
      call_us: true,
      center: {lng: 0, lat: 0},
      autoLocationPoint: {lng: 0, lat: 0},
      initLocation: false,
      showComMsg: {
        'title': '奥体中心京辰大厦',
        'tel': '400-069-0088',
        'detail_area': '奥体中心京辰大厦'
      },
      markerArr: [
        // { title: '名称：广州火车站', point: '113.264531,23.157003', address: '广东省广州市广州火车站', tel: '12306' },
        // { title: '名称：广州塔（赤岗塔）', point: '113.330934,23.113401', address: '广东省广州市广州塔（赤岗塔） ', tel: '18500000000' },
        // { title: '名称：广州动物园', point: '113.312213,23.147267', address: '广东省广州市广州动物园', tel: '18500000000' },
        // { title: '名称：天河公园', point: '113.372867,23.134274', address: '广东省广州市天河公园', tel: '18500000000' }

      ]
    }
  },
  methods: {
    creatMap: function () {

    },
    getSite: function (advId) { // 获取分公司经纬度
      let _this = this
      this.$axios.get('api/wxpub/show_adv_detail/showSiteAll?adv_id=' + advId)
        .then(function (res) {
          if (res.data.code === 200) {
            let siteObj = res.data.data
            console.log(siteObj)
            _this.siteData = res.data.data
            // siteObj.forEach(item => {
            //   item.point = item.Lng + ',' + item.Lat
            //   item.title = item.detail_area
            //   item.tel = item.phone
            // })
            // // console.log(siteObj)
            // _this.markerArr = siteObj
            // _this.getMap()
          }
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    getMap: function () { // 绘制地图
      var map = new BMap.Map('map') // 创建Map实例
      var point = new BMap.Point(116.385685, 40.006454) // 地图中心点，广州市
      map.centerAndZoom(point, 7) // 初始化地图,设置中心点坐标和地图级别。
      map.enableScrollWheelZoom(true) // 启用滚轮放大缩小
      // 向地图中添加缩放控件
      var ctrlNav = new window.BMap.NavigationControl({
        anchor: BMAP_ANCHOR_TOP_LEFT,
        type: BMAP_NAVIGATION_CONTROL_LARGE
      })
      map.addControl(ctrlNav)

      // 向地图中添加缩略图控件
      var ctrlOve = new window.BMap.OverviewMapControl({
        anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
        isOpen: 1
      })
      map.addControl(ctrlOve)

      // 向地图中添加比例尺控件
      var ctrlSca = new window.BMap.ScaleControl({
        anchor: BMAP_ANCHOR_BOTTOM_LEFT
      })
      map.addControl(ctrlSca)

      var point = new Array() // 存放标注点经纬信息的数组
      var marker = new Array() // 存放标注点对象的数组
      var info = new Array() // 存放提示信息窗口对象的数组
      let markerArr = this.markerArr
      for (var i = 0; i < markerArr.length; i++) {
        var p0 = markerArr[i].point.split(',')[0] //
        var p1 = markerArr[i].point.split(',')[1] // 按照原数组的point格式将地图点坐标的经纬度分别提出来
        point[i] = new window.BMap.Point(p0, p1) // 循环生成新的地图点
        marker[i] = new window.BMap.Marker(point[i]) // 按照地图点坐标生成标记
        map.addOverlay(marker[i])
        marker[i].setAnimation(BMAP_ANIMATION_BOUNCE) // 跳动的动画
        var label = new window.BMap.Label(['名称：' + markerArr[i].title + '</br>', '电话：' + markerArr[i].tel], { offset: new window.BMap.Size(20, -10) })
        marker[i].setLabel(label)
        info[i] = new window.BMap.InfoWindow('<p style=’font-size:12px;lineheight:1.8em;’>' + markerArr[i].title + '</br>地址：' + markerArr[i].address + '</br> 电话：' + markerArr[i].tel + '</br></p>') // 创建信息窗口对象
      }

      marker.forEach((item, index) => {
        let arrindex = index
        item.addEventListener('click', () => {
          // console.log(arrindex)
          // console.log(item)
          this.showComMsg = this.markerArr[arrindex]
          // console.log(this.markerArr[arrindex])
        })
      })
    }
  },
  beforeCreate: function () {

  },
  created: function () {
    let advId = this.$route.query.advID
    this.getSite(advId)
  },
  beforeMount: function () {

  },
  mounted: function () {
    // this.getMap()
  }
}
</script>

<style scoped>
@import './css/site_details.css';
.BMapLabel{
  border:none!important;
}
</style>

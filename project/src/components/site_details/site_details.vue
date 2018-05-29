<template>
<div>
    <div v-wechat-title="$route.meta.title"></div>
    <div id="map"></div>
    <div class="site_details_wrap" v-show="show_map_msg">
        <p>共有5个镇，126个村</p>
        <ul>
            <li>
                <p style="line-height: 0.2rem;font-size: 0.55rem;color: #5286EC;">153</p>
                <span style="display: block;margin-top: -0.4rem;padding-left: 0.3rem;color: #999999;font-size: 0.3rem;">播放总次数（次）</span>
            </li>
            <li>
                <p style="line-height: 0.2rem;font-size: 0.55rem;color: #5286EC;">62</p>
                <span style="display: block;margin-top: -0.4rem;padding-left: 0.3rem;color: #999999;font-size: 0.3rem;">点位总数（个）</span>
            </li>
        </ul>
    </div>

    <div class="call_us_wrap" v-show="call_us">
        <div class="call_us_up">
            <p>农广传媒科技有限公司</p>
            <span>AGRI MEDIA</span>
        </div>
        <ul class="call_ul">
            <li>
                <p>北京-农广传媒</p>
                <img src="./img/hotel.png" alt="">
            </li>
            <li>
                <p>133 3333 3333</p>
                <img src="./img/tel.png" alt="">
            </li>
            <li>
                <p>北京市朝阳区京辰大厦A座1层</p>
                <img src="./img/address.png" alt="">
            </li>
        </ul>
    </div>




</div>
</template>

<script>
export default {
    data(){
        return {
            show_map_msg: false,
            call_us: true
        }
    },
    methods:{
        creatMap: function(){
            var Baidu=function(){
                var map = new BMap.Map("allmap");
                var point = new BMap.Point(116.331398,39.897445);   
                map.centerAndZoom(point);
                // 创建地址解析器实例
                var myGeo = new BMap.Geocoder();
                // 将地址解析结果显示在地图上,并调整地图视野
                myGeo.getPoint("北京市朝阳区京辰大厦A座", function(point){
                    if (point) {
                        map.centerAndZoom(point, 14);
                        map.addOverlay(new BMap.Marker(point));
                    }else{
                        alert("您选择地址没有解析到结果!");
                    }
                }, "北京市");
                // setTimeout(function(){
                //     map.setZoom(14);
                // }, 2000);  //2秒后放大到14级

                addMapControl();//向地图添加控件
                function addMapControl(){
                    //向地图中添加缩放控件
                    map.addControl(new BMap.NavigationControl()); 
                    //向地图中添加缩略图控件
                    map.addControl(new BMap.OverviewMapControl()); 
                    //向地图中添加比例尺控件
                    map.addControl(new BMap.ScaleControl()); 
                }

                map.enableScrollWheelZoom(true);
            }   
        },
        getSite: function(){
            console.log(this);
            this.$axios.get('/api' + '/wxpub/contact_us/index')
                .then(function(res){
                   console.log(res);
                })
                .catch(function(err){
                    console.log(err);
                })
        }
    },
    beforeCreate: function () {
        
    },
    created: function () {
        this.getSite();
    },
    beforeMount: function () {

    },
    mounted:function(){

    },
}
</script>

<style>
@import './css/site_details.css';
</style>



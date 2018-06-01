<template>
<div>
        <div v-wechat-title="$route.meta.title"></div>
        <div class="wrap">
        <!-- 展示图片 -->
        <div class="ad_img_wrap">
            <a class="img_big" href=""><div class="ad_img_up">
                <img class="ad_img" src="./img/iii.png" alt="">
            </div>
            </a>
            <p class="ad_name">新版一元夺宝</p>
            <p class="ad_time">2018-04-28</p>
        </div>

        <!-- 展示列表 -->
        <ul>
            <li>
                <span>点位地址</span>
                <!-- <p class="line">离线</p>  .on 在线 -->
                <div class="line on">在线</div>
                <p class="site_address" style="position: relative;">晋州-小焦镇</p>
                <!-- <p>离线</p> -->
            </li>
            <li>
                <span>当前播放</span>
                <p style="color: #4A87DE;">老庙黄金</p>
                <div class="screen_wrap">
                    <img src="./img/icon-jp.png" alt="">
                    <p class="ad_cut">广告截屏</p>
                </div>
                <div class="ad_name_wrap">
                    <!-- <p class="ad_name_show animated slideInUp">写死的</p> -->
                </div>
            </li>
            <li>
                <span>播放状态</span>
                <p class="ad_status">播放中</p>
            </li>
            <li>
                <span>播放次数</span>
                <p class="play_time">88次</p>
            </li>
        </ul>

        <!-- 屏幕截图 -->
        <div class="screen_img_show">
            <div class="screen_img_one">
                <p>广告截屏展示</p>
            </div>
            <div class="screen_img_one">
                <p>广告截屏展示</p>
            </div>
        </div>

        <!-- <div class="my-gallery">

            <figure>
                <a href="http://img.agrimedia.cn/icon_ec:3d:fd:fb:c1:7820180416172353" data-size="800x400">
                    <div class="screen_img_one">
                        <img src="images/s1.jpg" />
                    </div>
                </a>
            </figure>
        </div> -->

    </div>

<!--以下内容不要管-->
<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="pswp__bg"></div>
        <div class="pswp__scroll-wrap">
            <div class="pswp__container">
                <div class="pswp__item"></div>
                <div class="pswp__item"></div>
                <div class="pswp__item"></div>
            </div>
            <div class="pswp__ui pswp__ui--hidden">
                <div class="pswp__top-bar">
                    <div class="pswp__counter"></div>
                    <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
                    <div class="pswp__preloader">
                        <div class="pswp__preloader__icn">
                            <div class="pswp__preloader__cut">
                                   <div class="pswp__preloader__donut"></div>
                            </div>
                        </div>
                    </div>
                 </div>
                 <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                     <div class="pswp__share-tooltip"></div>
                    </div>
                 <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
                 <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
                 <div class="pswp__caption">
                     <div class="pswp__caption__center"></div>
                 </div>
            </div>
        </div>
    </div>

    <!-- loading加载 -->
    <Row style="top:0;left:0;" v-show="isLoding">
        <Col class="demo-spin-col" span="8">
            <Spin fix>
                <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
                <div>Loading</div>
            </Spin>
        </Col>
    </Row>

</div>
</template>

<script>
// import { Indicator  } from 'minu-ui';
export default {
  components: {
    // Indicator
  },
  data () {
    return {
      isLoding: false
    }
  }
}
</script>

<style lang="css">
@import './css/site_msg.css';
@import './css/photoswipe.css';
    .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
    .demo-spin-col{
        height: 100px;
        position: relative;
        border: 1px solid #eee;
        position: absolute;
        top: -196%;
        left: 34%;
    }
</style>

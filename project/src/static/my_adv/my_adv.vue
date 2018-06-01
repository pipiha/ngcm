<template>
    <div class="adv_wrap">
        <div v-wechat-title="$route.meta.title"></div>
        <ul>
            <li>
                <img src="./img/bj.png" alt="">
                <div class="adv_title">
                    <span>剩余200天</span>
                    <span>已上刊</span>
                    <p>自然堂促销广告</p>
                </div>
                <img src="./img/icon1.png" alt="">
            </li>
            <li>
                <img src="./img/bj.png" alt="">
                <div class="adv_title">
                    <span>已有1688人浏览</span>
                    <span>已下刊</span>
                    <p>自然堂促销广告</p>
                </div>
                <img src="./img/icon2.png" alt="">
                <div class="adv_down"></div>
            </li>
            <li>
                <img src="./img/bj.png" alt="">
                <div class="adv_title">
                    <span></span>
                    <span style="color: #F1965A;">等待充值</span>
                    <p>自然堂促销广告</p>
                </div>
                <img src="./img/icon1.png" alt="">
            </li>
            <li>
                <img src="./img/bj.png" alt="">
                <div class="adv_title">
                    <span></span>
                    <span style="color: #F1965A;">等待编辑</span>
                    <p>自然堂促销广告</p>
                </div>
                <img src="./img/icon2.png" alt="">
            </li>
            <!-- 我感兴趣部分 -->
            <li>
                <img src="./img/bj.png" alt="">
                <div class="adv_title">
                    <span>2018-01-11 12:21</span>
                    <span style="color: #999999;">删除</span>
                    <p>老庙黄金</p>
                </div>
            </li>
           <!-- 我的足迹部分 -->
           <li>
                <img src="./img/bj.png" alt="">
                <div class="adv_title">
                    <span>2018-01-11 12:21</span>
                    <span style="color: #999999;">取消足迹</span>
                    <p>老庙黄金</p>
                </div>
            </li>
        </ul>

        <!-- 删除弹窗 -->
        <div class="alert_collect_wrap" v-show="show_cancel">
            <div class="alert_box">
                <img src="./img/cancel.png" alt="">
                <p>确定要取消收藏？</p>
                <div class="alert_bottom">
                    <p class="sureCancel">确定</p>
                    <p class="cancelCancel">取消</p>
                </div>
            </div>
        </div>

        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            show_cancel: false
        }
    }
}
</script>

<style>
@import './css/my_adv.css';
</style>



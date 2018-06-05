<template>
    <div class="create_phone_wrap">
        <div v-wechat-title="$route.meta.title"></div>
        <input type="text" placeholder="点击设置标题（必填）">
        <ul>
           <li>
               <div class="adv_up">
                   <img src="./img/close.png" alt="">
                   <img src="./img/down.png" alt="">
                   <img src="./img/up2.png" alt="">
               </div>
               <!-- 上传图片 -->
                <div class="uploadImg" style="position: relative;">
                    <input style="z-index:10;" class="upload_file" id='uploadCompress' type="file" name="picture" accept="image/*">
                    <div class="up_text_wrap">
                        <img src="./img/add.png" alt="">
                    </div>
                    <p>添加广告图片（必选）</p>
                    <img style="cursor:pointer;" class="upload_ctn_img" src="./img/111.png">
                </div>
                <!-- 添加文字 -->
                <div class="adv_add_text">
                    <textarea name="" id="" cols="30" rows="10" placeholder="点击添加文字"></textarea>
                </div>
           </li>
           <li>
                <div class="adv_up">
                    <img src="./img/close.png" alt="">
                    <img src="./img/down2.png" alt="">
                    <img src="./img/up.png" alt="">
                </div>
                <!-- 上传图片 -->
                 <div class="uploadImg" style="position: relative;">
                     <input style="z-index:10;" class="upload_file" id='uploadCompress' type="file" name="picture" accept="image/*">
                     <div class="up_text_wrap">
                         <img src="./img/add.png" alt="">
                     </div>
                     <p>添加广告图片（必选）</p>
                     <img style="cursor:pointer;" class="upload_ctn_img" src="./img/111.png">
                 </div>
                 <!-- 添加文字 -->
                 <div class="adv_add_text">
                     <textarea name="" id="" cols="30" rows="10" placeholder="点击添加文字"></textarea>
                 </div>
            </li>
        </ul>
        <!-- 创建新的内容 -->
        <div class="create_new_content">
            <img src="./img/addadv.png" alt="">
        </div>
        <input type="text" placeholder="请输入您的名称（必填）">
        <input type="text" placeholder="请输入您的地址（必填）">
        <input type="text" placeholder="请输入您的电话（必填）">

        <div class="page_btn">
            <div>预览</div>
            <div>提交</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
@import './css/create_phone_adv.css'
</style>

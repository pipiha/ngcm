<template>
<div>
    <div v-wechat-title="$route.meta.title"></div>
    <div class="read_join_bg">
        <!-- <img src="./img/banner.png" alt=""> -->
        <p>农广 | 为您打造极致体验</p>
    </div>
    <div class="read_text_box">
        <h2>加盟须知</h2>
        <h3>农广加盟政策</h3>
        <p>1、农广的经营理念：“事业共同体、利益共同体、共创资源、利益分享”；</p>
        <p>2、加盟者必须拥有合法有效企业法人资质的营业执照和快递业务营业经营许可证</p>
        <p>3、加盟网点最小加盟行政单位是以县或县以上行政区划单位，对于镇及镇以下行政区划单位不单独招加盟商；</p>
        <p>4、现已有农广网络地区不重复招加盟商，只能申请盲点地区的加盟；</p>
        <h3>加盟形式</h3>
        <p>1、加盟商通过与集团签订《加盟合约》并支付合约约定的相关费用来获得“农广”这一品牌的当地经营权及集团提供网络、资讯及财务结算平台；</p>
        <p>2、加盟公司在集团提供的平台上，通过行使当地经营权来获得盈利，并通过实践“事业共同体、利益共同体、共创资源、利益分享”的经验理念达成事业上的丰收。</p>
        <h3>加盟条件及加盟标准</h3>
        <p>1、加盟者必须认同全一公司的经营理念，即“事业共同体、利益共同体、共创资源、利益分享”，保证遵守全一整体的经营决策。遵纪守法，不做有损于网络及各公司利益的事情；</p>
        <p>2、必须遵守各项法律法规；</p>
        <p>3、经理人的基本素质：有一定的管理水平和管理经历，有一定的社会关系，有较强的社交能力，为人正直诚挚，讲求职业道德，讲信誉顾大局，有开拓意识和服务理念，有团队合作精神，有责任心。能掌控大局、指引方向、头脑清晰、建立起公司制度、岗位职责、指导员工如何去做、该怎样做，使公司具有凝聚力，向好的方向发展；</p>
        <p>4、资金状况：必须达到农广公司要求的金额标准：</p>
        <p>4.1人员配置（注：省会城市起步不少于10人，地级城市起步不少于6人，其他地区一般不少于3人，以上均为外务人员，不包括经理、财务和内勤）；</p>
        <p>4.2通讯设备（电话、传真、可上网的电脑等）的配备。</p>
    </div>
    <div class="join_submit_btn2" @click="goJoin()">
        加盟申请
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      isRead: false
    }
  },
  methods: {
    goJoin: function () {
      this.$emit('isRead', this.isRead)
      this.$router.back(-1)
    }
  }
}
</script>

<style scoped>
.read_join_bg{
    width: 100%;
    height: 1.95rem;
    background: url('./img/banner.png') 100% 100%;
    background-size: cover;
}
.read_join_bg p{
    text-align: center;
    line-height: 1.95rem;
    font-size: 0.4rem;
    font-weight: 600;
    color: #fff;
}
.read_text_box{
    width: 84%;
    margin:0 auto;
    text-align: left;
}
.read_text_box h2{
    font-size: 0.45rem;
    font-weight: 600;
    margin: 0.5rem auto;
}
.read_text_box h3{
    font-size: 0.35rem;
    color: #151515;
    margin-bottom: 0.1rem;
}
.read_text_box p{
    font-size: 0.3rem;
    color: #666666;
    margin:0.1rem 0 0.3rem 0;
}
.join_submit_btn2 {
    width: 100%;
    height: 1.13rem;
    background: -webkit-gradient(linear, right top, left top, from(#4189D0), color-stop(68%, #5286EC));
    background: linear-gradient(-90deg, #4189D0 0%, #5286EC 68%);
    color: #fff;
    font-size: 0.4rem;
    line-height: 1.13rem;
    margin-top: 0.5rem;
    cursor: pointer;
}
</style>

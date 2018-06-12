import Vue from 'vue'
import Router from 'vue-router'
import Phone from '@/components/phone/phone' // 注册手机号
import ActDetail from '@/components/act_detail/act_detail' // 活动详情
import CheckMore from '@/components/check_more/check_more' // 查看更多
import CreatePhoneadv from '@/components/create_phone_adv/create_phone_adv' // 创建手机广告
import LandingPage from '@/components/landing_page/landing_page' // 落地页
import MakeAdv from '@/components/make_adv/make_adv' // 制作广告
import MyActivity from '@/components/my_activity/my_activity' // 我的活动
import MyAdv from '@/components/my_adv/my_adv' // 我的广告
import PayType from '@/components/pay_fs/pay_fs' // 支付方式
import PayDetail from '@/components/pay_type/pay_detail' // 支付详情
import RedPackets from '@/components/red_packets/red_packets' // 领取红包
import ReleaseActivity from '@/components/release_activity/release_activity' // 发布活动
import NumDeatil from '@/components/num_detail/num_detail' // 数字传单 我的 区域 金额 切换
import TabOne from '@/components/num_detail/tab_one' // 我的
import TabTwo from '@/components/num_detail/tab_two' // 浏览统计
import TabThree from '@/components/num_detail/tab_three' // 区域统计
import TabFour from '@/components/num_detail/tab_four' // 金额明细
import PlayTime from '@/components/play_time/play_time' // 播放总次数
import SiterPrivilege from '@/components/siter_privilege/siter_ privilege' // 点位主特权
import MyCustomer from '@/components/siter_privilege/my_customer' // 我的顾客
import ZhanDetail from '@/components/zhan_detail/zhan_detail' // 展示广告详情
import SiteDetails from '@/components/site_details/site_details' // 点位详情  有地图 及联系我们
import SiteMsg from '@/components/site_details/site_msg' // 我的广告 截图
import MyOrder from '@/components/my_order/my_order' // 我的订单
import WaitPay from '@/components/wait_pay/wait_pay' // 订单详情 待付款 （展示型广告、数字传单）
import ConsumptionDetails from '@/components/consumption_details/consumption_details' // 消费详情 分佣 租金 充值 消费 提现
import MouthBill from '@/components/month_bill/month_bill' // 月账单
import MyWallet from '@/components/my_wallet/my_wallet' // 我的零钱
import MyParse from '@/components/my_purse/my_purse' // 我的钱包
import Tixian from '@/components/my_purse/withdrawal' // 提现
import QuestionResult from '@/components/question_result/question_result' // 问题反馈
import QuestionHistory from '@/components/question_result/question_history' // 申请历史
import JoinApply from '@/components/join_apply/join_apply' // 加盟申请
import ReadJoin from '@/components/join_apply/read_join' // 加盟须知
import UserCenter from '@/components/user_center/user_center' // 用户中心
import DoorOrder from '@/components/door_order/door_order' // 展示型广告

Vue.use(Router)
Vue.use(require('vue-wechat-title'))

export default new Router({
  routes: [
    { // 首页
      path: '/',
      // name: 'userCenter',
      component: UserCenter,
      meta: {
        title: '用户中心'
      }
    },
    { // 注册手机号
      path: '/phone',
      name: 'Phone',
      component: Phone,
      meta: {
        title: '绑定手机号'
      }
    },
    { // 活动详情
      path: '/actDetail',
      name: 'ActDetail',
      component: ActDetail,
      meta: {
        title: '活动详情'
      }
    },
    { // 查看更多
      path: '/checkMore',
      name: 'checkMore',
      component: CheckMore,
      meta: {
        title: '查看更多'
      }
    },
    { // 创建手机广告
      path: '/createPhoneadv',
      name: 'createPhoneadv',
      component: CreatePhoneadv,
      meta: {
        title: '创建手机广告'
      }
    },
    { // 落地页
      path: '/landingPage',
      name: 'landingPage',
      component: LandingPage,
      meta: {
        title: '落地页'
      }
    },
    { // 制作广告
      path: '/makeAdv',
      name: 'makeAdv',
      component: MakeAdv,
      meta: {
        title: '制作广告'
      }
    },
    { // 我的活动
      path: '/myActivity',
      name: 'myActivity',
      component: MyActivity,
      meta: {
        title: '我的活动'
      }
    },
    { // 我的广告
      path: '/myAdv',
      name: 'myAdv',
      component: MyAdv,
      meta: {
        title: '我的广告'
      }
    },
    { // 支付方式
      path: '/payType',
      name: 'payType',
      component: PayType,
      meta: {
        title: '支付方式'
      }
    },
    { // 支付详情
      path: '/payDetail',
      name: 'payDetail',
      component: PayDetail,
      meta: {
        title: '支付详情'
      }
    },
    { // 红包
      path: '/red',
      name: 'red',
      component: RedPackets,
      meta: {
        title: '领取红包'
      }
    },
    { // 发布活动
      path: '/releaseActivity',
      name: 'releaseActivity',
      component: ReleaseActivity,
      meta: {
        title: '发布活动'
      }
    },
    { // 数字传单 我的 区域统计 金额等
      path: '/numDetail',
      name: 'numDetail',
      meta: {
        title: '数字传单'
      },
      component: NumDeatil,
      children: [
        {
          path: '/numDetail/',
          name: 'tab',
          component: TabOne
        },
        {
          path: '/numDetail/tab1',
          name: 'tab1',
          component: TabOne
        },
        {
          path: '/numDetail/tab2',
          name: 'tab2',
          component: TabTwo
        },
        {
          path: '/numDetail/tab3',
          name: 'tab3',
          component: TabThree
        },
        {
          path: '/numDetail/tab4',
          name: 'tab4',
          component: TabFour
        }
      ]
    },
    { // 播放总次数
      path: '/playTime',
      name: 'playTime',
      component: PlayTime,
      meta: {
        title: '播放总次数'
      }
    },
    { // 展示广告详情
      path: '/zhanDetail',
      name: 'zhanDetail',
      component: ZhanDetail,
      meta: {
        title: '展示广告详情'
      }
    },
    { // 点位详情 有地图
      path: '/siteDetails',
      naem: 'siteDetails',
      component: SiteDetails,
      meta: {
        title: '点位详情'
      }
    },
    { // 我的广告 截图
      path: '/siteMsg',
      name: 'siteMsg',
      component: SiteMsg,
      meta: {
        title: '我的广告'
      }
    },
    { // 点位主特权
      path: '/siterPrivilege',
      name: 'siterPrivilege',
      component: SiterPrivilege,
      meta: {
        title: '点位主特权'
      }
    },
    {
      path: '/myCustomer',
      name: 'myCustomer',
      component: MyCustomer,
      meta: {
        title: '我的顾客'
      }
    },
    { // 我的订单
      path: '/myOrder',
      name: 'myOrder',
      component: MyOrder,
      meta: {
        title: '我的订单'
      }
    },
    { // 订单详情
      path: '/waitPay',
      name: 'waitPay',
      component: WaitPay,
      meta: {
        title: '订单详情'
      }
    },
    { // 消费详情
      path: '/consumptionDetails',
      name: 'consumptionDetails',
      component: ConsumptionDetails,
      meta: {
        title: '消费详情'
      }
    },
    { // 月账单
      path: '/mouthBill',
      name: 'mouthBill',
      component: MouthBill,
      meta: {
        title: '月账单'
      }
    },
    { // 交易记录
      path: '/myWallet',
      name: 'myWallet',
      component: MyWallet,
      meta: {
        title: '交易记录'
      }
    },
    { // 我的钱包
      path: '/MyParse',
      name: 'MyParse',
      component: MyParse,
      meta: {
        title: '我的钱包'
      }
    },
    { // 提现
      path: '/tixian',
      name: 'Tixian',
      component: Tixian,
      meta: {
        title: '提现'
      }
    },
    { // 问题反馈
      path: '/questionResult',
      name: 'questionResult',
      component: QuestionResult,
      meta: {
        title: '问题反馈'
      }
    },
    { // 申请历史
      path: '/questionHistory',
      name: 'questionHistory',
      component: QuestionHistory,
      meta: {
        title: '申请历史'
      }
    },
    { // 加盟申请
      path: '/joinApply',
      name: 'joinApply',
      component: JoinApply,
      meta: {
        title: '加盟申请',
        keepAlive: true
      }
    },
    { // 加盟须知
      path: '/readJoin',
      name: 'readJoin',
      component: ReadJoin,
      meta: {
        title: '加盟须知'
      }
    },
    { // 用户中心
      path: '/userCenter',
      // name: 'userCenter',
      component: UserCenter,
      meta: {
        title: '用户中心'
      }
    },
    {
      path: '/doorOrder',
      component: DoorOrder,
      meta: {
        title: '我要下单'
      }
    }
  ]
})

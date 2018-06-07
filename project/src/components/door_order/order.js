/**
 * 下单
 */
/**
   * 注意获取村镇的接口 暂时是写死的
   */
// var url = 'http://'+ window.location.host + '/m'; //跳转路径
// var BaseUrl = 'http://'+ window.location.host + '/m'; //请求数据路径
// var BaseUrl2 = 'http://'+ window.location.host + '';

// 初始化元素
var _couponBtn = $('#coupon')
var _submitBtn = $('.submit_btn')
var _townMsg = $('#town_msg')
// var _townMsgP = $('#town_msg > p');
// var _townMsgSpan = $('#town_msg > p > span');
var _villageMsg = $('#village_msg')
var _townTittle = $('#town_title')
var _villageTittle = $('#village_title')
// var _villageMsgP = $('#village_msg > p');
var _allCheck = $('.allCheck')
var _allCancel = $('.allCancel')
var _addArea = $('.addArea')
var _checkArea = $('.check_area')
var _checkTime = $('#check_time')
// var _removeTownBtn = $('.removeTownBtn');
// var _removeVillageBtn = $('.removeVillageBtn');
var _areaResult = $('.area_result')
var _checkPlay = $('#check_play')
var _alertWrap = $('.alert_wrap')

var _userName = $('.userName') // 广告主姓名
var _userTel = $('.userTel') // 广告主电话
var _userStart = $('.userStart') // 开始日期
var _userClose = $('.userClose') // 结束日期
var _time_num = $('.time_num') // 视频时长
var _userPointer = $('.userPointer') // 播放点位
var _activeTime = $('.activeTime') // 活动时长

// 初始化函数
$(function () {
  userArea() // 所在的播放点位 市ID
  __checkAreacText()
  __getVillage() // 获取乡镇对应的村
  // __getVillage();
  // __adConent(); // 判断点位广告容量
  __coupon() // 优惠券页面
  __orderIn() // 提交订单
  // __check(); //选择乡镇村
  __allCheck() // 全选取消
  // __addArea(); //添加
  // __checkArea(); //选择点位
  __removeTown() // 用户删除选择的乡镇
  __showTime() // 显示选择时间的部分
  __checkTime() // 选择时长
  __startTime() // 选择起始日期
})

/**
   * 请求当前用户所在的地方 对应的市
   */
function userArea () {
  alert('引入jq了')
  var name = $('.userPointer').html()
  console.log(name)
  localStorage.setItem('cityName', name)
  var city = $('.userPointer').html()
  $('.userPointer').html(city.split('-')[city.split('-').length - 1])
  
  var city_code = $('.userPointer').attr('data-id')
  $.ajax({
    type: 'get',
    url: BaseUrl2 + '/admin/base/getcity.html?city_code=' + city_code,
    dataType: 'json',
    success: function (data) {
      for (var town of data.data) {
        var ele = '<p class="townMsgP"><i class="getVillage" code=' + town.code + '>' + town.name + '</i><span class="townCheck">选</span></p>'
        $('#town_msg').append(ele)
      }
    },
    error: function (err) {
      console.log(err)
    }
  })
}

// 点击镇 tab 切换  每次点击镇  都把 村的内容取出来
$('#town_title').click(function () {
  // 把选好的村  赋值给镇
  getCountry_setCity()

  $('#town_title').removeClass('color_style')
  $('#village_title').removeClass('color_style')
  $('#town_title').addClass('color_style')
  $('.check_area_center').hide()
  $('#town_msg').show()
  $('#village_title').html('村')
})

// 点击村 tab 切换
// $("#village_title").click(function(){
//   if($(this).hasClass('color_style')){

//   }
//   $("#town_title").removeClass('color_style');
//   $("#village_title").removeClass('color_style');
//   $("#village_title").addClass('color_style');
//   $(".check_area_center").hide();
//   $("#village_msg").show();
//     if($(this).html() == '村'){
//       $(this).html('超市名称');
//     }else{
//       $(this).html('村');
//     }
// });

// 切换查看超市名称
$('#village_title').on('click', function () {
  if ($(this).hasClass('color_style')) {
    if ($(this).html() == '村') {
      $(this).html('超市名称')
    } else {
      $(this).html('村')
    }
    if ($(this).html() == '村') {
      for (var i = 0; i < $('.villageMsgP').length; i++) {
        // console.log($('.villageMsgP').eq(i).html() + '' + $('.villageMsgP').eq(i).attr('site_text'));
        $('.villageMsgP').eq(i).html($('.villageMsgP').eq(i).attr('site_text'))
      }
    } else {
      for (var i = 0; i < $('.villageMsgP').length; i++) {
        $('.villageMsgP').eq(i).html($('.villageMsgP').eq(i).attr('site_shop'))
      }
    }
  }
})

// 点击添加
$('.addArea').click(function () {
  _submitBtn.removeClass('submit_btn').addClass('submit_btn2') // 此时修改的是 下单提交按钮的定位  postion 改为 float
  if ($('.check_area_up .color_style').index() == 1) { // 当前显示的是村
    // 把选好的村  赋值给镇
    getCountry_setCity()
  }
  // 先把已经选好的镇统计出来 一会跟新增的做对比
  var select_zhen_str = ''
  var select_zhen_arr = []
  var select_cun_str = ''
  var select_cun_arr = []
  $('.area_result_up .area_result_every').each(function () {
    select_zhen_arr.push($(this).find('p').html())
  })
  $('.area_result_down .area_result_v').each(function () {
    select_cun_arr.push($(this).find('p').html())
  })
  select_zhen_str = select_zhen_arr.join(',')// 这个是之前选择好的镇 的名字的  字符串
  select_cun_str = select_cun_arr.join(',')// 这个是之前选择好的村 的名字的  字符串
  // console.log('aa镇aa'+select_zhen_str+" "+"bb村bb"+select_cun_str);
  // 遍历全选的镇
  $('#town_msg .color_styleP').each(function () {
    var _sub_ctn = $(this).find('.getVillage').html()
    // 判断如果已经选择了村的镇   就不能全选这个镇了
    if ($('.area_result_down_ctn .area_result_down[name=' + _sub_ctn + ']').length == 1) {
      _alertWrap.show().html('点位冲突')
      console.log('点位冲突')
      setTimeout(function () {
        _alertWrap.hide()
      }, 1000)
      return false // 结束执行
    }
    if (select_zhen_str.indexOf(_sub_ctn) >= 0) { // 存在了 就不用加入了

    } else { // 之前没有加入 现在可以加入
      var str_code = $(this).find('.getVillage').attr('str_code')
      var str_name = $(this).find('.getVillage').attr('str_name')
      var data_length = $(this).find('.getVillage').attr('data-length')
      if (data_length == undefined) {
        data_length = 0
      }
      // $(".area_result_up").append('<div str_code="'+str_code+'" str_name="'+str_name+'"  data-length="'+data_length+'" class="area_result_v"><p>'+_sub_ctn+'  </p><i class="removeVillageBtn">×</i></div>');
      $('.area_result_up').append('<div str_code="' + str_code + '" str_name="' + str_name + '"  data-length="' + data_length + '" class="area_result_every"> <p>' + _sub_ctn + '</p> <span>' + data_length + '</span> <i class="removeTownBtn">×</i> </div>')
      calculation_sum_point() // 计算总的点位数目
    }
  })
  // 遍历没有全选的镇 里面加判断
  $('#town_msg .townMsgP').each(function () {
    if ($(this).hasClass('color_styleP')) { // 有全选的类 啥也不执行

    } else { // 这是没有全选的
      var zhen_area_name = $(this).find('.getVillage').html() // 镇的名字
      var zhen_str_code = $(this).find('.getVillage').attr('str_code')

      var zhen_str_name = $(this).find('.getVillage').attr('str_name')
      // console.log(zhen_str_name);
      if (zhen_str_code != undefined) { // 只遍历有赋值过的
        // 先判断父级的镇  在之前   有没有全选  父级全选了 就不能单独 选择 子集的 村 了
        if (select_zhen_str.indexOf(zhen_area_name) >= 0) { // 父级镇 已经全选了  不能再选该镇下面的村了
          _alertWrap.show().html('点位冲突')
          console.log('点位冲突')
          setTimeout(function () {
            _alertWrap.hide()
          }, 1000)
          return false// 只要这里（镇） 有点位冲突 就结束循环  让用户去重新检查
        } else { // 父级的镇 没有被选择  现在 判断村有没有重复选择
          // console.log(zhen_str_code);

          /* 这里分为 ：
             1.之前添加过的  只是在对应的镇下面 添加村就行了z
             2.之前没添加过  还需要把镇也添加上 */

          var zhen_str_code_arr = zhen_str_code.split(',')
          var zhen_str_name_arr = zhen_str_name.split(',')
          var zhen_str_name_length = zhen_str_name_arr.length

          // 根据镇的名字选择  判断之前时候有这个村的镇了
          if ($('.area_result_down_ctn .area_result_down[name=' + zhen_area_name + ']').length == 0) { // 这个需要把镇也加上
            let str = ''
            for (let j = 0; j < zhen_str_name_length; j++) {
              str += '<div name="' + zhen_str_name_arr[j] + '" code="' + zhen_str_code_arr[j] + '" class="area_result_v"> <p>' + zhen_str_name_arr[j] + '</p> <i class="removeVillageBtn">×</i> </div>'
              // str+='<div site_id="'+zhen_str_code_arr[j]+'" class="area_result_v"><p>'+zhen_area_name+'  </p><i class="removeVillageBtn">×</i></div>';
            }
            $('.area_result_down_ctn').append('<div name="' + zhen_area_name + '" class="area_result_down"> <p class="up_title">' + zhen_area_name + '</p> ' + str + ' </div>')
          } else { // 这个直接在镇下面加村
            for (let j = 0; j < zhen_str_name_length; j++) {
              // 如果之前没有增加过  就表示可以加入
              if ($('.area_result_down[name=' + zhen_area_name + '] .area_result_v[name=' + zhen_str_name_arr[j] + ']').length == 0) {
                $('.area_result_down[name=' + zhen_area_name + ']').append('<div name="' + zhen_str_name_arr[j] + '" code="' + zhen_str_code_arr[j] + '" class="area_result_v"> <p>' + zhen_str_name_arr[j] + '</p> <i class="removeVillageBtn">×</i> </div>')
              }
            }
          }
          calculation_sum_point()
        }
      }
    }
  })

  $('.check_area').hide()
  $('.area_result').show()

  // start  最后需要判断点位是否满了
  // 获取开始时间戳
  // var timestampS = Date.parse(_userStart.html());
  // timestampS = timestampS / 1000;
  // // 获取结束时间戳
  // var timestampC = Date.parse(_userClose.html());
  // timestampC = timestampC / 1000;
  var timestampS = $('#beginTime').html()
  var timestampC = $('#endTime').html()

  var siteId_str = ''
  var siteId_arr = []

  // 全选的镇
  $('.area_result_up .area_result_every').each(function () {
    var _code_str = $(this).attr('str_code')
    // console.log($(this).attr("data-length")!=0);
    if ($(this).attr('data-length') != 0) {
      siteId_str = siteId_str + _code_str + ','
    }
  })
  // 遍历村子
  $('.area_result_down_ctn .area_result_v').each(function () {
    var _this_code = $(this).attr('code')
    siteId_str = siteId_str + _this_code + ','
  })

  siteId_str = siteId_str.substr(0, siteId_str.length - 1)

  // var againCode = $('.addArea').attr('allcode',siteId_str);

  // localStorage.setItem('userSiteID',siteId_str);

  $.ajax({
    type: 'get',
    url: BaseUrl + '/order_make/isbufferfull.html?or_sites_id=' + siteId_str + '&or_play_start_time=' + timestampS + '&or_play_end_time=' + timestampC,
    dataType: 'json',
    async: false, // 禁止异步
    success: function (data) {
      if (data.code == 10010) {
        _alertWrap.show().html(data.msg)
        setTimeout(function () {
          _alertWrap.hide()
        }, 1500)
      }
    },
    error: function (data) {
      _alertWrap.show().html('接口错误')
      setTimeout(function () {
        _alertWrap.hide()
      }, 1500)
    }

  })
  // end   判断点位是否满了
})

// 点击镇的全选 只是展示村 不用判断广告点位是否已经满了   这个判断放在点击添加的时候
$(document).on('click', '.townCheck', function () {
  var _this = $(this).parents('.townMsgP ')
  // 如果已经选择了 就反选
  // console.log(_this.hasClass('color_styleP'));
  // console.log($(this).parents(".townMsgP "));
  if (_this.hasClass('color_styleP')) { // 取消全选  不只是去掉class  还要把  div的属性去掉
    _this.removeClass('color_styleP')
    _this.find('.getVillage').removeAttr('data-length')
    _this.find('.getVillage').removeAttr('str_code')
    _this.find('.getVillage').removeAttr('str_name')
    // _this.addClass('aaa');
    // $(".aaa").removeClass('color_styleP');
    return false// 结束代码执行
  }
  var _this = this
  var city = $('.userPointer').html()
  var countrySide_name = $(this).siblings('.getVillage').html()
  var site_address = '河北省-石家庄市-' + city + '-' + countrySide_name
  // 点击全选的时候获取镇下面的 所有的村
  $.ajax({
    url: BaseUrl2 + '/admin/texts/getsites.html',
    type: 'post',
    dataType: 'json',
    async: false, // 不让他异步了
    data: {
      site_address: site_address
    },
    success: function (data) {
      if (data.code == 200) { // 获取成功
        var data_length = data.data.length
        var str_code = ''
        var str_name = ''
        var arr_code = []
        var arr_name = []
        for (var i = 0; i < data_length; i++) {
          arr_code.push(data.data[i].site_id)
          arr_name.push(data.data[i].site_title)
        }
        str_code = arr_code.join(',')
        str_name = arr_name.join(',')
        $(_this).siblings('.getVillage').attr('data-length', data_length)
        $(_this).siblings('.getVillage').attr('str_code', str_code)
        $(_this).siblings('.getVillage').attr('str_name', str_name)
        $(_this).parents('.townMsgP').addClass('color_styleP')
      } else if (data.code == 1005) {
        _alertWrap.show().html(data.msg)
        $(_this).parents('.townMsgP').removeClass('color_styleP')
        setTimeout(function () {
          _alertWrap.hide()
        }, 1000)
      } else {
        _alertWrap.show().html(data.msg)
        setTimeout(function () {
          _alertWrap.hide()
        }, 1000)
      }
    },
    error: function () {
      _alertWrap.show().html('请稍后再试')
      setTimeout(function () {
        _alertWrap.hide()
      }, 1000)
    }
  })

  /*  ($(_this).html() == '选')?
     ($(_this).html('已选'),$(_this).parent().addClass('color_styleP')) :
     ($(_this).html('选'),$(_this).parent().removeClass('color_styleP')); */
})

/**
   * 选择点位签 判断需要的信息是否完善
   */
$('#or_id_check').on('click', function () {
  if (_userStart.html() == '请选择开始日期') {
    _alertWrap.show().html('请选择开始时间')
    setTimeout(function () {
      _alertWrap.hide()
    }, 1500)
  } else if (_userClose.html() == '请选择结束日期') {
    _alertWrap.show().html('请选择结束时间')
    setTimeout(function () {
      _alertWrap.hide()
    }, 1500)
  } else {
    $('.check_area').show()
  }
})

// 计算总的点位数目
function calculation_sum_point () {
  var num = 0
  $('.area_result_up .area_result_every').each(function () {
    num += parseInt($(this).attr('data-length'))
  })
  num += $('.area_result_down_ctn .area_result_v').length
  if (num != $('.siteAll').html()) {
    console.log('点位改变')
    $('.activeTime').html('无可选择优惠券')
    $('#coupon').attr('data_proId', '')
  }
  $('.siteAll').html(num)
}

/**
   * 判断点位广告容量
   */

function __adConent () {
  $(document).on('click', '.townCheck', function () {
    var _this = this
    // 获取开始时间戳
    var timestampS = Date.parse(_userStart.html())
    timestampS = timestampS / 1000
    // 获取结束时间戳
    var timestampC = Date.parse(_userClose.html())
    timestampC = timestampC / 1000
    var siteId = $(this).siblings().attr('code')

    $.ajax({
      type: 'get',
      url: BaseUrl + '/order_make/isbufferfull.html?or_sites_id=' + siteId + '&or_play_start_time=' + timestampS + '&or_play_end_time=' + timestampC,
      dataType: 'json',
      success: function (data) {
        if (data.code == 10010) {
          _alertWrap.show().html('广告点位已满，请选择其他点位！')
          setTimeout(function () {
            _alertWrap.hide()
          }, 1500)
        } else if (data.msg == '广告容量未满，可以选择！') {
          // 乡镇 选择判断
          __getVillage();
          ($(_this).html() == '选')
            ? ($(_this).html('已选'), $(_this).parent().addClass('color_styleP'))
            : ($(_this).html('选'), $(_this).parent().removeClass('color_styleP'))
        }
      },
      error: function (err) {
        console.log(err)
      }

    })
  })
}

/**
   * 通过乡镇获取对应的村   把镇的code 赋给 $("#village_title").attr('code');  相等就只是展示 $("#town_msg")  否则重新加载村
   */
function __getVillage () {
  $(document).on('click', '.getVillage', function () {
    $('#village_title').show()
    var _code = $(this).attr('code')
    var _this = this
    var village_title_code = $('#village_title').attr('code')
    if (_code == village_title_code) { // 切换  镇  村
      if ($(_this).siblings().html() == '已选') {
        $('#village_msg .villageMsgP').addClass('color_styleV')
      } else {
        $('#town_title').removeClass('color_style')
        $('#village_title').removeClass('color_style')
        $('#village_title').addClass('color_style')
        $('.check_area_center').hide()
        $('#village_msg').show()
      }
      return false // 结束执行
    }

    var text = $(this).html()
    var city = localStorage.getItem('cityName')
    var address = city + '-' + text
    // 获取到乡镇的ID

    /*  _villageMsg.show();
       _villageTittle.addClass('color_style').siblings().removeClass();
       _townMsg.hide();
       __check(); */

    $.ajax({
      type: 'post',
      url: BaseUrl2 + '/admin/texts/getsites.html',
      data: 'site_address=' + address,
      dataType: 'json',
      success: function (data) {
        if (data.code == 1005) {
          _alertWrap.show().html('抱歉,没有数据!')
          setTimeout(function () {
            _alertWrap.hide()
            _villageMsg.hide()
            _townMsg.show()
          }, 1000)
          return false// 没有数据就不用执行了。
        } else if (data.code == 200) {
          $('#village_title').attr('code', _code)// 200   就给  $("#village_title")设置新的code
          var villageNum = data.data.length
          localStorage.setItem('villageNum', villageNum)
          $('#village_msg').empty()
          var ele = ''
          for (var village of data.data) {
            if ($(_this).siblings().html() == '已选') {
              ele += '<p class="villageMsgP color_styleV" site_text=' + village.site_title + ' site_shop=' + village.site_shop + '  code=' + village.site_id + '>' + village.site_title + '</p>'
            } else {
              ele += '<p class="villageMsgP" site_text=' + village.site_title + ' site_shop=' + village.site_shop + '  code=' + village.site_id + '>' + village.site_title + '</p>'
            }

            // 判断是否全选
            /* ($(_this).siblings().html() == '已选')?
               ($('.villageMsgP').addClass('color_styleV')):
               ($('.villageMsgP').removeClass('color_styleV'));
               $('#village_msg').append(ele); */
          }
          $('#village_msg').html(ele)
          $('#town_title').removeClass('color_style')
          $('#village_title').removeClass('color_style')
          $('#village_title').addClass('color_style')
          $('.check_area_center').hide()
          $('#village_msg').show()
        } else {
          _alertWrap.show().html('抱歉,没有数据!')
          setTimeout(function () {
            _alertWrap.hide()
          }, 1500)
        }
      },
      error: function (err) {
        console.log(err)
      }
    })
  })
}

// 把选好的村  赋值给镇
function getCountry_setCity () {
  var village_msg_length = $('#village_msg .color_styleV').length
  var str_code = ''
  var str_name = ''
  var arr_code = []
  var arr_name = []
  if (village_msg_length == 0) { // 如果没有就不用管了

  } else {
    $('#village_msg .color_styleV').each(function () {
      var _sub_code = $(this).attr('code')
      var _sub_name = $(this).html()
      arr_code.push(_sub_code)
      arr_name.push(_sub_name)
    })
    var index_code = $('#village_title').attr('code')
    // 这俩值有用
    str_code = arr_code.join(',')
    str_name = arr_name.join(',')

    // 每次的值存起来  点击  添加  的 时候用
    $('#town_msg .getVillage[code=' + index_code + ']').attr('str_code', str_code)
    $('#town_msg .getVillage[code=' + index_code + ']').attr('str_name', str_name)
  }
}

/**
   * 优惠券
   */
function __coupon () {
  _couponBtn.on('click', function () {
    var siteId_str = ''
    var siteId_arr = []

    // 全选的镇
    $('.area_result_up .area_result_every').each(function () {
      var _code_str = $(this).attr('str_code')
      // console.log($(this).attr("data-length")!=0);
      if ($(this).attr('data-length') != 0) {
        siteId_str = siteId_str + _code_str + ','
      }
    })
    // 遍历村子
    $('.area_result_down_ctn .area_result_v').each(function () {
      var _this_code = $(this).attr('code')
      siteId_str = siteId_str + _this_code + ','
    })

    siteId_str = siteId_str.substr(0, siteId_str.length - 1)

    console.log(siteId_str)

    var timestampS = _userStart.html()
    // 获取结束时间戳
    var timestampC = _userClose.html()
    var or_video_length = $('.time_num').html()

    if (_userStart.html() == '请选择开始日期') {
      _alertWrap.show().html('请先选择开始时间')
      setTimeout(function () {
        _alertWrap.hide()
      }, 1500)
    } else if (_userClose.html() == '请选择结束日期') {
      _alertWrap.show().html('请先选择结束时间')
      setTimeout(function () {
        _alertWrap.hide()
      }, 1500)
    } else if ($('.time_num').html() == '请选择播放视频时长') {
      _alertWrap.show().html('请选择播放视频时长')
      setTimeout(function () {
        _alertWrap.hide()
      }, 1500)
    } else if (siteId_str == '') {
      _alertWrap.show().html('请选择点位')
      setTimeout(function () {
        _alertWrap.hide()
      }, 1500)
    } else {
      // 优惠券部分显示
      $('.ccc_box').show()
      $('.order_wrap').hide()
      $('title').html('优惠券')
      // 弹出没有优惠券的时候  增加当前url+#
      var state = {
        title: '优惠券',
        url: '#'
      }
      window.history.pushState(state, '优惠券', '#')
    }
  })
}

/**
   * 如果开始时间 结束时间 点位有变化 则重新选择
   */

//  data.js 中判断 开始时间 结束时间
//  849行 判断改变视频时长改变

/**
   * 乡镇 、 村选择
   */
function __check () {
  _villageTittle.on('click', function () {
    $(this).addClass('color_style').siblings().removeClass()
    _villageMsg.show()
    _townMsg.hide()
  })
  _townTittle.on('click', function () {
    $(this).addClass('color_style').siblings().removeClass()
    _townMsg.show()
    _villageMsg.hide()

    // 获取村  点位的数量 和 ID
    // console.log($('.color_styleV').length);
  })
}

/**
   *  选和已选状态
   */
function __checkAreacText () {
  // $(document).on('click','.townCheck',function(){
  //   ($(this).parent().hasClass('color_styleP') == false)?
  //   ($(this).html('已选'),$(this).parent().addClass('color_styleP')) :
  //   ($(this).html('选'),$(this).parent().removeClass('color_styleP'));
  // })
  $(document).on('click', '.villageMsgP', function () {
    ($(this).hasClass('color_styleV') == false)
      ? ($(this).addClass('color_styleV'))
      : ($(this).removeClass('color_styleV'))
  })
}

/**
   * 全选、取消
   */
function __allCheck () {
  _allCheck.on('click', function () {
    if ($('#town_title').is('.color_style') == true) { // 镇
      if ($('#town_msg .townMsgP ').length == $('#town_msg .color_styleP').length) {
        $('.townCheck').html('选')
        $('.townMsgP').removeClass('color_styleP')
        return false // 反全选  就不用继续执行了
      }
      $('.loading').show()
      setTimeout(function () {
        $('#town_msg .townMsgP').each(function () {
          if (!$(this).hasClass('color_styleP')) {
            $(this).find('.townCheck').trigger('click')
          }
        })
      }, 500)

      setTimeout(function () {
        //   ($("#town_msg .townMsgP ").length!=$("#town_msg .color_styleP").length)?
        //       ($('.townCheck').html('已选'),$('.townMsgP').addClass('color_styleP')):
        //       ($('.townCheck').html('选'),$('.townMsgP').removeClass('color_styleP'));
        $('.loading').hide()
      }, 1500)
    } else { // 村 的全选与反全选
      ($('#village_msg .villageMsgP').length == $('#village_msg .color_styleV').length)
        ? ($('.villageMsgP').removeClass('color_styleV'))
        : ($('.villageMsgP').addClass('color_styleV'))
    }
  })
  _allCancel.on('click', function () {
    _checkArea.hide()
  })
}

/**
   *  添加
   */
function __addArea () {
  _addArea.on('click', function () {
    //  修改提交订单按钮的css postion 改 float
    _submitBtn.removeClass('submit_btn').addClass('submit_btn2')
    // var ee = localStorage.getItem('villageNum');
    // console.log(ee);
    if ($('#town_msg > p').is('.color_styleP')) {
      _checkArea.hide()
      _areaResult.show()
      var lengthP = $('.color_styleP > .getVillage').length
      var numP = localStorage.getItem('villageNum')
      for (var i = 0; i < lengthP; i++) {
        var areaNameP = ($('.color_styleP > .getVillage').eq(i).html())
        $(this).each(function () {
          if (areaNameP == $('.color_styleP > .getVillage').prev().html()) {
            console.log('有重复')
          }
        })
        // var ele = '<div class="area_result_every"><p>'+ areaNameP +'</p><span>'+ numP +'</span><i class="removeTownBtn">x</i></div>';
        // $('.area_result_up').append(ele);
        var allTown = numP
        var allTown = localStorage.setItem('allTown', allTown)
      }

      // 村
      if ($('#village_msg > p').is('.color_styleV')) {
        _checkArea.hide()
        _areaResult.show()
        var lengthV = $('.color_styleV').length
        for (var j = 0; j < lengthV; j++) {
          var areaNameV = $('.color_styleV').eq(j).html()
          var ele2 = '<div class="area_result_v"><p>' + areaNameV + '</p><i class="removeVillageBtn">×</i></div>'
          $('.area_result_down').append(ele2)
        }
      } else {
        _checkArea.hide()
      }
    } else {
      // 村
      if ($('#village_msg > p').is('.color_styleV')) {
        _checkArea.hide()
        _areaResult.show()
        var lengthV = $('.color_styleV').length
        for (var j = 0; j < lengthV; j++) {
          var areaNameV = $('.color_styleV').eq(j).html()
          var ele2 = '<div class="area_result_v"><p>' + areaNameV + '</p><i class="removeVillageBtn">×</i></div>'
          $('.area_result_down').append(ele2)
        }
      } else {
        _checkArea.hide()
      }
    }

    // 计算有多少个点位
    __siteAll()
  })
}

/**
   * 删除选镇   不只是把展示的删除了 还要选择的镇的  div 属性删除掉
   */
function __removeTown () {
  $(document).on('click', '.removeTownBtn', function () {
    $(this).parent().remove()
    var _name = $(this).siblings('p').text()
    console.log(_name)
    $('#town_msg .townMsgP').each(function () {
      var eq_name = $(this).find('.getVillage').text()
      if (eq_name == _name) {
        $(this).removeClass('color_styleP')
        $(this).find('.getVillage').removeAttr('data-length')
        $(this).find('.getVillage').removeAttr('str_code')
        $(this).find('.getVillage').removeAttr('str_name')
        $(this).find('.townCheck').html('选')
      }
    })

    calculation_sum_point()
  })
  $(document).on('click', '.removeVillageBtn', function () {
    var name = $(this).parents('.area_result_v').attr('name')
    var code = $(this).parents('.area_result_v').attr('code')
    var father_name = $(this).parents('.area_result_down').attr('name')

    $('#town_msg .townMsgP').each(function () {
      var eq_this_name = $(this).find('.getVillage').text()
      // 判断是这个镇
      // console.log(eq_this_name+" "+father_name+"  "+(eq_this_name==father_name));
      if (eq_this_name == father_name) {
        var sub_str_code = $(this).find('.getVillage').attr('str_code')
        var sub_str_name = $(this).find('.getVillage').attr('str_name')

        var sub_arr_code = sub_str_code.split(',')
        var sub_arr_name = sub_str_name.split(',')
        // console.log(sub_arr_name+" "+name);

        var sub_index = $.inArray(name, sub_arr_name)
        console.log(sub_index)
        sub_arr_code.splice(sub_index, 1)
        sub_arr_name.splice(sub_index, 1)

        sub_str_code = sub_arr_code.join(',')
        sub_str_name = sub_arr_name.join(',')
        var sub_length = sub_arr_code.length
        if (sub_length == 0) {
          $(this).find('.getVillage').removeAttr('str_code')
          $(this).find('.getVillage').removeAttr('str_name')
        } else {
          // console.log(sub_arr_code+" "+sub_arr_name);
          $(this).find('.getVillage').attr('str_code', sub_str_code)
          $(this).find('.getVillage').attr('str_name', sub_str_name)
        }
      }
    })

    // 如果没有村子了 就把村 带镇都删了
    if ($(this).parents('.area_result_down').find('.area_result_v').length == 1) {
      $(this).parents('.area_result_down').remove()
    } else {
      // 这个只是删除村
      $(this).parent().remove()
    }
    calculation_sum_point()
  })
}

/**
   * 计算共有多少个点位
   */
function __siteAll () {
  // console.log($('.area_result_every span').html());
  var leng = $('.area_result_every span').length
  // console.log($('.area_result_v').length);
}

/**
   * 显示选择时间的部分
   */
function __showTime () {
  $('#change_langth').on('click', function () {
    $('.areaSelect_cover').show()
    $('.areaSelect_ctn').show()
  })
}

/**
   * 选择起始时间
   */
function __startTime () {
  $('#beginTime').date({data_time: 0})
  $('#endTime').date({data_time: 1})
}

/**
   * 选择时长
   */
function __checkTime () {
  // 点击 让‘滑动选择’ 出现
  $('.toggle_slide_show').click(function () {
    var str = ''
    for (var i = 0; i < 10; i++) {
      str += '<li class="areaSelect_body_li" code="' + i + '">' + i + '秒</li>'
    }
    // 初始化
    $('.areaSelect_body_ul').css('top', '2.26rem')
    $('.areaSelect_body_ul').html(str)
    $('.areaSelect_body_ul .areaSelect_body_li').removeClass('on')
    // 默认选择第一个
    $('.areaSelect_body_ul .areaSelect_body_li:nth-of-type(1)').addClass('on')
    $('.areaSelect_cover').show()
    $('.areaSelect_ctn').slideDown()
  })
  // 点击取消
  $('.areaSelect_ctn_left').click(function () {
    $('.areaSelect_cover').hide()
    $('.areaSelect_ctn').slideUp()
  })

  // 点击确定
  $('.areaSelect_ctn_right').click(function () {
    var _val = $('.areaSelect_body_ul .areaSelect_body_li.on').html()
    var _code = $('.areaSelect_body_ul .areaSelect_body_li.on').attr('code')

    if (_val != $('.time_num').html()) {
      $('.activeTime').html('无可选择优惠券')
      $('#coupon').attr('data_proId', '')
    }

    $('.time_num').html(_val).css({'color': 'black'})

    $('.areaSelect_cover').hide()
    $('.areaSelect_ctn').slideUp()
  })
}

var event_name = 'click' // 默认是click事件
if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) { // 判断是不是ISO设备
  event_name = 'touchend' // ISO 设备上的点击事件是touchend  ，对click支持不好。
}

$('body>*').bind('click', function () {})

// 点击 开始时间  结束时间  切换 data-index     1开始时间   2结束时间
$('#beginTime').unbind().bind('click', function () {
  $(this).css('cursor', 'pointer')
  $('.check_time_tabindex').attr('data-index', 1)
})

$('#endTime').click(function () {
  $('.check_time_tabindex').attr('data-index', 2)
})
// 获取 data-idnex    $(".check_time_tabindex").attr('data-index');

/**
   * 提交订单
   */
function __orderIn () {
  _submitBtn.on('click', function () {
    var siteId_str = ''
    var siteId_arr = []

    // 全选的镇
    $('.area_result_up .area_result_every').each(function () {
      var _code_str = $(this).attr('str_code')
      // console.log($(this).attr("data-length")!=0);
      if ($(this).attr('data-length') != 0) {
        siteId_str = siteId_str + _code_str + ','
      }
    })
    // 遍历村子
    $('.area_result_down_ctn .area_result_v').each(function () {
      var _this_code = $(this).attr('code')
      siteId_str = siteId_str + _this_code + ','
    })
    // 所有用户选择的 镇和村
    siteId_str = siteId_str.substr(0, siteId_str.length - 1)

    // var userSiteID = localStorage.getItem('userSiteID');
    var ref1 = /^[0-9]*$/ // 验证手机号
    var phone = ref1.test(_userTel.val())
    if (_userName.val() == '') {
      _alertWrap.show().html('请填写广告主名字')
      setTimeout(function () {
        _alertWrap.hide()
      }, 1500)
    } else if (_userName.val().length > 12) {
      _alertWrap.show().html('抱歉，名字过长！')
      setTimeout(function () {
        _alertWrap.hide()
      }, 1500)
    } else if (_userTel.val() == '') {
      _alertWrap.show().html('请填写广告主电话')
      setTimeout(function () {
        _alertWrap.hide()
      }, 1500)
    } else if (phone != true) {
      _alertWrap.show().html('请输入正确的手机号码')
      setTimeout(function () {
        _alertWrap.hide()
      }, 1500)
    } else if ($('#beginTime').html() == '请选择开始日期') {
      _alertWrap.show().html('请选择播放开始时间')
      setTimeout(function () {
        _alertWrap.hide()
      }, 1500)
    } else if ($('#endTime').html() == '请选择结束日期') {
      _alertWrap.show().html('请选择播放结束时间')
      setTimeout(function () {
        _alertWrap.hide()
      }, 1500)
    } else if ($('.time_num').html() == '请选择播放视频时长') {
      _alertWrap.show().html('请选择播放视频时长')
      setTimeout(function () {
        _alertWrap.hide()
      }, 1500)
    } else if (siteId_str == '') {
      _alertWrap.show().html('请选择播放点位')
      setTimeout(function () {
        _alertWrap.hide()
      }, 1500)
    } else {
      __doororder()
    }
  })
}

/**
   * 下单数据
   */
function __doororder () {
  var siteId_str = ''
  var siteId_arr = []

  // 全选的镇
  $('.area_result_up .area_result_every').each(function () {
    var _code_str = $(this).attr('str_code')
    // console.log($(this).attr("data-length")!=0);
    if ($(this).attr('data-length') != 0) {
      siteId_str = siteId_str + _code_str + ','
    }
  })
  // 遍历村子
  $('.area_result_down_ctn .area_result_v').each(function () {
    var _this_code = $(this).attr('code')
    siteId_str = siteId_str + _this_code + ','
  })

  siteId_str = siteId_str.substr(0, siteId_str.length - 1)

  var proID = $('#coupon').attr('data_proid') // 获取的优惠ID
  // 获取开始时间戳
  // var timestampS = Date.parse(_userStart.html());
  // timestampS = timestampS / 1000;
  // // 获取结束时间戳
  // var timestampC = Date.parse(_userClose.html());
  // timestampC = timestampC / 1000;

  // 获取视频时长 并截取字符串
  var timeLength = $('.time_num').html()
  var or_video_length = timeLength.substring(0, timeLength.length - 1) // 视频时长
  var or_adver_name = _userName.val() // 用户姓名
  var or_adver_phone = _userTel.val() // 用户电话
  var or_play_start_time = $('#beginTime').html() // 开始时间
  var or_play_end_time = $('#endTime').html() // 结束时间
  var or_sites_id = siteId_str // 点位ID
  var or_promote_id = proID // 优惠券ID
  var csrf_token = $('#csrf_token').val()

  console.log(or_adver_name)
  console.log(or_adver_phone)
  console.log(or_play_start_time)
  console.log(or_play_end_time)
  console.log(or_video_length)
  console.log(or_sites_id)
  console.log(or_promote_id)
  console.log(csrf_token)

  $.ajax({
    type: 'post',
    url: BaseUrl + '/order_make/createorder.html',
    async: false, // 不许异步
    data: {
      or_adver_name: or_adver_name, // 广告主姓名
      or_adver_phone: or_adver_phone, // 广告主电话
      or_play_start_time: or_play_start_time, // 播放开始时间
      or_play_end_time: or_play_end_time, // 播放结束时间
      or_video_length: or_video_length, // 视频播放时长
      or_sites_id: or_sites_id, // 点位ID
      or_promote_id: proID, // 优惠促销规则的ID
      token: csrf_token
    },
    dataType: 'json',
    success: function (data) {
      if (data.code != 200) {
        _alertWrap.show().html(data.msg)
        setTimeout(function () {
          _alertWrap.hide()
        }, 1500)
      } else {
        _alertWrap.show().html('下单成功')
        localStorage.setItem('or_id', data.data.or_id)
        setTimeout(function () {
          _alertWrap.hide()
          window.location.href = url + '/order_make/readorder.html?code=4'
        }, 1500)
      }
    },
    error: function (err) {
      console.log(err)
    }
  })
}

export { // 很关键
  userArea
}

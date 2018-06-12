/**
*  公共管理信息
*/
var utils = {
  BaseURL: 'http://argri.laimaidi.com/index.php', // 主域名
  formatDateFn: function (date, type) { // 标准日期转  type为0: '2018-1-1'  1 年月日
    date = new Date(date)
    let y = date.getFullYear()
    let m = date.getMonth() + 1
    //   let d = date.getDate()
    //   let h = date.getHours()
    //   let m1 = date.getMinutes()
    //   let s = date.getSeconds()
    m = m < 10 ? ('0' + m) : m
    //   d = d < 10 ? ('0' + d) : d
    if (type === 0) {
      return y + '-' + m
    } else {
      return y + '年' + m + '月'
    }
  }

}

export default utils

// 接口地址
const BASE_URL = "https://devapi.qweather.com/v7"
// 应用 key
const KEY = "687e517f06684448a9f4695721414a07"

/**
 * API 请求函数
 */
const request = (url, method, data) => {
  // 设置请求 key
  data.key = KEY
  return new Promise((resolve, reject) => {
    wx.request({
      method: method,
      url: url,
      data: data,
      header: {
        // 严格：application/json(MIME类型)
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        resolve(res.data)
      },
      fail (err) {
        // 停止
        console.log("index页面请求数据失败")
        reject(err)
      }
    })
  })
}

/**
 * 导出接口
 */
module.exports = {
  // 未来三天天气预报
  threedays: (data) => {
    return request(BASE_URL + '/weather/3d', 'get', data)
  },
  
  // 生活指数
  indices: (data) => {
    // 1.运动指数，2.洗车指数，3.穿衣指数，4.钓鱼指数，5.紫外线指数，6.旅游指数，7.过敏指数
    data.type = "1,2,3,4,5,6,7"
    return request(BASE_URL + '/indices/1d', 'get', data)
  }
}
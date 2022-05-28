// pages/qweather/index.js
const API = require('../../utils/api')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: null, // 经度
    latitude: null, // 纬度
    markers: [], // 地图标记点
    threedays: [], // 未来三天的天气预报
    indices: [] // 生活指数
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    wx.getLocation({
      type: 'wgs84',
      success (res) {
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: [{
            id: "0",
            latitude: res.latitude,
            longitude: res.longitude,
            iconPath: "/static/images/location.png",
            width: 40,
            height: 40,
            callout: {
              'display': 'ALWAYS', 
              'fontSize': '30rpx', 
              'content': '我在这',
              'padding': '8rpx', 
              'boxShadow': '0 0 5rpx #333',
              'borderRadius':'4rpx'
            }
          }],
        })

        // 在小程序中发送 https 的请求
        let data = {
          location: res.longitude+","+res.latitude
        }

        // 获取未来三天的天气预报
        API.threedays(data).then((res) => {
          console.log(res)
          if (res.code === "200") {
            // 成功
            that.setData({
              threedays: res.daily
            })
          } else {
            // 失败
            wx.showToast({
              title: '正在获取天气数据',
              icon: 'loading',
              duration: 2000
            })
          }
        })

        // 获取生活指数
        API.indices(data).then((res) => {
          if (res.code == 200) {
            // console.log('生活指数', res)
            that.setData({
              indices: res.daily
            })
          } else {
            wx.showToast({
              title: '正在获取生活指数',
              icon: 'loading',
              duration: 2000
            })
          }
        })
      }
    })
 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
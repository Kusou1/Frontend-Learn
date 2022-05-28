// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/static/images/1.jpg',
      '/static/images/2.jpg',
      '/static/images/3.jpg'
    ],
    // 是否显示轮播图点
    indicatorDots: true,
    // 是否自动播放
    autoplay: true,
    // 设置轮播图间隔/切换时间(ms)
    interval: 3000,
    // 每个轮播图持续播放时长(ms)
    duration: 1000,

    // 扫描结果
    scanResult: ""
  },

  goCamera: function() {
    wx.navigateTo({
      url: '/pages/test/camera',
    })
  },

  // 调用扫一扫接口
  bindScan: function() {
    wx.scanCode({
      success: (res) => {
        console.log(res)
        this.setData({
          scanResult: res.result
        })
      }
    })
  },

  // 跳转到用户页面
  goUser: () => {
    wx.reLaunch({
      url: '/pages/index/index'
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad - 页面加载")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady - 页面就绪")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow - 页面显示")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide - 页面隐藏")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload - 页面卸载")
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

  },

  goIndex: function () {
    wx.reLaunch({
      url: "/pages/index/index"
    })
  }
})
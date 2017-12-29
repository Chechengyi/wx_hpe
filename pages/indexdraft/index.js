// index.js
// 引入富文本解析文件
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationData: {},
    data: {},
    currentPosition: {},
    article: ''
  },

  /**
   * tap事件
   */
  tap: function (ev) {
    wx.navigateTo({
      url: '../booklist/booklist',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var _this = this;
    // wx.request({
    //   method: 'GET',
    //   url: 'http://www.walkerup.com/essays/essaylist',
    //   data: {pageNow: 0,pageNum: 1},
    //   success: function (res) {
    //     console.log(res.data[0]);
    //     _this.setData({
    //       data: res.data[0].title
    //     })
    //   }
    // });
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
    var animation = wx.createAnimation({
      duration: 300,
      timingFunction: 'ease',
    })

    this.animation = animation;
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
    console.log(111);
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
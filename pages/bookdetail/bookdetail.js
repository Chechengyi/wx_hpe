// pages/bookdetail/bookdetail.js
var WxParse = require('../../wxParse/wxParse.js');
var root = require('../../utils.js')
var ID
Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: '',
    title: '',
    cont: '',
    windowHeight: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  // 获取屏幕高度并设置
    ID = options.num

    console.log(getApp().titleName)
    var _this = this
    // 设置文章标题
    this.setData( {
      title: getApp().titleName
    } )
    wx.request({
      url: root.getDoc,
      method: 'GET',
      data: {
        num: options.num
      },
      success: function (res) {
        console.log(res.data)
        _this.setData( {
          cont: res.data
        } )
        /**
        * WxParse.wxParse(bindName , type, data, target,imagePadding)
        * 1.bindName绑定的数据名(必填)
        * 2.type可以为html或者md(必填)
        * 3.data为传入的具体数据(必填)
        * 4.target为Page对象,一般为this(必填)
        * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
        */
        WxParse.wxParse('title', 'html', _this.data.cont[0].title, _this, 0);
        WxParse.wxParse('cont', 'html', _this.data.cont[0].cont, _this, 0);
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
  
    var that = this;
    // WxParse.wxParse('article', 'html', that.data.article, that, 0);
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
    var _this = this
    // setTimeout( function () {
    //   wx.stopPullDownRefresh() 
    // }, 300 )
    console.log(1)
    wx.request({
      url: root.getDoc,
      method: 'GET',
      data: {
        num: ID
      },
      success: function (res) {
        console.log(res.data)
        wx.stopPullDownRefresh() 
        _this.setData({
          cont: res.data
        })
        
        WxParse.wxParse('title', 'html', _this.data.cont[0].title, _this, 0);
        WxParse.wxParse('cont', 'html', _this.data.cont[0].cont, _this, 0);
      }
    })
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
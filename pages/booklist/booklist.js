// pages/booklist/booklist.js

var  rootPath = require('../../utils.js')
var WxParse = require('../../wxParse/wxParse.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: '',
    magazines: '',
    screenWidth: 0,
    cur: 'a',
    info: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this
    // 获取屏幕宽度
    wx.getSystemInfo({
      success: function(res) {
        _this.setData( {
          screenWidth: res.windowWidth
        } )
      },
    })
    wx.request({
      url:   rootPath + '/doclist?num='+options.num,
      method: 'GET',
      success: function (res) {
        console.log(res.data)
        _this.setData( {
          books: res.data
        } )
      }
    })
    // 获取杂志名称
    wx.request({
      url:  rootPath + '/magazines/name?num=' + getApp().NameId,
      method: "GET",
      success: function (res) {
        console.log(res.data)
        _this.setData( {
          magazines: res.data
        } )
        WxParse.wxParse('article', 'html', _this.data.magazines[0].m_info, _this, 0);
      }
    })

  },
  // 选项卡点击 响应函数
  handleTab: function (e) {
    this.setData( {
      cur: e.currentTarget.id
    } )
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  // 点击查看文章内容
  handletitle: function (ev) {
    console.log(ev.currentTarget.id)
    wx.navigateTo({
      url: '../bookdetail/bookdetail?num=' + ev.currentTarget.id ,
    })
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
  taphandle: function () {
    wx.navigateTo({
      url: '../bookdetail/bookdetail',
    })
  }
})
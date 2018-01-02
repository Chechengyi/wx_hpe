// index.js
// 引入富文本解析文件

var  root = require('../../utils.js')

var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationData: {},
    data: [],
    currentPosition: {},
    article: '',
    page: 1,
    num: 9,
    windowHeight: 0
  },

  /**
   * tap事件
   */
  toBookStage: function (ev) {
    var magazine_id = ev.currentTarget.id
    getApp().NameId = magazine_id
    wx.navigateTo({
      url: '../booklist/booklist?num=' + ev.currentTarget.id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  down: function () {
    var _this = this
    if ( this.downtime ) { clearTimeout(this.downtime) }
    this.downtime = setTimeout( function () {
      wx.showNavigationBarLoading()
      // 将页面page数初始化为1
      _this.setData( {
        page: 1
      } )
      // 发送ajax请求
      wx.request({
        url: root.getMagazine,
        method: 'GET',
        data: {
          page: 1,
          num: _this.data.num
        },
        success: function (res) {
          wx.hideNavigationBarLoading()
          _this.setData( {
            data: res.data
          } )
        }
      })
    }, 300 )
  },
  up: function () {
    var _this = this
    if ( this.uptime ) { clearTimeout(this.uptime) }
    this.uptime = setTimeout( function () {
      wx.request({
        url: root.getMagazine,
        method: 'GET',
        data: {
          page: _this.data.page + 1,
          num: _this.data.num
        },
        success: function (res) {
          if( res.data ) {
            var list = _this.data.data.concat(res.data)
            _this.setData( {
              data: list,
              page: _this.data.page + 1
            } )
          }
        }
      })
    },300 )
  },
  onLoad: function (options) {
    var _this = this
    wx.getSystemInfo({
      success: function(res) {
        _this.setData( {
          windowHeight: res.windowHeight
        } )
      },
    })
    wx.request({
      url: root.getMagazine,
      method: 'GET',
      data: {
        page: this.data.page,
        num: this.data.num
      },
      success: function (res) {
        _this.setData({
          data: res.data
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
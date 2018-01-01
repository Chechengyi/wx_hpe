// index.js
// 引入富文本解析文件

var  root = require('../../utils.js')
var SCROLL_TOP = 0
// var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationData: {},
    data: {},
    currentPosition: {},
    article: '',
    windowHeight: '',
    scrollTop: '',
    uploadtype: false,
    page: 1,
    num: 9,
    loadText: '加载中···'
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
  bindScroll: function (e) {
    var _this = this
    if (e.detail.scrollTop < SCROLL_TOP && e.detail.scrollTop>10  ) {
      // setTimeout( function () {
        // _this.setData( {
        //   scrollTop: SCROLL_TOP
        // } )
      // },300 )
      if (this.scrolltime) clearTimeout(this.scrolltime)
      this.scrolltime = setTimeout( function () {
        _this.setData({
          scrollTop: SCROLL_TOP
        })
      }, 150 )
    } 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  // 下拉刷新触发函数
  down: function () {
    var _this = this
    if ( this.ajax ) { clearTimeout( this.ajax ) }
    this.ajax = setTimeout( function () {
      // console.log('ajax')
      // 刷新，重新设置page为0
      _this.setData( {
        page: 1
      } )
      wx.request({
        url: root.getMagazine,
        method: 'GET',
        data: {
          page: 1,
          num: 9
        },
        success: function (res) {
          _this.setData({
            data: res.data
          })
        }
      })
    }, 300 )
  },
  up: function () {
    var _this = this
    if ( this.timeup ) { clearTimeout(this.timeup) }
    this.timeup = setTimeout( function () {
      // console.log(1)
      _this.setData({
        uploadtype: true,
        loadText: '加载中···',
      })
      wx.request({
        url: root.getMagazine,
        type: 'GET',
        data: {
          page: _this.data.page + 1,
          num: _this.data.num
        },
        success: function (res) {
          if (res.data) {
            var list = _this.data.data.concat(res.data)
            _this.setData( {
              data: list,
              page: _this.data.page + 1
            } )
          } else {
            _this.setData( {
              loadText: '实在是拉不出来了'
            } )
          }
        }
      })
    },300 )
  },
  onLoad: function (options) {
    var _this = this
    // 获取屏幕高度并设置 data windowHeight
    wx.getSystemInfo({
      success: function (res) {
        // console.log(res.windowHeight)
        if ( res.windowHeight > 603 ) {
          SCROLL_TOP = 83
        } else {
          SCROLL_TOP = 75
        }
        _this.setData( {
          windowHeight: res.windowHeight
          // scrollTop: SCROLL_TOP
        } )
      },
    })
    // 获取杂志信息
    wx.request({
      url: root.getMagazine,
      method: 'GET',
      data: {
        num: this.data.num,
        page: this.data.page
      },
      success: function (res) {
        _this.setData({
          data: res.data,
          scrollTop: SCROLL_TOP
          // page: _this.data.page + 1
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
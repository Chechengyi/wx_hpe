// pages/booklist/booklist.js

var  root = require('../../utils.js')
var WxParse = require('../../wxParse/wxParse.js');
var ID

Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: '',
    magazines: '',
    screenWidth: 0,
    windowHeight: 0,
    cur: 'a',
    info: '',
    page: 1,
    num: 9
  },

  /**
   * 生命周期函数--监听页面加载
   */
  up: function () {
    var _this = this
    if (this.data.cur == 'a' || this.data.books.length < this.data.num ) {
      return false
    }
    if ( this.uptime ) { clearTimeout(this.uptime) }
    this.uptime = setTimeout( function () {
      wx.request({
        url: root.getDocList,
        method: 'GET',
        data: {
          id: ID,
          page: _this.data.page + 1,
          num: _this.data.num
        },
        success: function (res) {
          if (res.data) {
            var list = _this.data.books.concat(res.data)
            _this.setData( {
              books: list,
              page: _this.data.page + 1
            } )
          }
        }
      })
    }, 300 )
  },
  down: function () {
    var _this = this
    if (this.downtime) { clearTimeout(this.downtime) }
    this.downtime = setTimeout( function () {
      //  刷新页面了 初始化 page值为1
      _this.setData( {
        page: 1
      } )
      // 设置loading状态
      wx.showNavigationBarLoading()
      // 发送ajax请求
      wx.request({
        url: root.getDocList,
        method: 'GET',
        data: {
          id: ID,
          page: _this.data.page,
          num: _this.data.num
        },
        success: function (res) {
          console.log(res.data)
          // 取消loading状态
          wx.hideNavigationBarLoading()
          _this.setData({
            books: res.data
          })
        }
      })

    }, 300 )
  },
  onLoad: function (options) {
    var _this = this
    ID = options.num
    // 获取屏幕宽度
    wx.getSystemInfo({
      success: function(res) {
        _this.setData( {
          screenWidth: res.windowWidth,
          windowHeight: res.windowHeight
        } )
      },
    })
    // 文章列表
    wx.request({
      url: root.getDocList,
      method: 'GET',
      data: {
        id: options.num,
        page: _this.data.page,
        num: this.data.num
      },
      success: function (res) {
        console.log(res.data)
        _this.setData( {
          books: res.data
        } )
      }
    })
    // 获取杂志名称
    wx.request({
      url: root.getMagazine_info,
      method: "GET",
      data: {
        num: getApp().NameId
      },
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
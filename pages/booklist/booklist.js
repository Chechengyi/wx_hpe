// pages/booklist/booklist.js
var SCROLL_TOP 
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
    cur: 'a',
    info: '',
    windowHeight: 0,
    scrollTop: '',
    transition: false,
    page: 1,
    num: 9,
    loadText: '加载中···',
    down_ing: false
  },
  bindScroll: function (e) {
    var _this = this
    if (e.detail.scrollTop < SCROLL_TOP && e.detail.scrollTop > 10) {
      if (this.scrolltime) clearTimeout(this.scrolltime)
      this.scrolltime = setTimeout(function () {
        _this.setData({
          scrollTop: SCROLL_TOP
        })
      }, 150)
    } 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  down: function () {
    var _this = this
    if (this.downtime) { clearTimeout(this.downtime) }
    this.downtime = setTimeout( function () {
      // 将page设为初始状态1
      _this.setData( {
        page: 1
      } )
      wx.request({
        url: root.getDocList,
        method: 'GET',
        data: {
          id: ID,
          page: 1,
          num: _this.data.num,
        },
        success: function (res) {
          if ( res.data ) {
            _this.setData( {
              books: res.data
            } )
          } else {
            _this.setData( {
              books: []
            } )
          }
        }
      })
    }, 300 )
  },
  up: function () {
     var _this = this
     if ( this.data.cur == 'a' || this.data.books.length < this.data.num  ) {
       return false
     }
     if (this.uptime) { clearTimeout(this.uptime) }
     this.uptime = setTimeout( function () {
      //  console.log(1)
      // 设置上拉加载loading状态
      // _this.setData( {
      //   uploadtype: true,
      //   loadText: '加载中···'
      // } )
       if ( _this.data.cur == 'b' ) {
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
               _this.setData({
                 books: list,
                 page: _this.data.page + 1,
                 uploadtype: false
               })
             } else {
               _this.setData( {
                 uploadtype: true,
                 loadText: '没有内容了'
               } )
             }
           }
         })
       }
     }, 300 )
  },
  onLoad: function (options) {
    var _this = this
    // 获取屏幕宽度
    ID = options.num
    wx.getSystemInfo({
      success: function(res) {
        if (res.windowHeight > 603) {
          SCROLL_TOP = 83
        } else {
          SCROLL_TOP = 75
        }
        _this.setData( {
          screenWidth: res.windowWidth,
          windowHeight: res.windowHeight
        } )
      },
    })
    wx.request({
      url: root.getDocList,
      method: 'GET',
      data: {
        id: options.num,
        page: _this.data.page,
        num: _this.data.num
      },
      success: function (res) {
        console.log(res.data)
        if ( !res.data) {
          _this.setData( {
            loadText: '没有内容了',
            books: []
          } )
        } else {
          _this.setData({
            books: res.data
          })
        }
          
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
          magazines: res.data,
          scrollTop: SCROLL_TOP,
          transition: true
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
  
  }
})
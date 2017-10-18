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
    wx.showLoading({
      title: '加载中',
    });
    wx.setNavigationBarTitle({
      title: '遵义大数据千人计划',
    })
    var target = ev.target,
      _this = this;
    this.setData({
      currentPosition: {
        left: target.offsetLeft,
        top: target.offsetTop*2+240
      }
    });
    this.animation.left(target.offsetLeft).top(target.offsetTop).step();
    this.setData({
      animationData: this.animation.export()
    });
    setTimeout(()=>{
      this.animation.width('100%').height('100%').left(0).top(0).opacity(1).translateY(-20).step();
      this.setData({
        animationData: this.animation.export()
      });
    },200);
    setTimeout(() => {
      this.animation.translateY(0).step();
      this.setData({
        animationData: this.animation.export()
      });
    },400);
    setTimeout(()=>{
      this.renderData();
      wx.hideLoading()
    },600);
    
  },
  close: function (ev) {
    wx.setNavigationBarTitle({
      title: '慧与大学数字月刊',
    })
    var {left,top} = this.data.currentPosition;
    this.animation.width('160rpx').height('220rpx').left(left).top(top+'rpx').step();
    this.setData({
      animationData: this.animation.export()
    });
    setTimeout(()=>{
      this.setData({
        article: ''
      });
      this.animation.width(0).opacity(0).step();
      this.setData({
        animationData: this.animation.export()
      });
    },300);
  },
  renderData: function () {
    this.data.article = `<p style="max-width: 100%; min-height: 1em; white-space: normal;"><br></p><ul class=" list-paddingleft-2" style="list-style-type: square; margin: 0px; padding: 0px 0px 0px 30px;"><li><p style="max-width: 100%; min-height: 1em; white-space: normal;"><span style="max-width: 100%; color: rgb(61, 167, 66);"><strong style="max-width: 100%;"><span style="max-width: 100%; font-size: 14px;">培训全补贴，最高能补贴到24000元/人</span></strong><strong style="max-width: 100%;"><span style="max-width: 100%; font-size: 14px;"></span></strong></span></p></li><li><p style="max-width: 100%; min-height: 1em; white-space: normal;"><span style="max-width: 100%; color: rgb(61, 167, 66);"><strong style="max-width: 100%;"><span style="max-width: 100%; font-size: 14px;">实习有工资，在6个月的企业实习期内，每月1000元/人的实习补贴</span></strong><strong style="max-width: 100%;"><span style="max-width: 100%; font-size: 14px;"></span></strong></span></p></li><li><p style="max-width: 100%; min-height: 1em; white-space: normal;"><span style="max-width: 100%; color: rgb(61, 167, 66);"><strong style="max-width: 100%;"><span style="max-width: 100%; font-size: 14px;">学历再提升，在学生正式入职后进行硕士和博士学历深造的，最高给予5和8万的奖励</span></strong><strong style="max-width: 100%;"><span style="max-width: 100%; font-size: 14px;"></span></strong></span></p></li><li><p style="max-width: 100%; min-height: 1em; white-space: normal;"><span style="max-width: 100%; color: rgb(61, 167, 66);"><strong style="max-width: 100%;"><span style="max-width: 100%; font-size: 14px;">工资奖企业，员工转正后，符合条件的最少给予企业20%的工资补贴</span></strong><strong style="max-width: 100%;"><span style="max-width: 100%; font-size: 14px;"></span></strong></span></p></li><li><p style="max-width: 100%; min-height: 1em; white-space: normal;"><span style="max-width: 100%; color: rgb(61, 167, 66);"><strong style="max-width: 100%;"><span style="max-width: 100%; font-size: 14px;">生活无担忧，公租房全额补贴，以及部分交通补贴</span></strong></span><span style="max-width: 100%; color: rgb(0, 209, 0);"><strong style="max-width: 100%;"><span style="max-width: 100%; color: rgb(61, 167, 66); font-size: 14px;"></span></strong><strong style="max-width: 100%;"><span style="max-width: 100%; color: rgb(61, 167, 66); font-size: 14px;"></span></strong></span></p></li></ul><p style="max-width: 100%; min-height: 1em; white-space: normal;"><br></p><section style="max-width: 100%;"><section class="_135editor" style="max-width: 100%; border: 0px none; padding: 0px; box-sizing: border-box;"><section class="" style="margin-top: 10px; margin-bottom: 10px; max-width: 100%;"><section class="" style="margin-left: 0.8em; max-width: 100%; float: left;"><img class="" data-ratio="0.9166666666666666" data-w="60" width="2.5em" data-type="png" _width="2.5em" src="http://image2.135editor.com/cache/remote/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy81OU9na21MbVRNUktQMUU0Tlg3TGR4clFnR01EMm1JSFEyOEtCc2Z5QklsbTJZR2VxUW9jeWhTUVFzckhFR0hBcElOTUJJNXdTRXducnlzWjhZSzBCdy82NDA/d3hfZm10PXBuZw==" data-fail="0" style="display: inline-block; vertical-align: bottom; width: 2.5em !important; visibility: visible !important;" _src="http://image2.135editor.com/cache/remote/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy81OU9na21MbVRNUktQMUU0Tlg3TGR4clFnR01EMm1JSFEyOEtCc2Z5QklsbTJZR2VxUW9jeWhTUVFzckhFR0hBcElOTUJJNXdTRXducnlzWjhZSzBCdy82NDA/d3hfZm10PXBuZw=="><span class="Apple-converted-space">&nbsp;</span><section class="" style="margin-top: 0.5em; padding-right: 2px; padding-left: 2px; max-width: 100%; display: inline-block; vertical-align: top; line-height: 1.8; letter-spacing: 2px; box-sizing: border-box;"><p style="max-width: 100%; clear: none; min-height: 1em;"><strong style="max-width: 100%;">打造大数据产业人才战略高地</strong></p></section></section><img class="" data-ratio="0.005714285714285714" data-w="700" width="100%" data-type="png" _width="100%" src="http://image2.135editor.com/cache/remote/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy81OU9na21MbVRNUktQMUU0Tlg3TGR4clFnR01EMm1JSG1NdmVtSGs5N1F3MmxsVGliNUNGN0Y2TXFpYmljNjFDWDUyWWxrWmY5WkplY2ljSEZWNmFGcG5pYmxnLzY0MD93eF9mbXQ9cG5n" data-fail="0" style="float: left; display: inline-block; vertical-align: middle; background-color: rgb(71, 193, 168); width: 666px; visibility: visible !important;" _src="http://image2.135editor.com/cache/remote/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy81OU9na21MbVRNUktQMUU0Tlg3TGR4clFnR01EMm1JSG1NdmVtSGs5N1F3MmxsVGliNUNGN0Y2TXFpYmljNjFDWDUyWWxrWmY5WkplY2ljSEZWNmFGcG5pYmxnLzY0MD93eF9mbXQ9cG5n"><section class="" style="max-width: 100%; clear: both;"></section></section></section></section><p style="max-width: 100%; min-height: 1em; white-space: normal;"><br></p><p style="max-width: 100%; min-height: 1em; white-space: normal;">作为HPE整体解决方案的一部分，教育培训服务与惠普于1985年同年进入中国，时至今日已有30多年的发展历程，在大数据、容器云、DevOps、安全、物联网等前沿技术应用及服务方面居于领先地位，可提供30多个IT类国际认证培训。</p><p style="max-width: 100%; min-height: 1em; white-space: normal;"><br></p><p style="max-width: 100%; min-height: 1em;"><img data-s="300,640" data-type="jpeg" data-ratio="0.66640625" data-w="1280" class="" src="http://image2.135editor.com/cache/remote/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X2pwZy81OU9na21MbVRNVGcxQWF2TVYyaWJub09yV25ueGNmdTRBZDZ1R2xrRHhXdmxvOWxMM2NoZ3dyMTl5RjhVRzU4bElpYmg2S0VlaWFTeWljazgyR2FFNzBmMXcvNjQwP3d4X2ZtdD1qcGVn" data-fail="0" style="width: auto !important; visibility: visible !important;" _src="http://image2.135editor.com/cache/remote/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X2pwZy81OU9na21MbVRNVGcxQWF2TVYyaWJub09yV25ueGNmdTRBZDZ1R2xrRHhXdmxvOWxMM2NoZ3dyMTl5RjhVRzU4bElpYmg2S0VlaWFTeWljazgyR2FFNzBmMXcvNjQwP3d4X2ZtdD1qcGVn"></p><p style="max-width: 100%; min-height: 1em; white-space: normal;"><br></p><p style="max-width: 100%; min-height: 1em; white-space: normal;">HPE大学非常重视此次合作，HPE 大学校长薛永伟先生表示：“贵州省大力发展大数据产业并取得了令人瞩目的成就，目前遵义正奋力开启坚持红色传承、推动绿色发展、打造西部内陆开放新高地新征程，具有良好的创业环境。同时，遵义大学城有10万学子，贵州及整个西南地区具备丰富的学生资源，迫切需要满足企业级要求的优质教育培训资源，可以助推项目的顺利开展。遵义在产业发展方面，更是大力投入、务实推进，给出了很多非常有竞争力的产业发展政策，我们对在遵义的发展非常有信心。产业转型、人才先行，人才是产业发展的关键，有一个高质量的人才池，才能持续不断的吸引优质企业落地发展。在和一些意向落地到贵州及遵义发展的企业负责人沟通中，大家都提到了如何快速在本地招募人才、建立本地核心技术和运营队伍的问题。为了有效解决这一问题，遵义市不仅给出了工资补贴等一系列本市优惠政策，更是积极响应贵州省的产业发展战略，出台了高额补贴培训费用的政策，以千人计划打造高质量人才池。每年1000人，持续5年，打造大数据产业人才的战略高地，极大地增强了落地优秀企业和意向在遵义投资发展的企业的信心。因此，我们非常重视并把握这个契机，在遵义建立HPE大学遵义分校、与遵义软件园强强合作培养大数据人才、共同筹备建立遵义大数据学院，为产业发展提供源源不断的造血机制”。</p><p style="max-width: 100%; min-height: 1em; white-space: normal;"><br></p><p style="max-width: 100%; min-height: 1em; white-space: normal;">为此， HPE大学派出了最精锐的“部队”负责HPE大学业务的在遵义的落地运营推广工作，讲师团队成员由HPE一线项目经理、咨询顾问、技术专家和高级工程师组成，大都拥有10 年以上大型跨国项目经验，以及 50 人以上团队管理经验。同时，HPE大学还将积极吸纳本地优秀人才，逐步建立本地长期运营团队，落地遵义长足发展。结合大数据产业人才的特点和市场上急需的人才，项目目前提供大数据、WEB 前端、Java开发、软件测试四个技术方向，并包含企业级职业素质类课程。采用全真实项目及翻转课堂的方式，最大化贴近实际工作场景，以全栈工程师的方式，全面培养学员的国际尖端技术应用能力和职业素质。未来，将会根据本地企业的需要，以订单式定向培养更多方向的人才。</p><p style="max-width: 100%; min-height: 1em; white-space: normal;"><br></p><p style="max-width: 100%; min-height: 1em; white-space: normal;">针对大数据人才培养对于遵义市或整个贵州省经济发展和人才战略的影响，陈致豫主任表示，大数据及软件产业是贵州省近两年的重点发展产业，肩负地方经济发展，实现产业转型的重任，遵义市要紧跟贵州大数据及软件产业发展的脚步，着力与贵阳在大数据及软件产业协同发展，围绕“应用与开发”的主线，软件园聚集创新资源、推动创新应用、促进辐射带动，建立以软件龙头企业为主体、产业孵化为基地的发展机制，形成需求牵引、创新应用的发展模式，助力遵义经济发展，其影响主要体现在三方面：</p><p style="max-width: 100%; min-height: 1em; white-space: normal;"><br></p><ul class=" list-paddingleft-2" style="list-style-type: square; margin: 0px; padding: 0px 0px 0px 30px;"><li><p style="max-width: 100%; min-height: 1em; white-space: normal;"><span style="max-width: 100%; color: rgb(61, 167, 66);"><strong style="max-width: 100%;"><span style="max-width: 100%; font-size: 14px;">人才培养奠定了大数据产业发展基础，为遵义传统产业转型提供了良好的机遇</span></strong></span></p></li><li><p style="max-width: 100%; min-height: 1em; white-space: normal;"><span style="max-width: 100%; color: rgb(61, 167, 66);"><strong style="max-width: 100%;"><span style="max-width: 100%; font-size: 14px;">大数据产业自身发展速度快，增加值高，产值量级增速，对经济的带动作用十分明显</span></strong></span></p></li><li><p style="max-width: 100%; min-height: 1em; white-space: normal;"><span style="max-width: 100%; color: rgb(61, 167, 66);"><strong style="max-width: 100%;"><span style="max-width: 100%; font-size: 14px;">人才是产业发展的重要基石，遵义软件园实施人才驱动先行示范，为遵义实施人才战略起到更好的推动作用。</span></strong></span></p></li></ul><p style="max-width: 100%; min-height: 1em; white-space: normal;"><br></p><p style="max-width: 100%; min-height: 1em; white-space: normal;">据悉，贵州省大数据产业的十大工程中，人才支持工程已列入重点计划，遵义市计划在人才支持上率先打造全省示范。首批大数据千人计划的招生工作已经在遵义软件园的支持下启动，招生对象计划覆盖遵义、贵阳、成都、重庆、昆明，因为名额有限，仅为那些具有培养价值的优秀人才而准备：基础素质好、愿意通过努力学习打开职业上升空间、且愿意留在遵义与产业共同发展的人才。从这个意义上讲，对于每一位即将走向工作岗位的学子而言，这是一个伴随区域经济与产业发展而来的历史性机会，是一个值得努力争取的个人人生机会。</p>`;
    /**
    * WxParse.wxParse(bindName , type, data, target,imagePadding)
    * 1.bindName绑定的数据名(必填)
    * 2.type可以为html或者md(必填)
    * 3.data为传入的具体数据(必填)
    * 4.target为Page对象,一般为this(必填)
    * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
    */
    var that = this;
    WxParse.wxParse('article', 'html', that.data.article, that, 0);
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
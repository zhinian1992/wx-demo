// pages/artical/artical.js
const netTools = require("../../utils/util.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollHeight: '',
    articalTypes:[
      { name: 'program', value: '编程语言' , checked:'true' },
      { name: 'project', value: '软件工程' },
      { name: 'ML', value: '机器学习' },
      { name: 'manager', value: '项目管理' }
    ],
    articals: {}
  },

  /**
   * 文章类型选择改变
   */
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    /**
     * 获取网易新闻，回调函数参数1为调用结果，2为消息内容
     */
    netTools.getWangYiNews((state,news)=>{
      if(state){
        this.setData({
          articals: news
        })
      }
      else{
        wx.showModal({
          title: '错误',
          content: JSON.stringify(news),
        })
      }
    })

    this.setData({
      scrollHeight: wx.getSystemInfoSync().windowHeight - 40
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

  },

  /**
   * scroll滑动到底部
   */
  onScrollLower : function () {

  }

})
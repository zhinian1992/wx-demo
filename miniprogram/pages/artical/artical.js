// pages/artical/artical.js
const netTools = require("../../utils/util.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollHeight: '',
    articalTypes:[
      { name: 'top', value: '头条' , checked:'true' },
      { name: 'shehui', value: '社会' },
      { name: 'guonei', value: '国内' },
      { name: 'guoji', value: '国际' },
      { name: 'tiyu', value: '体育' },
      { name: 'keji', value: '科技' }
    ],
    articals: [],
    selectedName:'top'
  },

  /**
   * 文章类型选择改变
   */
  selectNewsType: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e)
    if (this.data.selectedName != e.target.id){
      this.setData({
        selectedName: e.target.id
      })
      this.getNews(e.target.id)
    }
  },

  /**
   * 获取聚合新闻，回调函数参数1为调用结果，2为消息内容
   */
  getNews: function (type) {
    netTools.getNews(type,(state, news) => {
      this.setData({
        articals:[]
      })

      if (state) {
        this.setData({
          articals: news
        })
      }
      else {
        wx.showModal({
          title: '错误',
          content: JSON.stringify(news),
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      scrollHeight: wx.getSystemInfoSync().windowHeight - 40
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getNews('top')
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
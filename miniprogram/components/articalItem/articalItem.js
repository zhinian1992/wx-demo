Component({

  behaviors: [],

  // 属性定义（详情参见下文）
  properties: {
    detail:Object
  },

  data: {
    imgSrc_1: '',
    imgSrc_2: '',
    imgSrc_3: ''
  }, // 私有数据，可用于模板渲染

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () { },
    moved: function () { },
    detached: function () { },
  },

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function () { }, // 此处attached的声明会被lifetimes字段中的声明覆盖

  ready: function () {
    this.setData({
      imgSrc_1: this.properties.detail.thumbnail_pic_s,
      imgSrc_2: this.properties.detail.thumbnail_pic_s02,
      imgSrc_3: this.properties.detail.thumbnail_pic_s03
    })
  },

  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () { },
    hide: function () { },
    resize: function () { },
  },

  methods: {
    onMyButtonTap: function () {
      wx.navigateTo({
        url: '../../pages/newDetail/newDetail?key=' + this.properties.detail.url,
      })
    },
    // 内部方法建议以下划线开头
    _myPrivateMethod: function () {
      // 这里将 data.A[0].B 设为 'myPrivateData'
      this.setData({
        'A[0].B': 'myPrivateData'
      })
    },
    _propertyChange: function (newVal, oldVal) {

    }
  }

})
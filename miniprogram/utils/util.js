const getNews = (type,cbMethod) => {
  wx.request({
    url: 'https://v.juhe.cn/toutiao/index?type=' + type + '&key=82c8db8f92b831f2a2c2eb961dc11a38',
    success(res){
      if (res.data.result.data.length > 0){
        cbMethod && cbMethod(true, res.data.result.data)
      }
    },
    fail(res){
      cbMethod && cbMethod(false, res)
    }
  })
}

module.exports = {
  getNews: getNews
}
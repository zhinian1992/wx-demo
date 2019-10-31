const getWangYiNews = (cbMethod) => {
  wx.request({
    url: 'https://c.3g.163.com/nc/article/list/T1467284926140/0-100.html',
    success(res){
      if (res.data.T1467284926140.length >= 0){
        cbMethod && cbMethod(true,res.data.T1467284926140)
      }
    },
    fail(res){
      cbMethod && cbMethod(false, res)
    }
  })
}

module.exports = {
  getWangYiNews: getWangYiNews
}
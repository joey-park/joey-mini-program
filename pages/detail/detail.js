Page({
  data:{
    
  },
  onLoad: function (options){
    console.log(options.id)
    this.setData({
      mid:options.id
    })
    var that=this
    wx.request({
      url:"http://apis.juhe.cn/goodbook/query" +options.id,
      header: {
        'Content-Type': 'application/xml'
      },
      
     success: function (res){
       console.log(res)
       that.setData({
         book:res.data
       })

       wx.hideNavigationBarLoading()
     }
    })
    
    wx.setNavigationBarTitle({
      title: 'res.data.rating.average+"分: '+res.data.title,
    })

    wx.showNavigationBarLoading()
  },
  onShareAppMessage: function () {
    return {
      title: "向你推荐: "+this.data.book.title
    }
  }
})
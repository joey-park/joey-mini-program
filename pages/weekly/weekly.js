Page({
  data:{
    weeklyBookList:[
    {
      name: "平凡的世界",
      comment: "每个平凡的我们注定会有不平凡的人生",
      imagePath: "/images/书籍2.jpg",
      isHighlyRecommended:true,
      id:77
    },
    {
      name: "围城",
      comment: "婚姻是一座城，里面的人想出去，外面的人想进来",
      imagePath: "/images/书籍3.jpg",
      isHighlyRecommended: false,
      id:88
    },
    {
      name: "白说",
      comment: "宁鸣而死，不默而生",
      imagePath: "/images/书籍4.jpg",
      isHighlyRecommended: true,
      id: 99
    }
    ],
    count:0,
    currentIndex:0
  },
onLoad: function (options) {
     this.setData({
       currentIndex:this.data.weeklyBookList.length-1
     })
},
// f0:function(event){
//     this.setData({
//       count:this.data.count+1
//     })
// }
 f0:function(event){
  this.setData({
    currentIndex: this.data.weeklyBookList.length - 1
  })
},
 f1:function(event){
   var bookId=event.currentTarget.dataset.bookId
   console.log(bookId);
  wx.navigateTo({
    url: '/pages/detail/detail?id=' +bookId,
  })
},
onShareAppMessage: function() {
  return {
    title:"每周推荐"
  }
}
})
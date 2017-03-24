// pages/group/group.js
Page({
  data:{
    items: [
      {name: 'USA', value: '北京醋溜', image:"../../images/Bitmap.png"},
      {name: 'CHN', value: '中国醋溜', image:"../../images/Bitmap.png",checked: 'true'},
      {name: 'BRA', value: '巴西醋溜',image:"../../images/Bitmap.png"},
      {name: 'JPN', value: '醋溜日本',image:"../../images/Bitmap.png"},
      {name: 'ENG', value: '英国醋溜',image:"../../images/Bitmap.png"},
      {name: 'TUR', value: '醋溜法国',image:"../../images/Bitmap.png"},
    ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
 toTemp:function(e){
  wx.navigateBack({
    url: "../temp/temp?groupid=1"
  })
 },
})
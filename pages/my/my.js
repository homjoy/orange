//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../temp/temp'
    })
  },
  onLoad: function () {
    console.log('index')
    //调用应用实例的方法获取全局数据
   
  },
  toM:function(e){
  wx.navigateTo({
    url: "../temp/temp?aid=1&disable=false"
  })
 },
 toP:function(e){
  wx.navigateTo({
    url: "../temp/temp?aid=1&disable=true"
  })
 },
  aF:function(e){
    wx.navigateTo({
      url: '../temp/temp',
      success: function(res){
      }
    })
  }
})

// pages/test/test.js
Page({
  data:{
      count:1,
      aInfo: {},
      uInfo: {},
      aid:1
  },
   onLoad:function(options){
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
  myL:function(e){
    wx.navigateTo({
            url: '../my/my?nickName='+'001',
            success: function(res){
              // success
            }
          })
    },
  myR:function(e){
    wx.navigateBack({
            url: '../detail/detail',
            success: function(res){
              // success
            }
          })
    }
})
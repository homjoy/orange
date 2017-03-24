// pages/test/test.js
Page({
  data:{
      count:6,
      aInfo: {
                "id": "1",
                "poster": "http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTI0t3DUkJ0ZxNuBsr1Cb18Xfg1dwzKo5UJnIy80bKAfGftgwOXkuekVgwxYE7NQrKCyUVbHYjptWQ/0",
                "name": "周末来吃西瓜",
                "start_time": "2018 02.01 周六  09:00",
                "end_time": "2018 02.01 周六  12:00",
                "enter_start": "0",
                "description": "",
                "status": "1",
                "area": "北京知春路知春家园2号楼",
                "group": ""
            },
      uInfo:[
                {
                    "attr": "http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTI0t3DUkJ0ZxNuBsr1Cb18Xfg1dwzKo5UJnIy80bKAfGftgwOXkuekVgwxYE7NQrKCyUVbHYjptWQ/0",
                    "sex": "1",
                    "area": "北京",
                    "company": "1",
                    "nickname": "001",
                    "uid": "1",
                    "message": "土耳其飞机劫持事件居然是闹剧，还好不是恐怖袭击没有人员伤亡土耳其飞机劫持事件居然是闹剧，还好不是恐怖袭击没有人员伤亡",
                    "cstatus": "1",
                    "anonymous": "0"
                },
                {
                    "attr": "http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTI0t3DUkJ0ZxNuBsr1Cb18Xfg1dwzKo5UJnIy80bKAfGftgwOXkuekVgwxYE7NQrKCyUVbHYjptWQ/0",
                    "sex": "1",
                    "area": "北京",
                    "company": "1",
                    "nickname": "111",
                    "uid": "2",
                    "message": "土耳其飞机劫持事件居然是闹剧，还好不是恐怖袭击没有人员伤亡土耳其飞机劫持事件居然是闹剧，还好不是恐怖袭击没有人员伤亡",
                    "cstatus": "0",
                    "anonymous": "0"
                },
                {
                    "attr": "http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTI0t3DUkJ0ZxNuBsr1Cb18Xfg1dwzKo5UJnIy80bKAfGftgwOXkuekVgwxYE7NQrKCyUVbHYjptWQ/0",
                    "sex": "1",
                    "area": "北京",
                    "company": "1",
                    "nickname": "331",
                    "uid": "3",
                    "message": "土耳其飞机劫持事件居然是闹剧，还好不是恐怖袭击没有人员伤亡土耳其飞机劫持事件居然是闹剧，还好不是恐怖袭击没有人员伤亡",
                    "cstatus": "0",
                    "anonymous": "0"
                }
            ],
      aid:1,
      nickName:'001'
  },
   onLoad:function(options){
     var that = this;
     var userInfo = getApp().globalData.userInfo;
     console.log(userInfo);
      this.setData({
          nickName:userInfo.nickName
      });
    if(options.aid){
      this.setData({
        aid:options.aid
      })
    }
    wx.request({
      url:  getApp().globalData.url+"/innerapi/activity/activityDetail", //仅为示例，并非真实的接口地址
      data: {
        aid:that.data.aid
      },
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        that.setData({
                count:res.data.data.meta.count,
                aInfo:res.data.data.meta.aInfo,
                uInfo:res.data.data.meta.uInfo
        })
      }
    })
   wx.request({
      url: getApp().globalData.url+'/innerapi/account/create', //仅为示例，并非真实的接口地址
      data: {
        nickName:that.data.nickName
      },
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res);
      }
    })
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
  onShareAppMessage: function () {
    return {
      title: '邀请加入活动',
      path: '/pages/detail/detail?aid='+this.data.aid
    }
  },
  toP:function(e){
    var that = this;
      wx.request({
      url: getApp().globalData.url+'/innerapi/activity/activityDetail', //仅为示例，并非真实的接口地址
      data: {
        aid:that.data.aid
      },
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        that.setData({
                count:res.data.data.meta.count,
                aInfo:res.data.data.meta.aInfo,
                uInfo:res.data.data.meta.uInfo
        })
      }
    })
    wx.navigateTo({
            url: '../join/join?nickName='+this.data.nickName+'&aid='+this.data.aid,
            success: function(res){
              // success
            }
          })
    } ,
  myL:function(e){
    var that = this;
    wx.navigateTo({
            url: '../my/my?nickName='+that.data.nickName,
            success: function(res){
              // success
            }
          })
    },
  myR:function(e){
    var that = this;
    wx.navigateTo({
            url: '../join/join?aid='+that.data.aid,
            success: function(res){
              // success
            }
          })
    },
    wordAddBtn:function(e){
        var that = this;
        wx.navigateTo({
        url: '../message/message?aid='+that.data.aid,
        success: function(res){
            // success
        }
    })
}
})
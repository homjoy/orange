//logs.js
var util = require('../../utils/util.js')
const date = new Date()
const years = []
const months = []
const days = []

for (let i = 2017; i <= 2300; i++) {
  years.push(i)
}

for (let i = 1 ; i <= 12; i++) {
  months.push(i)
}

for (let i = 1 ; i <= 31; i++) {
  days.push(i)
}
Page({
  data: {
    years: years,
    year: date.getFullYear(),
    months: months,
    month: 2,
    days: days,
    day: 2,
    year: date.getFullYear(),
    value: [9999, 1, 1],
    toggle:false,
    logs: [],
    timeFirst:'9:00',
    timeLast:'12:00',
    title:'周末来吃西瓜',
    address:'北京醋溜科技有限公司',
    desc:'记得带卡片',                     
    imagePath:{iconPath:'../../images/path-3.png',status:true}},
  onLoad: function (option) {
    console.log(option.aid,option.status)
    if(!option.aid){
      this.setData({
        logs: [],
        timeFirst:'',
        timeLast:'',
        title:'',
        address:'',
        desc:'',
        acDate:''
      })
    }
    this.setData({
        status:option.status
    })
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  },
  bindDateChange: function(e) {
    this.setData({
      acDate: e.detail.value
    })
  },
  bindTimeChangeFirst: function(e) {
    this.setData({
      timeFirst: e.detail.value
    })
  },
  bindTimeChangeLast: function(e) {
    console.log(55667)
    this.setData({
      timeLast: e.detail.value
    })
  },
  startSet:function(e){
    wx.navigateTo({
      url: '../group/group',
      success: function(res){
      }
    })
  },
  toggle:function(){
    var self = this;
    var temp = false;
    if(self.data.toggle==temp){
        temp = true;
    }
    this.setData({
      toggle:temp
    })
  },
  uploadFile:function(){
    console.log(5555)
    var self = this;
    wx.chooseImage({
      success:function(res){
        var tempFilePaths = res.tempFilePaths
        self.setData({
          imagePath:{iconPath:tempFilePaths,status:false}
        })
      }
    })
  },
  
  tempSubmit:function(e){
    wx.navigateBack({
      url: '../my/my',
      success: function(res){
      }
    })
  },
   bindChange: function(e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]]
    })
  }
})

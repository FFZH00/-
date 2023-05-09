// pages/my/my.js
Page({
 
    /**
     * 页面的初始数据
     */
    data: {
     
    
    },
   
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
     
    },
    gohelp: function(param){
        wx.navigateTo({
          url: '/pages/help/help',
        })
    },
    goserve: function(param){
        wx.navigateTo({
          url: '/pages/serve/serve',
        })
    },
  })
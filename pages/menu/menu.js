// pages/menu/menu.js
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

    godetail: function(param){
        wx.navigateTo({
          url: '/pages/detail/detail',
        })
    },
})
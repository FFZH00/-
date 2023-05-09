// index.js
var app = getApp();
var that = '';
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    res:"",
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    that = this;

  },
  /**
   * 选择图片
   */
  
  doChooseImage: function () {
    that.setData({
      ishow: false,
      content: ''
    });
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album','camera'],
      success(res) {
        const tempFilePaths = res.tempFilePaths[0];
        that.getB64ByUrl(tempFilePaths);
        that.setData({
          img: tempFilePaths
        });
 
      }
    })
  },
  /**
   * 转b64
   */
  getB64ByUrl: function(url) {
    const FileSystemManager = wx.getFileSystemManager();
    FileSystemManager.readFile({
      filePath: url,
      encoding: 'base64',
      success(res) {
        that.setData({
          imgB64: res.data
        });
      }
    })
  },
 
  /**
   * 广告牌识别
   */
  adTap: function(e) {
    var that = this;
    const imgB64 = that.data.imgB64;
    if (!imgB64) {
      that.setData({
        ishow: true
      });
      return;
    };
  
    wx.uploadFile({
      filePath: this.data.img,
      name: 'file',
      url: 'http://49.234.39.24:8000/calc',
      success(res){
          console.log(res)
            that.setData({
                content: res.data
            })
          
      }
    })
    // wx.request({
    //     url: 'http://49.234.39.24:8000/calc',
    
    //       method:"POST",
    //       data:{"file":this.data.img},
    //     success:(resp)=>
    //     {
    //       let  rdatas=resp.data;
    //        console.log(rdatas);
    //        console.log(rdatas.type)
    //        console.log("调用后台calc");
           
    //     }
    //   })

  },
})
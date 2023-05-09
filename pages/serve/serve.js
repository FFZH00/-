// pages/serve/serve.js
Page({
    data: {
      tabs: [
        {
          id: 0,
          value: "体验问题",
          isActive: true
        },
        {
          id: 1,
          value: "商品、商家投诉",
          isActive: false
        }
      ],
      // 被选中的图片路径 数组
      chooseImgs: []
    },
    // 外网的图片的路径数组
    UpLoadImgs: [],
    handleTabsItemChange(e) {
      // 1 获取被点击的标题索引
      const { index } = e.detail;
      // 2 修改源数组
      let { tabs } = this.data;
      tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
      // 3 赋值到data中
      this.setData({
        tabs
      })
    },
    // 点击 “+” 选择图片
    handleChooseImg() {
      // 2 调用小程序内置的选择图片api
      wx.chooseImage({
        // 同时选中的图片的数量
        count: 9,
        // 图片的格式  原图  压缩
        sizeType: ['original', 'compressed'],
        // 图片的来源  相册  照相机
        sourceType: ['album', 'camera'],
        success: (result) => {
          this.setData({
            // 图片数组 进行拼接 
            chooseImgs: [...this.data.chooseImgs, ...result.tempFilePaths]
          })
        }
      });
    },
  })
  
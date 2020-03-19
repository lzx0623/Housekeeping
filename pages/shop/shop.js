// pages/shop/shop.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    background: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578386986451&di=7746ed9b9bf2b22a95080f116c48b305&imgtype=0&src=http%3A%2F%2Fimg.files.swws.258.com%2F1%2F2017%2F0117%2F10%2F587d7e7502640.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578386986451&di=7746ed9b9bf2b22a95080f116c48b305&imgtype=0&src=http%3A%2F%2Fimg.files.swws.258.com%2F1%2F2017%2F0117%2F10%2F587d7e7502640.jpg'
    ],
    indicatorDots: true,
    vertical: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    icon: [{
        img: '../icon/服务列表.png',
        name: '服务列表'
      },
      {
        img: '../icon/服务.png',
        name: '最新服务'
      },
      {
        img: '../icon/推荐服务.png',
        name: '推荐服务'
      },
      {
        img: '../icon/优惠.png',
        name: '我的优惠'
      }
    ],
    price: [{
        iconIMG: '../icon/offPirce.png',
        money: "￥50.00",
        condition: "满500可用",
        isget: "立即领取"
      },
      {
        iconIMG: '../icon/offPirce.png',
        money: "￥20.00",
        condition: "满200可用",
        isget: "立即领取"
      },
      {
        iconIMG: '../icon/offPirce.png',
        money: "￥10.00",
        condition: "满100可用",
        isget: "立即领取"
      },
    ],
    type: [{
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578456301157&di=7ed7258ef7f0d61b7d10bf6ecb4ca329&imgtype=0&src=http%3A%2F%2Fmeijia0451.jiaju.cc%2FData%2FIMAGES_PRODUCT%2F2016-1-20%2F1453279223.jpg',
        name: '家电清洗上门服务',
        price: '￥100'
      },
      {
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578456685950&di=4a9325ab1ba6d0d93bfd46e64dadf7d0&imgtype=0&src=http%3A%2F%2Fpic0.changlu.cn%2Fupload%2F201910%2F07%2F115515265.jpg',
        name: '家政保洁服务',
        price: '￥100'
      },
    ],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  tapName: function(event) {
    let index = event.currentTarget.dataset.index;
    let price = this.data.price
    price[index].iconIMG = "../icon/优惠券灰.png"
    price[index].isget = '已经领取'
    this.setData({
      price: price
    });
  },
  tapclass(event) {
    let index = event.currentTarget.dataset.index;
    switch (index) {
      case 0:
        
        break;
      case 1:
        wx.reLaunch({
          url: '../classification/classification'
        })
        break;
      case 2:
        wx.reLaunch({
          url: '../classification/classification'
        })
        break;
      case 3:
        break;
      default:
    }
  },


  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
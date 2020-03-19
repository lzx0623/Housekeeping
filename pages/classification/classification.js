// pages/classifiction/classification.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemList:[
      {
        type:"1",
        name:"最新服务"
      },
      {
        type: "2",
        name: "推荐服务"
      }
    ],
    chooseIndex:0,
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
      {
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578456301157&di=7ed7258ef7f0d61b7d10bf6ecb4ca329&imgtype=0&src=http%3A%2F%2Fmeijia0451.jiaju.cc%2FData%2FIMAGES_PRODUCT%2F2016-1-20%2F1453279223.jpg',
        name: '家电清洗上门服务',
        price: '￥100'
      },
      {
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578456685950&di=4a9325ab1ba6d0d93bfd46e64dadf7d0&imgtype=0&src=http%3A%2F%2Fpic0.changlu.cn%2Fupload%2F201910%2F07%2F115515265.jpg',
        name: '家政保洁服务',
        price: '￥100'
      }
    ]
  },

  chooseItem(event) {
    let index = event.currentTarget.dataset.index;
    this.setData({
      chooseIndex: index
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
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
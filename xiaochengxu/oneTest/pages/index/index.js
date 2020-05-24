//index.js
//获取应用实例
const app = getApp()

Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },
  data: {
    searchValue: '',
    bannerList: [
      {
        "id":1,
        "url": '../../images/banner1.png'
      },
      {
        "id":2,
        "url": '../../images/banner2.png'
      },
      {
        "id":3,
        "url": '../../images/banner3.png'
      }
    ],
    // indicatorDots: true,
    // vertical: false,
    // autoplay: false,
    // interval: 2000,
    // duration: 500,
    // motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  chomeCarouselClick(e){
    console.log(e,'e')
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../detail/index?id=' + id
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getTabBar().init();
  },
  //事件处理函数
  bindViewTap: function () {
    // wx.switchTab({
    //   url: "../home/index"
    // })
  },
  onLoad: function () {
    // 页面渲染后 执行
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
Component({
  data: {
  active: 0,
  list: [
    {
      "url": "/pages/index/index",
      "icon": "wap-home-o",
      "text": "首页"
    },
    {
      "url": "/pages/goods/index",
      "icon": "orders-o",
      "text": "商品"
    },
    {
      "url": "/pages/orders/index",
      "icon": "points",
      "text": "订单"
    },
    {
      "url": "/pages/my/index",
      "icon": "user-circle-o",
      "text": "个人中心"
    }
  ]
  },
  methods: {
   onChange(e) {
      console.log(e,'e')
      this.setData({ active: e.detail });
      wx.switchTab({
        url: this.data.list[e.detail].url
      });
   },
   init() {
       const page = getCurrentPages().pop();
       this.setData({
      　  active: this.data.list.findIndex(item => item.url === `/${page.route}`)
       });
      }
   }
});
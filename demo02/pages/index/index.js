//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js');

Page({
  data: {
    // 新闻列表数据
    list: [],
    // 滑动动画时长
    duration: 2000,
    // 面板指示点
    indicatorDots: true,
    // 自动切换
    autoplay: true,
    // 切换动画时间间隔
    interval: 3000,
    loading: false,
    // 按钮是否镂空，背景色透明
    plain: false,
  },
  // 生命周期函数--监听页面加载
  onLoad: function () {
    const that = this;
    wx.request({
      url: 'http://news-at.zhihu.com/api/4/news/latest',
      header: {
        'Content-Type': 'application/json',
      },
      success: function (res) {
        that.setData({
          banner: res.data.top_stories,
          list: [{ header: '今日热闻' }].concat(res.data.stories),
        })
      }
    });

    this.index = 1;
  },
  // 点击更多的回调
  loadMore: function (e) {
    if (this.data.list.length === 0) {
      return;
    }

    const date = this.getNextDate();
    const that = this;
    that.setData({
      loading: true,
    });
    
    wx.request({
      url: `http://news-at.zhihu.com/api/4/news/before/${Number(util.formatDate(date)) + 1}`,
      header: {
        'Content-Type': 'application/json',
      },
      success: function (res) {
        that.setData({
          loading: false,
          list: that.data.list.concat([{ header: util.formatDate(date, '-')}]).concat(res.data.stories),
        })
      }
    })
  },
  // 跳转到详情页面
  bindViewTap: function (e) {
    // 打开新页面
    wx.navigateTo({
      url: '../detail/detail?id=' + e.target.dataset.id,
    })
  },
  // 生成前一天的时间
  getNextDate: function (e) {
    const now = new Date();
    // now.getDate() 返回某一天的日期
    now.setDate(now.getDate() - (this.index ++));
    return now;
  }
})

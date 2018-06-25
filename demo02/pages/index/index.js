//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js');

Page({
  data: {
    list: [],
    duration: 2000,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    loading: false,
    plain: false,
  },
  
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
  bindViewTap: function (e) {
    // 打开新页面
    wx.navigateTo({
      url: '../detail/detail?id=' + e.target.dataset.id,
    })
  },
  getNextDate: function (e) {
    const now = new Date();
    now.setDate(now.getDate() - this.index++);
    return now;
  }
})

//app.js
const bmap = require('./libs/bmap-wx.min.js');

App({
  onLaunch: function () {
    this.init();
  },
  init (params) {
    let BMap = new bmap.BMapWX({
      ak: this.globalData.ak,
    });
    console.log(BMap, params);
    var fail = function (data) {
      console.log('fail!!!!')
    };
    var success = function (data) {
      console.log('success!!!');
      var weatherData = data.currentWeather[0];
      console.log(data, data.currentWeather[0]);
    }
    BMap.weather({
      fail: fail,
      success: success
    });
  },
  globalData: {
    ak: 'gnYFKjiryYbz0rGyDZg3Pn5plGR9AKop',
  }
})
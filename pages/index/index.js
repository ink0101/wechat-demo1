console.log('index.js')

var global = getApp();

console.log(global);

global.globalNumber ++;

console.log(global.globalNumber);

// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: (new Date()).toString(),
    w: 'w',
    W: 'W',
    var1: null,
    var2: undefined,
    var3: 'var3',
    a: 1,
    b: 2,
    c: 3,
    array1: [
      {
        name: 'foo'
      },
      {
        name: 'bar'
      }
    ],
    array2: [
      {id: 5, unique: 'unique_5'},
      {id: 4, unique: 'unique_4' },
      {id: 3, unique: 'unique_3' },
      {id: 2, unique: 'unique_2' },
      {id: 1, unique: 'unique_1' },
      {id: 0, unique: 'unique_0' }
    ],
    array3: [1, 2, 3, 4],
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-06-18'
    }
  },

  switch: function(e) {
    const length = this.data.array2.length;
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.array2[x]
      this.data.array2[x] = this.data.array2[y]
      this.data.array2[y] = temp
    }
    this.setData({
      array2: this.data.array2
    });
  },

  addToFront: function(e) {
    const length = this.data.array2.length;
    this.data.array2 = [{id: length, unique: `unique_${length}`}].concat(this.data.array2);
    this.setData({
      array2: this.data.array2,
    });
  },

  addNumberToFront: function(e) {
    const length = this.data.array3.length;
    this.data.array3 = [length + 1].concat(this.data.array3);
    this.setData({
      array3: this.data.array3,
    });
  },

  handleTap1: function(e) {
    console.log('handleTap1');
  },

  handleTap2: function (e) {
    console.log('handleTap2');
  },

  handleTap3: function (e) {
    console.log('handleTap3');
  },

  handleTap4: function (e) {
    console.log('handleTap4');
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
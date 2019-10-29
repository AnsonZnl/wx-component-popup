//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    title: 'Hello Pupop Component',
    popupTitle: '热评',
    popupContent: '每天起床都会看一遍大家的评论，很开心能够得到大家的支持和认可大家有考研的，有工作的，有在努力学习的，也有在恋爱的当然也有一些失落的不管哪种属于你，我都希望这首歌能够带给你们温暖和动力，努力认真面对这个美好的世界，大爱小爱都会有的，大家加油。',
    isShowPopup: true,
  },
  showPopup() {
    this.setData({
      isShowPopup: false
    })
  },
  hidePopop: function(e) {
    console.log(e.detail) // 自定义组件触发事件时提供的detail对象
    console.log('父组件：我接受到了子组件的关闭弹窗的通知！');
    this.setData({
      isShowPopup: true
    })
  }
})
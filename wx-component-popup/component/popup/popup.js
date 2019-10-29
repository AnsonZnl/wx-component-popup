Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    isShowPopup: { 
      type: Boolean,
      value: true
    },
    popupTitle: { 
      type: String,
      value: '', 
    },
    popupContent:{
      type: String,
      value: '', 
    }
  },
  data: {
    // 这里是一些组件内部数据
  },
  methods: { //放自定义的方法
    onTap: function () {
      var myEventDetail = {} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      console.log(`子组件：'向父组件发送通知，我要关闭弹窗'`)
      this.triggerEvent('hidepopop', myEventDetail, myEventOption)
    }
  },
})
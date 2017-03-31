function install(Vue) {
  // 全局方法
  Vue.myPlugin = function () {
    // 逻辑
    console.log('globalMethod')
    alert('globalMethod')
  };
  
  // 全局指令
  Vue.directive('globalDirective', {
    bind (el, binding, vnode, oldVnode) {
      // 逻辑...
      el.onclick = function () {
        if (el.innerHTML === binding.value.cn) {
          el.innerHTML = binding.value.en;
          el.style.color = binding.value.enColor;
        } else {
          el.innerHTML = binding.value.cn;
          el.style.color = binding.value.cnColor;
        }
      }
    }
  })

  // 注入组件
  Vue.mixin({
    created: function () {
      var myOption = this.$options.myOption
      if (myOption) {
        console.log(myOption)
      }
    }
  })

  // 实例方法
  Vue.prototype.$myMethod = function (options) {
    // 逻辑...
    console.log('myMethod');
    alert('myMethod')
  }
}

export default install;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}
import VTK from './vue-toast-k.vue';
/**
 * 写好插件后我们还需要使用 webpack 将 vue 文件等打包成 css/js 文件
 * 以方便其他人引用该插件
 */

export default {
  /**
   * Vue 插件需要包含 install 方法
   */
  install: function(Vue) {
    Vue.prototype.$vtk = {};
    Vue.prototype.$vtk.show = function(message, options = {}) {
      const T = Vue.extend(VTK); // 创建 Vue 组件类

      // 在文档之外渲染并且随后挂载
      const instance = new T().$mount();
      document.body.appendChild(instance.$el);

      instance.show = true; // 显示
      instance.message = message; // 传入数据
      instance.duration = options.duration ? options.duration : 1000; // 显示时间
    }
  }
};
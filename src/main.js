import Vue from 'vue'
import App from './App.vue'
import VTK from '@/plugins/vue-toast-k/src';
import router from './router'

Vue.use(VTK);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

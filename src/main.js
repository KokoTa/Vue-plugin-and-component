import Vue from 'vue'
import App from './App.vue'
import VTK from '@/plugins/vue-toast-k/src';

Vue.use(VTK);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

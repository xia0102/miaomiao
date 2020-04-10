import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
Vue.prototype.$axios = axios;

// 过滤器(过滤图片的宽高)
Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg);
});

// 全局滚动组件
import Scroller from '@/components/Scroller'
Vue.component('Scroller',Scroller);

// 加载组件
import Loading from '@/components/Loading'
Vue.component('Loading',Loading);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

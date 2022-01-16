import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import VueResource from 'vue-resource'
Vue.use(VueResource);


import htmlToPdf from "@/htmlToPdf";
Vue.use(htmlToPdf)

Vue.config.productionTip = false
Vue.use(ElementUI)

import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

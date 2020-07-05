import Vue from 'vue'
// import App from './App.vue'
import Home from '@/views/Home.vue'
import '@/config/rem'

Vue.config.productionTip = false

if(process.env.NODE_ENV=='development') require('@/api/mock')

new Vue({
  render: h => h(Home),
}).$mount('#app')

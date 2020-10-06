import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import AOS from 'aos'

import '@/assets/scss/index.scss'
import 'swiper/swiper.scss'
import 'aos/dist/aos.css'

// plugins
Vue.use(VueAwesomeSwiper)

// registration global components
const files = require.context('@/components', true, /\.vue$/i)

files.keys().map(key => {
    Vue.component(files(key).default.name ?? key.split('/').pop().split('.')[0], files(key).default);
})
// registration global components end

Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init()
  },
  store,
  render: h => h(App)
}).$mount('#app')

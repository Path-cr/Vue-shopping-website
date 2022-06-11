import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TypeNav from './components/TypeNav'
import Carousel from './components/Carousel'
import Pagination from './components/Pagination'
import * as API from '@/api';
import {Button, MessageBox} from 'element-ui';

Vue.config.productionTip = false
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)
Vue.component(Button.name, Button)
Vue.component(MessageBox.name, MessageBox)

import store from './store/index'
import './mock/mockServer';
import 'swiper/css/swiper.css'

Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$msgbox = MessageBox;

new Vue({
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this,
    Vue.prototype.$API = API
  },
  render: h => h(App),
}).$mount('#app')

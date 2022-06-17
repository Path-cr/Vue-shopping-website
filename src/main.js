import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TypeNav from './components/TypeNav'
import Carousel from './components/Carousel'
import Pagination from './components/Pagination'
import * as API from '@/api';
import {Button, MessageBox, Form, FormItem, Input, Col, Menu, MenuItem , Submenu} from 'element-ui';
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1,
  attempt: 1
})

Vue.config.productionTip = false
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)
Vue.component(Button.name, Button)
Vue.component(MessageBox.name, MessageBox)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(Input.name, Input)
Vue.component(Col.name, Col)
Vue.component(Menu.name, Menu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(Submenu.name, Submenu)

import store from './store/index'
import './mock/mockServer';
import 'swiper/css/swiper.css'

Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$msgbox = MessageBox;

// import '@/plugins/valadiate';


new Vue({
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this,
    Vue.prototype.$API = API
  },
  render: h => h(App),
}).$mount('#app')

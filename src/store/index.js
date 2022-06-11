import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

import home from './home'
import search from './search'
import detail from './detail'
import shopcart from './shopcart'
import login  from './Login'
import register  from './Register'
import trade  from './trade'

export default new Vuex.Store({
    modules: {
        home,
        search,
        detail,
        shopcart,
        login,
        register,
        trade
    }
})
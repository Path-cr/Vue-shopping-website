import { reqCartList } from '@/api/index';
const state = {
    cartList: []
}
const mutations = {
    GETCARTLIST(state, payload) {
        state.cartList = payload
    }
}
const actions = {
    async getCartList({ commit }) {
        let result = await reqCartList()
        if (result.code == 200) {
            commit('GETCARTLIST', result.data)
        }
    }
}
const getters = {
    allCartInfo(state) {
        return state.cartList[0] || {}
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}


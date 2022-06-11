import { reqCartList, reqDelCartList, reqUpdataCartList} from '@/api/index';
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
    },
    async reqDelCartList({ commit },skuId) {
        let result = await reqDelCartList(skuId)
        if (result.code == 200) {
           return 'ok'
        }else {
            return Promise.reject(new Error('删除失败', result.error))
        }
    },
    async reqUpdataCartList({ commit },{skuId, isChecked}) {
        let result = await reqUpdataCartList(skuId, isChecked)
        if (result.code == 200) {
           return 'ok'
        }else {
            return Promise.reject(new Error('修改失败', result.error))
        }
    },
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


import { reqGetDetailList, reqAddCartList } from '@/api/index'
const state = {
    detailList: {}
}
const mutations = {
    GETDETAILLIST(state, payload) {
        state.detailList = payload.data
    }
}
const actions = {
    async getDetailList({ commit }, stuId) {
        let result = await reqGetDetailList(stuId)
        if (result.code == 200) {
            commit("GETDETAILLIST", result)
        }
    },
    async getAddCartList({ commit }, { skuId, skuNum }) {
        let result = await reqAddCartList(skuId, skuNum)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('失败'))
        }
       
    }
}
const getters = {
    categoryView(state) {
        return state.detailList.categoryView || {}
    },
    skuInfo(state) {
        return state.detailList.skuInfo || {}
    },
    spuSaleAttrList(state) {
        return state.detailList.spuSaleAttrList || {}
    },
}

export default {
    state,
    mutations,
    actions,
    getters
}
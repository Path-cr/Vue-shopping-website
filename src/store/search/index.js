import {repGetSearchInfo} from '@/api/index'
const state = {
    searchInfo: {}
}
const mutations = {
    GETSEARCHINFO(state, payload) {
        state.searchInfo = payload
    }
}
const actions = {
   async getSearchInfo({commit},params) {
        let result = await repGetSearchInfo(params)
        if(result.code === 200) {
            commit("GETSEARCHINFO", result.data)
        }
    }
}
const getters = {
    goodsList(state) {
        return state.searchInfo.goodsList || []
    },
    attrsList(state) {
        return state.searchInfo.attrsList
    },
    trademarkList(state) {
        return state.searchInfo.trademarkList
    },
}

export default {
    state,
    mutations,
    actions,
    getters   
}
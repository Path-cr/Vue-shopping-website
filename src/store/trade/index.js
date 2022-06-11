import {reqAddressInfo, reqOrderInfo, reqSubmitOrder} from '@/api/index';
const state = {
    address: {},
    orderInfo: {}
}
const mutations = {
    reqAddressList(state, payload) {
        state.address = payload
    },
    reqOrderInfo(state, payload) {
        state.orderInfo = payload
    }
}
const actions = {
    async reqAddressInfo({commit}) {
        try {
            let result = await reqAddressInfo()
            commit("reqAddressList", result.data)
        } catch (error) {
            console.log('addressMessage:'+ error);
        }
    } ,
    async reqOrderInfo({commit}) {
        try {
            let result = await reqOrderInfo()
            commit("reqOrderInfo", result.data)
        } catch (error) {
            console.log('orderMessage:'+ error);
        }
    }
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}
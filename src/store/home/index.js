import { reqCategoryList, reqGetbannerList, reqGetfloorList } from '@/api/index'

const  result_copy = []
const state = {
    categoryList: [],
    bannerList: [],
    floorList: []
}
const mutations = {
    CATEGORYLIST(state, payload){
        state.categoryList = payload
    },
    GETBANNERLIST(state, payload) {
        state.bannerList = payload.data
    },
    GETFLOORLIST(state, payload) {
        state.floorList = payload.data
    }


}
const actions = {
   async categoryList({commit}) {
        const result = await reqCategoryList()
        if(result.code === 200) {  
            for(let index = 0; index < result.data.length - 1; index ++){
                result_copy.push(result.data[index])
              }
           commit('CATEGORYLIST', result_copy)
        }
    },
   async getbannerList({commit}) {
        const result = await reqGetbannerList()
        if(result.code === 200) {  
           commit('GETBANNERLIST', result)
        }
    },
   async getfloorList({commit}) {
        const result = await reqGetfloorList()
        if(result.code === 200) {  
           commit('GETFLOORLIST', result)
        }
    },
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters   
}
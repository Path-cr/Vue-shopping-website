import {reqLogin, reqLoginOut, reqUserInfo} from '@/api/index'
import {getToken, setToken, clearToken} from '@/utils/token_userInfo'
const state = {
    accountData: {},
    token: getToken()
}

const mutations = {
    REQLOGIN(state, payload) {
        state.token = payload
    },
    REQLOGINOUT(state) {
        state.accountData = {}
        clearToken()
    },
    REQUSERINFO(state, payload) {
        state.accountData = payload
    }
}
const actions = {
   async reqLogin({commit}, {phone, password}) {
        let result = await reqLogin(phone, password)
        if(result.code === 200) {
            setToken(result.data.token)
           commit('REQLOGIN', result.data.token)
           return 'ok'
        }else {
            alert('登录失败');
            reqLogin().then(
                // v => console.log('resolve', v),
                e => console.log('reject', e)
              )
        }
    },
   async reqLoginOut({commit}) {
        let result = await reqLoginOut()
        if(result.code === 200) {
           commit('REQLOGINOUT')
        }else {
            alert('退出失败');
            reqLogin().then(
                // v => console.log('resolve', v),
                e => console.log('reject', e)
              )
        }
    },
   async reqUserInfo({commit}) {
        let result = await reqUserInfo()
        if(result.code === 200) {
           commit('REQUSERINFO', result.data)
        }else {
            console.log('error:' + result);
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
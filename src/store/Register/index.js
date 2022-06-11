import {reqRegister, reqVerificationCode} from '@/api/index';
const state = {
    data_code: null
}
const mutations = {
    REQVERIFICATIONCODE(state, payload) {
        state.data_code = payload
    }
}
const actions = {
    async reqRegister({commit},user) {
       let result = await reqRegister(user)
       if(result.code == 200) {
            console.log('注册成功');
       }else {
        alert('注册失败');
        reqRegister().then(
            // v => console.log('resolve', v),
            e => console.log('reject：', e)
          )
    }
    },
    async reqVerificationCode({commit},{phone}) {
        try {
           let result = await reqVerificationCode(phone)
           commit("REQVERIFICATIONCODE", result.data)
        } catch (error) {
            alert('验证码错误')
            console.log(error);  
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
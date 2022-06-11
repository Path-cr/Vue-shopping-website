import requests from './request';
import mockRequests from './mockAjax';

const reqCategoryList = () => requests({ url: "/product/getBaseCategoryList", method: "GET" })
const repGetSearchInfo = (data) => requests({ url: "/list", method: "post", data })
const reqGetbannerList = () => mockRequests({ url: "/banner", method: "GET" })
const reqGetfloorList = () => mockRequests({ url: "/floor", method: "GET" })
const reqGetDetailList = (stuId) => requests({ url: `/item/${stuId}`, method: "GET" })
const reqAddCartList = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: "post" })
const reqCartList = () => requests({ url: "/cart/cartList", method: "get" })
const reqDelCartList = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: "delete" })
const reqUpdataCartList = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: "get" })
const reqLogin = (phone, password,) => requests({ url: "/user/passport/login", method: "post", data: { phone, password } })
const reqLoginOut = () => requests({ url: "/user/passport/logout", method: "get" })
const reqRegister = (data) => requests({ url: "/user/passport/register", method: "post", data })
const reqVerificationCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: "get"})
const reqUserInfo = ()=>requests({url:"/user/passport/auth/getUserInfo",method:'get'})
const reqAddressInfo = ()=>requests({url:"/user/userAddress/auth/findUserAddressList",method:'get'});
const reqSubmitOrder = (tradeNo, data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,method:'post',data});
const reqOrderInfo = ()=>requests({url:"/order/auth/trade",method:'get'});
const reqOrderPay = (orderId)=>requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'});
const reqPayStatus = (orderId)=>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'});
const reqMyOrderInfo = (page, limit)=>requests({url:`/order/auth/${page}/${limit}`,method:'get'});

export {
    reqCategoryList,
    reqGetbannerList,
    reqGetfloorList,
    repGetSearchInfo,
    reqGetDetailList,
    reqAddCartList,
    reqCartList,
    reqDelCartList,
    reqUpdataCartList,
    reqLogin,
    reqLoginOut,
    reqRegister,
    reqVerificationCode,
    reqUserInfo,
    reqAddressInfo,
    reqOrderInfo,
    reqSubmitOrder,
    reqOrderPay,
    reqPayStatus,
    reqMyOrderInfo
}


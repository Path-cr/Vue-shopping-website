import requests from './request';
import mockRequests from './mockAjax';

const reqCategoryList = () => requests({url: "/product/getBaseCategoryList", method: "GET"})
const repGetSearchInfo = (data) => requests({url: "/list", method: "post", data})
const reqGetbannerList = () => mockRequests({url: "/banner", method: "GET"})
const reqGetfloorList = () => mockRequests({url: "/floor", method: "GET"})
const reqGetDetailList = (stuId) => requests({url: `/item/${stuId}`, method: "GET"})
const reqAddCartList = (skuId,skuNum) => requests({url: `/cart/addToCart/${skuId}/${skuNum}`, method: "post"})
const reqCartList = () => requests({url: "/cart/cartList", method: "get"})

export {reqCategoryList, reqGetbannerList,reqGetfloorList, repGetSearchInfo, reqGetDetailList, reqAddCartList, reqCartList}


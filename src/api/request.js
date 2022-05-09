import axios from 'axios';
import nprogress from 'nprogress';
import "nprogress/nprogress.css"
import {getUuid} from '@/utils/uuid_token'
getUuid()
const requests = axios.create({
    baseURL: '/api',
    timeout: 5000
})


//请求拦截器
requests.interceptors.request.use((config) => { 
    //config: 配置对象，里面有个重要的header属性
    
    config.headers.userTempId = localStorage.getItem('UUIDTOKEN')
    nprogress.start()
    return config
 })

 //响应拦截器
 requests.interceptors.response.use((resolve) => { 
     nprogress.done()
     return resolve.data
  }, (error) => { 
      return Promise.reject(new Error(error + 'faile'))
   })

   export default requests
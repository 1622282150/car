import axios from 'axios'
import Vue from 'vue'
import router from '../router';

// 创建axios实例
const service = axios.create({
   // api 的 base_url
  baseURL: process.env.BASE_API,
  timeout: 5000 // 请求超时时间
})
// request拦截器
service.interceptors.request.use(
  config => {
     
      config.headers['ASPXAUTH'] = window.sessionStorage.getItem('token') // 让每个请求携带自定义token 请根据实际情况自行修改
    
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response拦截器
// response 拦截器
// service.interceptors.response.use(
//   response => {
//     //这里面可以设置自定义的返回错误
//     if(response.data.Type === 0){
//       //token已过期的状态码
//     window.localStorage.removeItem('token')
//     router.replace('/login')

//     }else{
//       return response.data
//     }
//   },
//   error => {
//     //服务器报出来的所有的错误，都会被前端接收到这个位置，这个位置会打印这些错误信息，方便进行调试....
//     console.log('err' + error) // for debug
//     return Promise.reject(error)
//   }
// )


export default service
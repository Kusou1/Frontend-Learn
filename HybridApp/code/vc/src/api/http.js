import axios from 'axios'

// 创建 axios 实例
const service = axios.create({
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(config => {
  config.headers['Accept'] = "application/json"

  return config
}, error => {
  Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(response => {
  if (response.status === 200) {
    return response.data
  } else {
    console.log('响应数据报错')
    return Promise.reject(response)
  }
}, error => {
  if (error.response) {
    return error.response.data
  } else {
    return Promise.reject(error)
  }
})

export default service
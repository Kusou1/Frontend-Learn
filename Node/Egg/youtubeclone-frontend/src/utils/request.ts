import axios from 'axios'
import { store } from '@/store'

export const request = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL
})

// 请求拦截器
request.interceptors.request.use(config => {
  const { user } = store.state
  if (user) {
    config.headers.Authorization = `Bearer ${user.token}`
  }
  return config
}, err => {
  return Promise.reject(err)
})

// 响应拦截器

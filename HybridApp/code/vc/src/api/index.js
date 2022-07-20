import http from './http'

var newsProxy = ""
var weatherProxy = ""
if (process.env.NODE_ENV === 'production') {
  newsProxy = "http://v.juhe.cn"
  weatherProxy = "https://devapi.qweather.com/v7/weather"
} else {
  newsProxy = "/news"
  weatherProxy = "/weather"
}

// 新闻列表
export function newsList(type = "top", page = 1, page_size = 10) {
  return http.get(
    newsProxy + '/toutiao/index', 
    {
      params: {
        key: "6d7ee8d88bd4fb137f5d20ce7066a700",
        type,
        page,
        page_size
      }
    }
  )
}

// 3天的天气预报
export function get3d(location) {
  return http.get(
    weatherProxy + '/3d', 
    {
      params: {
        key: "687e517f06684448a9f4695721414a07",
        location
      }
    }
  )
}
import { request } from '@/plugins/request'

// 获取公共文章列表
export const getArticles = params => {
    return request({
        method: 'GET',
        url: '/api/articles',
        params
    })
}


// 获取你关注用户的文章列表
export const getYourFeedArticles = params => {
    return request({
        method: 'GET',
        url: '/api/articles/feed',
        params,
        // headers: {
        //     // 添加用户身份，数据格式：Token空格Token数据
        //     Authorization: `Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTU2OTc0LCJ1c2VybmFtZSI6InpoYW5nMTk5NyIsImV4cCI6MTYyMjk0OTk5NH0.PHXwI7nGCXDBbWRqgZTwAOH4M42DAIvJGEWtxpsV1mY`
        // }
    })
}

// 添加点赞
export const addFavorite = slug => {
    return request({
        method: 'POST',
        url: `/api/articles/${slug}/favorite`
    })
}

// 取消点赞
export const deleteFavorite = slug => {
    return request({
        method: 'DELETE',
        url: `/api/articles/${slug}/favorite`
    })
}
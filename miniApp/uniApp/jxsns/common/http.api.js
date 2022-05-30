// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：
// https://uviewui.com/js/http.html#%E4%BD%95%E8%B0%93%E8%AF%B7%E6%B1%82%E6%8B%A6%E6%88%AA%EF%BC%9F
const install = (Vue, vm) => {
	let api = {}

	// 获取广告轮播图
	api.getAdvert = params => vm.$u.get('/advertisingspace/advertising', params)

	// 获取动态列表
	api.getFeeds = params => vm.$u.get('/feeds', params)
	// 获取指定 id 动态详情
	api.getFeedInfo = params => vm.$u.get('/feeds/' + params.id)
	// 获取指定 ID 动态 评论详情
	api.getFeedComments = params => vm.$u.get('/feeds/' + params.id + '/comments')
	// 删除指定 ID 的动态
	api.deleteFeed = params => vm.$u.delete('/feeds/' + params.id + '/currency')
	// 点赞动态
	api.likeThisFeed = params => vm.$u.post('/feeds/' + params.id + '/like')
	// 取消点赞动态
	api.unlikeThisFeed = params => vm.$u.delete('/feeds/' + params.id + '/unlike')
	// 发布一条动态
	api.postOneFeed = params => vm.$u.post('/feeds', params)
	// 评论一条动态
	api.commentOneFeed = params => vm.$u.post('/feeds/' + params.id + '/comments', { body : params.body})

	// 获取资讯列表信息
	api.getNews = params => vm.$u.get('/news', params)
	// 获取指定 id 资讯详情
	api.getNewInfo = params => vm.$u.get('/news/' + params.id)
	// 获取指定 ID 资讯 评论详情
	api.getNewComments = params => vm.$u.get('/news/' + params.id + '/comments')
	// 点赞资讯
	api.likeThisNew = params => vm.$u.post('/news/' + params.id + '/likes')
	// 取消点赞资讯
	api.unlikeThisNew = params => vm.$u.delete('/news/' + params.id + '/likes')
	// 评论一条资讯
	api.commentOneInfo = params => vm.$u.post('/news/' + params.id + '/comments', { body : params.body})

	// 用户相关 API
	// 查找用户信息
	api.findUser = params => vm.$u.get('/users/' + params.name)
	// 获取注册验证码
	api.getRegisterCode = params => vm.$u.post('/verifycodes/register', params)
	// 获取手机号码登录验证码
	api.getLoginCode = params => vm.$u.post('/verifycodes', params)
	// 注册
	api.userRegister = params => vm.$u.post('/users', params)
	// 登陆
	api.userLogin = params => vm.$u.post('/auth/login', params)
	// 退出
	api.userLogout = () => vm.$u.post('/auth/logout')
	// 获取当前登录用户相关通知消息
	api.getUserMsg = () => vm.$u.get('/user/counts')
	
	// 文件上传操作
	api.uploadFile = async file =>{
		let rfile = file
		// #ifdef MP-WEIXIN
		rfile = uni.getFileSystemManager().readFileSync(file.path)
		// #endif
		
		// 将文件写入后台系统系统
		let ufile = await uni.uploadFile({
			url: vm.$u.http.config.baseUrl + '/files',
			header: {
				Authorization: "Bearer " + uni.getStorageSync("token"),
			},
			name: 'file',
			file: rfile,
			filePath: file.path
		});
		console.log(JSON.parse(ufile[1].data))
		return JSON.parse(ufile[1].data)
	}


	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	vm.$u.api = api
}

export default {
	install
}

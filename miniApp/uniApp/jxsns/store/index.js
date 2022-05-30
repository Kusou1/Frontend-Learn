import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	// 这个代表全局可以访问数据对象，就像是咱们在组件中声明的 data 属性
	state: {
		loginState: !!uni.getStorageSync('loginState') ? true : false,
		userInfo: !!uni.getStorageSync('userInfo') ? JSON.parse(uni.getStorageSync('userInfo')) : {
			name: '未知用户',
			avatar: '/static/nopic.png',
			liked: 0,
			commented: 0
		}
	},
	// 这个实时监听 state 内的数据对象变化，类似 咱们组件中的 computed 属性，会依赖 state 数据变化而变化
	getters: {

	},
	// 用来同步设置 state 的值
	mutations: {
		userLogin(state, userInfo) {
			state.loginState = true
			state.userInfo = userInfo
			uni.setStorageSync('loginState', 'ok')
			uni.setStorageSync('userInfo', JSON.stringify(userInfo))
		},
		userLogout(state) {
			state.loginState = false
			state.userInfo = {
				name: '未知用户',
				avatar: '/static/nopic.png',
				liked: 0,
				commented: 0
			}
			uni.clearStorageSync('userInfo')
			uni.clearStorageSync('loginState')
			uni.clearStorageSync('token')
		}
	},
	// 通过提交 mutations 内部的方法，异步更新 state 的状态，官方推荐都使用这种方法比较合适
	actions: {
		userLoginAction(context, userInfo) {
			context.commit('userLogin', userInfo)
		},
		userLogoutAction(context) {
			context.commit('userLogout')
		}
	}
})
export default store

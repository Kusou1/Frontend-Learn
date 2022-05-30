import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

// 调用 store vuex 状态管理
import store from '@/store/index.js'

if (process.env.NODE_ENV === 'development') {
	console.log('开发环境')
} else {
	console.log('生产环境')
}

const app = new Vue({
	...App,
	store
})
app.$mount()

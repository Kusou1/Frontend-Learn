import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// main.js
import uView from 'uview-ui';
Vue.use(uView);

// 引入公用的组件 uni-nav-bar
import uniNavBar from "@/components/uni-nav-bar/index.vue"
Vue.component("uni-nav-bar", uniNavBar);
// 引入公用组件 登陆模块
import login from "@/components/login/login.vue";
Vue.component("login", login);
// 引入公用组件 分享组件
import gotoShare from "@/components/gotoShare/gotoShare.vue";
Vue.component("goto-share", gotoShare);


Vue.prototype.BaseFileURL = 'http://ts.lagou.uieee.com/api/v2/files/'


// 引入 store 
import store from '@/store/index.js'
Vue.prototype.$store = store

App.mpType = 'app'
const app = new Vue({
	...App,
	store
})

// http拦截器，此为需要加入的内容，如果不是写在common目录，请自行修改引入路径
import httpInterceptor from '@/common/http.interceptor.js'
// 这里需要写在最后，是为了等Vue创建对象完成，引入"app"对象(也即页面的"this"实例)
Vue.use(httpInterceptor, app)

// http接口API集中管理引入部分
import httpApi from '@/common/http.api.js'
Vue.use(httpApi, app)

app.$mount()

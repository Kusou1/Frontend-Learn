import Vue from 'vue'
import App from './App.vue'
import Cloudbase from '@cloudbase/vue-provider'
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"

Vue.use(ElementUI)


// 注意更新此处的TCB_ENV_ID为你自己的环境ID
window._tcbEnv = window._tcbEnv || {}

export const envId = window._tcbEnv.TCB_ENV_ID
export const region = window._tcbEnv.TCB_REGION

Vue.config.productionTip = false

Vue.use(Cloudbase, {
    env: `test-2gmsdnvd04b10a9f`,
    region: 'ap-guangzhou'
})

new Vue({
    render: (h) => h(App)
}).$mount('#app')

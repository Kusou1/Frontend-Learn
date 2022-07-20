import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import i18n from './assets/i18n/index'

// createApp(App).use(store).use(router).mount('#app')

const app = createApp(App)

app.use(store).use(router).use(Vant).use(i18n)

if (process.env.NODE_ENV === 'production') {
  document.addEventListener('deviceready', function() {
    app.mount('#app')
  }, false)
} else {
  app.mount('#app')
}

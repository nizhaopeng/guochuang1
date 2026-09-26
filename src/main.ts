import { createApp } from 'vue'

// 本地自托管中文字体（替代原先的 fonts.googleapis.com CDN 引用）
import './fonts.css'

import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)

app.mount('#app')

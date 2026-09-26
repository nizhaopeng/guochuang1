import { createApp } from 'vue'

// 本地自托管中文字体（替代原先的 fonts.googleapis.com CDN 引用）
import './fonts.css'

import './style.css'
// Element Plus 按需样式（替代原来的全量 element-plus/dist/index.css）
import './element-plus'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// 不再 app.use(ElementPlus) 全量注册：各页面已按需显式 import 自己用到的组件，
// 全量注册会让打包器无法摇掉未使用的组件。
app.use(router)

app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'

// 引入element plus 组件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
// 安装插件
app.use(ElementPlus)
// 挂载到id=app上
app.mount('#app')

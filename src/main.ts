import { createApp } from 'vue'
import App from './App.vue'

// 引入element plus 组件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入element plus icon图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 国际化配置
// @ts-expect-error 异常处理
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const app = createApp(App)
// 安装插件
app.use(ElementPlus, {
  locale: zhCn,
})
// 安装ui组件图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

console.log('环境变量', import.meta.env)
// 挂载到id=app上
app.mount('#app')

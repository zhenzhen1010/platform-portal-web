import { createApp } from 'vue';
import App from './App.vue';

// 引入element plus 组件
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// 国际化配置
// @ts-expect-error 异常处理
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
// svg插件需要配置代码
import 'virtual:svg-icons-register';
// 引入自定义插件对象：注册整个项目全局组件
import globalComponent from '@/components';
// 引入的全局样式
import '@/styles/index.scss';
// 引入路由
import router from './router';
// 引入仓库
import pinia from './store';

const app = createApp(App);
// 安装UI插件
app.use(ElementPlus, {
  locale: zhCn,
});

console.log('环境变量', import.meta.env);
// 安装自定义插件
app.use(globalComponent);
// 注册路由
app.use(router);
// 注册pinia
app.use(pinia);
// 挂载到id=app上
app.mount('#app');

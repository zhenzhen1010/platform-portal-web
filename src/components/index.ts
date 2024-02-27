import { App, Component } from 'vue';
// 引入项目中全部组件
import SvgIcon from '@/components/SvgIcon/index.vue';
// 引入element plus icon图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
interface GlobalComponents {
  [key: string]: Component;
}

// 全局对象
const allGlobalComponent = <GlobalComponents>{ SvgIcon };
// 对外暴露插件对象
export default {
  // 必须是install方法名
  install(app: App) {
    console.log(app);
    Object.keys(allGlobalComponent).forEach((key) => {
      app.component(key, allGlobalComponent[key]);
    });

    // 将element注册全局组件
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  },
};

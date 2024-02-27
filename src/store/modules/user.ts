// 用户相关pinia
import { defineStore } from 'pinia';
// 引入接口
import { reqLogin } from '@/api/user';
import type { loginForm, loginResponseData } from '@/api/user/type';
import type { UserState } from './types/type';
import { SET_TOKEN, GET_TOKEN } from '@/utils/token';
// 引入路由
import { constRoute } from '@/router/routes';

// 创建用户仓库
const useUserStore = defineStore('User', {
  // 存储数据
  state(): UserState {
    return {
      token: GET_TOKEN(),
      menuRoutes: constRoute, // 仓库存储生产菜单需要数组
    };
  },
  // 异步|逻辑
  actions: {
    async userLogin(data: loginForm) {
      const result: loginResponseData = await reqLogin(data);
      console.log(result);
      //   如果登录成功存储token
      // 失败返回错误信息
      if (result.code === 200) {
        // pinia 存储token
        this.token = result.data.token as string;
        // 本地存储持久化
        SET_TOKEN(result.data.token as string);
        // 能保证当前async函数返回一个成功的promise
        return 'ok';
      } else {
        return Promise.reject(new Error(result.data.message));
      }
    },
  },
  getters: {},
});
// 暴露
export default useUserStore;

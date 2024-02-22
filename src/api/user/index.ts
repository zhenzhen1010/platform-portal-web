// 统一管理用户相关的接口
import request from '@/utils/request';

// 登录请求接口ts类型
import { loginForm, loginResponseData, userResponesData } from './type';
// 统一管理接口
enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}

// 暴露请求函数
// 登录接口方法
export const reqLogin = (data: loginForm) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data);
// 获取用户信息
export const reqUserInfo = () =>
  request.get<any, userResponesData>(API.USERINFO_URL);

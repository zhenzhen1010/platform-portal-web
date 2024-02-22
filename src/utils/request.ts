// 对axios进行二次封装
import axios from 'axios';
import { ElMessage } from 'element-plus';
// 1: 利用axios对象的create方法，去创建axios实例（其他的配置：基础路径、超时时间）
const request = axios.create({
  // 基础路径
  baseURL: import.meta.env.VITE_APP_BASE_API, // 基础路径/api
  timeout: 5000, // 超时时间
});
// 2：request实例添加请求与响应拦截器
request.interceptors.request.use((config) => {
  // config配置对象headers属性请求头，经常给服务器端携带公共参数
  config.headers.token = '111';
  // 返回配置对象
  return config;
});

// 3：响应拦截器
request.interceptors.response.use(
  (resopnse) => {
    // 成功回调，简化数据
    return resopnse.data;
  },
  (error) => {
    // 失败回调：处理http网络错误
    console.log(error);

    let message = '';

    // http状态码
    const status = error.resopnse.status;
    switch (status) {
      case 401:
        message = 'TOKEN过期';
        break;
      case 403:
        message = '无权限访问';
        break;
      case 404:
        message = '请求地址错误';
        break;
      case 500:
        message = '服务器错误';
        break;
      default:
        message = '网络错误';
        break;
    }

    // 提示错误信息
    ElMessage({
      type: 'error',
      message,
    });

    return Promise.reject(error);
  },
);

export default request;

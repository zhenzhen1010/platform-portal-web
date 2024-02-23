import JsCookie from 'js-cookie';

// 封装本地存储数据与读取数据的方法
export const SET_TOKEN = (token: string) => {
  JsCookie.set('TOEKN', token);
};

export const GET_TOKEN = () => {
  return JsCookie.get('TOEKN') || '';
};

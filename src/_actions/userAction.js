import { request } from '../lib/axios';
import { LOGIN_USER, LOGOUT_USER, CHECK_LOGIN } from './types';

export function loginUser(data) {
  const resultData = request('post', '/auth/login', data)
    .then((res) => {
      console.log('loginAction');
      console.log(res);
      if (res.data && 'ok' === res.data.msg && res.data.auth_info) {
        localStorage.setItem('auth_info', JSON.stringify(res.data.auth_info));
        res.isLogin = true;
        console.log(res.data);
      }
      return res;
    })
    .catch((err) => {
      console.log('user error');
      console.log(err);
      err.isLogin = false;
      return err;
    });
  console.log(resultData);
  return {
    type: LOGIN_USER,
    payload: resultData,
  };
}

export function logoutUser() {
  localStorage.removeItem('auth_info');
  const resultData = {
    isLogin: localStorage.getItem('auth_info') ? true : false,
  };

  return {
    type: LOGOUT_USER,
    payload: resultData,
  };
}

export function checkLogin() {
  const resultData = {
    isLogin: localStorage.getItem('auth_info') ? true : false,
  };
  console.log(2);

  return {
    type: CHECK_LOGIN,
    payload: resultData,
  };
}

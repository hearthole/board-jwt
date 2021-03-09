import { request, setHeader } from '../lib/axios';
import { LOGIN_USER, LOGOUT_USER, AUTH_USER } from './types';

export function loginUser2(data) {
  const resultData = request('post', '/auth/login', data)
    .then((res) => {
      if ('ok' === res.msg && res.auth_info) {
        localStorage.setItem('auth_info', JSON.stringify(res.auth_info));
        setHeader(
          'x-access-token',
          JSON.parse(localStorage.getItem('auth_info')).accessToken
        );
        return { msg: 'ok' };
      } else {
        return res;
      }
    })
    .catch((err) => {
      return err;
    });

  return {
    type: LOGIN_USER,
    payload: resultData,
  };
}

export function logoutUser(data) {
  localStorage.removeItem('auth_info');
  const resultData = Promise.resolve(false);
  return {
    type: LOGOUT_USER,
    payload: resultData,
  };
}

export function authUser(data) {
  const resultData = Promise.resolve(true);
  return {
    type: AUTH_USER,
    payload: resultData,
  };
}

export function loginUser(data) {
  const resultData = Promise.resolve({
    accesstoken: 'accesstoken',
    refreshToken: 'refreshtoken',
  })
    .then((res) => {
      if ('ok' === res.msg && res.auth_info) {
        localStorage.setItem('auth_info', JSON.stringify(res.auth_info));
        setHeader(
          'x-access-token',
          JSON.parse(localStorage.getItem('auth_info')).accessToken
        );
        return { msg: 'ok' };
      } else {
        return res;
      }
    })
    .catch((err) => {
      return err;
    });

  return {
    type: LOGIN_USER,
    payload: resultData,
  };
}

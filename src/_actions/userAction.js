import { request, setHeader } from '../lib/axios';
import { LOGIN_USER } from './types';

export function loginUser(data) {
  const resultData = request('post', '/auth/login', data)
    .then((res) => {
      if ('ok' === res.msg && res.auth_info) {
        localStorage.setItem('auth_info', JSON.stringify(res.auth_info));
        setHeader(
          'x-access-token',
          JSON.parse(localStorage.getItem('auth_info')).accessToken,
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

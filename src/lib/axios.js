import axios from 'axios';

const DOMAIN = 'http://192.168.1.29:3000/v1';

axios.defaults.headers.common['Content-Type'] =
  'application/json; charset=UTF-8';

axios.interceptors.request.use(
  (config) => {
    if (localStorage.getItem('auth_info')) {
      const token = JSON.parse(localStorage.getItem('auth_info'));
      config.headers['x-access-token'] = token.accessToken;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    if (
      err.response &&
      err.response.config &&
      err.response.status === 401 &&
      localStorage.getItem('auth_info')
    ) {
      const config = err.response.config;
      const token = JSON.parse(localStorage.getItem('auth_info'));
      localStorage.removeItem('auth_info');
      console.log('---------------start certify---------------');
      const result = await axios({
        method: 'post',
        url: DOMAIN + '/auth/certify',
        headers: {
          'x-refresh-token': token.refreshToken,
        },
      });
      console.log('---------------end certify---------------');
      console.log(result);
      if (result.data && 'ok' === result.data.msg) {
        localStorage.setItem(
          'auth_info',
          JSON.stringify(result.data.auth_info),
        );
        const retryRequest = await axios({
          ...config,
        });
        return retryRequest;
      }
    }
    return err.response;
  },
);

//axios.defaults.withCredentials = true; // 쿠키 데이터를 전송받기 위해
export const request = (method, url, data, config) => {
  return axios({
    method,
    url: DOMAIN + url,
    data,
    ...config,
  })
    .then((res) => {
      console.log('res');
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log('err');
      console.log(err);
      return err;
    });
};

export const setHeader = (name, value) => {
  axios.defaults.headers.common[name] = value;
};

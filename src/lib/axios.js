import axios from 'axios';

const DOMAIN = 'http://192.168.1.29:3000/v1';

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_info');
    console.log(token.accessToken);
    if (token) {
      config.headers['x-access-token'] = token.accessToken;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (err.response.status === 401) {
      const token = localStorage.getItem('auth_info');
      if (token) {
        axios({
          method: 'post',
          url: DOMAIN + '/auth',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'x-refresh-token': token.refreshToken,
          },
        })
          .then((res) => res.data)
          .catch((err) => console.log(err));
      }
    }
    return err;
  }
);
axios.defaults.headers.common['Content-Type'] =
  'application/json; charset=UTF-8';
//axios.defaults.baseURL = 'http://192.168.1.29:3000';
//axios.defaults.withCredentials = true; // 쿠키 데이터를 전송받기 위해
export const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data,
  })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const setHeader = (name, value) => {
  axios.defaults.headers.common[name] = value;
};

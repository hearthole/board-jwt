import axios from 'axios';

const DOMAIN = 'http://192.168.1.29:3000/v1';

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

import axios from 'axios';

// Todo: axios instance 기본 세팅 및 error 처리에 대한 합의 필요
// 개인적으로는 Sentry도 도입해보는것도 나쁘지 않을거 같습니다

const baseAxios = axios.create({
  // baseUrl, withCredentials, timeout 등의 세팅
});

baseAxios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

baseAxios.interceptors.response.use((response) => {
  return response;
});

export default baseAxios;

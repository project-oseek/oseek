import axios from 'axios';
import qs from 'query-string';

import { AXIOS_TIMEOUT, OSEEK_API_URL } from './constants';

// Todo: axios instance 기본 세팅 및 error 처리에 대한 합의 필요
// 개인적으로는 Sentry도 도입해보는것도 나쁘지 않을거 같습니다

const baseAxios = axios.create({
  baseURL: OSEEK_API_URL,
  timeout: AXIOS_TIMEOUT,
  timeoutErrorMessage: '서버 요청 시간 초과',
  withCredentials: true,
  paramsSerializer: (params) => {
    return qs.stringify(params, { arrayFormat: 'comma' });
  },
});

baseAxios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

baseAxios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    // Sentry
    return Promise.reject(error);
  },
);

baseAxios.interceptors.response.use((response) => {
  return response;
});

export default baseAxios;

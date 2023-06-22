import axios, { AxiosRequestConfig, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import qs from 'query-string';
import { getLocalStorageItem, setLocalStorageItem } from '@oseek/lib/utils';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@oseek/lib';
import { AXIOS_TIMEOUT, OSEEK_API_URL } from './constants';
import { AuthApi } from './oseek/generated';

const baseAxios = axios.create({
  baseURL: OSEEK_API_URL,
  timeout: AXIOS_TIMEOUT,
  timeoutErrorMessage: '서버 요청 시간 초과',
  withCredentials: true,
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'comma' }),
});

const handleHeadersWithAccessToken = (config: AxiosRequestConfig): InternalAxiosRequestConfig<any> => {
  const accessToken = getLocalStorageItem(ACCESS_TOKEN_KEY) || '';
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };
  return config as InternalAxiosRequestConfig<any>;
};

const handleErrorResponses = async (error: AxiosError) => {
  const previousRequest: AxiosRequestConfig<any> & { _retried?: boolean } = error.config || {};
  const { status } = error.response as AxiosResponse;

  if (status === 401 && !previousRequest._retried) {
    previousRequest._retried = true;
    const refreshToken = getLocalStorageItem<string>(REFRESH_TOKEN_KEY);

    if (refreshToken) {
      try {
        const {
          data: { accessToken },
        } = await new AuthApi().regenerateTokenAxios({ refreshToken });
        setLocalStorageItem(ACCESS_TOKEN_KEY, accessToken);
        previousRequest.headers = {
          ...previousRequest.headers,
          Authorization: `Bearer ${accessToken}`,
        };
        return baseAxios(previousRequest);
      } catch {
        error.message = '토큰 갱신 실패. 다시 로그인해주세요.';
      }
    }
  }

  return Promise.reject(error);
};

baseAxios.interceptors.request.use(handleHeadersWithAccessToken, Promise.reject);

baseAxios.interceptors.response.use((response) => response.data.data, handleErrorResponses);

export default baseAxios;

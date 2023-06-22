export const OSEEK_API_URL = 'http://3.37.83.95:8080';
export const AXIOS_TIMEOUT = 5000;
export const KAKAO_AUTH_PATHNAME = `/login/auth`;
export const OSEEK_KAKAO_LOGIN_REDIRECT_URL = `${OSEEK_API_URL}/oauth2/authorize/kakao?redirect_uri=`;

export const generateKakaoLoginUrl = (host: string) => `${OSEEK_KAKAO_LOGIN_REDIRECT_URL}${host}${KAKAO_AUTH_PATHNAME}`;

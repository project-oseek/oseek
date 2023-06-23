import { ACCESS_TOKEN_KEY, LOCATION_KEY, NICKNAME_KEY, REFRESH_TOKEN_KEY } from '../constants';

export const getLocalStorageItem = <T>(key: string): T | null => {
  if (typeof window !== 'undefined') {
    const item = localStorage.getItem(key);
    if (item) {
      try {
        return JSON.parse(item) as T;
      } catch (error) {
        console.error(`${key} 파싱에 실패하였습니다. Error: ${error}`);
        return null;
      }
    }
    return null;
  }
  return null;
};

export const setLocalStorageItem = <T>(key: string, value: T): void => {
  if (typeof window !== 'undefined') {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      const errorMessage = `${key} 저장에 실패하였습니다. Error: ${error}`;
      (() => new Error(errorMessage))();
    }
  }
};

export const getAccessTokenByLocalStorage = (): string | null => {
  const accessToken = getLocalStorageItem<string>(ACCESS_TOKEN_KEY);
  return accessToken || null;
};

export const getRefreshTokenByLocalStorage = (): string | null => {
  const refreshToken = getLocalStorageItem<string>(REFRESH_TOKEN_KEY);
  return refreshToken || null;
};

export const getNickNameByLocalStorage = (): string | null => {
  const nickname = getLocalStorageItem<string>(NICKNAME_KEY);
  return nickname || null;
};

export const getLocationByLocalStorage = (): string | null => {
  const location = getLocalStorageItem<string>(LOCATION_KEY);
  return location || null;
};

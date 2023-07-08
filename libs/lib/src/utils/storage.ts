import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, USER_KEY } from '../constants';
import { MemberInfoResDto } from '@oseek/apis';

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

export const removeLocalStorageItem = (key: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(key);
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

export type UserType = Pick<MemberInfoResDto, 'nickname' | 'location'>;
export const getUserByLocalStorage = (): UserType | null => {
  const user = getLocalStorageItem<UserType>(USER_KEY);
  return user || null;
};

'use client';

import { createContext, useState, useEffect, useContext, PropsWithChildren, useMemo, useCallback } from 'react';
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  USER_KEY,
  removeLocalStorageItem,
  getAccessTokenByLocalStorage,
  getRefreshTokenByLocalStorage,
  getUserByLocalStorage,
  UserType,
  setLocalStorageItem,
} from '@oseek/lib';
import { PAGE_URL } from '@constant/pageUrl';

interface AuthContextProps {
  user: UserType | null;
  isLoggedIn: boolean;
  logout: () => void;
  setAccessToken: (token: string) => void;
  setRefreshToken: (token: string) => void;
  setUser: (storeUser: UserType) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [userState, setUserState] = useState<UserType | null>(null);
  const accessToken = getAccessTokenByLocalStorage();
  const refreshToken = getRefreshTokenByLocalStorage();

  const fetchUser = useCallback(() => getUserByLocalStorage(), []);

  const logout = () => {
    setUserState(null);
    removeLocalStorageItem(ACCESS_TOKEN_KEY);
    removeLocalStorageItem(REFRESH_TOKEN_KEY);
    removeLocalStorageItem(USER_KEY);
  };

  const setAccessToken = (token: string) => {
    setLocalStorageItem(ACCESS_TOKEN_KEY, token);
  };

  const setRefreshToken = (token: string) => {
    setLocalStorageItem(REFRESH_TOKEN_KEY, token);
  };

  const setUser = (storeUser: UserType) => {
    setLocalStorageItem(USER_KEY, storeUser);
    setUserState(storeUser);
  };

  const isLoggedIn = useMemo(() => userState !== null && accessToken !== null && refreshToken !== null, [userState, accessToken, refreshToken]);
  const providerValue = useMemo(
    () => ({
      user: userState,
      isLoggedIn,
      logout,
      setAccessToken,
      setRefreshToken,
      setUser,
    }),
    [userState, isLoggedIn, logout, setAccessToken, setRefreshToken, setUser],
  );

  useEffect(() => {
    const storedUser = fetchUser();
    if (storedUser) {
      setUserState(storedUser);
    }
  }, [fetchUser]);

  return <AuthContext.Provider value={providerValue}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth를 사용하려면 AuthProvider를 상위에 제공해야 합니다.');
  }
  return context;
};

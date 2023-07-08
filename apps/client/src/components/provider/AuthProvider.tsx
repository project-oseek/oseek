'use client';

import { createContext, useState, useEffect, useContext, PropsWithChildren } from 'react';
import { useRouter } from 'next/navigation';
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  USER_KEY,
  removeLocalStorageItem,
  getAccessTokenByLocalStorage,
  getRefreshTokenByLocalStorage,
  getUserByLocalStorage,
  UserType,
} from '@oseek/lib';
import { PAGE_URL } from '@constant/pageUrl';

interface AuthContextProps {
  user: UserType | null;
  isLoggedIn: boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [user, setUser] = useState<UserType | null>(null);

  const logout = () => {
    setUser(null);
    removeLocalStorageItem(ACCESS_TOKEN_KEY);
    removeLocalStorageItem(REFRESH_TOKEN_KEY);
    removeLocalStorageItem(USER_KEY);
    router.replace(PAGE_URL.MAIN);
  };

  const isLoggedIn = () => {
    const accessToken = getAccessTokenByLocalStorage();
    const refreshToken = getRefreshTokenByLocalStorage();
    return user !== null && accessToken !== null && refreshToken !== null;
  };

  useEffect(() => {
    const storedUser = getUserByLocalStorage();
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return <AuthContext.Provider value={{ user, isLoggedIn: isLoggedIn(), logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth를 사용하려면 AuthProvider를 상위에 제공해야 합니다.');
  }
  return context;
};

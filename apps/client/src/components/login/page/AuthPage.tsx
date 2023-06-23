'use client';

import React, { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, setLocalStorageItem } from '@oseek/lib';

const REDIRECT_URL = {
  MAIN: '/',
  SETTING_NAME: '/login/setting-name',
};

const PARAMS = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
  IS_FIRST_LOGIN: 'isFirstLogin',
};

export const AuthPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const accessToken = searchParams.get(PARAMS.ACCESS_TOKEN);
  const refreshToken = searchParams.get(PARAMS.REFRESH_TOKEN);
  const isFirstLogin = searchParams.get(PARAMS.IS_FIRST_LOGIN);

  useEffect(() => {
    if (accessToken && refreshToken) {
      setLocalStorageItem(ACCESS_TOKEN_KEY, accessToken);
      setLocalStorageItem(REFRESH_TOKEN_KEY, refreshToken);
      if (isFirstLogin) {
        router.replace(REDIRECT_URL.SETTING_NAME);
        return;
      }
      router.push(REDIRECT_URL.MAIN);
    }
  }, [accessToken, refreshToken]);

  return <div></div>;
};

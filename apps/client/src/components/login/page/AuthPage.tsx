'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, getLocalStorageItem, setLocalStorageItem, USER_KEY } from '@oseek/lib';
import { memberApi } from '@oseek/apis';
import { PAGE_URL } from '@constant/pageUrl';
import { useAuth } from '@components/provider';

export const AuthPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const auth = useAuth();

  const handleTokens = (accessTokenQuery: string | null, refreshTokenQuery: string | null) => {
    if (accessTokenQuery && refreshTokenQuery) {
      auth.setAccessToken(accessTokenQuery);
      auth.setRefreshToken(refreshTokenQuery);
      return true;
    }
    return false;
  };

  const fetchAndRedirect = async () => {
    const {
      data: { nickname, location },
    } = await memberApi.findMemberInfoAxios();

    if (nickname) {
      auth.setUser({ nickname, location });
      router.replace(PAGE_URL.MAIN);
      return;
    }
    router.replace(PAGE_URL.SETTING_NAME);
  };

  useEffect(() => {
    const accessTokenQuery = searchParams.get('accessToken');
    const refreshTokenQuery = searchParams.get('refreshToken');

    if (handleTokens(accessTokenQuery, refreshTokenQuery)) {
      fetchAndRedirect();
    }
  }, [router, searchParams]);

  return <div />;
};

'use client';

import { useRouter } from 'next/navigation';
import { SettingKeyword } from '../../settings/keyword/SettingKeyword';
import { LoginHeader } from '../LoginHeader';

export const SettingKeywordPage = () => {
  const router = useRouter();

  const handleNextClick = () => {
    router.push('/login/setting-location');
  };

  return (
    <>
      <LoginHeader visibleRefresh />
      <SettingKeyword onSubmit={handleNextClick} submitText="다음" />
    </>
  );
};

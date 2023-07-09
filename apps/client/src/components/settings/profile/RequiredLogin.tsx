'use client';

import { useRouter } from 'next/navigation';
import { styleToken, Typography } from '@oseek/ui';
import { PAGE_URL } from '@constant/pageUrl';
import * as S from './RequiredLogin.css';
import { DescriptionContainer } from './RequiredLogin.css';

export const RequiredLogin = () => {
  const router = useRouter();
  const handleMoveToLogin = () => {
    router.push(PAGE_URL.LOGIN);
  };
  return (
    <div className={S.Container} onClick={handleMoveToLogin}>
      <div className={S.ImageContainer}>
        <img className={S.Image} src="/images/user.png" alt="profile" />
      </div>
      <div className={S.DescriptionContainer}>
        <Typography variant="H1" style={{ fontWeight: styleToken.fontWeight.medium }}>
          로그인을 해주세요
        </Typography>
      </div>
    </div>
  );
};
